package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.ShatzOptionsVolume;
import com.bourse.domain.TmpAuditShatzOptionsVolume;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.ShatzOptionsVolumeRepository;
import com.bourse.repositories.TmpAuditShatzOptionsVolumeRepository;

@Service
public class ShatzOptionsVolumeService {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	ShatzOptionsVolumeRepository shatzOptionsVolumeRepository;
    @Autowired
	AdminService adminService;
    @Autowired
    TmpAuditShatzOptionsVolumeRepository tmpAuditShatzOptionsVolumeRepository;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = shatzOptionsVolumeRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  shatzOptionsVolumeRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCaclulation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_shatz");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void doCaclulation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_shatz_main");
   		query.execute();
   	}
    public void doCaclulationLoader(String fromDate,String toDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_volume_shatz_loader");
   		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
   	}
    public List<ShatzOptionsVolume> SaveData(List<ShatzOptionsVolume> shatzOptionsVolumeDataList) {
		
		return shatzOptionsVolumeRepository.saveAll(shatzOptionsVolumeDataList);
	}
	public List<TmpAuditShatzOptionsVolume> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_volume_shatz",TmpAuditShatzOptionsVolume.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditShatzOptionsVolume> auditProcedureDTOLst = (List<TmpAuditShatzOptionsVolume>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteByReferDate(String referDate) {
		List<ShatzOptionsVolume> shatzOptionsVolumeList = shatzOptionsVolumeRepository.findByReferDate(referDate);
		shatzOptionsVolumeList.forEach(
	            (shatzOptionsVolume) -> {
	            	shatzOptionsVolumeRepository.deleteById(shatzOptionsVolume.getId());
	            });
		List<TmpAuditShatzOptionsVolume> AuditList = tmpAuditShatzOptionsVolumeRepository.findByReferDate(referDate);
		AuditList.forEach(
	            (object) -> {
	            	tmpAuditShatzOptionsVolumeRepository.deleteById(object.getId());
	            });
	}
	public String findLatestData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return shatzOptionsVolumeRepository.findLatest();
	}
	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
			
	   		ShatzOptionsVolume shatzOptionsVolume;
			for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
			{
				shatzOptionsVolume = shatzOptionsVolumeRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
				shatzOptionsVolume.setValue(updateDataDTO.getValue());
				shatzOptionsVolumeRepository.save(shatzOptionsVolume);
			}
		}
}
