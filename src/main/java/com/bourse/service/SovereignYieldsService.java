package com.bourse.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bourse.domain.SovereignData;
import com.bourse.dto.AuditProcedureDTO;
import com.bourse.dto.CrossAuditProcedureDTO;
import com.bourse.dto.CurveSoveriegnDTO;
import com.bourse.dto.DataGraphDTO;
import com.bourse.dto.GraphReqDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.SearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.ConfigurationRepository;
import com.bourse.repositories.SovereignYieldsRepository;
import com.bourse.util.SovereignUtil;

@Service
public class SovereignYieldsService 
{
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	SovereignYieldsRepository sovereignYieldsRepository;
	
	@Autowired
	ConfigurationRepository configurationRepository;
	
	public List<SovereignData> getAllSovereignDatas()
	{      
        return sovereignYieldsRepository.findAll(Sort.by("id").descending());
	}
	public List<SovereignData> SaveSovereignDatas(List<SovereignData> plst) 
	{      
        return sovereignYieldsRepository.saveAll(plst);
	}
	
	public SovereignData findSovereignById(long id) 
	{      
        return sovereignYieldsRepository.findById(id);
	}
	
	public SovereignData UpdateSovereignById(SovereignData sovereignData) 
	{      
        return sovereignYieldsRepository.save(sovereignData);
	}
	
	public void deleteSovereignById(long id) 
	{      
        sovereignYieldsRepository.deleteById(id);
	}
	
	public List<SovereignData> findSovereignBySubGroup(long id) 
	{      
        return sovereignYieldsRepository.findSovereignBysubgroupId(id);
	}
	
	
	public void updateAuditData(List<UpdateDataDTO> updateDataDTOlst) 
	{
		SovereignData sovereignData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			sovereignData = sovereignYieldsRepository.findSovereignByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
		    if(updateDataDTO.getFatcor().contains("30"))
		    	sovereignData.setThirteeYrFactor(updateDataDTO.getValue());
		    if(updateDataDTO.getFatcor().contains("5"))
		    	sovereignData.setFiveYrFactor(updateDataDTO.getValue());
		    if(updateDataDTO.getFatcor().contains("10"))
		    	sovereignData.setTenYrFactor(updateDataDTO.getValue());
		    if(updateDataDTO.getFatcor().contains("2"))
		    	sovereignData.setTwoYrFactor(updateDataDTO.getValue());
		    sovereignYieldsRepository.save(sovereignData);
		}
	}
	
	public List<DataGraphDTO> findGraphDataBySubroupIdAndFactorCalculation(long id,String factor) 
	{ 
		if(factor.equals("2"))
			 return sovereignYieldsRepository.findGraphDataForTwoBySubroupId(id);
		 if(factor.equals("5"))
			 return sovereignYieldsRepository.findGraphDataForFiveBySubroupId(id);
		if(factor.equals("10"))
			 return sovereignYieldsRepository.findGraphDataForTenBySubroupId(id);
	     if(factor.equals("2over5"))
	    	 return sovereignYieldsRepository.findGraphDataForTwoOverFiveBySubroupId(id);
	     if(factor.equals("2over10"))
	    	 return sovereignYieldsRepository.findGraphDataForTwoOverTenBySubroupId(id);
	      if(factor.equals("5over10"))
	    	 return sovereignYieldsRepository.findGraphDataForFiveOverTenBySubroupId(id);
	      if(factor.equals("5over30"))
	    	 return sovereignYieldsRepository.findGraphDataForFiveOverThirteeBySubroupId(id);
	      if(factor.equals("10over30"))
	    	  return sovereignYieldsRepository.findGraphDataForTenOverThirteeBySubroupId(id);
	      return null;
	}
	
	
	public List<SovereignData> findSovereignByReferDate(String referDate) 
	{      
        return sovereignYieldsRepository.findSovereignByReferDate(referDate);
	}
	
	public List<CurveSoveriegnDTO> findSoveriegnCurvesByReferDate(String referDate) 
	{      
        return sovereignYieldsRepository.findSoveriegnCurvesByReferDate(referDate);
	}
	
	public void updatethirteeyrfactorSovereignBysubgroupIdAndDate(String subgroupId,String referdate,String value)
	{      
         sovereignYieldsRepository.updatethirteeyrfactorSovereignBysubgroupIdAndDate(subgroupId, referdate, value);
	}
	
	public List<AuditProcedureDTO> getAuditData(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_yield",AuditProcedureDTO.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<AuditProcedureDTO> auditProcedureDTOLst = (List<AuditProcedureDTO>) query.getResultList();
		return auditProcedureDTOLst;
	}
	
	public List<AuditProcedureDTO> getCurveData(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_curve",AuditProcedureDTO.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<AuditProcedureDTO> auditProcedureDTOLst = (List<AuditProcedureDTO>) query.getResultList();
		return auditProcedureDTOLst; 
	}
	
	public List<CrossAuditProcedureDTO> getCrossAuditData(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_cross",CrossAuditProcedureDTO.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<CrossAuditProcedureDTO> crossAuditProcedureDTO = (List<CrossAuditProcedureDTO>) query.getResultList();
		return crossAuditProcedureDTO; 
	}
	
	public List<List<GraphResponseDTO>> getGraphData(GraphReqDTO graphReqDTO)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
		StoredProcedureQuery query1 = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
		List<List<GraphResponseDTO>> l1 = new ArrayList<>();
		if(graphReqDTO.getYieldCurveCross1()!=null)
		{
			System.out.println(graphReqDTO.getYieldCurveCross1() +"\n"+
					graphReqDTO.getFactor1()+"\n"+
					graphReqDTO.getCountry1());
			query.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			query.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross1() );
			
			query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query.setParameter("toDate",graphReqDTO.getTodate() );
			
			query.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query.setParameter("factor",graphReqDTO.getFactor1() );
			
			query.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			query.setParameter("country",graphReqDTO.getCountry1() );
			
			query.execute();
			
			
			List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
			l1.add(graphResponseDTOlst1);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getYieldCurveCross2()!=null)
		{
			System.out.println(graphReqDTO.getYieldCurveCross2() +"\n"+
					graphReqDTO.getFactor2()+"\n"+
					graphReqDTO.getCountry2());
			
			query1.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			query1.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross2() );
			
			query1.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query1.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query1.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query1.setParameter("toDate",graphReqDTO.getTodate() );
			
			query1.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query1.setParameter("factor",graphReqDTO.getFactor2() );
			
			query1.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			query1.setParameter("country",graphReqDTO.getCountry2() );
			query1.execute();
			List<GraphResponseDTO> graphResponseDTOlst2 = (List<GraphResponseDTO>) query1.getResultList();
			l1.add(graphResponseDTOlst2);
			entityManager.clear();
			entityManager.close();
		}
		
		return l1; 
	}
	
	public void doCaclulation()
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation");
		query.execute();
	}
	
	public boolean CheckIfCanSave(String referDate)
	{
		long cnt = sovereignYieldsRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
	
	public HashMap<String,List> getGridData( SearchFilterDTO searchFilterDTO)
	{
        boolean onServer = isOnServer("live");
		QueryColumnsDTO queryColumnsDTO = SovereignUtil.buildDynamicGridQuery(searchFilterDTO,onServer);
		String queryStr = queryColumnsDTO.getQuery();
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
				System.out.println("i: "+i+" colHash.get(i): "+colHash.get(i)+" dataIter.toString(): "+dataIter.toString());
				
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
		 String columnWidth="10%";
		 if(count < 10)
		 {
			 columnWidth=String.valueOf(100/(count-1))+"%"; // 1 to remove the id column size it will not be presented i the grid
		 }
		 while (it.hasNext()) {
			
			    HashMap.Entry pair = (HashMap.Entry)it.next();
			    String colsName = pair.getValue().toString();
		        System.out.println(pair.getKey() + " = " + colsName);
		        it.remove(); // avoids a ConcurrentModificationException
		        if(!colsName.equalsIgnoreCase("id"))
		        {
			        configColumns.put("text",colsName);
			        configColumns.put("datafield",colsName);
			        configColumns.put("width",columnWidth);
			        lstRowsDt.add(configColumns);
		        }
		        colsName = null;
		        configColumns = new HashMap<String, String>(); 
		    }
		 hashData.put("columns", lstRowsDt);
		return lstRowsDt;
	}
	
	public Boolean isOnServer(String env)
	{
		long l=1;
		return configurationRepository.countByEnvironement(env)==l?true:false;
	}

}
