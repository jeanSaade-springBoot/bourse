package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.EnergyData;
import com.bourse.domain.TmpAuditEnergy;
import com.bourse.domain.TmpAuditFoodStuff;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.EnergyRepository;
import com.bourse.repositories.TmpAuditEnergyRepository;

@Service
public class EnergyService 
{

	@PersistenceContext
    private EntityManager entityManager;
	
    @Autowired
    EnergyRepository energyRepository;
    @Autowired
    TmpAuditEnergyRepository tmpAuditEnergyRepository;
    @Autowired
  	AdminService adminService;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = energyRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  energyRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
	public List<EnergyData> SaveEnergyData(List<EnergyData> energyDataList) {
		
		return energyRepository.saveAll(energyDataList);
	}
	
	public List<TmpAuditEnergy> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_energy",TmpAuditEnergy.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditEnergy> auditProcedureDTOLst = (List<TmpAuditEnergy>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteEnergyByReferDate(String referDate) {
		List<EnergyData> energyList = energyRepository.findByReferDate(referDate);
		energyList.forEach(
	            (energy) -> {
	            	energyRepository.deleteById(energy.getId());
	            });
		List<TmpAuditEnergy> energyAuditList = tmpAuditEnergyRepository.findByReferDate(referDate);
		energyAuditList.forEach(
	            (energy) -> {
	            	tmpAuditEnergyRepository.deleteById(energy.getId());
	            });
	}
	public String findLatestEnergyData() {
		 boolean hasData= adminService.getData();
	        if(!hasData)
			return null;
	        return energyRepository.findLatestEnergyData();
	}
	 public void doCalculation(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_energy");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
	}
	 public void doCalculation()
	   	{
		 	StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_energy_main");
			query.execute();
	   	}
	 public void doCalculationLoader(String fromDate,String toDate)
	   	{
		 	StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_energy_loader");
		 	query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query.setParameter("fromDate", fromDate);
			query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query.setParameter("toDate", toDate);
			query.execute();
	   	}
	 public void updateEnergyData(List<UpdateDataDTO> updateDataDTOlst) {
		
		 EnergyData energyData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			energyData = energyRepository.findEnergyByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			energyData.setValue(updateDataDTO.getValue());
			energyRepository.save(energyData);
		}
	}
}