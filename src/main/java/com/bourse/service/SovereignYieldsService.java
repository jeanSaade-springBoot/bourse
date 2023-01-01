package com.bourse.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.FunctionConfiguration;
import com.bourse.domain.SovereignData;
import com.bourse.dto.AuditProcedureDTO;
import com.bourse.dto.CrossAuditProcedureDTO;
import com.bourse.dto.CurveSoveriegnDTO;
import com.bourse.dto.DataGraphDTO;
import com.bourse.dto.GraphReqDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseColConfigListDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.SearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.enums.CrossCountryEnum;
import com.bourse.enums.FunctionEnum;
import com.bourse.enums.SubGroupEnum;
import com.bourse.enums.YieldEnum;
import com.bourse.repositories.ColumnConfigurationRepository;
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
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	@Autowired
	AdminService adminService;
	@Autowired
	FunctionConfigurationService functionConfigurationService;
	
	public List<SovereignData> getAllSovereignDatas()
	{      
        return sovereignYieldsRepository.findAll(Sort.by("id").descending());
	}
	public String findLatestSovereignData()
	{   boolean hasData= adminService.getData();
    if(!hasData)
		return null;
        return sovereignYieldsRepository.findLatestSovereignData();
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
		    if(updateDataDTO.getFactor().contains("30"))
		    	sovereignData.setThirteeYrFactor(updateDataDTO.getValue());
		    if(updateDataDTO.getFactor().contains("5"))
		    	sovereignData.setFiveYrFactor(updateDataDTO.getValue());
		    if(updateDataDTO.getFactor().contains("10"))
		    	sovereignData.setTenYrFactor(updateDataDTO.getValue());
		    if(updateDataDTO.getFactor().contains("2"))
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
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_yield",AuditProcedureDTO.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<AuditProcedureDTO> auditProcedureDTOLst = (List<AuditProcedureDTO>) query.getResultList();
		return auditProcedureDTOLst;
	}
	
	public List<AuditProcedureDTO> getCurveData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_curve",AuditProcedureDTO.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<AuditProcedureDTO> auditProcedureDTOLst = (List<AuditProcedureDTO>) query.getResultList();
		return auditProcedureDTOLst; 
	}
	
	public List<CrossAuditProcedureDTO> getCrossAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_cross",CrossAuditProcedureDTO.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<CrossAuditProcedureDTO> crossAuditProcedureDTO = (List<CrossAuditProcedureDTO>) query.getResultList();
		return crossAuditProcedureDTO; 
	}
	public List<GraphResponseColConfigDTO> getGraphData(GraphReqDTO graphReqDTO)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		//yield:1
		//curve:2
		//cross:3

		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
		StoredProcedureQuery query1 = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
		StoredProcedureQuery query2 = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
		StoredProcedureQuery query3 = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
		StoredProcedureQuery query4 = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
		StoredProcedureQuery query5 = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
		// List<List<GraphResponseDTO>> l1 = new ArrayList<>();
		List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
		ColumnConfiguration config = null;
		if(graphReqDTO.getYieldCurveCross1()!=null)
		{
			if(graphReqDTO.getYieldCurveCross1().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry1(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross1().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry1(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross1().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry1(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
					
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
			
			query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query.setParameter("minuscountry",graphReqDTO.getFactor1());
			query.execute();
			
			
			List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
					                  .graphResponseDTOLst(graphResponseDTOlst1)
					                  .config(config)
					                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getYieldCurveCross2()!=null)
		{
			
			if(graphReqDTO.getYieldCurveCross2().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry2(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry2()))+"-"+graphReqDTO.getFactor2().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross2().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry2(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry2()))+"-"+graphReqDTO.getFactor2().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross2().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry2(); 
				String description = (CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry2()))+"-"+graphReqDTO.getFactor2().replace("yr", "")).replace("_", "-");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
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
			
			query1.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query1.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query1.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query1.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query1.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query1.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query1.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query1.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query1.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query1.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query1.execute();
			List<GraphResponseDTO> graphResponseDTOlst2 = (List<GraphResponseDTO>) query1.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst2)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getYieldCurveCross3()!=null)
		{
			System.out.println(graphReqDTO.getYieldCurveCross3() +"\n"+
					graphReqDTO.getFactor3()+"\n"+
					graphReqDTO.getCountry3());
			
			if(graphReqDTO.getYieldCurveCross3().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry3(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry3()))+"-"+graphReqDTO.getFactor3().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross3().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry3(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry3()))+"-"+graphReqDTO.getFactor3().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross3().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry3(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry3()))+"-"+graphReqDTO.getFactor3().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
			query2.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			query2.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross3() );
			
			query2.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query2.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query2.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query2.setParameter("toDate",graphReqDTO.getTodate() );
			
			query2.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query2.setParameter("factor",graphReqDTO.getFactor3() );
			
			query2.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			query2.setParameter("country",graphReqDTO.getCountry3() );
			
			query2.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query2.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query2.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query2.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query2.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query2.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query2.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query2.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query2.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query2.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query2.execute();
			List<GraphResponseDTO> graphResponseDTOlst3 = (List<GraphResponseDTO>) query2.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst3)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getYieldCurveCross4()!=null)
		{
			System.out.println(graphReqDTO.getYieldCurveCross4() +"\n"+
					graphReqDTO.getFactor4()+"\n"+
					graphReqDTO.getCountry4());
			
			if(graphReqDTO.getYieldCurveCross4().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry4(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry4()))+"-"+graphReqDTO.getFactor4().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross4().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry4(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry4()))+"-"+graphReqDTO.getFactor4().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross4().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry4(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry4()))+"-"+graphReqDTO.getFactor4().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
			query3.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			query3.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross4() );
			
			query3.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query3.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query3.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query3.setParameter("toDate",graphReqDTO.getTodate() );
			
			query3.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query3.setParameter("factor",graphReqDTO.getFactor4() );
			
			query3.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			query3.setParameter("country",graphReqDTO.getCountry4() );
			
			query3.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query3.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query3.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query3.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query3.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query3.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query3.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query3.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query3.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query3.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query3.execute();
			List<GraphResponseDTO> graphResponseDTOlst4 = (List<GraphResponseDTO>) query3.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst4)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getYieldCurveCross5()!=null)
		{
			System.out.println(graphReqDTO.getYieldCurveCross5() +"\n"+
					graphReqDTO.getFactor5()+"\n"+
					graphReqDTO.getCountry5());
			
			if(graphReqDTO.getYieldCurveCross5().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry5(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry5()))+"-"+graphReqDTO.getFactor5().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross5().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry5(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry5()))+"-"+graphReqDTO.getFactor5().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross5().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry5(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry5()))+"-"+graphReqDTO.getFactor5().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
			query4.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			query4.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross5() );
			
			query4.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query4.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query4.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query4.setParameter("toDate",graphReqDTO.getTodate() );
			
			query4.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query4.setParameter("factor",graphReqDTO.getFactor5() );
			
			query4.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			query4.setParameter("country",graphReqDTO.getCountry5() );
			
			query4.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query4.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query4.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query4.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query4.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query4.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query4.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query4.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query4.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query4.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query4.execute();
			List<GraphResponseDTO> graphResponseDTOlst5 = (List<GraphResponseDTO>) query4.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst5)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getYieldCurveCross6()!=null)
		{
			System.out.println(graphReqDTO.getYieldCurveCross6() +"\n"+
					graphReqDTO.getFactor6()+"\n"+
					graphReqDTO.getCountry6());
			
			if(graphReqDTO.getYieldCurveCross6().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry6(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry6()))+"-"+graphReqDTO.getFactor6().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross6().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry6(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry6()))+"-"+graphReqDTO.getFactor6().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross6().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry6(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry6()))+"-"+graphReqDTO.getFactor6().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
			query5.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			query5.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross6() );
			
			query5.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query5.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query5.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query5.setParameter("toDate",graphReqDTO.getTodate() );
			
			query5.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query5.setParameter("factor",graphReqDTO.getFactor6() );
			
			query5.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			query5.setParameter("country",graphReqDTO.getCountry6() );
			
			query5.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query5.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query5.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query5.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query5.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query5.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query5.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query5.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query5.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query5.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query5.execute();
			List<GraphResponseDTO> graphResponseDTOlst6 = (List<GraphResponseDTO>) query5.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst6)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		return l1; 
	}
	public List<GraphResponseColConfigDTO> getGraphDataByType(GraphReqDTO graphReqDTO)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		//yield:1
		//curve:2
		//cross:3

		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_graph_main",GraphResponseDTO.class);
		StoredProcedureQuery query1 = this.entityManager.createStoredProcedureQuery("calculation_graph_main",GraphResponseDTO.class);
		StoredProcedureQuery query2 = this.entityManager.createStoredProcedureQuery("calculation_graph_main",GraphResponseDTO.class);
		StoredProcedureQuery query3 = this.entityManager.createStoredProcedureQuery("calculation_graph_main",GraphResponseDTO.class);
		StoredProcedureQuery query4 = this.entityManager.createStoredProcedureQuery("calculation_graph_main",GraphResponseDTO.class);
		StoredProcedureQuery query5 = this.entityManager.createStoredProcedureQuery("calculation_graph_main",GraphResponseDTO.class);
		StoredProcedureQuery functionQuery = this.entityManager.createStoredProcedureQuery("calculation_graph_main",GraphResponseDTO.class);

		// List<List<GraphResponseDTO>> l1 = new ArrayList<>();
		List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
		ColumnConfiguration config = null;
		FunctionConfiguration fConfig=null;
		if(graphReqDTO.getYieldCurveCross1()!=null)
		{
					
			if(graphReqDTO.getYieldCurveCross1().equals("yield"))
			{  
			
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry1(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				 System.out.println("goupid: "+groupId);
				    System.out.println("subGroupId: "+subGroupId);
				    System.out.println("description: "+description);
					  
			   
			}
			if(graphReqDTO.getYieldCurveCross1().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry1(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
				
			}
			if(graphReqDTO.getYieldCurveCross1().equals("cross"))
		   {
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry1(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
				
			}
			String functionId=FunctionEnum.getFunctionByID(graphReqDTO.getFunctionId()!=null?(graphReqDTO.getFunctionId().isEmpty()?0:Integer.valueOf(graphReqDTO.getFunctionId())):0);
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
			
			query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
			query.setParameter("isFunction","false");
			
			query.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
			query.setParameter("functionCode", functionId);
			
			query.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query.setParameter("type",graphReqDTO.getType());
			query.execute();
			
			
			List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
					                  .graphResponseDTOLst(graphResponseDTOlst1)
					                  .config(config)
					                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		if(graphReqDTO.getIsFunctionGraph()!=null?graphReqDTO.getIsFunctionGraph().equals("true"):false)
		{
			if(graphReqDTO.getYieldCurveCross1().equals("yield"))
			{  
					String groupId ="1";
					String subGroupId = graphReqDTO.getCountry1(); 
					String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
					config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
					fConfig = functionConfigurationService.findFunctionConfigurationByConfigIdAndFonctionId(String.valueOf(config.getId()), graphReqDTO.getFunctionId());
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
						System.out.println("goupid: "+groupId);    
						System.out.println("moving average : "+graphReqDTO.getMovingTwoHundereOrOneHundred());
					    System.out.println("subGroupId: "+subGroupId);
					    System.out.println("description: "+description);
					
			}
			if(graphReqDTO.getYieldCurveCross1().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry1(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				fConfig = functionConfigurationService.findFunctionConfigurationByConfigIdAndFonctionId(String.valueOf(config.getId()), graphReqDTO.getMovingTwoHundereOrOneHundred().equals("M100")?"1":"2");
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
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			    if(graphReqDTO.getMovingTwoHundereOrOneHundred().equals("M100"))
				    graphReqDTO.setType("4");
				    else 
				    	graphReqDTO.setType("5");
				
			}
				
			if(graphReqDTO.getYieldCurveCross1().equals("cross"))
			{
				
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry1(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				fConfig = functionConfigurationService.findFunctionConfigurationByConfigIdAndFonctionId(String.valueOf(config.getId()), graphReqDTO.getMovingTwoHundereOrOneHundred().equals("M100")?"1":"2");
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
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			    if(graphReqDTO.getMovingTwoHundereOrOneHundred().equals("M100"))
			    graphReqDTO.setType("4");
			    else 
			    	graphReqDTO.setType("5");
			}
			
			functionQuery.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			functionQuery.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross1() );
			
			functionQuery.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			functionQuery.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			functionQuery.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			functionQuery.setParameter("toDate",graphReqDTO.getTodate() );
			
			functionQuery.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			functionQuery.setParameter("factor",graphReqDTO.getFactor1() );
			
			functionQuery.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			functionQuery.setParameter("country",graphReqDTO.getCountry1() );
			
			functionQuery.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			functionQuery.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			functionQuery.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
			functionQuery.setParameter("isFunction",graphReqDTO.getIsFunctionGraph() );
			
			functionQuery.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
			functionQuery.setParameter("functionCode",FunctionEnum.getFunctionByID(graphReqDTO.getFunctionId().isEmpty()?0:Integer.valueOf(graphReqDTO.getFunctionId())));
			
			functionQuery.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			functionQuery.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			functionQuery.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			functionQuery.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			functionQuery.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			functionQuery.setParameter("type",graphReqDTO.getType());
			functionQuery.execute();
			
			
			List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) functionQuery.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
					                  .graphResponseDTOLst(graphResponseDTOlst1)
					                  .config(config)
					                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		if(graphReqDTO.getYieldCurveCross2()!=null)
		{
			
			if(graphReqDTO.getYieldCurveCross2().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry2(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry2()))+"-"+graphReqDTO.getFactor2().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross2().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry2(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry2()))+"-"+graphReqDTO.getFactor2().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross2().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry2(); 
				String description = (CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry2()))+"-"+graphReqDTO.getFactor2().replace("yr", "")).replace("_", "-");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
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
			
			query1.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query1.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query1.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query1.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query1.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query1.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query1.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query1.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query1.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query1.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query1.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query1.setParameter("type",graphReqDTO.getType());
			
			query1.execute();
			List<GraphResponseDTO> graphResponseDTOlst2 = (List<GraphResponseDTO>) query1.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst2)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getYieldCurveCross3()!=null)
		{
			System.out.println(graphReqDTO.getYieldCurveCross3() +"\n"+
					graphReqDTO.getFactor3()+"\n"+
					graphReqDTO.getCountry3());
			
			if(graphReqDTO.getYieldCurveCross3().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry3(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry3()))+"-"+graphReqDTO.getFactor3().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross3().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry3(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry3()))+"-"+graphReqDTO.getFactor3().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross3().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry3(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry3()))+"-"+graphReqDTO.getFactor3().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
			query2.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			query2.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross3() );
			
			query2.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query2.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query2.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query2.setParameter("toDate",graphReqDTO.getTodate() );
			
			query2.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query2.setParameter("factor",graphReqDTO.getFactor3() );
			
			query2.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			query2.setParameter("country",graphReqDTO.getCountry3() );
			
			query2.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query2.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query2.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query2.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query2.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query2.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query2.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query2.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query2.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query2.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query2.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query2.setParameter("type",graphReqDTO.getType());
			
			query2.execute();
			List<GraphResponseDTO> graphResponseDTOlst3 = (List<GraphResponseDTO>) query2.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst3)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getYieldCurveCross4()!=null)
		{
			System.out.println(graphReqDTO.getYieldCurveCross4() +"\n"+
					graphReqDTO.getFactor4()+"\n"+
					graphReqDTO.getCountry4());
			
			if(graphReqDTO.getYieldCurveCross4().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry4(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry4()))+"-"+graphReqDTO.getFactor4().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross4().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry4(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry4()))+"-"+graphReqDTO.getFactor4().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross4().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry4(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry4()))+"-"+graphReqDTO.getFactor4().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
			query3.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			query3.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross4() );
			
			query3.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query3.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query3.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query3.setParameter("toDate",graphReqDTO.getTodate() );
			
			query3.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query3.setParameter("factor",graphReqDTO.getFactor4() );
			
			query3.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			query3.setParameter("country",graphReqDTO.getCountry4() );
			
			query3.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query3.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query3.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query3.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query3.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query3.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query3.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query3.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query3.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query3.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query3.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query3.setParameter("type",graphReqDTO.getType());
			
			query3.execute();
			List<GraphResponseDTO> graphResponseDTOlst4 = (List<GraphResponseDTO>) query3.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst4)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getYieldCurveCross5()!=null)
		{
			System.out.println(graphReqDTO.getYieldCurveCross5() +"\n"+
					graphReqDTO.getFactor5()+"\n"+
					graphReqDTO.getCountry5());
			
			if(graphReqDTO.getYieldCurveCross5().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry5(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry5()))+"-"+graphReqDTO.getFactor5().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross5().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry5(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry5()))+"-"+graphReqDTO.getFactor5().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross5().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry5(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry5()))+"-"+graphReqDTO.getFactor5().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
			query4.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			query4.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross5() );
			
			query4.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query4.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query4.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query4.setParameter("toDate",graphReqDTO.getTodate() );
			
			query4.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query4.setParameter("factor",graphReqDTO.getFactor5() );
			
			query4.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			query4.setParameter("country",graphReqDTO.getCountry5() );
			
			query4.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query4.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query4.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query4.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query4.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query4.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query4.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query4.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query4.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query4.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query4.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query4.setParameter("type",graphReqDTO.getType());
			
			query4.execute();
			List<GraphResponseDTO> graphResponseDTOlst5 = (List<GraphResponseDTO>) query4.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst5)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getYieldCurveCross6()!=null)
		{
			System.out.println(graphReqDTO.getYieldCurveCross6() +"\n"+
					graphReqDTO.getFactor6()+"\n"+
					graphReqDTO.getCountry6());
			
			if(graphReqDTO.getYieldCurveCross6().equals("yield"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry6(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry6()))+"-"+graphReqDTO.getFactor6().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getYieldCurveCross6().equals("curve"))
			{
				String groupId ="2";
				String subGroupId =  graphReqDTO.getCountry6(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry6()))+"-"+graphReqDTO.getFactor6().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			if(graphReqDTO.getYieldCurveCross6().equals("cross"))
			{
				String groupId ="3";
				String subGroupId =  graphReqDTO.getCountry6(); 
				String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry6()))+"-"+graphReqDTO.getFactor6().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
			query5.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
			query5.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross6() );
			
			query5.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query5.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query5.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query5.setParameter("toDate",graphReqDTO.getTodate() );
			
			query5.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query5.setParameter("factor",graphReqDTO.getFactor6() );
			
			query5.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
			query5.setParameter("country",graphReqDTO.getCountry6() );
			
			query5.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query5.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query5.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query5.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query5.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query5.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query5.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query5.setParameter("minusfactor",graphReqDTO.getFactor1());
			
			query5.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query5.setParameter("minuscountry",graphReqDTO.getFactor1());
			
			query5.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query5.setParameter("type",graphReqDTO.getType());
			
			query5.execute();
			List<GraphResponseDTO> graphResponseDTOlst6 = (List<GraphResponseDTO>) query5.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst6)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		return l1; 
	}
	
	public List<GraphResponseColConfigListDTO> getGraphDataListConfig(GraphReqDTO graphReqDTO)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
		List<GraphResponseColConfigListDTO> l2 = new ArrayList<>();
		ColumnConfiguration config = null;
		List<ColumnConfiguration> configList = new ArrayList<>();
		if(graphReqDTO.getYieldCurveCross1()!=null)
		{
			if(graphReqDTO.getYieldCurveCross1().equals("spreadmaker"))
			{
				String groupId ="1";
				String subGroupId = graphReqDTO.getCountry1(); 
				String description = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				
				String subGroupIdMinus = graphReqDTO.getMinuscountry(); 
				String descriptionMinus = SubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getMinuscountry()))+"-"+graphReqDTO.getMinusfactor().replace("yr", "");
				ColumnConfiguration configMinus = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupIdMinus, descriptionMinus);
				configList.add(config);
				configList.add(configMinus);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}		
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
			
			query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
			query.setParameter("movingAverage",graphReqDTO.getPeriod() );
			
			query.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
			query.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
			
			query.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
			query.setParameter("minusfactor",graphReqDTO.getMinusfactor());
			
			query.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
			query.setParameter("minuscountry",graphReqDTO.getMinuscountry());
			query.execute();
			
			
				List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
				GraphResponseColConfigListDTO graphResponseColConfigListDTO = GraphResponseColConfigListDTO.builder()
						                  .graphResponseDTOLst(graphResponseDTOlst1)
						                  .config(configList)
						                  .build();
				l2.add(graphResponseColConfigListDTO);
				
			
			entityManager.clear();
			entityManager.close();
		}
		
		return l2;
	}
	
	public void doCaclulation(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
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
				// System.out.println("i: "+i+" colHash.get(i): "+colHash.get(i)+" dataIter.toString(): "+dataIter.toString());
				
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
		 String columnWidth="7%";
		 if(count <= 16)
		 {
			 columnWidth=String.valueOf(100/(count-1))+"%"; // 1 to remove the id column size it will not be presented i the grid
		 }
		 
		 String columnDisplayDesc = "";
		 String dataFormat = "";
		 while (it.hasNext()) {
			    
			    HashMap.Entry pair = (HashMap.Entry)it.next();
			    String colsName = pair.getValue().toString();
			    columnDisplayDesc = columnConfigurationRepository.findColumnDispayDescription(colsName.replace("yr", ""));
			    dataFormat = columnConfigurationRepository.findColumnDataFormat(colsName.replace("yr", ""));
			    
		        System.out.println(pair.getKey() + " = " + colsName);
		        it.remove(); // avoids a ConcurrentModificationException
		        if(!colsName.equalsIgnoreCase("id"))
		        {
		        	if (!StringUtils.isNotBlank(columnDisplayDesc))
		        		columnDisplayDesc = colsName; 
			        configColumns.put("text",columnDisplayDesc.equalsIgnoreCase("refer_date")?"Date":columnDisplayDesc);
			        configColumns.put("datafield",colsName);
			        configColumns.put("width",columnWidth);
			       
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
	
	public Boolean isOnServer(String env)
	{
		long l=1;
		return configurationRepository.countByEnvironement(env)==l?true:false;
	}
	public String getLatestGraphDate(long country, String factor, String yieldCurveCross) {
		
		return "2021-06-12";
	}
	public void deleteSovereignByReferDate(String referDate) {
	
		sovereignYieldsRepository.deleteSovereignDataByReferDate(referDate);
		sovereignYieldsRepository.deleteTmpAuditYieldsByReferDate(referDate);
		sovereignYieldsRepository.deleteTmpAuditCurveByReferDate(referDate);
		sovereignYieldsRepository.deleteTmpAuditCrossByReferDate(referDate);
	}

}
