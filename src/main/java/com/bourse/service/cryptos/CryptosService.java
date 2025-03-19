package com.bourse.service.cryptos;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import javax.transaction.Transactional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.FunctionConfiguration;
import com.bourse.domain.TableManagement;
import com.bourse.domain.cryptos.CryptosData;
import com.bourse.domain.cryptos.CrBinanceFourHours;
import com.bourse.domain.cryptos.CrBitcoinFourHours;
import com.bourse.domain.cryptos.CrEthereumFourHours;
import com.bourse.domain.cryptos.CrShibaFourHours;
import com.bourse.domain.cryptos.CrSolanaFourHours;
import com.bourse.domain.cryptos.CrXrpFourHours;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.UpdateCryptosDataDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.dto.cryptos.CrCryptoDTO;
import com.bourse.dto.cryptos.CryptosAuditCommonDTO;
import com.bourse.dto.cryptos.GraphDataReqDTO;
import com.bourse.dto.cryptos.OrderBookDataDTO;
import com.bourse.enums.FunctionEnum;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.repositories.cryptos.CryptosDataRepository;
import com.bourse.repositories.cryptos.TmpAuditCryBitcoinRepository;
import com.bourse.repositories.cryptos.TmpAuditCryEthereumRepository;
import com.bourse.repositories.cryptos.TmpAuditCryShibaRepository;
import com.bourse.repositories.cryptos.TmpAuditCrySolanaRepository;
import com.bourse.repositories.cryptos.TmpAuditCryXrpRepository;
import com.bourse.repositories.cryptos.CrBinanceFourHoursRepository;
import com.bourse.repositories.cryptos.CrBitcoinFourHoursRepository;
import com.bourse.repositories.cryptos.CrShibaFourHoursRepository;
import com.bourse.repositories.cryptos.CrSolanaFourHoursRepository;
import com.bourse.repositories.cryptos.CrXrpFourHoursRepository;
import com.bourse.repositories.cryptos.CrEthereumFourHoursRepository;
import com.bourse.service.AdminService;
import com.bourse.service.FunctionConfigurationService;
import com.bourse.util.CryptosUtil;
import com.bourse.util.LiquidityUtil;

@Service
public class CryptosService {
	@Autowired
	CryptosDataRepository cryptosDataRepository;
	@Autowired
	TmpAuditCryBitcoinRepository tmpAuditCryBitcoinRepository;
	@Autowired
	TmpAuditCryEthereumRepository tmpAuditCryEthereumRepository;
	@Autowired
	TmpAuditCrySolanaRepository tmpAuditCrySolanaRepository;
	@Autowired
	TmpAuditCryShibaRepository tmpAuditCryShibaRepository;
	@Autowired
	TmpAuditCryXrpRepository tmpAuditCryXrpRepository;
	@Autowired
	CrBitcoinFourHoursRepository crBitcoinFourHoursRepository;
	@Autowired
	CrBinanceFourHoursRepository crBinanceFourHoursRepository;
	@Autowired
	CrXrpFourHoursRepository crXrpFourHoursRepository;
	@Autowired
	CrSolanaFourHoursRepository crSolanaFourHoursRepository;
	@Autowired
	CrShibaFourHoursRepository crShibaFourHoursRepository;
	@Autowired
	CrEthereumFourHoursRepository crEthereumFourHoursRepository;
	
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
	
	private final WebClient webClient;
	
	 public CryptosService(WebClient.Builder webClientBuilder, @Value("${liveFlow.apiLiveFlowUrl}") String apiLiveFlowUrl) {
	        this.webClient = webClientBuilder.baseUrl(apiLiveFlowUrl).build();
	    }
	
    public CrCryptoDTO fetchLatestCryptoData(String apiEndpoint) {
	        try {
	            return webClient.get()
	                    .uri(apiEndpoint)
	                    .retrieve()
	                    .bodyToMono(CrCryptoDTO.class)
	                    .block(); // Synchronous call
	        } catch (Exception e) {
	        	 System.out.println("Failed to fetch data from {}: {}"+ apiEndpoint+ e.getMessage());
	            return null;
	        }
	    }
	  
	public void saveCryptos(List<CryptosData> CryptoDTOLst) {
		CryptosData cryptoData;
		for(CryptosData cryptoDTO:CryptoDTOLst)
		{
			cryptoData = cryptosDataRepository.findCryptosDataByReferDateAndGroupIdAndSubgroupId(cryptoDTO.getReferDate(),Long.valueOf(cryptoDTO.getGroupId()),Long.valueOf(cryptoDTO.getSubgroupId()));
			if(cryptoData!=null)
			{cryptoData.setValue(cryptoDTO.getValue());
				cryptosDataRepository.save(cryptoData);
			}
			else {
				cryptosDataRepository.save(cryptoDTO);
			}
		}
	}
	public boolean CheckIfCanSave(String referDate,Long groupId)
   	{
		return cryptosDataRepository.existsByReferDateAndGroupId(referDate,groupId);
   	}
	public String findLatestData(String groupId) {
		boolean hasData= adminService.getData();
        if(!hasData)
		return null;
       return cryptosDataRepository.findLatest(groupId);
	}
	public String findLatestDataFourHoursData(String groupId) {
		boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        
        String value =null;
        if(groupId.equalsIgnoreCase("71"))
        	value=	crBitcoinFourHoursRepository.findLatest();
        else  if(groupId.equalsIgnoreCase("72"))
        	value=	crEthereumFourHoursRepository.findLatest();
        else  if(groupId.equalsIgnoreCase("73"))
        	value=	crSolanaFourHoursRepository.findLatest();
        else  if(groupId.equalsIgnoreCase("74"))
        	value=	crShibaFourHoursRepository.findLatest();
        else  if(groupId.equalsIgnoreCase("75"))
        	value=	crBinanceFourHoursRepository.findLatest();
        else  if(groupId.equalsIgnoreCase("76"))
        	value=	crXrpFourHoursRepository.findLatest();
        
       return value;
	}
	public void updateBitcoinsDataFourHoursData(UpdateCryptosDataDTO updateDataDTO) {
		
		 DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		 LocalDateTime startTime = LocalDateTime.parse(updateDataDTO.getStartTime(), formatter);
		    // Fetch the existing entity
		CrBitcoinFourHours existingEntity = crBitcoinFourHoursRepository.findByStartTime(startTime);

		    existingEntity.setCloseeur(new BigDecimal(updateDataDTO.getCloseeur().replace(",", "")));
		    existingEntity.setOpeneur(new BigDecimal(updateDataDTO.getOpeneur().replace(",", "")));
		    existingEntity.setCloseint(new BigDecimal(updateDataDTO.getCloseint().replace(",", "")));
		    existingEntity.setOpenint(new BigDecimal(updateDataDTO.getOpenint().replace(",", "")));
		    existingEntity.setVolume(new BigDecimal(updateDataDTO.getVolume().replace(",", "")));
		    existingEntity.setHigh(new BigDecimal(updateDataDTO.getHigh().replace(",", "")));
		    existingEntity.setLow(new BigDecimal(updateDataDTO.getLow().replace(",", "")));
		    existingEntity.setMarketcap(new BigDecimal(updateDataDTO.getMarketcap().replace(",", "")));
		    // Save the updated entity
		    crBitcoinFourHoursRepository.save(existingEntity);
		
	}
	
	public void updateEtheremDataFourHoursData(UpdateCryptosDataDTO updateDataDTO) {
		
		 DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		 LocalDateTime startTime = LocalDateTime.parse(updateDataDTO.getStartTime(), formatter);
		    // Fetch the existing entity
		 CrEthereumFourHours existingEntity = crEthereumFourHoursRepository.findByStartTime(startTime);

		    existingEntity.setCloseeur(new BigDecimal(updateDataDTO.getCloseeur().replace(",", "")));
		    existingEntity.setOpeneur(new BigDecimal(updateDataDTO.getOpeneur().replace(",", "")));
		    existingEntity.setCloseint(new BigDecimal(updateDataDTO.getCloseint().replace(",", "")));
		    existingEntity.setOpenint(new BigDecimal(updateDataDTO.getOpenint().replace(",", "")));
		    existingEntity.setVolume(new BigDecimal(updateDataDTO.getVolume().replace(",", "")));
		    existingEntity.setHigh(new BigDecimal(updateDataDTO.getHigh().replace(",", "")));
		    existingEntity.setLow(new BigDecimal(updateDataDTO.getLow().replace(",", "")));
		    existingEntity.setMarketcap(new BigDecimal(updateDataDTO.getMarketcap().replace(",", "")));
		    // Save the updated entity
		    crEthereumFourHoursRepository.save(existingEntity);
		
	}
	public void updateXrpDataFourHoursData(UpdateCryptosDataDTO updateDataDTO) {
		
		 DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		 LocalDateTime startTime = LocalDateTime.parse(updateDataDTO.getStartTime(), formatter);
		    // Fetch the existing entity
		 CrXrpFourHours existingEntity = crXrpFourHoursRepository.findByStartTime(startTime);

		    existingEntity.setCloseeur(new BigDecimal(updateDataDTO.getCloseeur().replace(",", "")));
		    existingEntity.setOpeneur(new BigDecimal(updateDataDTO.getOpeneur().replace(",", "")));
		    existingEntity.setCloseint(new BigDecimal(updateDataDTO.getCloseint().replace(",", "")));
		    existingEntity.setOpenint(new BigDecimal(updateDataDTO.getOpenint().replace(",", "")));
		    existingEntity.setVolume(new BigDecimal(updateDataDTO.getVolume().replace(",", "")));
		    existingEntity.setHigh(new BigDecimal(updateDataDTO.getHigh().replace(",", "")));
		    existingEntity.setLow(new BigDecimal(updateDataDTO.getLow().replace(",", "")));
		    existingEntity.setMarketcap(new BigDecimal(updateDataDTO.getMarketcap().replace(",", "")));
		    // Save the updated entity
		    crXrpFourHoursRepository.save(existingEntity);
		
	}
	public void updateSolanaDataFourHoursData(UpdateCryptosDataDTO updateDataDTO) {
		
		 DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		 LocalDateTime startTime = LocalDateTime.parse(updateDataDTO.getStartTime(), formatter);
		    // Fetch the existing entity
		 CrSolanaFourHours existingEntity = crSolanaFourHoursRepository.findByStartTime(startTime);

		    existingEntity.setCloseeur(new BigDecimal(updateDataDTO.getCloseeur().replace(",", "")));
		    existingEntity.setOpeneur(new BigDecimal(updateDataDTO.getOpeneur().replace(",", "")));
		    existingEntity.setCloseint(new BigDecimal(updateDataDTO.getCloseint().replace(",", "")));
		    existingEntity.setOpenint(new BigDecimal(updateDataDTO.getOpenint().replace(",", "")));
		    existingEntity.setVolume(new BigDecimal(updateDataDTO.getVolume().replace(",", "")));
		    existingEntity.setHigh(new BigDecimal(updateDataDTO.getHigh().replace(",", "")));
		    existingEntity.setLow(new BigDecimal(updateDataDTO.getLow().replace(",", "")));
		    existingEntity.setMarketcap(new BigDecimal(updateDataDTO.getMarketcap().replace(",", "")));
		    // Save the updated entity
		    crSolanaFourHoursRepository.save(existingEntity);
		
	}
	public void updateShibaDataFourHoursData(UpdateCryptosDataDTO updateDataDTO) {
		
		 DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		 LocalDateTime startTime = LocalDateTime.parse(updateDataDTO.getStartTime(), formatter);
		    // Fetch the existing entity
		 CrShibaFourHours existingEntity = crShibaFourHoursRepository.findByStartTime(startTime);

		    existingEntity.setCloseeur(new BigDecimal(updateDataDTO.getCloseeur().replace(",", "")));
		    existingEntity.setOpeneur(new BigDecimal(updateDataDTO.getOpeneur().replace(",", "")));
		    existingEntity.setCloseint(new BigDecimal(updateDataDTO.getCloseint().replace(",", "")));
		    existingEntity.setOpenint(new BigDecimal(updateDataDTO.getOpenint().replace(",", "")));
		    existingEntity.setVolume(new BigDecimal(updateDataDTO.getVolume().replace(",", "")));
		    existingEntity.setHigh(new BigDecimal(updateDataDTO.getHigh().replace(",", "")));
		    existingEntity.setLow(new BigDecimal(updateDataDTO.getLow().replace(",", "")));
		    existingEntity.setMarketcap(new BigDecimal(updateDataDTO.getMarketcap().replace(",", "")));
		    // Save the updated entity
		    crShibaFourHoursRepository.save(existingEntity);
		
	}
	public void updateBinanceDataFourHoursData(UpdateCryptosDataDTO updateDataDTO) {
		
		 DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		 LocalDateTime startTime = LocalDateTime.parse(updateDataDTO.getStartTime(), formatter);
		    // Fetch the existing entity
		 CrBinanceFourHours existingEntity = crBinanceFourHoursRepository.findByStartTime(startTime);

		    existingEntity.setCloseeur(new BigDecimal(updateDataDTO.getCloseeur().replace(",", "")));
		    existingEntity.setOpeneur(new BigDecimal(updateDataDTO.getOpeneur().replace(",", "")));
		    existingEntity.setCloseint(new BigDecimal(updateDataDTO.getCloseint().replace(",", "")));
		    existingEntity.setOpenint(new BigDecimal(updateDataDTO.getOpenint().replace(",", "")));
		    existingEntity.setVolume(new BigDecimal(updateDataDTO.getVolume().replace(",", "")));
		    existingEntity.setHigh(new BigDecimal(updateDataDTO.getHigh().replace(",", "")));
		    existingEntity.setLow(new BigDecimal(updateDataDTO.getLow().replace(",", "")));
		    existingEntity.setMarketcap(new BigDecimal(updateDataDTO.getMarketcap().replace(",", "")));
		    // Save the updated entity
		    crBinanceFourHoursRepository.save(existingEntity);
		
	}
	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
		
		CryptosData cryptosData=null;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			cryptosData = cryptosDataRepository.findCryptosDataByReferDateAndGroupIdAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getGroupId()),Long.valueOf(updateDataDTO.getSubgroupId()));
			if(cryptosData!=null)
			{   
					cryptosData.setValue(updateDataDTO.getValue());
				    cryptosDataRepository.save(cryptosData);
			}
			else {
				cryptosData = CryptosData.builder()
											   .groupId(Long.valueOf(updateDataDTO.getGroupId()))
											   .subgroupId(Long.valueOf(updateDataDTO.getSubgroupId()))
											   .value(updateDataDTO.getValue())
											   .referDate(updateDataDTO.getReferdate())
											   .build();
				cryptosDataRepository.save(cryptosData);
				
			}
		}
		List<CryptosData> cryptosDataLst = new ArrayList<CryptosData>();
		cryptosDataLst.add(cryptosData);
		doCalculation(updateDataDTOlst.get(0).getReferdate(),updateDataDTOlst.get(0).getGroupId());
	}
	public boolean CheckIfCanSaveCryptos(String referDate,Long groupId,Long subgroupId)
   	{
		return cryptosDataRepository.existsByReferDateAndGroupIdAndSubgroupId(referDate,groupId,subgroupId);
   	}
	public List<CryptosAuditCommonDTO> getCryptosByGroupIdAndDataByReferDate(String groupId, String referDate) {
		
		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
			
		 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_cryptos");
	        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
	        query.setParameter("referDate", referDate);
	        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	        query.setParameter("groupId", groupId);
	        query.execute();

	        List<Object[]> resultList = query.getResultList();
	        List<CryptosAuditCommonDTO> auditProcedureDTOLst = mapResultListToDTO(resultList, groupId);
	        return auditProcedureDTOLst;
	}
	public List<CryptosAuditCommonDTO> getCryptosByGroupIdAndDataByReferDateFourHoursData(String groupId, String referDate) {
		
		boolean hasData = adminService.getData();
		if (!hasData)
			return null;
			
		 StoredProcedureQuery query = entityManager.createStoredProcedureQuery("calculation_audit_cryptos_4_hour_data");
	        query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
	        query.setParameter("referDate", referDate);
	        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	        query.setParameter("groupId", groupId);
	        query.execute();

	        List<Object[]> resultList = query.getResultList();
	        List<CryptosAuditCommonDTO> auditProcedureDTOLst = mapResultListToDTO(resultList, groupId);
	        return auditProcedureDTOLst;
	}
	public void doCalculation(String referDate,String groupId) {
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_cryptos");
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
	
	private List<CryptosAuditCommonDTO> mapResultListToDTO(List<Object[]> resultList, String groupId) {

		  List<CryptosAuditCommonDTO> dtos = new ArrayList<>();
	        for (Object[] result : resultList) {
	        	CryptosAuditCommonDTO dto = new CryptosAuditCommonDTO();
	       
	        	dto.setId(String.valueOf(result[0]));
	            dto.setOpeneur(String.valueOf(result[1]));
	            dto.setCloseeur(String.valueOf(result[2]));
	            dto.setHigh(String.valueOf(result[3]));
	            dto.setLow(String.valueOf(result[4]));
	            dto.setVolume(String.valueOf(result[5])); 
	            dto.setMarketcap(String.valueOf(result[6]));
	            dto.setOpenint(String.valueOf(result[7]));
	            dto.setCloseint(String.valueOf(result[8]));
	            dto.setReferDate(String.valueOf(result[9])); 
	            dtos.add(dto);
	            
	        }
	        return dtos;
	    }  
	  @Transactional
		public void deleteCryptosData(String groupId, String referDate) {
			String TableName = tableManagementRepository.findDistinctByGroupId(groupId).getTableName();
		    String queryStr = "Delete from "+TableName+ " where refer_date='"+referDate+"'";
		    javax.persistence.Query query = entityManager.createNativeQuery(queryStr);
		    query.executeUpdate();
		    
		    cryptosDataRepository.deleteCryptosByGroupIdAndReferDate(Long.valueOf(groupId),referDate);
		}
		public HashMap<String,List> getGridData( MainSearchFilterDTO mainSearchFilterDTO)
		{
			QueryColumnsDTO queryColumnsDTO = CryptosUtil.buildDynamicGridQuery(mainSearchFilterDTO);
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
		public HashMap<String,List> getGridDataFourHoursData( MainSearchFilterDTO mainSearchFilterDTO)
		{
			QueryColumnsDTO queryColumnsDTO = CryptosUtil.buildDynamicGridQueryFourHoursData(mainSearchFilterDTO);
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
		@Transactional
		public List<GraphResponseColConfigDTO> getGraphDataResultForDailyLive(String groupSubgroup) {
			String groupId = groupSubgroup.split("-")[0];
    		String subGroupId = groupSubgroup.split("-")[1];
    		
    		ZonedDateTime today = ZonedDateTime.now(ZoneOffset.UTC).withHour(0).withMinute(0).withSecond(0).withNano(0);
			// Get the start of today in UTC (00:00:00)
            ZonedDateTime startOfDayUtc = today.minusDays(1); // Subtract one day;
            // Get the end of today in UTC (23:59:59)
            ZonedDateTime endOfDayUtc = today.withHour(23).withMinute(59).withSecond(59);

            // Format as string (ISO 8601 format)
            String fromDate = startOfDayUtc.format(DateTimeFormatter.ISO_INSTANT);
            String toDate = endOfDayUtc.format(DateTimeFormatter.ISO_INSTANT);

            // Use these values in GraphRequestDTO
            GraphRequestDTO graphRequestDTO = GraphRequestDTO.builder()
                    .fromdate(fromDate)  // Replaced with correct UTC start time
                    .todate(toDate)  // Replaced with correct UTC end time
                    .groupId1(groupId)
                    .subGroupId1(subGroupId)
                    .interval("1d")
                    .build();
            
          return  getGraphDataResultForFourHoursIntereval(graphRequestDTO);
            
		}
		public List<GraphResponseColConfigDTO> getGraphDataResultForFourHoursIntereval(GraphRequestDTO graphReqDTO) {

			boolean hasData= adminService.getData();
		    if(!hasData)
				return null;
		
			List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
			
			if(graphReqDTO.getGroupId1()!=null)
			{
				l1.add(getCandleGraphDataResultForFourHoursInterval(graphReqDTO));
			}
			if(graphReqDTO.getIsFunctionGraph()!=null?graphReqDTO.getIsFunctionGraph().equals("true"):false)
			{   
			   l1.add(getGraphDataResultFourHoursInterval(graphReqDTO,true));
			}
			return l1; 
		
		}
		
		public List<GraphResponseColConfigDTO> getCandleGraphDataForFourHoursIntereval(GraphRequestDTO graphReqDTO) {

			boolean hasData= adminService.getData();
		    if(!hasData)
				return null;
		
			List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
			
			if(graphReqDTO.getGroupId1()!=null)
			{
				l1.add(getGraphDataResultFourHoursInterval(graphReqDTO,true));
			}
			if(graphReqDTO.getIsFunctionGraph()!=null?graphReqDTO.getIsFunctionGraph().equals("true"):false)
			{   
			   l1.add(getGraphDataResultFourHoursInterval(graphReqDTO,true));
			}if(graphReqDTO.getGroupId2()!=null)
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
						   .interval(graphReqDTO.getInterval())
						   .build();
				l1.add(getGraphDataResultFourHoursInterval(graphRequestDTO,false));
			}
			return l1; 
		
		}
		public List<GraphResponseColConfigDTO> getCandleGraphData(GraphRequestDTO graphReqDTO) {

			boolean hasData= adminService.getData();
		    if(!hasData)
				return null;
		
			List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
			
			if(graphReqDTO.getGroupId1()!=null)
			{
				l1.add(getCandleGraphDataResult(graphReqDTO));
			}
			if(graphReqDTO.getIsFunctionGraph()!=null?graphReqDTO.getIsFunctionGraph().equals("true"):false)
			{   
			   l1.add(getGraphDataResult(graphReqDTO,true));
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
				List<GraphResponseDTO> graphResponseDTOlstEmpty= LiquidityUtil.removeReplaceEmptyValueWithNull(graphResponseDTOlst1);
				graphResponseDTOlst1.clear();
				graphResponseDTOlst1=graphResponseDTOlstEmpty;
				
				if (graphReqDTO.getRemoveEmpty1()!=null)
					if (graphReqDTO.getRemoveEmpty1().equalsIgnoreCase("true"))
					{	
						List<GraphResponseDTO> graphResponseDTOlst= LiquidityUtil.removeEmptyY(graphResponseDTOlst1);
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
	  public GraphResponseColConfigDTO getGraphDataResultFourHoursInterval(GraphRequestDTO graphReqDTO, Boolean isFunction) {
		    if (!adminService.getData()) {
		        return null;
		    }

		    String groupId = graphReqDTO.getGroupId1();
		    String subGroupId = graphReqDTO.getSubGroupId1();

		    TableManagement tableManagement = tableManagementRepository.findByGroupIdAndSubgroupId(groupId, subGroupId);
		    if (tableManagement == null) {
		        throw new IllegalArgumentException("Table management not found for groupId: " + groupId + " and subGroupId: " + subGroupId);
		    }

		    String description = tableManagement.getColumnName() + "-" + groupId;
		    ColumnConfiguration config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
		    String tableName = getTableName(groupId, graphReqDTO.getInterval());

		    logGraphRequestDetails(graphReqDTO, groupId, subGroupId, description, tableName);

		    StoredProcedureQuery query = entityManager.createStoredProcedureQuery("cr_dyanamic_calculation_graph", GraphResponseDTO.class);
		    setStoredProcedureParameters(query, graphReqDTO, tableName, description, isFunction);
		    query.execute();

		    List<GraphResponseDTO> graphResponseDTOList = (List<GraphResponseDTO>) query.getResultList();
		    graphResponseDTOList = LiquidityUtil.removeReplaceEmptyValueWithNull(graphResponseDTOList);

		    if ("true".equalsIgnoreCase(graphReqDTO.getRemoveEmpty1())) {
		        graphResponseDTOList = LiquidityUtil.removeEmptyY(graphResponseDTOList);
		    }

		    entityManager.clear();
		    entityManager.close();

		    return GraphResponseColConfigDTO.builder()
		            .graphResponseDTOLst(graphResponseDTOList)
		            .config(config)
		            .build();
		}

	  private void setStoredProcedureParameters(StoredProcedureQuery query, GraphRequestDTO graphReqDTO, String tableName, String description, Boolean isFunction) {
		    query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		    query.setParameter("fromDate", graphReqDTO.getFromdate());

		    query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		    query.setParameter("toDate", graphReqDTO.getTodate());

		    query.registerStoredProcedureParameter("tableName", String.class, ParameterMode.IN);
		    query.setParameter("tableName", tableName);

		    query.registerStoredProcedureParameter("columnName", String.class, ParameterMode.IN);
		    query.setParameter("columnName", checkString(description));

		    query.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
		    query.setParameter("factor", graphReqDTO.getInterval());

		    query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
		    query.setParameter("dayOrweek", isFunction ? "d" : graphReqDTO.getPeriod());
		}
	  public GraphResponseColConfigDTO getCandleGraphDataResult(GraphRequestDTO graphReqDTO) {
			boolean hasData= adminService.getData();
		    if(!hasData)
				return null;

			StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_candlestick_graph",GraphResponseDTO.class);
			
			List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
			ColumnConfiguration config = null;
			GraphResponseColConfigDTO graphResponseColConfigDTO = null;
			
			String groupId = graphReqDTO.getGroupId1();
			String subGroupId = graphReqDTO.getSubGroupId1(); 
			String description = null;
			TableManagement tableManagement = tableManagementRepository.findByGroupIdAndSubgroupId(groupId,subGroupId);
			description = tableManagement.getColumnName()+"-"+groupId;
			
				
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			    System.out.println("period: "+graphReqDTO.getPeriod());
			    System.out.println("type: "+graphReqDTO.getType());
			    System.out.println("fromdate:"+graphReqDTO.getFromdate()+" to date:"+"graphReqDTO.getTodate()");
			    config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    String[] values  = getColumnValues(groupId, subGroupId);
			    
				query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
				query.setParameter("fromDate",graphReqDTO.getFromdate() );
				
				query.registerStoredProcedureParameter("toDateDate", String.class, ParameterMode.IN);
				query.setParameter("toDateDate",graphReqDTO.getTodate() );
				
				query.registerStoredProcedureParameter("tableName", String.class, ParameterMode.IN);
				query.setParameter("tableName",tableManagement.getTableName());
				
				query.registerStoredProcedureParameter("tableNameLive", String.class, ParameterMode.IN);
				query.setParameter("tableNameLive",getTableName( groupId, "1d") );
				
				query.registerStoredProcedureParameter("column1", String.class, ParameterMode.IN);
				query.setParameter("column1",values[0]);
				
				query.registerStoredProcedureParameter("column2", String.class, ParameterMode.IN);
				query.setParameter("column2",values[1]);
				
				query.registerStoredProcedureParameter("column3", String.class, ParameterMode.IN);
				query.setParameter("column3",values[2]);
				
				query.registerStoredProcedureParameter("column4", String.class, ParameterMode.IN);
				query.setParameter("column4", values[3]);
				
				
				query.execute();
				
				List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
				List<GraphResponseDTO> graphResponseDTOlstEmpty= LiquidityUtil.removeReplaceEmptyValueWithNull(graphResponseDTOlst1);
				graphResponseDTOlst1.clear();
				graphResponseDTOlst1=graphResponseDTOlstEmpty;
				
				if (graphReqDTO.getRemoveEmpty1()!=null)
					if (graphReqDTO.getRemoveEmpty1().equalsIgnoreCase("true"))
					{	
						List<GraphResponseDTO> graphResponseDTOlst= LiquidityUtil.removeEmptyY(graphResponseDTOlst1);
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
	
	  public GraphResponseColConfigDTO getCandleGraphDataResultForFourHoursInterval(GraphRequestDTO graphReqDTO) {
		    if (!adminService.getData()) {
		        return null;
		    }

		    String groupId = graphReqDTO.getGroupId1();
		    String subGroupId = graphReqDTO.getSubGroupId1();
		    String interval = graphReqDTO.getInterval();

		    TableManagement tableManagement = tableManagementRepository.findByGroupIdAndSubgroupId(groupId, subGroupId);
		    if (tableManagement == null) {
		        throw new IllegalArgumentException("Table management not found for groupId: " + groupId + " and subGroupId: " + subGroupId);
		    }

		    String description = tableManagement.getColumnName() + "-" + groupId;
		    ColumnConfiguration config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
		    String[] values = getColumnValues(groupId, subGroupId);
		    String tableName = getTableName(groupId, interval);

		    logGraphRequestDetails(graphReqDTO, groupId, subGroupId, description, tableName);

		    StoredProcedureQuery query = entityManager.createStoredProcedureQuery("dynamic_calculation_candlestick_graph_interval", GraphResponseDTO.class);
		    setStoredProcedureParameters(query, graphReqDTO, tableName, interval, values);
		    query.execute();

		    List<GraphResponseDTO> graphResponseDTOList = (List<GraphResponseDTO>) query.getResultList();
		    graphResponseDTOList = LiquidityUtil.removeReplaceEmptyValueWithNull(graphResponseDTOList);

		    if ("true".equalsIgnoreCase(graphReqDTO.getRemoveEmpty1())) {
		        graphResponseDTOList = LiquidityUtil.removeEmptyY(graphResponseDTOList);
		    }

		    entityManager.clear();
		    return GraphResponseColConfigDTO.builder()
		            .graphResponseDTOLst(graphResponseDTOList)
		            .config(config)
		            .build();
		}

		/**
		 * Determines the appropriate table name based on groupId and interval.
		 */
	  private String getTableName(String groupId, String interval) {
	        // Initialize table mapping (Java 8 compatible)
	        Map<String, String[]> tableMapping = new HashMap<>();
	        tableMapping.put("71", new String[]{"cr_btc_high_low", "tmp_audit_cry_bitcoin"});
	        tableMapping.put("72", new String[]{"cr_ethereum_high_low", "tmp_audit_cry_ethereum"});
	        tableMapping.put("73", new String[]{"cr_solana_high_low", "tmp_audit_cry_solana"});
	        tableMapping.put("74", new String[]{"cr_shiba_high_low", "tmp_audit_cry_shiba"});
	        tableMapping.put("75", new String[]{"cr_binance_high_low", "tmp_audit_cry_binance"});
	        tableMapping.put("76", new String[]{"cr_xrp_high_low", "tmp_audit_cry_xrp"});
	        tableMapping = Collections.unmodifiableMap(tableMapping); // Make it immutable

	        return Optional.ofNullable(tableMapping.get(groupId))
	                .map(tables -> ("4h".equalsIgnoreCase(interval) || "1d".equalsIgnoreCase(interval)) ? tables[0] : tables[1])
	                .orElseThrow(() -> new IllegalArgumentException("Invalid groupId: " + groupId));
	    }

		/**
		 * Logs the request details for debugging purposes.
		 */
		private void logGraphRequestDetails(GraphRequestDTO graphReqDTO, String groupId, String subGroupId, String description, String tableName) {
		    System.out.printf(
		            "Group ID: %s, Sub Group ID: %s, Description: %s, Period: %s, Type: %s, Factor: %s, From Date: %s, To Date: %s, Table: %s%n",
		            groupId, subGroupId, description, graphReqDTO.getPeriod(), graphReqDTO.getType(),
		            graphReqDTO.getInterval(), graphReqDTO.getFromdate(), graphReqDTO.getTodate(), tableName
		    );
		}

		/**
		 * Sets stored procedure parameters.
		 */
		private void setStoredProcedureParameters(StoredProcedureQuery query, GraphRequestDTO graphReqDTO, String tableName, String interval, String[] values) {
		    query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		    query.setParameter("fromDate", graphReqDTO.getFromdate());

		    query.registerStoredProcedureParameter("toDateDate", String.class, ParameterMode.IN);
		    query.setParameter("toDateDate", graphReqDTO.getTodate());

		    query.registerStoredProcedureParameter("tableName", String.class, ParameterMode.IN);
		    query.setParameter("tableName", tableName);

		    query.registerStoredProcedureParameter("column1", String.class, ParameterMode.IN);
		    query.setParameter("column1", interval);

		    for (int i = 1; i <= 3; i++) {
		        query.registerStoredProcedureParameter("column" + (i + 1), String.class, ParameterMode.IN);
		        query.setParameter("column" + (i + 1), values[i]);
		    }
		}

	  private String[] getColumnValues(String groupId, String subGroupId) {
		    // Define a map for dynamic configuration
		    Map<String, String[]> valueMap = new HashMap<>();
		    valueMap.put("71_1", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("72_1", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("73_1", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("74_1", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("75_1", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("76_1", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("71_7", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("72_7", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("73_7", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("74_7", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("75_7", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("76_7", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("71_2", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("72_2", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("73_2", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("74_2", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("75_2", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("76_2", new String[]{"openeur", "high", "low", "closeeur"});
		    valueMap.put("71_8", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("72_8", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("73_8", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("74_8", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("75_8", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("76_8", new String[]{"openint", "high", "low", "closeint"});
		    valueMap.put("52_2", new String[]{"open", "high", "low", "close"});
		    valueMap.put("61_2", new String[]{"open", "high", "low", "close"});
		    valueMap.put("52_4", new String[]{"open", "high", "low", "close"});
		    valueMap.put("61_4", new String[]{"open", "high", "low", "close"});


		    // Return the mapped values or null if no match is found
		    return valueMap.get(groupId + "_" + subGroupId);
		}
	   public static String checkString(String description) {
	        // Split the string based on "-"
	        String[] parts = description.split("-");

	        // Check the first part and return appropriate value
	        if (parts.length > 0) {
	            String firstPart = parts[0];

	            if (firstPart.equalsIgnoreCase("openint")) {
	                return "open";
	            } else if (firstPart.equalsIgnoreCase("closeint")) {
	                return "close";
	            } else {
	                return firstPart;
	            }
	        }

	        // Return empty if the string could not be split
	        return "";
	    }
	   public OrderBookDataDTO fetchLatestOrderBookData(String apiEndpoint) {
		    GraphDataReqDTO orderBookDto = new GraphDataReqDTO();
		    orderBookDto.setCryptoCurrencyCode("btc");
		    orderBookDto.setLimit(17);
		    orderBookDto.setPeriod("1");
		    orderBookDto.setHmd("MINUTE");

		    try {
		        return webClient.post()
		                .uri(apiEndpoint)
		                .header("Content-Type", "application/json")
		                .bodyValue(orderBookDto)
		                .retrieve()
		                .bodyToMono(OrderBookDataDTO.class)
		                .block();
		    } catch (Exception e) {
		        System.out.println("Failed to fetch data from " + apiEndpoint + ": " + e.getMessage());
		        return null;
		    }
		}
}
