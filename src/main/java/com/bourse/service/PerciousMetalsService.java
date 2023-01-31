package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.PreciousMetals;
import com.bourse.domain.SovereignData;
import com.bourse.domain.TmpAuditBase;
import com.bourse.domain.TmpAuditPrecious;
import com.bourse.dto.AuditProcedureDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.PreciousMetalsRepository;
import com.bourse.repositories.TmpAuditPreciousRepository;

@Service
public class PerciousMetalsService 
{
	@PersistenceContext
    private EntityManager entityManager;
	
    @Autowired
    PreciousMetalsRepository preciousMetalsRepository;
    @Autowired
    TmpAuditPreciousRepository tmpAuditPreciousRepository;
    @Autowired
	AdminService adminService;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = preciousMetalsRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public void doCaclulation(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_precious");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
	}
	public List<PreciousMetals> SavePreciousData(List<PreciousMetals> preciousDataList) {
		
		return preciousMetalsRepository.saveAll(preciousDataList);
	}
	public List<TmpAuditPrecious> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_precious",TmpAuditPrecious.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditPrecious> auditProcedureDTOLst = (List<TmpAuditPrecious>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deletePreciousByReferDate(String referDate) {
		List<PreciousMetals> preciousList = preciousMetalsRepository.findByReferDate(referDate);
		preciousList.forEach(
	            (precious) -> {
	            	preciousMetalsRepository.deleteById(precious.getId());
	            });
		List<TmpAuditPrecious> preciousAuditList = tmpAuditPreciousRepository.findByReferDate(referDate);
		preciousAuditList.forEach(
	            (precious) -> {
	            	tmpAuditPreciousRepository.deleteById(precious.getId());
	            });
	}
	public String findLatestPreciousData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return preciousMetalsRepository.findLatestPreciousData();
	}
	public void updatePreciousData(List<UpdateDataDTO> updateDataDTOlst) {
		
		PreciousMetals preciousMetals;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			preciousMetals = preciousMetalsRepository.findPreciousMetalsByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			preciousMetals.setValue(updateDataDTO.getValue());
			preciousMetalsRepository.save(preciousMetals);
		}
	}
	
}