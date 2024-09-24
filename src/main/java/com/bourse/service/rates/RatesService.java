package com.bourse.service.rates;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.FunctionConfiguration;
import com.bourse.domain.rates.RatesData;
import com.bourse.domain.rates.TmpAuditRtsCentralBanks;
import com.bourse.domain.rates.TmpAuditRtsFixings;
import com.bourse.domain.rates.TmpAuditRtsInflationSwapRates;
import com.bourse.domain.rates.TmpAuditRtsMortgageRates;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.enums.FunctionEnum;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.repositories.rates.RatesDataRepository;
import com.bourse.repositories.rates.TmpAuditRtsCentralBanksRepository;
import com.bourse.repositories.rates.TmpAuditRtsFixingsRepository;
import com.bourse.repositories.rates.TmpAuditRtsInflationSwapRatesRepository;
import com.bourse.repositories.rates.TmpAuditRtsMortgageRatesRepository;
import com.bourse.service.AdminService;
import com.bourse.service.FunctionConfigurationService;
import com.bourse.util.RatesUtil;
import com.bourse.util.VolumeUtil;

@Service
public class RatesService {
	
	 @PersistenceContext
     private EntityManager entityManager;
	
	 @Autowired
	 AdminService adminService;
	 
	 @Autowired
	 RatesDataRepository ratesDataRepository;
	 
	 @Autowired
	 TmpAuditRtsCentralBanksRepository tmpAuditRtsCentralBanksRepository;
	
	 @Autowired
	 TmpAuditRtsFixingsRepository tmpAuditRtsFixingsRepository;
	 
	 @Autowired
	 TmpAuditRtsMortgageRatesRepository tmpAuditRtsMortgageRates;
	 
	 @Autowired
	 TmpAuditRtsInflationSwapRatesRepository tmpAuditRtsInflationSwapRatesRepository;
	 
	 @Autowired
	 ColumnConfigurationRepository columnConfigurationRepository;
	 
	 @Autowired
	 TableManagementRepository tableManagementRepository;
	 
	 @Autowired
	 FunctionConfigurationService functionConfigurationService;
	 
	public List<TmpAuditRtsCentralBanks> getAuditRtsCentralBanksData(String groupId, String referDate) {
		
		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
			
		 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_rates",TmpAuditRtsCentralBanks.class);
	        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
	        query.setParameter("referDate", referDate);
	        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	        query.setParameter("groupId", groupId);
	        query.execute();

	        List<TmpAuditRtsCentralBanks> resultList = query.getResultList();
	        return resultList;
	}
	
	public List<TmpAuditRtsInflationSwapRates> getAuditRtsinflationSwapData(String groupId, String referDate) {
		
		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
			
		 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_rates",TmpAuditRtsInflationSwapRates.class);
	        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
	        query.setParameter("referDate", referDate);
	        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	        query.setParameter("groupId", groupId);
	        query.execute();

	        List<TmpAuditRtsInflationSwapRates> resultList = query.getResultList();
	        return resultList;
	}
	public void updateRtsData(List<UpdateDataDTO> updateDataDTOlst) {
		
		RatesData ratesData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{  
			if(updateDataDTO.getGroupId().equalsIgnoreCase("48"))
				{ratesData = ratesDataRepository.findMacroDataByReferDateAndGroupIdAndSubgroupIdAndFactorId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getGroupId()),Long.valueOf(updateDataDTO.getSubgroupId()),Long.valueOf(updateDataDTO.getFactor()));
				if(ratesData!=null)
				{ratesData.setValue(updateDataDTO.getValue());
				ratesDataRepository.save(ratesData);
				}
				else {
					ratesData = RatesData.builder().factorId(Long.valueOf(updateDataDTO.getFactor()))
												   .groupId(Long.valueOf(updateDataDTO.getGroupId()))
												   .subgroupId(Long.valueOf(updateDataDTO.getSubgroupId()))
												   .value(updateDataDTO.getValue())
												   .referDate(updateDataDTO.getReferdate())
												   .build();
					ratesDataRepository.save(ratesData);
					
				}
				}
				else 
				{
				ratesData = ratesDataRepository.findRatesDataByReferDateAndGroupIdAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getGroupId()),Long.valueOf(updateDataDTO.getSubgroupId()));
				ratesData.setValue(updateDataDTO.getValue());
				ratesDataRepository.save(ratesData);
				}
		}
	}
	
	public void doCalculationData(String referDate, Long groupId) {
	    String procedureName;

	    switch (groupId.intValue()) {
	        case 48:
	            procedureName = "";
	            break;
	        case 49:
	            procedureName = "calculation_rts_inflationSwapRates";
	            break;
	        case 50:
	            procedureName = "calculation_rts_mortgage_rates";
	            break;
	        case 51:
	            procedureName = "calculation_rts_fixings";
	            break;
	        default:
	            throw new IllegalArgumentException("Invalid groupId: " + groupId);
	    }

	    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery(
	            (groupId == 48 ) ? "calculation_rates" : procedureName
	    );

	    query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
	    query.setParameter("referDate", referDate);

	    if (groupId == 48 ) {
	        query.registerStoredProcedureParameter("groupId", Long.class, ParameterMode.IN);
	        query.setParameter("groupId", groupId);
	    }

	    query.execute();
	}
	public void doCaculationLoader(String fromDate,String toDate, Long groupId) {
	    String procedureName;

	    switch (groupId.intValue()) {
	        case 48:
	            procedureName = "";
	            break;
	        case 49:
	            procedureName = "calculation_rts_inflationSwapRates_loader";
	            break;
	        case 50:
	            procedureName = "calculation_rts_mortgage_rates_loader";
	            break;
	        case 51:
	            procedureName = "calculation_rts_fixings_loader";
	            break;
	        default:
	            throw new IllegalArgumentException("Invalid groupId: " + groupId);
	    }

	    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery(
	            (groupId == 48) ? "calculation_rates_loader" : procedureName
	    );
	   
		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		if (groupId == 48 ) {
		        query.registerStoredProcedureParameter("groupId", Long.class, ParameterMode.IN);
		        query.setParameter("groupId", groupId);
		    }

		query.execute();
	}
	   public List<RatesData> SaveRatesData(List<RatesData> ratesDataList) {
			return ratesDataRepository.saveAll(ratesDataList);
		}
		public void deleteRtsCentralBanksByReferDate(String referDate , Long groupId) {
			List<RatesData> ratesDataList = ratesDataRepository.findRatesDataByReferDateAndGroupId(referDate,groupId);
			ratesDataList.forEach(
		            (ratesData) -> {
		            	ratesDataRepository.deleteById(ratesData.getId());
		            });
			List<TmpAuditRtsCentralBanks> AuditList = tmpAuditRtsCentralBanksRepository.findByReferDate(referDate);
			AuditList.forEach(
		            (object) -> {
		            	tmpAuditRtsCentralBanksRepository.deleteById(object.getId());
		            });
		}
	
		public void deleteRtsInflationSwapRatesByReferDate(String referDate , Long groupId) {
			List<RatesData> ratesDataList = ratesDataRepository.findRatesDataByReferDateAndGroupId(referDate,groupId);
			ratesDataList.forEach(
		            (ratesData) -> {
		            	ratesDataRepository.deleteById(ratesData.getId());
		            });
			List<TmpAuditRtsInflationSwapRates> AuditList = tmpAuditRtsInflationSwapRatesRepository.findByReferDate(referDate);
			AuditList.forEach(
		            (object) -> {
		            	tmpAuditRtsInflationSwapRatesRepository.deleteById(object.getId());
		            });
		}
		public void deleteRtsMortageRatesByReferDate(String referDate , Long groupId) {
			List<RatesData> ratesDataList = ratesDataRepository.findRatesDataByReferDateAndGroupId(referDate,groupId);
			ratesDataList.forEach(
		            (ratesData) -> {
		            	ratesDataRepository.deleteById(ratesData.getId());
		            });
			List<TmpAuditRtsMortgageRates> AuditList = tmpAuditRtsMortgageRates.findByReferDate(referDate);
			AuditList.forEach(
		            (object) -> {
		            	tmpAuditRtsMortgageRates.deleteById(object.getId());
		            });
		}
		public void deleteRtsFixingsByReferDate(String referDate , Long groupId) {
			List<RatesData> ratesDataList = ratesDataRepository.findRatesDataByReferDateAndGroupId(referDate,groupId);
			ratesDataList.forEach(
		            (ratesData) -> {
		            	ratesDataRepository.deleteById(ratesData.getId());
		            });
			List<TmpAuditRtsFixings> AuditList = tmpAuditRtsFixingsRepository.findByReferDate(referDate);
			AuditList.forEach(
		            (object) -> {
		            	tmpAuditRtsFixingsRepository.deleteById(object.getId());
		            });
		}
		public boolean CheckIfCanSave(String referDate,Long groupId)
	   	{
			return ratesDataRepository.existsByReferDateAndGroupId(referDate,groupId);
	   	}
		public boolean CheckIfCanSaveRts(String referDate,Long groupId,Long subgroupId)
	   	{
			return ratesDataRepository.existsByReferDateAndGroupIdAndSubgroupId(referDate,groupId,subgroupId);
	   	}
		public boolean CheckIfCanSave(String referDate,Long groupId, Long subgroupId, Long factorId)
	   	{
	   	return ratesDataRepository.existsByReferDateAndGroupIdAndSubgroupIdAndFactorIdAndValueNot(referDate,groupId,subgroupId, factorId,"");
	   	}
		public String findLatestData(String groupId) {
			boolean hasData= adminService.getData();
	        if(!hasData)
			return null;
	       return ratesDataRepository.findLatest(groupId);
		}
		
		public List<TmpAuditRtsMortgageRates> getAuditRtsMortageRatesData(String referDate)
		{
			boolean hasData= adminService.getData();
		    if(!hasData)
				return null;
			StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_mortgage_rates",TmpAuditRtsMortgageRates.class);
			query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
			query.setParameter("referDate",referDate );
			query.execute();
			List<TmpAuditRtsMortgageRates> auditProcedureDTOLst = (List<TmpAuditRtsMortgageRates>) query.getResultList();
			return auditProcedureDTOLst;
		}
		
		public HashMap<String,List> getGridData( MainSearchFilterDTO mainSearchFilterDTO)
		{
			QueryColumnsDTO queryColumnsDTO = RatesUtil.buildDynamicGridQuery(mainSearchFilterDTO);
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
		public List<TmpAuditRtsFixings> getAuditRtsFixingsData(String referDate) {
			boolean hasData= adminService.getData();
		    if(!hasData)
				return null;
			StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_fixings",TmpAuditRtsFixings.class);
			query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
			query.setParameter("referDate",referDate );
			query.execute();
			List<TmpAuditRtsFixings> auditProcedureDTOLst = (List<TmpAuditRtsFixings>) query.getResultList();
			return auditProcedureDTOLst;
		}
		public boolean CheckIfCanSaveFactor(String referDate, Long groupId, Long subgroupId, Long factorId) {
			// TODO Auto-generated method stub
		   	return ratesDataRepository.existsByReferDateAndGroupIdAndSubgroupIdAndFactorIdAndValueNot(referDate,groupId,subgroupId, factorId,"");
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
						   .factor1(graphReqDTO.getFactor2())
						   .build();
				l1.add(getGraphDataResult(graphRequestDTO,false));
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
				l1.add(getGraphDataResult(graphRequestDTO,false));
			}
				
			return l1; 
		
		}
		public List<GraphResponseColConfigDTO> getGraphDataByTypes(List<GraphRequestDTO> graphReqDTOs) {

			boolean hasData= adminService.getData();
		    if(!hasData)
				return null;
		    List<GraphResponseColConfigDTO> responseList = new ArrayList<>();
		    for (GraphRequestDTO graphReqDTO : graphReqDTOs) {
		    	 GraphResponseColConfigDTO response = null;
		    	if(graphReqDTO.getGroupId1()!=null)
				{
		    		response = getGraphDataResult(graphReqDTO,false);
		    		responseList.add(response);
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
					response = getGraphDataResult(graphRequestDTO,false);
				    responseList.add(response);
				}
		    
		    }
		    return responseList;
		    
		
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
			String factor = graphReqDTO.getFactor1()!=null?graphReqDTO.getFactor1():"0"; 
			String description = null;
			description = tableManagementRepository.findByGroupIdAndSubgroupId(groupId,subGroupId).getColumnName();
				
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			    
			    config = adminService.getColumnsConfigurationByGroupAndFactor(groupId, subGroupId, factor);
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
				query.setParameter("factor",graphReqDTO.getFactor1()  );
				
				query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
				query.setParameter("dayOrweek",(isFunction)?"d":graphReqDTO.getPeriod()  );
				
				if(isFunction)
				{query.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
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
				List<GraphResponseDTO> graphResponseDTOlstEmpty= VolumeUtil.removeReplaceEmptyValueWithNull(graphResponseDTOlst1);
				graphResponseDTOlst1.clear();
				graphResponseDTOlst1=graphResponseDTOlstEmpty;
				
				if (graphReqDTO.getRemoveEmpty1()!=null)
					if (graphReqDTO.getRemoveEmpty1().equalsIgnoreCase("true"))
					{	
						List<GraphResponseDTO> graphResponseDTOlst= VolumeUtil.removeEmptyY(graphResponseDTOlst1);
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
