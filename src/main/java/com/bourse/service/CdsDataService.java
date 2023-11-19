package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.CdsData;
import com.bourse.domain.TmpAuditCdsData;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.CdsDataRepository;
import com.bourse.repositories.TmpAuditCdsDataRepository;

@Service
public class CdsDataService {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	CdsDataRepository CdsDataRepository;
    @Autowired
	AdminService adminService;
    @Autowired
    TmpAuditCdsDataRepository tmpAuditCdsDataRepository;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = CdsDataRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  CdsDataRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCaclulation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_cds");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void doCaclulation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_cds_main");
   		query.execute();
   	}
    public List<CdsData> SaveData(List<CdsData> dataList) {
		
		return CdsDataRepository.saveAll(dataList);
	}
	public List<TmpAuditCdsData> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_cds",TmpAuditCdsData.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditCdsData> auditProcedureDTOLst = (List<TmpAuditCdsData>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteByReferDate(String referDate) {
		List<CdsData> CdsDataList = CdsDataRepository.findByReferDate(referDate);
		CdsDataList.forEach(
	            (CdsData) -> {
	            	CdsDataRepository.deleteById(CdsData.getId());
	            });
		List<TmpAuditCdsData> AuditList = tmpAuditCdsDataRepository.findByReferDate(referDate);
		AuditList.forEach(
	            (object) -> {
	            	tmpAuditCdsDataRepository.deleteById(object.getId());
	            });
	}
	public String findLatestData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return CdsDataRepository.findLatest();
	}
	public void updateData(List<UpdateDataDTO> updateDataDTOlst) {
			
	   		CdsData cdsData;
			for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
			{
				cdsData = CdsDataRepository.findByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
				cdsData.setValue(updateDataDTO.getValue());
				CdsDataRepository.save(cdsData);
			}
		}
}
