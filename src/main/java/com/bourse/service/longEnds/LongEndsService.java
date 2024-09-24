package com.bourse.service.longEnds;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

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
import com.bourse.domain.macro.MacroDisplaySettings;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.dto.longends.LongEndsAuditCommonDTO;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.repositories.longEnds.LongEndsDataRepository;
import com.bourse.repositories.longEnds.LongEndsDisplaySettingsRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBoblsRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBtpRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBundsRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBundsRollingRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBuxlRepository;
import com.bourse.repositories.longEnds.TmpAuditLefGiltsRepository;
import com.bourse.repositories.longEnds.TmpAuditLefOatRepository;
import com.bourse.repositories.longEnds.TmpAuditLefShatzRepository;
import com.bourse.repositories.longEnds.TmpAuditLefTbondsRepository;
import com.bourse.repositories.longEnds.TmpAuditLefTnotesRepository;
import com.bourse.service.AdminService;
import com.bourse.util.LongEndsUtil;
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
	@Autowired
	TmpAuditLefBoblsRepository tmpAuditLefboblsRepository;
	@Autowired
	TmpAuditLefShatzRepository tmpAuditLefshatzRepository;
	@Autowired
	TmpAuditLefBuxlRepository tmpAuditLefbuxlRepository;
	@Autowired
	TmpAuditLefOatRepository tmpAuditLefoatRepository;
	@Autowired
	TmpAuditLefBtpRepository tmpAuditLefbtpRepository;
	@Autowired
	TmpAuditLefGiltsRepository tmpAuditLefgiltsRepository;
	@Autowired
	TmpAuditLefTnotesRepository tmpAuditLeftnotesRepository;
	@Autowired
	TmpAuditLefTbondsRepository tmpAuditLeftbondsRepository;
	@Autowired
	TmpAuditLefBundsRollingRepository tmpAuditLefBundsRollingRepository;
	

	
	@PersistenceContext
	private EntityManager entityManager;
	
	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
		
		LongEndData longEndsData=null;
		String OldValue=null;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			longEndsData = longEndsDataRepository.findLongEndsDataByReferDateAndGroupIdAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getGroupId()),Long.valueOf(updateDataDTO.getSubgroupId()));
			if(longEndsData!=null)
			{   if(longEndsData.getSubgroupId()==15 && longEndsData.getValue()!=null)
					{
						OldValue = longEndsData.getValue();
					}
					longEndsData.setValue(updateDataDTO.getValue());
				    longEndsDataRepository.save(longEndsData);
			}
			else {
				longEndsData = LongEndData.builder()
											   .groupId(Long.valueOf(updateDataDTO.getGroupId()))
											   .subgroupId(Long.valueOf(updateDataDTO.getSubgroupId()))
											   .value(updateDataDTO.getValue())
											   .referDate(updateDataDTO.getReferdate())
											   .build();
				longEndsDataRepository.save(longEndsData);
				
			}
		}
		List<LongEndData> longEndsDataLst = new ArrayList<LongEndData>();
		longEndsDataLst.add(longEndsData);
		doCalculation(updateDataDTOlst.get(0).getReferdate(),updateDataDTOlst.get(0).getGroupId());
		doCalculationSpreadData(longEndsDataLst, OldValue);
	}
	  
	public List<LongEndsDisplaySettings> getLongEndsDisplaySettingsList() {
		List<Order> orders = new ArrayList<Order>();

        Order groupIdOrder = new Order(Sort.Direction.ASC, "groupId");
        orders.add(groupIdOrder);
        Order subgroupIdOrder = new Order(Sort.Direction.ASC, "subgroupId");
        orders.add(subgroupIdOrder);
		return longEndsDisplaySettingsRepository.findAllByParentgroupId(Long.valueOf(0),Sort.by(orders));
	}
	public List<LongEndsDisplaySettings> getAllLongEndsDisplaySettingsList() {
		List<Order> orders = new ArrayList<Order>();

        Order groupIdOrder = new Order(Sort.Direction.ASC, "groupId");
        orders.add(groupIdOrder);
        Order subgroupIdOrder = new Order(Sort.Direction.ASC, "subgroupId");
        orders.add(subgroupIdOrder);
		return longEndsDisplaySettingsRepository.findAll(Sort.by(orders));
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
	public boolean CheckIfCanSaveLongEnds(String referDate,Long groupId,Long subgroupId)
   	{
		return longEndsDataRepository.existsByReferDateAndGroupIdAndSubgroupId(referDate,groupId,subgroupId);
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
	        List<LongEndsAuditCommonDTO> auditProcedureDTOLst = mapResultListToDTO(resultList, groupId);
	        return auditProcedureDTOLst;
	}
	public List<LongEndsAuditCommonDTO> getLongEndsRollingByGroupIdAndByReferDate(String groupId, String referDate) {
		
		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
			
		 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_longends_rolling");
	        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
	        query.setParameter("referDate", referDate);
	        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	        query.setParameter("groupId", groupId);
	        query.execute();

	        List<Object[]> resultList = query.getResultList();
	        List<LongEndsAuditCommonDTO> auditProcedureDTOLst = mapResultListToDTO(resultList, groupId);
	        return auditProcedureDTOLst;
	}
	  private List<LongEndsAuditCommonDTO> mapResultListToDTO(List<Object[]> resultList, String groupId) {

		  List<LongEndsAuditCommonDTO> dtos = new ArrayList<>();
	        for (Object[] result : resultList) {
	        	LongEndsAuditCommonDTO dto = new LongEndsAuditCommonDTO();
	         if(Arrays.asList("52", "53", "54", "55", "56","57","58","59", "60").contains(groupId))
	        	{
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
	            dto.setSpreadName(String.valueOf(result[15]));
	            dto.setSpreadValue(String.valueOf(result[16]));
	            dtos.add(dto);
	            }
	         else {
	        	    dto.setId(String.valueOf(result[0]));
		            dto.setMaturityName(String.valueOf(result[1]));
		            dto.setOpen(String.valueOf(result[2]));
		            dto.setSettle(String.valueOf(result[3]));
		            dto.setClose(String.valueOf(result[4]));
		            dto.setHigh(String.valueOf(result[5])); 
		            dto.setLow(String.valueOf(result[6]));
		            dto.setReferDate(String.valueOf(result[7])); 
		            dtos.add(dto);
	         }
	        }
	        return dtos;
	    }
	public void saveLongEndsData(List<LongEndData> longEndDataDTOlst) {
		longEndsDataRepository.saveAll(longEndDataDTOlst);
	}
	@Transactional
	public void deleteLongEndsData(String groupId, String referDate) {
	  List<LongEndData> longEndsData = longEndsDataRepository.findLongEndsDataByReferDateAndGroupId(referDate,Long.valueOf(groupId));
			
	  tmpAuditLefBundsRepository.deleteDataByReferDate(referDate);
	  tmpAuditLefBundsRollingRepository.deleteDataByReferDate(referDate);
	  longEndsDataRepository.deleteLongEndsByGroupIdAndReferDate(Long.valueOf(groupId),referDate);
	  
      onSuccessfulDelete(longEndsData);
	}
	// Function to be executed after successful delete
    private void onSuccessfulDelete(List<LongEndData> longEndsData) {
        // Your logic here
        System.out.println("Deletion successful. Executing additional logic...");
        // For example, recalculating data or any other post-deletion logic
        reCalculateData(longEndsData);
    }
	public void deleteLongEndData(String groupId, String referDate) {
		 List<LongEndData> longEndsData = longEndsDataRepository.findLongEndsDataByReferDateAndGroupId(referDate,Long.valueOf(groupId));
		 deleteLongEndsData(groupId,referDate);
		 reCalculateData(longEndsData);
	 
	}
	public void  reCalculateData(List<LongEndData> longEndsData) {
		 
		  Optional<LongEndData> result = longEndsData.stream()
	              .filter(data -> data.getSubgroupId() == 15)
	              .findFirst();

	      // Check if the result is present
	      if (result.isPresent()) {
	    	  LongEndData longEndData = result.get();
	          String spreadValue = longEndData.getValue();
	          if(spreadValue!=null)
	          {  boolean executed = calculateRollingSpreadData(longEndData);
	          	System.out.println("deleted - Procedure calculation_longends_spread_data executed: " + executed);
	          }
	      }
	}
	
	public void doCalculation(String referDate,String groupId) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_longends");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate", referDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId", groupId);
		query.execute();
	}
	public void doCalculationLoader(String fromDate,String toDate,String groupId)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_longends_loader");
   		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId", groupId);
		query.execute();
		
		StoredProcedureQuery spreadQuery = this.entityManager.createStoredProcedureQuery("calculation_longends_spread_data");
		spreadQuery.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		spreadQuery.setParameter("groupId", groupId);
		spreadQuery.execute();
   	}
	public void doCalculationSpreadData(List<LongEndData> longEndDataDTOlst, String oldValue) {

		Optional<LongEndData> result = longEndDataDTOlst.stream()
                .filter(data -> data.getSubgroupId() == 15)
                .findFirst();

        // Check if the result is present
        if (result.isPresent()) {
            LongEndData longEndData = result.get();
            String spreadValue = longEndData.getValue();
            if(spreadValue!=null)
            {  boolean executed = calculateRollingSpreadData(longEndData);
            	System.out.println("Procedure calculation_longends_spread_data executed: " + executed);
            } else if(oldValue!=null)
            {
            	boolean executed = calculateRollingSpreadData(longEndData);
            	System.out.println("Procedure calculation_longends_spread_data executed: " + executed);
            }
            
        } 
		
	}
	public boolean calculateRollingSpreadData(LongEndData longEndData){
		   String groupIdString = String.valueOf(longEndData.getGroupId());
		   boolean executed = false;
          StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_longends_spread_data");
          query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
          query.setParameter("groupId", groupIdString);
		try {
			executed = query.execute();
				
			} catch (Exception e) {
			    e.printStackTrace();
			}
		return executed;
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
