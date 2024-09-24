package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.BoblOptionsVolume;
import com.bourse.domain.TmpAuditBoblOptionsVolume;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.BoblOptionsVolumeRepository;
import com.bourse.repositories.TmpAuditBoblOptionsVolumeRepository;

@Service
public class BoblOptionsVolumeService {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	BoblOptionsVolumeRepository boblOptionsVolumeRepository;
    @Autowired
	AdminService adminService;
    @Autowired
    TmpAuditBoblOptionsVolumeRepository tmpAuditBoblOptionsVolumeRepository;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = boblOptionsVolumeRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  boblOptionsVolumeRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCalculation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_bobl");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void doCalculation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_bobl_main");
   		query.execute();
   	}
    public void doCalculationLoader(String fromDate,String toDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_bobl_loader");
   		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
   	}
    public List<BoblOptionsVolume> SaveData(List<BoblOptionsVolume> bundOptionsVolumeDataList) {
		
		return boblOptionsVolumeRepository.saveAll(bundOptionsVolumeDataList);
	}
	public List<TmpAuditBoblOptionsVolume> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_volume_bobl",TmpAuditBoblOptionsVolume.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditBoblOptionsVolume> auditProcedureDTOLst = (List<TmpAuditBoblOptionsVolume>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteByReferDate(String referDate) {
		List<BoblOptionsVolume> bundOptionsVolumeList = boblOptionsVolumeRepository.findByReferDate(referDate);
		bundOptionsVolumeList.forEach(
	            (bundOptionsVolume) -> {
	            	boblOptionsVolumeRepository.deleteById(bundOptionsVolume.getId());
	            });
		List<TmpAuditBoblOptionsVolume> AuditList = tmpAuditBoblOptionsVolumeRepository.findByReferDate(referDate);
		AuditList.forEach(
	            (object) -> {
	            	tmpAuditBoblOptionsVolumeRepository.deleteById(object.getId());
	            });
	}
	public String findLatestData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return boblOptionsVolumeRepository.findLatest();
	}
	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
			
			BoblOptionsVolume BoblOptionsVolume;
			for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
			{
				BoblOptionsVolume = boblOptionsVolumeRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
				BoblOptionsVolume.setValue(updateDataDTO.getValue());
				boblOptionsVolumeRepository.save(BoblOptionsVolume);
			}
		}
}
