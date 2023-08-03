package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.EcbQeLiquidity;
import com.bourse.domain.TmpAuditEcbQeLiquidity;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.EcbQeLiquidityRepository;
import com.bourse.repositories.TmpAuditEcbQeLiquidityRepository;

@Service
public class EcbQeLiquidityService {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	EcbQeLiquidityRepository ecbQeLiquidityRepository;
    @Autowired
	AdminService adminService;
    @Autowired
    TmpAuditEcbQeLiquidityRepository tmpAuditecbQeLiquidityRepository;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = ecbQeLiquidityRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  ecbQeLiquidityRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCaclulation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_ecb_qe");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void doCaclulation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_ecb_qe_main");
   		query.execute();
   	}
    public List<EcbQeLiquidity> SaveQeLiquidityData(List<EcbQeLiquidity> ecbQeLiquidityDataList) {
		
    	 List<EcbQeLiquidity> ecbQeLiquidityList=  ecbQeLiquidityRepository.saveAll(ecbQeLiquidityDataList);
		 //doCaclulation(ecbQeLiquidityList.get(0).getReferDate());
    	 doCaclulation();
		return ecbQeLiquidityList;
	}
	public List<TmpAuditEcbQeLiquidity> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_ecb_qe",TmpAuditEcbQeLiquidity.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditEcbQeLiquidity> auditProcedureDTOLst = (List<TmpAuditEcbQeLiquidity>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteecbQeLiquidityByReferDate(String referDate) {
		List<EcbQeLiquidity> ecbQeLiquidityList = ecbQeLiquidityRepository.findByReferDate(referDate);
		ecbQeLiquidityList.forEach(
	            (ecbQeLiquidity) -> {
	            	ecbQeLiquidityRepository.deleteById(ecbQeLiquidity.getId());
	            });
		List<TmpAuditEcbQeLiquidity> AuditList = tmpAuditecbQeLiquidityRepository.findByReferDate(referDate);
		AuditList.forEach(
	            (object) -> {
	            	tmpAuditecbQeLiquidityRepository.deleteById(object.getId());
	            });
	}
	public String findLatestecbQeLiquidityData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return ecbQeLiquidityRepository.findLatestEcbQeLiquidity();
	}
	public void updateEcbQeLiquidityData(List<UpdateDataDTO> updateDataDTOlst) {
			
	   		EcbQeLiquidity ecbQeLiquidity;
			for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
			{
				ecbQeLiquidity = ecbQeLiquidityRepository.findEcbQeLiquidityByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
				ecbQeLiquidity.setValue(updateDataDTO.getValue());
				ecbQeLiquidityRepository.save(ecbQeLiquidity);
			}
		}
}
