package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.BuxlOptionsVolume;
import com.bourse.domain.TmpAuditBuxlOptionsVolume;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.BuxlOptionsVolumeRepository;
import com.bourse.repositories.TmpAuditBuxlOptionsVolumeRepository;

@Service
public class BuxlOptionsVolumeService {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	BuxlOptionsVolumeRepository buxlOptionsVolumeRepository;
    @Autowired
	AdminService adminService;
    @Autowired
    TmpAuditBuxlOptionsVolumeRepository tmpAuditBuxlOptionsVolumeRepository;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = buxlOptionsVolumeRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  buxlOptionsVolumeRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCalculation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_buxl");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void doCalculation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_buxl_main");
   		query.execute();
   	}
    public void doCalculationLoader(String fromDate,String toDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_buxl_loader");
   		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
   	}
    public List<BuxlOptionsVolume> SaveData(List<BuxlOptionsVolume> bundOptionsVolumeDataList) {
		
		return buxlOptionsVolumeRepository.saveAll(bundOptionsVolumeDataList);
	}
	public List<TmpAuditBuxlOptionsVolume> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_volume_buxl",TmpAuditBuxlOptionsVolume.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditBuxlOptionsVolume> auditProcedureDTOLst = (List<TmpAuditBuxlOptionsVolume>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteByReferDate(String referDate) {
		List<BuxlOptionsVolume> bundOptionsVolumeList = buxlOptionsVolumeRepository.findByReferDate(referDate);
		bundOptionsVolumeList.forEach(
	            (bundOptionsVolume) -> {
	            	buxlOptionsVolumeRepository.deleteById(bundOptionsVolume.getId());
	            });
		List<TmpAuditBuxlOptionsVolume> AuditList = tmpAuditBuxlOptionsVolumeRepository.findByReferDate(referDate);
		AuditList.forEach(
	            (object) -> {
	            	tmpAuditBuxlOptionsVolumeRepository.deleteById(object.getId());
	            });
	}
	public String findLatestData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return buxlOptionsVolumeRepository.findLatest();
	}
	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
			
	   		BuxlOptionsVolume bundOptionsVolume;
			for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
			{
				bundOptionsVolume = buxlOptionsVolumeRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
				bundOptionsVolume.setValue(updateDataDTO.getValue());
				buxlOptionsVolumeRepository.save(bundOptionsVolume);
			}
		}
}
