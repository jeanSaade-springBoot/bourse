package com.bourse.service.skews;

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
import com.bourse.domain.FxUsdData;
import com.bourse.domain.skews.LongSkewsData;
import com.bourse.domain.skews.ShortSkewsData;
import com.bourse.domain.skews.TmpAuditSkewsBobl2Maturity;
import com.bourse.domain.skews.TmpAuditSkewsBobl3Maturity;
import com.bourse.domain.skews.TmpAuditSkewsBund2Maturity;
import com.bourse.domain.skews.TmpAuditSkewsBund3Maturity;
import com.bourse.domain.skews.TmpAuditSkewsBuxl2Maturity;
import com.bourse.domain.skews.TmpAuditSkewsEuribor4Mtty;
import com.bourse.domain.skews.TmpAuditSkewsEuribor7Mtty;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.repositories.skews.LongSkewsRepository;
import com.bourse.repositories.skews.ShortSkewsRepository;
import com.bourse.repositories.skews.TmpAuditSkewsBobl2MaturityRepository;
import com.bourse.repositories.skews.TmpAuditSkewsBobl3MaturityRepository;
import com.bourse.repositories.skews.TmpAuditSkewsBund2MaturityRepository;
import com.bourse.repositories.skews.TmpAuditSkewsBund3MaturityRepository;
import com.bourse.repositories.skews.TmpAuditSkewsBuxl2MaturityRepository;
import com.bourse.repositories.skews.TmpAuditSkewsEuribor4MttyRepository;
import com.bourse.repositories.skews.TmpAuditSkewsEuribor7MttyRepository;
import com.bourse.service.AdminService;
import com.bourse.util.SkewsUtil;

@Service
public class SkewsService 
{
	@Autowired
	LongSkewsRepository longSkewsRepository;
	@Autowired
	TmpAuditSkewsBund2MaturityRepository tmpAuditSkewsBund2MaturityRepository;
	@Autowired
	TmpAuditSkewsBund3MaturityRepository tmpAuditSkewsBund3MaturityRepository;
	@Autowired
	TmpAuditSkewsBobl2MaturityRepository tmpAuditSkewsBobl2MaturityRepository;
	@Autowired
	TmpAuditSkewsBobl3MaturityRepository tmpAuditSkewsBobl3MaturityRepository;
	@Autowired
	TmpAuditSkewsBuxl2MaturityRepository tmpAuditSkewsBuxl2MaturityRepository;
	@Autowired
	TmpAuditSkewsEuribor4MttyRepository tmpAuditSkewsEuribor4MttyRepository;
	@Autowired
	TmpAuditSkewsEuribor7MttyRepository tmpAuditSkewsEuribor7MttyRepository;
	@Autowired
	ShortSkewsRepository shortSkewsRepository;
	@Autowired
	AdminService adminService;
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	
	@PersistenceContext
    private EntityManager entityManager;
	
	public List<ShortSkewsData> saveShortSkews(List<ShortSkewsData> skewsDTOLst ){
		return shortSkewsRepository.saveAll(skewsDTOLst);
	}
	
	public List<LongSkewsData> saveLongSkews(List<LongSkewsData> skewsDTOLst ){
		return longSkewsRepository.saveAll(skewsDTOLst);
	}
	
	public List<TmpAuditSkewsBund2Maturity> getLongSkewsBund2DataByReferDate(String referDate ){
		
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_skews",TmpAuditSkewsBund2Maturity.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId","25");
		query.execute();
		List<TmpAuditSkewsBund2Maturity> auditProcedureDTOLst = (List<TmpAuditSkewsBund2Maturity>) query.getResultList();
		return auditProcedureDTOLst;
	}
   public List<TmpAuditSkewsBund3Maturity> getLongSkewsBund3DataByReferDate(String referDate ){
		
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_skews",TmpAuditSkewsBund3Maturity.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId","26");
		query.execute();
		List<TmpAuditSkewsBund3Maturity> auditProcedureDTOLst = (List<TmpAuditSkewsBund3Maturity>) query.getResultList();
		return auditProcedureDTOLst;
	}
   public List<TmpAuditSkewsBobl2Maturity> getLongSkewsBobl2DataByReferDate(String referDate ){
		
 		boolean hasData= adminService.getData();
 	    if(!hasData)
 			return null;
 		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_skews",TmpAuditSkewsBobl2Maturity.class);
 		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
 		query.setParameter("referDate",referDate);
 		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
 		query.setParameter("groupId","27");
 		query.execute();
 		List<TmpAuditSkewsBobl2Maturity> auditProcedureDTOLst = (List<TmpAuditSkewsBobl2Maturity>) query.getResultList();
 		return auditProcedureDTOLst;
 	}
   public List<TmpAuditSkewsBobl3Maturity> getLongSkewsBobl3DataByReferDate(String referDate ){
		
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_skews",TmpAuditSkewsBobl3Maturity.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId","28");
		query.execute();
		List<TmpAuditSkewsBobl3Maturity> auditProcedureDTOLst = (List<TmpAuditSkewsBobl3Maturity>) query.getResultList();
		return auditProcedureDTOLst;
	}
   public List<TmpAuditSkewsBuxl2Maturity> getLongSkewsBuxl2DataByReferDate(String referDate ){
		
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_skews",TmpAuditSkewsBuxl2Maturity.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId","29");
		query.execute();
		List<TmpAuditSkewsBuxl2Maturity> auditProcedureDTOLst = (List<TmpAuditSkewsBuxl2Maturity>) query.getResultList();
		return auditProcedureDTOLst;
	}
   public List<TmpAuditSkewsEuribor4Mtty> getLongSkewsEuribor4MttyDataByReferDate(String referDate ){
		
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_skews",TmpAuditSkewsEuribor4Mtty.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate);
		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
		query.setParameter("groupId","30");
		query.execute();
		List<TmpAuditSkewsEuribor4Mtty> auditProcedureDTOLst = (List<TmpAuditSkewsEuribor4Mtty>) query.getResultList();
		return auditProcedureDTOLst;
	}
   public List<TmpAuditSkewsEuribor7Mtty> getLongSkewsEuribor7MttyDataByReferDate(String referDate ){
		
 		boolean hasData= adminService.getData();
 	    if(!hasData)
 			return null;
 		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_skews",TmpAuditSkewsEuribor7Mtty.class);
 		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
 		query.setParameter("referDate",referDate);
 		query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
 		query.setParameter("groupId","31");
 		query.execute();
 		List<TmpAuditSkewsEuribor7Mtty> auditProcedureDTOLst = (List<TmpAuditSkewsEuribor7Mtty>) query.getResultList();
 		return auditProcedureDTOLst;
 	}
	public List<ShortSkewsData> getShortSkewsDataByReferDate(String referDate ){
		return shortSkewsRepository.findShortSkewsDataByReferDate(referDate);
	}
	
	public void deleteLongSkewsDataByReferDate(String referDate ){
		tmpAuditSkewsBund2MaturityRepository.deleteDataByReferDate(referDate);
		tmpAuditSkewsBund3MaturityRepository.deleteDataByReferDate(referDate);
		tmpAuditSkewsBobl2MaturityRepository.deleteDataByReferDate(referDate);
		tmpAuditSkewsBobl3MaturityRepository.deleteDataByReferDate(referDate);
		tmpAuditSkewsBuxl2MaturityRepository.deleteDataByReferDate(referDate);
		longSkewsRepository.deleteLongSkewsDataByReferDate(referDate);
	}
	
	public void deleteShortSkewsDataByReferDate(String referDate ){
		 shortSkewsRepository.deleteShortSkewsDataByReferDate(referDate);
	}
    public void doCaclulation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_long_skews");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
		
   		LongSkewsData longSkewsData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			longSkewsData = longSkewsRepository.findLongSkewsDataByReferDateAndGroupIdAndSubgroupIdAndFactorId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getGroupId()),Long.valueOf(updateDataDTO.getSubgroupId()),Long.valueOf(updateDataDTO.getFactor()));
			longSkewsData.setValue(updateDataDTO.getValue());
			longSkewsRepository.save(longSkewsData);
		}
	}
    public String findLatestData(String skews)
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        String value="";
        if (skews.equalsIgnoreCase("1"))
        	value =  longSkewsRepository.findLatest();
		else if (skews.equalsIgnoreCase("2")) 
			value =  shortSkewsRepository.findLatest();
        
        return value;
	}
    public HashMap<String,List> getGridData( MainSearchFilterDTO mainSearchFilterDTO)
	{
		QueryColumnsDTO queryColumnsDTO = SkewsUtil.buildDynamicGridQuery(mainSearchFilterDTO);
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
			    if (!colsName.equals("refer_date")&&!colsName.equals("id"))
			    	{
			    	ColumnConfiguration columnConfiguration = columnConfigurationRepository.findByDescriptionAndGroupId(colsName.split("\\.")[0],colsName.split("\\.")[1]);
			    	columnDisplayDesc= columnConfiguration.getColumnName();
			    	dataFormat= columnConfiguration.getDataFormat();
			    	}
			    	else
			    	 {
			    		columnDisplayDesc = columnConfigurationRepository.findColumnDispayDescription(colsName.replace("yr", ""));
			    		dataFormat = columnConfigurationRepository.findColumnDataFormat(colsName.replace("yr", ""));
					 }
			    
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
