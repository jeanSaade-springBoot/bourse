package com.bourse.service;


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
import com.bourse.dto.CurveSoveriegnDTO;
import com.bourse.dto.DataGraphDTO;
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
	
	
	
	public List<AuditProcedureDTO> getAuditData(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("getAuditData",AuditProcedureDTO.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		// "06-10-2020"
		query.execute();
		List<AuditProcedureDTO> auditProcedureDTOLst = (List<AuditProcedureDTO>) query.getResultList();
		return auditProcedureDTOLst;
	}
	
	public List<AuditProcedureDTO> getCurveData(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("getCurves",AuditProcedureDTO.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		// "06-10-2020"
		query.execute();
		List<AuditProcedureDTO> auditProcedureDTOLst = (List<AuditProcedureDTO>) query.getResultList();
		return auditProcedureDTOLst;
	}

}
