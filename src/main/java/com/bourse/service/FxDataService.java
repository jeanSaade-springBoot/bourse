package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.FxUsdData;
import com.bourse.domain.TmpAuditFxEurData;
import com.bourse.domain.FxUsdData;
import com.bourse.domain.TmpAuditFxUsdData;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.FxUsdDataRepository;
import com.bourse.repositories.TmpAuditFxEurDataRepository;
import com.bourse.repositories.TmpAuditFxUsdDataRepository;

@Service
public class FxDataService {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	FxUsdDataRepository fxUsdDataRepository;
    @Autowired
	AdminService adminService;
    @Autowired
    TmpAuditFxUsdDataRepository tmpAuditFxUsdDataRepository;
    @Autowired
    TmpAuditFxEurDataRepository tmpAuditFxEurDataRepository;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = fxUsdDataRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  fxUsdDataRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCaclulation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_fx");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void doCaclulation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_fx_main");
   		query.execute();
   	}
    public List<FxUsdData> SaveData(List<FxUsdData> dataList) {
		
		return fxUsdDataRepository.saveAll(dataList);
	}
	public List<TmpAuditFxUsdData> getAuditDataFxUsd(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_fx_usd",TmpAuditFxUsdData.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditFxUsdData> auditProcedureDTOLst = (List<TmpAuditFxUsdData>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public List<TmpAuditFxEurData> getAuditDataFxEur(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_fx_eur",TmpAuditFxEurData.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditFxEurData> auditProcedureDTOLst = (List<TmpAuditFxEurData>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteByReferDate(String referDate) {
		List<FxUsdData> FxUsdDataList = fxUsdDataRepository.findByReferDate(referDate);
		FxUsdDataList.forEach(
	            (FxUsdData) -> {
	            	fxUsdDataRepository.deleteById(FxUsdData.getId());
	            });
		List<TmpAuditFxUsdData> AuditList = tmpAuditFxUsdDataRepository.findByReferDate(referDate);
		AuditList.forEach(
	            (object) -> {
	            	tmpAuditFxUsdDataRepository.deleteById(object.getId());
	            });
		List<TmpAuditFxEurData> EurAuditList = tmpAuditFxEurDataRepository.findByReferDate(referDate);
		EurAuditList.forEach(
	            (object) -> {
	            	tmpAuditFxEurDataRepository.deleteById(object.getId());
	            });
	}
	public String findLatestData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return fxUsdDataRepository.findLatest();
	}
	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
			
	   		FxUsdData FxUsdData;
			for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
			{
				FxUsdData = fxUsdDataRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
				FxUsdData.setValue(updateDataDTO.getValue());
				fxUsdDataRepository.save(FxUsdData);
			}
		}
}
