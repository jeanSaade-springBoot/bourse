package com.bourse.service.usJobs;

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
import org.springframework.stereotype.Service;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.FunctionConfiguration;
import com.bourse.domain.usJobs.TmpAuditUsADPChange;
import com.bourse.domain.usJobs.TmpAuditUsHouseHoldSurv;
import com.bourse.domain.usJobs.TmpAuditUsJobsopenings;
import com.bourse.domain.usJobs.TmpAuditUsNFP;
import com.bourse.domain.usJobs.TmpAuditUsUnempRate;
import com.bourse.domain.usJobs.UsJobsData;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.enums.FunctionEnum;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.repositories.usJobs.UsJobsDataRepository;
import com.bourse.service.AdminService;
import com.bourse.service.FunctionConfigurationService;
import com.bourse.util.UsJobsUtil;

@Service
public class UsJobsService {
	@Autowired
	UsJobsDataRepository usJobsDataRepository;
	
	@Autowired
	AdminService adminService;
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	@Autowired
	FunctionConfigurationService functionConfigurationService;
	@Autowired
	TableManagementRepository tableManagementRepository;
	@PersistenceContext
	private EntityManager entityManager;
	
	public void saveUsJobs(List<UsJobsData> UsJobsDTOLst) {
		UsJobsData usJobsData;
		for(UsJobsData usJobsDTO:UsJobsDTOLst)
		{
			usJobsData = usJobsDataRepository.findUsJobsDataByReferDateAndGroupIdAndSubgroupId(usJobsDTO.getReferDate(),Long.valueOf(usJobsDTO.getGroupId()),Long.valueOf(usJobsDTO.getSubgroupId()));
			if(usJobsData!=null)
			{usJobsData.setValue(usJobsDTO.getValue());
				usJobsDataRepository.save(usJobsData);
			}
			else {
				usJobsDataRepository.save(usJobsDTO);
			}
		}
	}
	public boolean CheckIfCanSave(String referDate,Long groupId)
   	{
		return usJobsDataRepository.existsByReferDateAndGroupId(referDate,groupId);
   	}
	public boolean CheckIfCanSaveData(String referDate,Long groupId,Long subGroupId)
   	{
		return usJobsDataRepository.existsByReferDateAndGroupIdAndSubgroupId(referDate,groupId,subGroupId);
   	}
	public String findLatestData(String groupId) {
		boolean hasData= adminService.getData();
        if(!hasData)
		return null;
       return usJobsDataRepository.findLatest(groupId);
	}


	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
		
		UsJobsData UsJobsData=null;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			UsJobsData = usJobsDataRepository.findUsJobsDataByReferDateAndGroupIdAndSubgroupId(updateDataDTO.getReferdate(),
																								Long.valueOf(updateDataDTO.getGroupId()),
																								Long.valueOf(updateDataDTO.getSubgroupId()));
			if(UsJobsData!=null)
			{   
					UsJobsData.setValue(updateDataDTO.getValue());
				    usJobsDataRepository.save(UsJobsData);
			}
			else {
				UsJobsData = UsJobsData.builder()
											   .groupId(Long.valueOf(updateDataDTO.getGroupId()))
											   .subgroupId(Long.valueOf(updateDataDTO.getSubgroupId()))
											   .value(updateDataDTO.getValue())
											   .referDate(updateDataDTO.getReferdate())
											   .build();
				usJobsDataRepository.save(UsJobsData);
				
			}
		}
		List<UsJobsData> UsJobsDataLst = new ArrayList<UsJobsData>();
		UsJobsDataLst.add(UsJobsData);
		doCalculation(updateDataDTOlst.get(0).getReferdate(),updateDataDTOlst.get(0).getGroupId());
	}
	public boolean CheckIfCanSaveUsJobs(String referDate,Long groupId,Long subgroupId)
   	{
		return usJobsDataRepository.existsByReferDateAndGroupIdAndSubgroupId(referDate,groupId,subgroupId);
   	}
	public List<TmpAuditUsJobsopenings> getAuditUsJobsopenings(String groupId, String referDate) {
		
		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
			
		 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_usjobs",TmpAuditUsJobsopenings.class);
	        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
	        query.setParameter("referDate", referDate);
	        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	        query.setParameter("groupId", groupId);
	        query.execute();

	        List<TmpAuditUsJobsopenings> resultList = query.getResultList();
	        return resultList;
	}
public List<TmpAuditUsADPChange> getAuditUsADPChange(String groupId, String referDate) {
		
		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
			
		 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_usjobs",TmpAuditUsADPChange.class);
	        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
	        query.setParameter("referDate", referDate);
	        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	        query.setParameter("groupId", groupId);
	        query.execute();

	        List<TmpAuditUsADPChange> resultList = query.getResultList();
	        return resultList;
	}

public List<TmpAuditUsNFP> getAuditUsNFPChange(String groupId, String referDate) {
	
	boolean hasData = adminService.getData();
	if (!hasData)
		return null;
		
	 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_usjobs",TmpAuditUsNFP.class);
        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
        query.setParameter("referDate", referDate);
        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
        query.setParameter("groupId", groupId);
        query.execute();

        List<TmpAuditUsNFP> resultList = query.getResultList();
        return resultList;
}
public List<TmpAuditUsUnempRate> getAuditUsUnempRate(String groupId, String referDate) {
	
	boolean hasData = adminService.getData();
	if (!hasData)
		return null;
		
	 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_usjobs",TmpAuditUsUnempRate.class);
        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
        query.setParameter("referDate", referDate);
        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
        query.setParameter("groupId", groupId);
        query.execute();

        List<TmpAuditUsUnempRate> resultList = query.getResultList();
        return resultList;
}
public List<TmpAuditUsHouseHoldSurv> getAuditUsHouseHoldSurv(String groupId, String referDate) {
	
	boolean hasData = adminService.getData();
	if (!hasData)
		return null;
		
	 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_usjobs",TmpAuditUsHouseHoldSurv.class);
        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
        query.setParameter("referDate", referDate);
        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
        query.setParameter("groupId", groupId);
        query.execute();

        List<TmpAuditUsHouseHoldSurv> resultList = query.getResultList();
        return resultList;
}
	public void doCalculation(String referDate,String groupId) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_usjobs");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId", groupId);
		query.execute();
	}
	  
	public void doCalculationLoader(String fromDate,String toDate,String groupId)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_cryptos_loader");
   		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId", groupId);
		query.execute();
		
   	}
	
	  @Transactional
		public void deleteUsJobsData(String groupId, String referDate) {
			String TableName = tableManagementRepository.findDistinctByGroupId(groupId).getTableName();
		    String queryStr = "Delete from "+TableName+ " where refer_date='"+referDate+"'";
		    javax.persistence.Query query = entityManager.createNativeQuery(queryStr);
		    query.executeUpdate();
		    
		    usJobsDataRepository.deleteUsJobsByGroupIdAndReferDate(Long.valueOf(groupId),referDate);
		}
		public HashMap<String,List> getGridData( MainSearchFilterDTO mainSearchFilterDTO)
		{
			QueryColumnsDTO queryColumnsDTO = UsJobsUtil.buildDynamicGridQuery(mainSearchFilterDTO);
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
	  
		public List<GraphResponseColConfigDTO> getGraphDataByType(GraphRequestDTO graphReqDTO) {

			boolean hasData= adminService.getData();
		    if(!hasData)
				return null;
		
			List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
			
			if(graphReqDTO.getGroupId1()!=null)
			{
				l1.add(getGraphDataResult(graphReqDTO,false));
			}
			if(graphReqDTO.getIsFunctionGraph()!=null?graphReqDTO.getIsFunctionGraph().equals("true"):false)
			{   
			   l1.add(getGraphDataResult(graphReqDTO,true));
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
						   .build();
				l1.add(getGraphDataResult(graphRequestDTO,false));
			}
				
			return l1; 
		
		}
		
	  public GraphResponseColConfigDTO getGraphDataResult(GraphRequestDTO graphReqDTO, Boolean isFunction) {
			boolean hasData= adminService.getData();
		    if(!hasData)
				return null;

			StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_graph_main",GraphResponseDTO.class);
			
			List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
			ColumnConfiguration config = null;
			GraphResponseColConfigDTO graphResponseColConfigDTO = null;
			
			String groupId = graphReqDTO.getGroupId1();
			String subGroupId = graphReqDTO.getSubGroupId1(); 
			String description = null;
			description = tableManagementRepository.findByGroupIdAndSubgroupId(groupId,subGroupId).getColumnName()+"-"+groupId;
				
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			    System.out.println("period: "+graphReqDTO.getPeriod());
			    System.out.println("type: "+graphReqDTO.getType());
			    System.out.println("fromdate:"+graphReqDTO.getFromdate()+" to date:"+"graphReqDTO.getTodate()");
			    config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    if (isFunction)
			    {
			    	FunctionConfiguration fConfig = functionConfigurationService.findFunctionConfigurationByConfigIdAndFonctionId(String.valueOf(config.getId()), graphReqDTO.getFunctionId());
					config = ColumnConfiguration.builder()
							.chartColor(fConfig.getChartColor()==null?"#F0AB2E":fConfig.getChartColor())
							.chartShowgrid(fConfig.getChartShowgrid())
							.chartSize(fConfig.getChartSize())
							.chartTransparency(fConfig.getChartTransparency()==null?"0.50":fConfig.getChartTransparency())
							.chartType(fConfig.getChartType())
							.chartshowMarkes(fConfig.getChartshowMarkes())
							.displayDescription(fConfig.getDisplayDescription())
							.yAxisFormat(fConfig.getYAxisFormat())
							.startDate(fConfig.getStartDate())
							.dataFormat(fConfig.getDataFormat())
							.build();
					
			    }
				query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
				query.setParameter("groupId",graphReqDTO.getGroupId1() );
				
				query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
				query.setParameter("fromDate",graphReqDTO.getFromdate() );
				
				query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
				query.setParameter("toDate",graphReqDTO.getTodate() );
				
				query.registerStoredProcedureParameter("subgroupId", String.class, ParameterMode.IN);
				query.setParameter("subgroupId",graphReqDTO.getSubGroupId1() );
				
				query.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
				query.setParameter("factor",graphReqDTO.getFactor1());
				
				query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
				query.setParameter("dayOrweek",(isFunction)?"d":graphReqDTO.getPeriod() );
				
				if(isFunction)
				{
				 query.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
				 query.setParameter("isFunction",graphReqDTO.getIsFunctionGraph() );
				
				 query.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
				 query.setParameter("functionCode",FunctionEnum.getFunctionByID(graphReqDTO.getFunctionId().isEmpty()?0:Integer.valueOf(graphReqDTO.getFunctionId())));
				
				 query.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
				 query.setParameter("type","0");
				}
				else {
				query.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
				query.setParameter("isFunction","false");
				
				query.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
				query.setParameter("functionCode", "");
				
				query.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
				query.setParameter("type",(graphReqDTO.getType()==null)?"0":graphReqDTO.getType());
				}
				
				query.execute();
				
				List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
				List<GraphResponseDTO> graphResponseDTOlstEmpty= UsJobsUtil.removeReplaceEmptyValueWithNull(graphResponseDTOlst1);
				graphResponseDTOlst1.clear();
				graphResponseDTOlst1=graphResponseDTOlstEmpty;
				
				if (graphReqDTO.getRemoveEmpty1()!=null)
					if (graphReqDTO.getRemoveEmpty1().equalsIgnoreCase("true"))
					{	
						List<GraphResponseDTO> graphResponseDTOlst= UsJobsUtil.removeEmptyY(graphResponseDTOlst1);
						graphResponseDTOlst1.clear();
						graphResponseDTOlst1=graphResponseDTOlst;
					}
					
			  graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
						                  .graphResponseDTOLst(graphResponseDTOlst1)
						                  .config(config)
						                  .build();
				entityManager.clear();
				entityManager.close();
			
			return graphResponseColConfigDTO; 
		    
		}
	

}
