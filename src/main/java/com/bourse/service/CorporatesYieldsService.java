package com.bourse.service;

import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.CorporateYieldsData;
import com.bourse.domain.TmpAuditCorporateLiquidityPremia;
import com.bourse.domain.TmpAuditCorporateYields;
import com.bourse.domain.TmpAuditCreditSpreads;
import com.bourse.domain.TmpAuditEzMonetaryMassLiquidity;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.CorporatesYieldsRepository;
import com.bourse.repositories.TmpAuditCorporateLiquidityPremiaRepository;
import com.bourse.repositories.TmpAuditCorporateYieldsRepository;
import com.bourse.repositories.TmpAuditCreditSpreadsRepository;

@Service
public class CorporatesYieldsService 
{  

	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	AdminService adminService;
	@Autowired
	CorporatesYieldsRepository corporatesYieldsRepository;
	@Autowired
	TmpAuditCorporateYieldsRepository tmpAuditCorporateYieldsRepository;
	@Autowired
	TmpAuditCreditSpreadsRepository tmpAuditCreditSpreadsRepository;
	@Autowired
	TmpAuditCorporateLiquidityPremiaRepository tmpAuditCorporateLiquidityPremiaRepository;
    @Autowired
    SovereignYieldsService sovereignYieldsService;
	
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  corporatesYieldsRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    
	public boolean CheckIfCanSave(String referDate)
	{
		long cnt = corporatesYieldsRepository.countByReferDateAndValueNot(referDate,"");
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
	public List<CorporateYieldsData> SaveCorporateDatas(List<CorporateYieldsData> plst) 
	{   
		if (corporatesYieldsRepository.countByReferDateAndValue(plst.get(0).getReferDate(),"")>0)
			{
			List<CorporateYieldsData> corporateYieldsList = corporatesYieldsRepository.findByReferDate(plst.get(0).getReferDate());
            corporateYieldsList.forEach(
			            (corporateYieldsData) -> {
			            	corporatesYieldsRepository.deleteById(corporateYieldsData.getId());
			            });
			 return corporatesYieldsRepository.saveAll(plst);
			 }
		else 
			return corporatesYieldsRepository.saveAll(plst);
        
	}

	public List<TmpAuditCreditSpreads> findTmpAuditCreditSpreadsByReferDate(String referDate)
	{
		boolean hasData= adminService.getData();
		AtomicBoolean isEmpty = new AtomicBoolean(false);
		
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_credit_spreads",TmpAuditCreditSpreads.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditCreditSpreads> creditAuditProcedureDTO = (List<TmpAuditCreditSpreads>) query.getResultList();
	
		creditAuditProcedureDTO.forEach(
	            (TmpAuditCreditSpreads) -> {
	            	if (TmpAuditCreditSpreads.getUsbtobbbUsatoaaa().isEmpty() 
	            			&& TmpAuditCreditSpreads.getUsctocccUsbtobbb().isEmpty()
	            			&& TmpAuditCreditSpreads.getEurozonebtobbbEurozoneatoaaa().isEmpty() 
	            			)
	            	 isEmpty.set(true);
	            });
		if (isEmpty.get())
			creditAuditProcedureDTO = null;
		
		return creditAuditProcedureDTO; 
	}
	public TmpAuditCorporateLiquidityPremia findTmpCorporateLiquidityPremiaByReferDate(String referDate) 
	{      
        return tmpAuditCorporateLiquidityPremiaRepository.findByReferDate(referDate);
	}
	public void doCalculation(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_corporate_yields");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
	}
	public void doCalculation()
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_corporate_yields_main");
		query.execute();
	}
	 public void doCalculationLoader(String fromDate,String toDate)
   	{
	 	StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_corporate_yields_loader");
	 	query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
   	}
	public List<TmpAuditCorporateYields> getCorporateAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_corporate",TmpAuditCorporateYields.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		
		List<TmpAuditCorporateYields> corporateAuditProcedureDTO = (List<TmpAuditCorporateYields>) query.getResultList();
		AtomicBoolean isEmpty = new AtomicBoolean(false);

		corporateAuditProcedureDTO.forEach(
	            (corporateYieldsData) -> {
	            	if (corporateYieldsData.getUsatoaaa().isEmpty() 
	            			&& corporateYieldsData.getUsbtobbb().isEmpty()
	            			&& corporateYieldsData.getUsctoccc().isEmpty() 
	            			&& corporateYieldsData.getEurozoneatoaaa().isEmpty()
	            			&& corporateYieldsData.getEurozonebtobbb().isEmpty())
	            	 isEmpty.set(true);
	            });
		if (isEmpty.get())
			corporateAuditProcedureDTO = null;
		
		return corporateAuditProcedureDTO; 
	}
	public List<TmpAuditCorporateLiquidityPremia> getCorporateLiquidityAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
	    
	    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_corporate_premia",TmpAuditCorporateLiquidityPremia.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditCorporateLiquidityPremia> auditProcedureDTOLst = (List<TmpAuditCorporateLiquidityPremia>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteCorporateByReferDate(String referDate) {
		
		List<CorporateYieldsData> corporateYieldsList = corporatesYieldsRepository.findByReferDate(referDate);
		corporateYieldsList.forEach(
	            (corporateYieldsData) -> {
	            	corporatesYieldsRepository.deleteById(corporateYieldsData.getId());
	            });
		TmpAuditCorporateYields tmpAuditCorporateYield = tmpAuditCorporateYieldsRepository.findByReferDate(referDate);
		if(tmpAuditCorporateYield!=null)
			tmpAuditCorporateYieldsRepository.deleteById(tmpAuditCorporateYield.getId());
		
		
		TmpAuditCreditSpreads tmpAuditCreditSpreads = tmpAuditCreditSpreadsRepository.findByReferDate(referDate);
		if(tmpAuditCreditSpreads!=null)
			tmpAuditCreditSpreadsRepository.deleteById(tmpAuditCreditSpreads.getId());
		
		TmpAuditCorporateLiquidityPremia tmpAuditCorporateLiquidityPremia = tmpAuditCorporateLiquidityPremiaRepository.findByReferDate(referDate);
		if(tmpAuditCorporateLiquidityPremia!=null)
			tmpAuditCorporateLiquidityPremiaRepository.deleteById(tmpAuditCorporateLiquidityPremia.getId());
	   
	}
	public String findLatestCorporateData()
	{   boolean hasData= adminService.getData();
    if(!hasData)
		return null;
        return corporatesYieldsRepository.findLatestCorporateYieldsData();
	}
	
	public void updateAuditData(List<UpdateDataDTO> updateDataDTOlst) 
	{
		CorporateYieldsData corporateYieldsData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			corporateYieldsData = corporatesYieldsRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			corporateYieldsData.setValue(updateDataDTO.getValue());
			corporatesYieldsRepository.save(corporateYieldsData);
		}
	}
	
}
