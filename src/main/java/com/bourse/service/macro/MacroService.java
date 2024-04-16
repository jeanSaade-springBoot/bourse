package com.bourse.service.macro;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import javax.transaction.Transactional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.FunctionConfiguration;
import com.bourse.domain.macro.MacroData;
import com.bourse.domain.macro.MacroDisplaySettings;
import com.bourse.domain.skews.LongSkewsData;
import com.bourse.dto.GraphRequestDTO;

import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.dto.macro.GraphResponseColConfigDTO;
import com.bourse.dto.macro.MacroAuditCommonDTO;
import com.bourse.dto.macro.MacroGraphResponseDTO;
import com.bourse.enums.FunctionEnum;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.repositories.macro.MacroDataRepository;
import com.bourse.repositories.macro.MacroDisplaySettingsRepository;
import com.bourse.service.AdminService;
import com.bourse.util.MacroUtil;
import org.springframework.data.domain.Sort;

@Service
public class MacroService {
	@Autowired
	MacroDisplaySettingsRepository macroDisplaySettingsRepository;
	@Autowired
	MacroDataRepository macroDataRepository;
	@Autowired
	AdminService adminService;
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	@Autowired
	TableManagementRepository tableManagementRepository;
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public List<MacroDisplaySettings> getMacroDisplaySettingsList() {
		List<Order> orders = new ArrayList<Order>();

        Order groupIdOrder = new Order(Sort.Direction.ASC, "groupId");
        orders.add(groupIdOrder);
        Order subgroupIdOrder = new Order(Sort.Direction.ASC, "subgroupId");
        orders.add(subgroupIdOrder);
        Order factorOrder = new Order(Sort.Direction.ASC, "factor");
        orders.add(factorOrder);
		return macroDisplaySettingsRepository.findAll(Sort.by(orders));
	}

	public List<MacroDisplaySettings> getMacroDisplaySettingsList(String groupId) {
		List<Order> orders = new ArrayList<Order>();

        Order groupIdOrder = new Order(Sort.Direction.ASC, "groupId");
        orders.add(groupIdOrder);
        Order subgroupIdOrder = new Order(Sort.Direction.ASC, "subgroupId");
        orders.add(subgroupIdOrder);
        Order factorOrder = new Order(Sort.Direction.ASC, "factor");
        orders.add(factorOrder);
		return macroDisplaySettingsRepository.findAllByGroupId(Long.valueOf(groupId),Sort.by(orders));
		
	}
	public List<MacroDisplaySettings> getMacroDisplaySettingsFinalList() {
		
		return macroDisplaySettingsRepository.findAllFinal();
		
	}
	public List<MacroDisplaySettings> saveMacroDisplaySettingsList(List<MacroDisplaySettings> dTOLst) {
		return macroDisplaySettingsRepository.saveAll(dTOLst);
	}
	public boolean CheckIfCanSave(String referDate,Long groupId, Long subgroupId, Long factorId)
	   	{
	   	return macroDataRepository.existsByReferDateAndGroupIdAndSubgroupIdAndFactorIdAndValueNot(referDate,groupId,subgroupId, factorId,"");
	   	}
	public void saveMacro(List<MacroData> macroDTOLst) {
		MacroData macroData;
		for(MacroData macroDTO:macroDTOLst)
		{
			macroData = macroDataRepository.findMacroDataByReferDateAndGroupIdAndSubgroupIdAndFactorId(macroDTO.getReferDate(),Long.valueOf(macroDTO.getGroupId()),Long.valueOf(macroDTO.getSubgroupId()),Long.valueOf(macroDTO.getFactorId()));
			if(macroData!=null)
			{macroData.setValue(macroDTO.getValue());
				macroDataRepository.save(macroData);
			}
			else {
				macroDataRepository.save(macroDTO);
			}
		}
	}
	public String findLatestData(String groupId) {
		boolean hasData= adminService.getData();
        if(!hasData)
		return null;
       return macroDataRepository.findLatest(groupId);
	}
	public void doCaclulation(String referDate,String groupId) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_macro");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId", groupId);
		query.execute();
	}
	public void doCaclulationMacroLoader(String fromDate,String toDate, String groupId)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_macro_loader");
		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId", groupId);
		query.execute();
   	}
	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
		
   		MacroData macroData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			macroData = macroDataRepository.findMacroDataByReferDateAndGroupIdAndSubgroupIdAndFactorId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getGroupId()),Long.valueOf(updateDataDTO.getSubgroupId()),Long.valueOf(updateDataDTO.getFactor()));
			if(macroData!=null)
			{macroData.setValue(updateDataDTO.getValue());
			macroDataRepository.save(macroData);
			}
			else {
				macroData = MacroData.builder().factorId(Long.valueOf(updateDataDTO.getFactor()))
											   .groupId(Long.valueOf(updateDataDTO.getGroupId()))
											   .subgroupId(Long.valueOf(updateDataDTO.getSubgroupId()))
											   .value(updateDataDTO.getValue())
											   .referDate(updateDataDTO.getReferdate())
											   .build();
				macroDataRepository.save(macroData);
				
			}
		}
	}
	  
	@Transactional
	public void deleteMacroData(String groupId, String referDate) {
		String TableName = tableManagementRepository.findDistinctByGroupId(groupId).getTableName();
	    String queryStr = "Delete from "+TableName+ " where refer_date='"+referDate+"'";
	    javax.persistence.Query query = entityManager.createNativeQuery(queryStr);
	    query.executeUpdate();
	    
	    macroDataRepository.deleteMacroDataByGroupIdAndReferDate(Long.valueOf(groupId),referDate);
	}

	public List<MacroAuditCommonDTO> getMacroByGroupIdAndDataByReferDate(String groupId, String referDate) {
		
		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
			
		 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_macro");
	        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
	        query.setParameter("referDate", referDate);
	        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	        query.setParameter("groupId", groupId);
	        query.execute();

	        List<Object[]> resultList = query.getResultList();
	        List<MacroAuditCommonDTO> auditProcedureDTOLst = mapResultListToDTO(resultList);
	        return auditProcedureDTOLst;
	}
	  private List<MacroAuditCommonDTO> mapResultListToDTO(List<Object[]> resultList) {
	        // Map each Object[] to a MacroAuditCommonDTO
	        // Assuming the order of elements in Object[] matches the order of fields in MacroAuditCommonDTO
	        List<MacroAuditCommonDTO> dtos = new ArrayList<>();
	        for (Object[] result : resultList) {
	            MacroAuditCommonDTO dto = new MacroAuditCommonDTO();
	            dto.setId(String.valueOf(result[0]));
	            dto.setManuf(String.valueOf(result[1]));
	            dto.setServices(String.valueOf(result[2]));
	            dto.setManuf2(String.valueOf(result[3]));
	            dto.setServices2(String.valueOf(result[4]));
	            dto.setFactorId(String.valueOf(result[5])); 
	            dto.setReferDate(String.valueOf(result[6])); 
	            dtos.add(dto);
	        }
	        return dtos;
	    }
	public HashMap<String,List> getGridData( MainSearchFilterDTO mainSearchFilterDTO)
			{
				QueryColumnsDTO queryColumnsDTO = MacroUtil.buildDynamicGridQuery(mainSearchFilterDTO);
				String queryStr = queryColumnsDTO.getQuery();
				System.out.println("queryStr:--------------: \n\n"+queryStr+"\n--------------------------");
				HashMap<Integer,String>  colHash= new HashMap<Integer, String>(); 
				colHash = queryColumnsDTO.getColHash();

				StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("GetDynnamicGridData");
				query.registerStoredProcedureParameter("sqlQuery", String.class, ParameterMode.IN);
				query.setParameter("sqlQuery",queryStr );
				List<Object[]> lstdata = query.getResultList();
		          
				int i=1;
				HashMap<String,List> hashData = new HashMap<String, List>();
				HashMap<String,String> hashRows = new HashMap<String, String>();
				List lstRowsDt = new ArrayList<String>();
				List lstRowsConfig = new ArrayList<String>();
				int id=1;
				for(Object[] obj : lstdata)
				{ 
					for(Object dataIter :obj)
					{
						if(colHash.get(i).equals("id"))
							hashRows.put(colHash.get(i), String.valueOf(id));
						else
							hashRows.put(colHash.get(i), String.valueOf(dataIter));
						i++;
					}
					lstRowsDt.add(hashRows);
					hashRows = new HashMap<String, String>();
					i=1;
					id = id+1;
				}
				hashData.put("rows", lstRowsDt);
				lstRowsConfig = buildColumns(colHash);
				hashData.put("columns", lstRowsConfig);
				return hashData;
			}
		  public List buildColumns(HashMap<Integer,String>  colHash)
			{
				Iterator it = colHash.entrySet().iterator();
				HashMap<String,String> configColumns = new HashMap<String, String>(); 
				List lstRowsDt = new ArrayList<String>();
				HashMap<String,List> hashData = new HashMap<String, List>();
				 double count = colHash.size();
				 String columnWidth="110";
					/*
					 * if(count <= 16) { columnWidth=String.valueOf(100/(count-1))+"%"; // 1 to
					 * remove the id column size it will not be presented i the grid }
					 */
				 
				 String columnDisplayDesc = "";
				 String dataFormat = "";
				 while (it.hasNext()) {
					    
					    HashMap.Entry pair = (HashMap.Entry)it.next();
					    String colsName = pair.getValue().toString();
					    		columnDisplayDesc = columnConfigurationRepository.findColumnDispayDescription(colsName);
					    		dataFormat = columnConfigurationRepository.findColumnDataFormat(colsName);
							
					    
				        System.out.println(pair.getKey() + " = " + colsName);
				        it.remove(); // avoids a ConcurrentModificationException
				        if(!colsName.equalsIgnoreCase("id"))
				        {
				        	if (!StringUtils.isNotBlank(columnDisplayDesc))
				        		columnDisplayDesc = colsName; 
					        configColumns.put("text",columnDisplayDesc.equalsIgnoreCase("refer_date")?"Date":columnDisplayDesc);
					        configColumns.put("datafield",colsName);
					        configColumns.put("width",columnWidth);
					        configColumns.put("cellsalign","center");
					        configColumns.put("columngroup",(colsName.contains("SERVICES2"))?"SERVICES2":(colsName.contains("MANUF2"))?"MANUF2":(colsName.contains("MANUF"))?"MANUF":(colsName.contains("SERVICES"))?"SERVICES":"");
					        configColumns.put("align","center");
					        
					        	String[] values = null; int val;
					         	if (dataFormat!=null)
					         	{
									if (dataFormat.contains("%"))
									{
									 values = dataFormat.split("%")[0].split("\\.");
										if (values.length>1)
											val = values[1].length();
										else val = 0;
									
						        	configColumns.put("cellsformat","P"+val);
									}
									else 
									 { 
										values = dataFormat.split("\\.");
											if (values.length>1)
												val = values[1].length();
											else val = 0;
										configColumns.put("cellsformat","F"+val);
									 }
					        	}
					        
					        lstRowsDt.add(configColumns);
				        }
				        colsName = null;
				        configColumns = new HashMap<String, String>(); 
				    }
				 hashData.put("columns", lstRowsDt);
				return lstRowsDt;
			}
			public List<GraphResponseColConfigDTO> getMacroGraphData(GraphRequestDTO graphReqDTO) {

				boolean hasData= adminService.getData();
			    if(!hasData)
					return null;
			
				List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
				
				if(graphReqDTO.getGroupId1()!=null)
				{
					l1.add(getMacroGraphDataResult(graphReqDTO,false));
				}
				if(graphReqDTO.getGroupId2()!=null)
				{
					GraphRequestDTO graphRequestDTO = GraphRequestDTO.builder().groupId1(graphReqDTO.getGroupId2())
							   .subGroupId1(graphReqDTO.getSubGroupId2())
							   .period(graphReqDTO.getPeriod())
							   .type(graphReqDTO.getType())
							   .fromdate(graphReqDTO.getFromdate())
							   .todate(graphReqDTO.getTodate())
							   .functionId(graphReqDTO.getFunctionId())
							   .isFunctionGraph(graphReqDTO.getIsFunctionGraph())
							   .removeEmpty1(graphReqDTO.getRemoveEmpty2())
							   .factor1(graphReqDTO.getFactor2())
							   .build();
					l1.add(getMacroGraphDataResult(graphRequestDTO,false));
				}
				if(graphReqDTO.getGroupId3()!=null)
				{
					GraphRequestDTO graphRequestDTO = GraphRequestDTO.builder().groupId1(graphReqDTO.getGroupId3())
							   .subGroupId1(graphReqDTO.getSubGroupId3())
							   .period(graphReqDTO.getPeriod())
							   .type(graphReqDTO.getType())
							   .fromdate(graphReqDTO.getFromdate())
							   .todate(graphReqDTO.getTodate())
							   .functionId(graphReqDTO.getFunctionId())
							   .isFunctionGraph(graphReqDTO.getIsFunctionGraph())
							   .removeEmpty1(graphReqDTO.getRemoveEmpty3())
							   .factor1(graphReqDTO.getFactor3())
							   .build();
					l1.add(getMacroGraphDataResult(graphRequestDTO,false));
				}
					
				return l1; 
			
			}
			public GraphResponseColConfigDTO getMacroGraphDataResult(GraphRequestDTO graphReqDTO, Boolean isFunction) {
				boolean hasData= adminService.getData();
			    if(!hasData)
					return null;

				StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("macro_calculation_graph",MacroGraphResponseDTO.class);
				
				List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
				ColumnConfiguration config = null;
				GraphResponseColConfigDTO graphResponseColConfigDTO = null;
				
				String groupId = graphReqDTO.getGroupId1();
				String subGroupId = graphReqDTO.getSubGroupId1(); 
				String factor = graphReqDTO.getFactor1(); 
				String description = null;
				description = tableManagementRepository.findByGroupIdAndSubgroupId(groupId,subGroupId).getColumnName();
					
				    System.out.println("goupid: "+groupId);
				    System.out.println("subGroupId: "+subGroupId);
				    System.out.println("description: "+description);
				    
				    config = adminService.getColumnsConfigurationByGroupAndFactor(groupId, subGroupId, factor);
				  
					query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
					query.setParameter("groupId",graphReqDTO.getGroupId1() );
					
					query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
					query.setParameter("fromDate",graphReqDTO.getFromdate() );
					
					query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
					query.setParameter("toDate",graphReqDTO.getTodate() );
					
					query.registerStoredProcedureParameter("subgroupId", String.class, ParameterMode.IN);
					query.setParameter("subgroupId",graphReqDTO.getSubGroupId1() );
					
					query.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
					query.setParameter("factor",graphReqDTO.getFactor1()  );
					
					query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
					query.setParameter("dayOrweek",(isFunction)?"d":graphReqDTO.getPeriod()  );
					
					query.execute();
					
					List<MacroGraphResponseDTO> graphResponseDTOlst1 = (List<MacroGraphResponseDTO>) query.getResultList();
					
					
						
				  graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
							                  .graphResponseDTOLst(graphResponseDTOlst1)
							                  .config(config)
							                  .build();
					entityManager.clear();
					entityManager.close();
				
				return graphResponseColConfigDTO; 
			    
			}
}
