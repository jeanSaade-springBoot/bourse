package com.bourse.service.sti;

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
import com.bourse.domain.sti.StiAsiaData;
import com.bourse.domain.sti.StiCryptosData;
import com.bourse.domain.sti.StiEmergingData;
import com.bourse.domain.sti.StiEuropeData;
import com.bourse.domain.sti.StiWallStreetData;
import com.bourse.domain.sti.TmpAuditStiAsia;
import com.bourse.domain.sti.TmpAuditStiCryptos;
import com.bourse.domain.sti.TmpAuditStiEmerging;
import com.bourse.domain.sti.TmpAuditStiEurope;
import com.bourse.domain.sti.TmpAuditStiWallStreet;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.enums.FunctionEnum;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.FxUsdDataRepository;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.repositories.sti.StiAsiaRepository;
import com.bourse.repositories.sti.StiCryptosRepository;
import com.bourse.repositories.sti.StiEmergingRepository;
import com.bourse.repositories.sti.StiEuropeRepository;
import com.bourse.repositories.sti.StiWallStreetRepository;
import com.bourse.repositories.sti.TmpAuditStiAsiaRepository;
import com.bourse.repositories.sti.TmpAuditStiCryptosRepository;
import com.bourse.repositories.sti.TmpAuditStiEmergingRepository;
import com.bourse.repositories.sti.TmpAuditStiEuropeRepository;
import com.bourse.repositories.sti.TmpAuditStiWallStreetRepository;
import com.bourse.service.AdminService;
import com.bourse.service.FunctionConfigurationService;
import com.bourse.util.StiUtil;
import com.bourse.util.VolumeUtil;

@Service
public class StiService {
	@Autowired
	StiAsiaRepository stiAsiaRepository;
	@Autowired
	StiWallStreetRepository stiWallStreetRepository;
	@Autowired
	StiEuropeRepository stiEuropeRepository;
	@Autowired
	StiEmergingRepository stiEmergingRepository;
	@Autowired
	StiCryptosRepository stiCryptosRepository;
	@Autowired
	TmpAuditStiAsiaRepository tmpAuditStiAsiaRepository;
	@Autowired
	TmpAuditStiWallStreetRepository tmpAuditStiWallStreetRepository;
	@Autowired
	TmpAuditStiEuropeRepository tmpAuditStiEuropeRepository;
	@Autowired
	TmpAuditStiEmergingRepository tmpAuditStiEmergingRepository;
	@Autowired
	TmpAuditStiCryptosRepository tmpAuditStiCryptosRepository;
	@Autowired
	AdminService adminService;
	@Autowired
	FxUsdDataRepository fxUsdDataRepository;
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	@Autowired
	FunctionConfigurationService functionConfigurationService;
	@Autowired
	TableManagementRepository tableManagementRepository;
	@PersistenceContext
	private EntityManager entityManager;

	
	
	public List<StiAsiaData> saveStiAsia(List<StiAsiaData> stiDTOLst) {
		return stiAsiaRepository.saveAll(stiDTOLst);
	}
	public List<StiWallStreetData> saveStiWallStreet(List<StiWallStreetData> stiDTOLst) {
		return stiWallStreetRepository.saveAll(stiDTOLst);
	}
	public List<StiEuropeData> saveStiEurope(List<StiEuropeData> stiDTOLst) {
		return stiEuropeRepository.saveAll(stiDTOLst);
	}
	public List<StiEmergingData> saveStiEmerging(List<StiEmergingData> stiDTOLst) {
		return stiEmergingRepository.saveAll(stiDTOLst);
	}
	public List<StiCryptosData> saveStiCryptos(List<StiCryptosData> stiDTOLst) {
		return stiCryptosRepository.saveAll(stiDTOLst);
	}
	public boolean CheckIfCanSave(String referDate, String sti)
	{ 
	 long cnt = 0;
		if (sti.equalsIgnoreCase("1"))
			 cnt = stiAsiaRepository.countByReferDate(referDate);
		else if (sti.equalsIgnoreCase("2"))
			 cnt = stiWallStreetRepository.countByReferDate(referDate); 
		else if (sti.equalsIgnoreCase("3"))
			 cnt = stiEuropeRepository.countByReferDate(referDate);
		else if (sti.equalsIgnoreCase("4"))
			 cnt = stiEmergingRepository.countByReferDate(referDate);
		else if (sti.equalsIgnoreCase("5"))
			 cnt = stiCryptosRepository.countByReferDate(referDate);
		
			boolean returnvalue = (cnt == 0) ? true : false;
			return returnvalue;
	}
	public boolean CheckIfCanSaveStiAsia(String referDate,Long subgroupId)
   	{
   		return  stiAsiaRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
	public boolean CheckIfCanSaveStiWallStreet(String referDate,Long subgroupId)
   	{
   		return  stiWallStreetRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
	public boolean CheckIfCanSaveStiEurope(String referDate,Long subgroupId)
   	{
   		return  stiEuropeRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
	public boolean CheckIfCanSaveStiEmerging(String referDate,Long subgroupId)
   	{
   		return  stiEmergingRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
	public boolean CheckIfCanSaveStiCryptos(String referDate,Long subgroupId)
   	{
   		return  stiCryptosRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
	public boolean CheckIfHasData(String referDate)
	{ 
	 long cnt = 0;
		  cnt = fxUsdDataRepository.countByReferDate(referDate);
	
		boolean returnvalue = (cnt != 0) ? true : false;
		return returnvalue;
	}
	public void doCalculationAsia(String referDate) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_sti_asia");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.execute();
	}
	public void doCaculationStiAsiaLoader(String fromDate,String toDate) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_sti_asia_loader");
		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
	}
	public void doCaculationStiWallStreetLoader(String fromDate,String toDate) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_sti_wall_street_loader");
		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
	}
	public void doCaculationStiEuropeLoader(String fromDate,String toDate) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_sti_europe_loader");
		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
	}
	public void doCaculationStiEmergingLoader(String fromDate,String toDate) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_sti_emerging_loader");
		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
	}
	public void doCaculationStiCryptosLoader(String fromDate,String toDate) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_sti_cryptos_loader");
		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
	}
	public void doCalculationWallStreet(String referDate) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_sti_wall_street");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.execute();
	}
	public void doCalculationEurope(String referDate) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_sti_europe");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.execute();
	}
	public void doCalculationEmerging(String referDate) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_sti_emerging");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.execute();
	}
	public void doCalculationCryptos(String referDate) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_sti_cryptos");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.execute();
	}
	public String findLatestData(String skews)
		{   boolean hasData= adminService.getData();
	        if(!hasData)
			return null;
	        String value="";
	        if (skews.equalsIgnoreCase("1"))
	        	value =  stiAsiaRepository.findLatest();
			else if (skews.equalsIgnoreCase("2")) 
				value =  stiWallStreetRepository.findLatest();
			else if (skews.equalsIgnoreCase("3")) 
				value =  stiEuropeRepository.findLatest();
			else if (skews.equalsIgnoreCase("4")) 
				value =  stiEuropeRepository.findLatest();
			else if (skews.equalsIgnoreCase("5")) 
				value =  stiCryptosRepository.findLatest();
	        
	        return value;
		}
	public List<TmpAuditStiAsia> getStiAsiaDataByReferDate(String referDate) {

		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_sti_asia",
				TmpAuditStiAsia.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.execute();
		List<TmpAuditStiAsia> auditProcedureDTOLst = (List<TmpAuditStiAsia>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public List<TmpAuditStiWallStreet> getStiWallStreetByReferDate(String referDate) {

		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_sti_wall_street",
				TmpAuditStiWallStreet.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.execute();
		List<TmpAuditStiWallStreet> auditProcedureDTOLst = (List<TmpAuditStiWallStreet>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public List<TmpAuditStiEurope> getStiEuropeByReferDate(String referDate) {

		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_sti_europe",
				TmpAuditStiEurope.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.execute();
		List<TmpAuditStiEurope> auditProcedureDTOLst = (List<TmpAuditStiEurope>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public List<TmpAuditStiEmerging> getStiEmergingByReferDate(String referDate) {

		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_sti_emerging",
				TmpAuditStiEmerging.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.execute();
		List<TmpAuditStiEmerging> auditProcedureDTOLst = (List<TmpAuditStiEmerging>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public List<TmpAuditStiCryptos> getStiCryptosByReferDate(String referDate) {

		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_sti_cryptos",
				TmpAuditStiCryptos.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.execute();
		List<TmpAuditStiCryptos> auditProcedureDTOLst = (List<TmpAuditStiCryptos>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void updateAsiaData(List<UpdateDataDTO> updateDataDTOlst) {
		
		StiAsiaData stiAsiaData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			stiAsiaData = stiAsiaRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			stiAsiaData.setValue(updateDataDTO.getValue());
			stiAsiaRepository.save(stiAsiaData);
		}
	}
	public void updateWallStreetData(List<UpdateDataDTO> updateDataDTOlst) {
		
		StiWallStreetData stiWallStreetData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			stiWallStreetData = stiWallStreetRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			stiWallStreetData.setValue(updateDataDTO.getValue());
			stiWallStreetRepository.save(stiWallStreetData);
		}
	}
	public void updateEuropeData(List<UpdateDataDTO> updateDataDTOlst) {
		
		StiEuropeData stiEuropeData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			stiEuropeData = stiEuropeRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			stiEuropeData.setValue(updateDataDTO.getValue());
			stiEuropeRepository.save(stiEuropeData);
		}
	}
	public void updateEmergingData(List<UpdateDataDTO> updateDataDTOlst) {
		
		StiEmergingData stiEmergingData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			stiEmergingData = stiEmergingRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			stiEmergingData.setValue(updateDataDTO.getValue());
			stiEmergingRepository.save(stiEmergingData);
		}
	}
	public void updateCryptosData(List<UpdateDataDTO> updateDataDTOlst) {
		
		StiCryptosData StiCryptosData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			StiCryptosData = stiCryptosRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			StiCryptosData.setValue(updateDataDTO.getValue());
			stiCryptosRepository.save(StiCryptosData);
		}
	}
	public void deleteStiAsiaDataByReferDate(String referDate ){
		 tmpAuditStiAsiaRepository.deleteDataByReferDate(referDate);
		 tmpAuditStiAsiaRepository.deleteDataByReferDate(referDate);
		 stiAsiaRepository.deleteByReferDate(referDate);
	}
	public void deleteStiWallStreetByReferDate(String referDate ){
		tmpAuditStiWallStreetRepository.deleteDataByReferDate(referDate);
		tmpAuditStiWallStreetRepository.deleteDataByReferDate(referDate);
		stiWallStreetRepository.deleteByReferDate(referDate);
	}
	public void deleteStiEuropeByReferDate(String referDate ){
		tmpAuditStiEuropeRepository.deleteDataByReferDate(referDate);
		tmpAuditStiEuropeRepository.deleteDataByReferDate(referDate);
		stiEuropeRepository.deleteByReferDate(referDate);
	}
	public void deleteStiEmergingByReferDate(String referDate ){
		tmpAuditStiEmergingRepository.deleteDataByReferDate(referDate);
		tmpAuditStiEmergingRepository.deleteDataByReferDate(referDate);
		stiEmergingRepository.deleteByReferDate(referDate);
	}
	public void deleteStiCryptosByReferDate(String referDate ){
		tmpAuditStiCryptosRepository.deleteDataByReferDate(referDate);
		tmpAuditStiCryptosRepository.deleteDataByReferDate(referDate);
		stiCryptosRepository.deleteByReferDate(referDate);
	}
	  public HashMap<String,List> getGridData( MainSearchFilterDTO mainSearchFilterDTO)
		{
			QueryColumnsDTO queryColumnsDTO = StiUtil.buildDynamicGridQuery(mainSearchFilterDTO);
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
			description = tableManagementRepository.findByGroupIdAndSubgroupId(groupId,subGroupId).getColumnName();
				
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			    
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
