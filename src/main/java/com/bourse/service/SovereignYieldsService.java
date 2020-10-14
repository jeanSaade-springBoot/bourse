package com.bourse.service;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.bourse.domain.SovereignData;
import com.bourse.dto.AuditProcedureDTO;
import com.bourse.dto.CrossAuditProcedureDTO;
import com.bourse.dto.CurveSoveriegnDTO;
import com.bourse.dto.DataGraphDTO;
import com.bourse.dto.GraphReqDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.SovereignYieldsRepository;

@Service
public class SovereignYieldsService 
{
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	SovereignYieldsRepository sovereignYieldsRepository;
	
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
	
	public List<GraphResponseDTO> getGraphData(GraphReqDTO graphReqDTO)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
		query.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
		query.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross() );
		
		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate",graphReqDTO.getFromdate() );
		
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate",graphReqDTO.getTodate() );
		
		query.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
		query.setParameter("factor",graphReqDTO.getFactor() );
		
		query.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
		query.setParameter("country",graphReqDTO.getCountry() );
		
		query.execute();
		List<GraphResponseDTO> graphResponseDTO = (List<GraphResponseDTO>) query.getResultList();
		return graphResponseDTO; 
	}

}
