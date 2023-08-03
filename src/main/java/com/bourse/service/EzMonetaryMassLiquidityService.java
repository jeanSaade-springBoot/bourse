package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.EurozoneMonetaryMass;
import com.bourse.domain.TmpAuditEzMonetaryMassLiquidity;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.EzMonetaryMassLiquidityRepository;
import com.bourse.repositories.TmpAuditEzMonetaryMassRepository;

@Service
public class EzMonetaryMassLiquidityService {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	EzMonetaryMassLiquidityRepository ezMonetaryMassLiquidityRepository;
    @Autowired
	AdminService adminService;
    @Autowired
    TmpAuditEzMonetaryMassRepository tmpAuditEzMonetaryMassRepository;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = ezMonetaryMassLiquidityRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  ezMonetaryMassLiquidityRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCaclulation(String referDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_ezmm");
   		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
   		query.setParameter("referDate",referDate );
   		query.execute();
   	}
    public void doCaclulation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_ezmm_main");
   		query.execute();
   	}
    public List<EurozoneMonetaryMass> SaveEurozoneMonetaryMassData(List<EurozoneMonetaryMass> EzmmLiquidityDataList) {
		
    	 return ezMonetaryMassLiquidityRepository.saveAll(EzmmLiquidityDataList);
		 
	}
	public List<TmpAuditEzMonetaryMassLiquidity> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_ezmm",TmpAuditEzMonetaryMassLiquidity.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditEzMonetaryMassLiquidity> auditProcedureDTOLst = (List<TmpAuditEzMonetaryMassLiquidity>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteEzmmLiquidityByReferDate(String referDate) {
		List<EurozoneMonetaryMass> eurozoneMonetaryMassList = ezMonetaryMassLiquidityRepository.findByReferDate(referDate);
		eurozoneMonetaryMassList.forEach(
	            (eurozoneMonetaryMass) -> {
	            	ezMonetaryMassLiquidityRepository.deleteById(eurozoneMonetaryMass.getId());
	            });
		List<TmpAuditEzMonetaryMassLiquidity> AuditList = tmpAuditEzMonetaryMassRepository.findByReferDate(referDate);
		AuditList.forEach(
	            (object) -> {
	            	tmpAuditEzMonetaryMassRepository.deleteById(object.getId());
	            });
	}
	public String findLatestEzmmLiquidityData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return ezMonetaryMassLiquidityRepository.findLatestEurozoneMonetaryMass();
	}
	public void updateEzmmLiquidityData(List<UpdateDataDTO> updateDataDTOlst) {
			
		    EurozoneMonetaryMass eurozoneMonetaryMass;
			for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
			{
				eurozoneMonetaryMass = ezMonetaryMassLiquidityRepository.findEurozoneMonetaryMassByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
				eurozoneMonetaryMass.setValue(updateDataDTO.getValue());
				ezMonetaryMassLiquidityRepository.save(eurozoneMonetaryMass);
			}
		}
}
