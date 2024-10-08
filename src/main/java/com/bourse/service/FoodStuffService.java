package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.FoodStuffData;
import com.bourse.domain.TmpAuditFoodStuff;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.FoodStuffRepository;
import com.bourse.repositories.TmpAuditFoodStuffRepository;

@Service
public class FoodStuffService 
{

	@PersistenceContext
    private EntityManager entityManager;
	
    @Autowired
    FoodStuffRepository foodStuffRepository;
    @Autowired
    TmpAuditFoodStuffRepository tmpAuditFoodStuffRepository;
    @Autowired
  	AdminService adminService;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = foodStuffRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
	{
	
		return  foodStuffRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
	}
	public List<FoodStuffData> SaveFoodStuffData(List<FoodStuffData> foodStuffDataList) {
		
		return foodStuffRepository.saveAll(foodStuffDataList);
	}
	
	public List<TmpAuditFoodStuff> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_foodstuff",TmpAuditFoodStuff.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditFoodStuff> auditProcedureDTOLst = (List<TmpAuditFoodStuff>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deleteFoodStuffByReferDate(String referDate) {
		List<FoodStuffData> foodstuffList = foodStuffRepository.findByReferDate(referDate);
		foodstuffList.forEach(
	            (foodstuff) -> {
	            	foodStuffRepository.deleteById(foodstuff.getId());
	            });
		List<TmpAuditFoodStuff> foodstuffAuditList = tmpAuditFoodStuffRepository.findByReferDate(referDate);
		foodstuffAuditList.forEach(
	            (foodstuff) -> {
	            	tmpAuditFoodStuffRepository.deleteById(foodstuff.getId());
	            });
	}
	public String findLatestFoodStuffData() {
		 boolean hasData= adminService.getData();
	        if(!hasData)
			return null;
	        return foodStuffRepository.findLatestFoodStuffData();
	}
	 public void doCalculation(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_foodstuff");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
	}
	 public void doCalculation()
	   	{
		 	StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_foodstuff_main");
			query.execute();
	   	}
	 public void doCalculationLoader(String fromDate,String toDate)
	   	{
		 	StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_foodstuff_loader");
		 	query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query.setParameter("fromDate", fromDate);
			query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query.setParameter("toDate", toDate);
			query.execute();
	   	}
	 public void updateFoodStuffData(List<UpdateDataDTO> updateDataDTOlst) {
		
		 FoodStuffData foodStuffData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			foodStuffData = foodStuffRepository.findFoodStuffByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			foodStuffData.setValue(updateDataDTO.getValue());
			foodStuffRepository.save(foodStuffData);
		}
	}
}