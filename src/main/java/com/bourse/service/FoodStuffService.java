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
		List<FoodStuffData> baseList = foodStuffRepository.findByReferDate(referDate);
		baseList.forEach(
	            (base) -> {
	            	foodStuffRepository.deleteById(base.getId());
	            });
		List<TmpAuditFoodStuff> baseAuditList = tmpAuditFoodStuffRepository.findByReferDate(referDate);
		baseAuditList.forEach(
	            (base) -> {
	            	tmpAuditFoodStuffRepository.deleteById(base.getId());
	            });
	}
	public String findLatestFoodStuffData() {
		 boolean hasData= adminService.getData();
	        if(!hasData)
			return null;
	        return foodStuffRepository.findLatestFoodStuffData();
	}
	 public void doCaclulation(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_foodstuff");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
	}
	 public void doCaclulation()
	   	{
		 	StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_foodstuff_main");
			query.execute();
	   	}
	 public void updateFoodStuffData(List<UpdateDataDTO> updateDataDTOlst) {
		
		 FoodStuffData foodStuffData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			foodStuffData = foodStuffRepository.findBaseMetalsByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			foodStuffData.setValue(updateDataDTO.getValue());
			foodStuffRepository.save(foodStuffData);
		}
	}
}