package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.BundOptionsVolume;
import com.bourse.domain.TmpAuditBundOptionsVolume;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.BundOptionsVolumeRepository;
import com.bourse.repositories.TmpAuditBundOptionsVolumeRepository;

@Service
public class BundOptionsVolumeService {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	BundOptionsVolumeRepository bundOptionsVolumeRepository;
    @Autowired
	AdminService adminService;
    @Autowired
    TmpAuditBundOptionsVolumeRepository tmpAuditBundOptionsVolumeRepository;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = bundOptionsVolumeRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  bundOptionsVolumeRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCaclulation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_bund");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void doCaclulation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_bund_main");
   		query.execute();
   	}
    public void doCaclulationLoader(String fromDate,String toDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_bund_loader");
   		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
   		query.execute();
   	}
    public List<BundOptionsVolume> SaveData(List<BundOptionsVolume> bundOptionsVolumeDataList) {
		
		return bundOptionsVolumeRepository.saveAll(bundOptionsVolumeDataList);
	}
	public List<TmpAuditBundOptionsVolume> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_volume_bund",TmpAuditBundOptionsVolume.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditBundOptionsVolume> auditProcedureDTOLst = (List<TmpAuditBundOptionsVolume>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteByReferDate(String referDate) {
		List<BundOptionsVolume> bundOptionsVolumeList = bundOptionsVolumeRepository.findByReferDate(referDate);
		bundOptionsVolumeList.forEach(
	            (bundOptionsVolume) -> {
	            	bundOptionsVolumeRepository.deleteById(bundOptionsVolume.getId());
	            });
		List<TmpAuditBundOptionsVolume> AuditList = tmpAuditBundOptionsVolumeRepository.findByReferDate(referDate);
		AuditList.forEach(
	            (object) -> {
	            	tmpAuditBundOptionsVolumeRepository.deleteById(object.getId());
	            });
	}
	public String findLatestData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return bundOptionsVolumeRepository.findLatestBundOptionsVolume();
	}
	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
			
	   		BundOptionsVolume bundOptionsVolume;
			for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
			{
				bundOptionsVolume = bundOptionsVolumeRepository.findBundOptionsVolumeByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
				bundOptionsVolume.setValue(updateDataDTO.getValue());
				bundOptionsVolumeRepository.save(bundOptionsVolume);
			}
		}
}
