package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.BaseMetals;
import com.bourse.domain.TmpAuditBase;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.BaseMetalsRepository;
import com.bourse.repositories.TmpAuditBaseRepository;

@Service
public class BaseMetalsService 
{

	@PersistenceContext
    private EntityManager entityManager;
	
    @Autowired
    BaseMetalsRepository baseMetalsRepository;
    @Autowired
    TmpAuditBaseRepository tmpAuditBaseRepository;
    @Autowired
  	AdminService adminService;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = baseMetalsRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
	public List<BaseMetals> SaveBaseData(List<BaseMetals> baseDataList) {
		
		return baseMetalsRepository.saveAll(baseDataList);
	}
	
	public List<TmpAuditBase> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_base",TmpAuditBase.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditBase> auditProcedureDTOLst = (List<TmpAuditBase>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteBaseByReferDate(String referDate) {
		List<BaseMetals> baseList = baseMetalsRepository.findByReferDate(referDate);
		baseList.forEach(
	            (base) -> {
	            	baseMetalsRepository.deleteById(base.getId());
	            });
		List<TmpAuditBase> baseAuditList = tmpAuditBaseRepository.findByReferDate(referDate);
		baseAuditList.forEach(
	            (base) -> {
	            	tmpAuditBaseRepository.deleteById(base.getId());
	            });
	}
	public String findLatestBaseData() {
		 boolean hasData= adminService.getData();
	        if(!hasData)
			return null;
	        return baseMetalsRepository.findLatestBaseData();
	}
	 public void doCaclulation(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_base");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
	}
	 public void doCaclulation()
	   	{
		 	StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_base_main");
			query.execute();
	   	}
	 public void updateBaseData(List<UpdateDataDTO> updateDataDTOlst) {
		
		BaseMetals baseMetals;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			baseMetals = baseMetalsRepository.findBaseMetalsByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			baseMetals.setValue(updateDataDTO.getValue());
			baseMetalsRepository.save(baseMetals);
		}
	}
}