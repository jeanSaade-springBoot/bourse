package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.EuriborOptionsVolume;
import com.bourse.domain.TmpAuditEuriborOptionsVolume;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.EuriborOptionsVolumeRepository;
import com.bourse.repositories.TmpAuditEuriborOptionsVolumeRepository;

@Service
public class EuriborOptionsVolumeService {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	EuriborOptionsVolumeRepository euriborOptionsVolumeRepository;
    @Autowired
	AdminService adminService;
    @Autowired
    TmpAuditEuriborOptionsVolumeRepository tmpAuditEuriborOptionsVolumeRepository;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = euriborOptionsVolumeRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  euriborOptionsVolumeRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCaclulation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_euribor");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void doCaclulation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_euribor_main");
   		query.execute();
   	}
    public void doCaclulationLoader(String fromDate,String toDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_euribor_loader");
   		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
   	}
    public List<EuriborOptionsVolume> SaveData(List<EuriborOptionsVolume> euriborOptionsVolumeDataList) {
		
		return euriborOptionsVolumeRepository.saveAll(euriborOptionsVolumeDataList);
	}
	public List<TmpAuditEuriborOptionsVolume> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_volume_euribor",TmpAuditEuriborOptionsVolume.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditEuriborOptionsVolume> auditProcedureDTOLst = (List<TmpAuditEuriborOptionsVolume>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteByReferDate(String referDate) {
		List<EuriborOptionsVolume> euriborOptionsVolumeList = euriborOptionsVolumeRepository.findByReferDate(referDate);
		euriborOptionsVolumeList.forEach(
	            (euriborOptionsVolume) -> {
	            	euriborOptionsVolumeRepository.deleteById(euriborOptionsVolume.getId());
	            });
		List<TmpAuditEuriborOptionsVolume> AuditList = tmpAuditEuriborOptionsVolumeRepository.findByReferDate(referDate);
		AuditList.forEach(
	            (object) -> {
	            	tmpAuditEuriborOptionsVolumeRepository.deleteById(object.getId());
	            });
	}
	public String findLatestData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return euriborOptionsVolumeRepository.findLatest();
	}
	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
			
	   		EuriborOptionsVolume euriborOptionsVolume;
			for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
			{
				euriborOptionsVolume = euriborOptionsVolumeRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
				euriborOptionsVolume.setValue(updateDataDTO.getValue());
				euriborOptionsVolumeRepository.save(euriborOptionsVolume);
			}
		}
}
