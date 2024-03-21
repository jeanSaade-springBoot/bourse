package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.EcbExcessLiquidity;
import com.bourse.domain.TmpAuditEcbExcessLiquidity;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.EcbExcessLiquidityRepository;
import com.bourse.repositories.TmpAuditEcbExcessLiquidityRepository;

@Service
public class EcbExcessLiquidityService {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	EcbExcessLiquidityRepository ecbExcessLiquidityRepository;
    @Autowired
	AdminService adminService;
    @Autowired
    TmpAuditEcbExcessLiquidityRepository tmpAuditEcbExcessLiquidityRepository;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = ecbExcessLiquidityRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  ecbExcessLiquidityRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCaclulation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_ecb_excess");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void doCaclulation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_ecb_excess_main");
   		query.execute();
   	}
    public void doCaclulationLoader(String fromDate,String toDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_ecb_excess_loader");
   		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
   	}
    public List<EcbExcessLiquidity> SaveExcessLiquidityData(List<EcbExcessLiquidity> ecbExcessLiquidityDataList) {
		
		return ecbExcessLiquidityRepository.saveAll(ecbExcessLiquidityDataList);
	}
	public List<TmpAuditEcbExcessLiquidity> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_ecb_excess",TmpAuditEcbExcessLiquidity.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditEcbExcessLiquidity> auditProcedureDTOLst = (List<TmpAuditEcbExcessLiquidity>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteEcbExcessLiquidityByReferDate(String referDate) {
		List<EcbExcessLiquidity> ecbExcessLiquidityList = ecbExcessLiquidityRepository.findByReferDate(referDate);
		ecbExcessLiquidityList.forEach(
	            (ecbExcessLiquidity) -> {
	            	ecbExcessLiquidityRepository.deleteById(ecbExcessLiquidity.getId());
	            });
		List<TmpAuditEcbExcessLiquidity> AuditList = tmpAuditEcbExcessLiquidityRepository.findByReferDate(referDate);
		AuditList.forEach(
	            (object) -> {
	            	tmpAuditEcbExcessLiquidityRepository.deleteById(object.getId());
	            });
	}
	public String findLatestEcbExcessLiquidityData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return ecbExcessLiquidityRepository.findLatestEcbExcessLiquidity();
	}
	public void updateEcbExcessLiquidityData(List<UpdateDataDTO> updateDataDTOlst) {
			
	   		EcbExcessLiquidity ecbExcessLiquidity;
			for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
			{
				ecbExcessLiquidity = ecbExcessLiquidityRepository.findEcbExcessLiquidityByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
				ecbExcessLiquidity.setValue(updateDataDTO.getValue());
				ecbExcessLiquidityRepository.save(ecbExcessLiquidity);
			}
		}
}
