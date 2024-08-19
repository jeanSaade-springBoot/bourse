package com.bourse.service.longEnds;

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

import com.bourse.domain.longEnds.LongEndData;
import com.bourse.domain.longEnds.LongEndsDisplaySettings;
import com.bourse.domain.longEnds.TmpAuditLefBunds;
import com.bourse.domain.macro.MacroData;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.longends.LongEndsAuditCommonDTO;
import com.bourse.dto.macro.MacroAuditCommonDTO;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.repositories.longEnds.LongEndsDataRepository;
import com.bourse.repositories.longEnds.LongEndsDisplaySettingsRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBundsRepository;
import com.bourse.repositories.macro.MacroDataRepository;
import com.bourse.service.AdminService;
import com.bourse.util.LongEndsUtil;
import com.bourse.util.StiUtil;

import org.springframework.data.domain.Sort;

@Service
public class LongEndsService {
	@Autowired
	LongEndsDisplaySettingsRepository longEndsDisplaySettingsRepository;
	@Autowired
	LongEndsDataRepository longEndsDataRepository; 
	@Autowired
	TmpAuditLefBundsRepository tmpAuditLefBundsRepository;
	@Autowired
	AdminService adminService;
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	@Autowired
	TableManagementRepository tableManagementRepository;
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public List<LongEndsDisplaySettings> getLongEndsDisplaySettingsList() {
		List<Order> orders = new ArrayList<Order>();

        Order groupIdOrder = new Order(Sort.Direction.ASC, "groupId");
        orders.add(groupIdOrder);
        Order subgroupIdOrder = new Order(Sort.Direction.ASC, "subgroupId");
        orders.add(subgroupIdOrder);
		return longEndsDisplaySettingsRepository.findAllByParentgroupId(Long.valueOf(0),Sort.by(orders));
	}
	
	 @Transactional
	 public List<LongEndsDisplaySettings> saveLongEndsDisplaySettingsList(List<LongEndsDisplaySettings> dTOLst) {
		 // Save all the provided entities
		 List<LongEndsDisplaySettings> savedEntities = longEndsDisplaySettingsRepository.saveAll(dTOLst);

	        // Iterate through each saved entity to determine the `parentGroupId` and `subgroupId`
	        for (LongEndsDisplaySettings updatedEntity : dTOLst) {
	            Long parentGroupId = updatedEntity.getGroupId();
	            Long subgroupId = updatedEntity.getSubgroupId();
	            Boolean isVisible = updatedEntity.getIsVisible();

	            // Fetch all records with the same parentGroupId and subgroupId
	            List<LongEndsDisplaySettings> relatedRecords = longEndsDisplaySettingsRepository.findByParentgroupIdAndSubgroupId(parentGroupId, subgroupId);

	            // Update the fetched records
	            for (LongEndsDisplaySettings record : relatedRecords) {
	                record.setIsVisible(isVisible);
	                longEndsDisplaySettingsRepository.save(record);
	            }
	        }

	        return savedEntities;
	    
	    }
	
	public List<LongEndsDisplaySettings> getLongEndsDisplaySettingsList(String groupId) {
		
		return longEndsDisplaySettingsRepository.findAllByGroupId(Long.valueOf(groupId));
		
	}
	public boolean CheckIfCanSave(String referDate,Long groupId)
   	{
		return longEndsDataRepository.existsByReferDateAndGroupId(referDate,groupId);
   	}
	public List<LongEndsAuditCommonDTO> getLongEndsByGroupIdAndDataByReferDate(String groupId, String referDate) {
		
		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
			
		 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_longends");
	        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
	        query.setParameter("referDate", referDate);
	        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	        query.setParameter("groupId", groupId);
	        query.execute();

	        List<Object[]> resultList = query.getResultList();
	        List<LongEndsAuditCommonDTO> auditProcedureDTOLst = mapResultListToDTO(resultList);
	        return auditProcedureDTOLst;
	}
	  private List<LongEndsAuditCommonDTO> mapResultListToDTO(List<Object[]> resultList) {

		  List<LongEndsAuditCommonDTO> dtos = new ArrayList<>();
	        for (Object[] result : resultList) {
	        	LongEndsAuditCommonDTO dto = new LongEndsAuditCommonDTO();
	            dto.setId(String.valueOf(result[0]));
	            dto.setMaturityName(String.valueOf(result[1]));
	            dto.setOpen(String.valueOf(result[2]));
	            dto.setSettle(String.valueOf(result[3]));
	            dto.setClose(String.valueOf(result[4]));
	            dto.setHigh(String.valueOf(result[5])); 
	            dto.setLow(String.valueOf(result[6]));
	            dto.setFutureExpiryDate(String.valueOf(result[7]));
	            dto.setIssuer(String.valueOf(result[8]));
	            dto.setCoupon(String.valueOf(result[9]));
	            dto.setCtdMaturity(String.valueOf(result[10])); 
	            dto.setPriceAtIssue(String.valueOf(result[11]));
	            dto.setFrequency(String.valueOf(result[12]));
	            dto.setConvergenceFactor(String.valueOf(result[13])); 
	            dto.setReferDate(String.valueOf(result[14])); 
	            dtos.add(dto);
	        }
	        return dtos;
	    }
	public void saveLongEndsData(List<LongEndData> longEndDataDTOlst) {
		longEndsDataRepository.saveAll(longEndDataDTOlst);
	}
	public void doCaclulation(String referDate,String groupId) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_longends");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId", groupId);
		query.execute();
	}
	public TmpAuditLefBunds findFirstByOrderDesc() {
		return tmpAuditLefBundsRepository.findFirstOrderByReferDateDesc();
	}
	public String findLatestData(String groupId) {
		boolean hasData= adminService.getData();
        if(!hasData)
		return null;
       return longEndsDataRepository.findLatest(groupId);
	}
	  public HashMap<String,List> getGridData( MainSearchFilterDTO mainSearchFilterDTO)
			{
				QueryColumnsDTO queryColumnsDTO = LongEndsUtil.buildDynamicGridQuery(mainSearchFilterDTO);
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
}
