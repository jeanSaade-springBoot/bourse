package com.bourse.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.PreciousMetals;
import com.bourse.domain.TmpAuditPrecious;
import com.bourse.domain.usJobs.UsJobsData;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.PreciousMetalsRepository;
import com.bourse.repositories.TmpAuditPreciousRepository;
import com.bourse.util.DateFormatUtil;

@Service
public class PerciousMetalsService 
{
	@PersistenceContext
    private EntityManager entityManager;
	
    @Autowired
    PreciousMetalsRepository preciousMetalsRepository;
    @Autowired
    TmpAuditPreciousRepository tmpAuditPreciousRepository;
    @Autowired
	AdminService adminService;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = preciousMetalsRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   	
   		return  preciousMetalsRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
    public void doCalculation(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_precious");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
	}
    public void doCalculation()
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_precious_main");
   		query.execute();
   	}
    public void doCalculationLoader(String fromDate,String toDate)
   	{
   		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_precious_loader");
   		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate", fromDate);
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate", toDate);
		query.execute();
   	}
	public void runTrendFollowingMavgTask(String groupId, String subGroupId,  String fromDate, String toDateDate) {


	    String formattedFromDate = DateFormatUtil.normalizeToIso(fromDate);
	    String formattedToDate   = DateFormatUtil.normalizeToIso(toDateDate);

	    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_get_all_weighted_mavg");
	    query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	    query.setParameter("groupId", groupId);

	    query.registerStoredProcedureParameter("subGroupId", String.class, ParameterMode.IN);
	    query.setParameter("subGroupId", subGroupId);

	    query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
	    query.setParameter("fromDate", formattedFromDate);

	    query.registerStoredProcedureParameter("toDateDate", String.class, ParameterMode.IN);
	    query.setParameter("toDateDate", formattedToDate);

	    query.execute();
	    entityManager.clear();
	}
	public void runFunctionCalculationProcedure(String groupId, String subGroupId, String fromDate, String toDateDate) {

	    String formattedFromDate = DateFormatUtil.normalizeToIso(fromDate);
	    String formattedToDate   = DateFormatUtil.normalizeToIso(toDateDate);

	    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_realized_vol_span");
	    query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	    query.setParameter("groupId", groupId);

	    query.registerStoredProcedureParameter("subGroupId", String.class, ParameterMode.IN);
	    query.setParameter("subGroupId", subGroupId);

	    query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
	    query.setParameter("fromDate", formattedFromDate);

	    query.registerStoredProcedureParameter("toDateDate", String.class, ParameterMode.IN);
	    query.setParameter("toDateDate", formattedToDate);

	    query.execute();
	    entityManager.clear();
	}
	public void runVolatilityWeightedTrendFollowingMavgTask(String groupId, String subGroupId, String fromDate, String toDateDate) {


	    String formattedFromDate = DateFormatUtil.normalizeToIso(fromDate);
	    String formattedToDate   = DateFormatUtil.normalizeToIso(toDateDate);

	    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_volatility_weighted_trend_levels");
	    query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
	    query.setParameter("groupId", groupId);

	    query.registerStoredProcedureParameter("subGroupId", String.class, ParameterMode.IN);
	    query.setParameter("subGroupId", subGroupId);

	    query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
	    query.setParameter("fromDate", formattedFromDate);

	    query.registerStoredProcedureParameter("toDateDate", String.class, ParameterMode.IN);
	    query.setParameter("toDateDate", formattedToDate);

	    query.execute();
	    entityManager.clear();
	}
	
	public void runProcedureCalculation(String groupId, String subGroupId, String fromDate , String toDate){
		runTrendFollowingMavgTask(groupId, subGroupId , fromDate, toDate);
		runVolatilityWeightedTrendFollowingMavgTask(groupId, subGroupId ,fromDate, toDate);
		runFunctionCalculationProcedure(groupId, subGroupId ,fromDate, toDate);
	}
    @Transactional
    public void updateValue(String date, Long subgroupId, String value) {

		preciousMetalsRepository.updateValue(date, subgroupId, value);
    }
	/*
	  public List<PreciousMetals> SavePreciousData(List<PreciousMetals> preciousDataList) {
	 
	  return preciousMetalsRepository.saveAll(preciousDataList); }
	 */
	public void SavePreciousData(List<PreciousMetals> preciousDataList) {
		PreciousMetals preciousMetals;
		for(PreciousMetals preciousMetalsDTO:preciousDataList)
		{
			preciousMetals = preciousMetalsRepository.findPreciousMetalsByReferDateAndSubgroupId(preciousMetalsDTO.getReferDate(),Long.valueOf(preciousMetalsDTO.getSubgroupId()));
			if(preciousMetals!=null)
			{preciousMetals.setValue(preciousMetalsDTO.getValue());
				preciousMetalsRepository.save(preciousMetals);
			}
			else {
				preciousMetalsRepository.save(preciousMetalsDTO);
			}
		}

	}
	public List<TmpAuditPrecious> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_precious",TmpAuditPrecious.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditPrecious> auditProcedureDTOLst = (List<TmpAuditPrecious>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deletePreciousByReferDate(String referDate) {
		List<PreciousMetals> preciousList = preciousMetalsRepository.findByReferDate(referDate);
		preciousList.forEach(
	            (precious) -> {
	            	preciousMetalsRepository.deleteById(precious.getId());
	            });
		List<TmpAuditPrecious> preciousAuditList = tmpAuditPreciousRepository.findByReferDate(referDate);
		preciousAuditList.forEach(
	            (precious) -> {
	            	tmpAuditPreciousRepository.deleteById(precious.getId());
	            });
	}
	public String findLatestPreciousData()
	{   boolean hasData= adminService.getData();
        if(!hasData)
		return null;
        return preciousMetalsRepository.findLatestPreciousData();
	}
	public void updatePreciousData(List<UpdateDataDTO> updateDataDTOlst) {
		
		PreciousMetals preciousMetals;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			preciousMetals = preciousMetalsRepository.findPreciousMetalsByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			preciousMetals.setValue(updateDataDTO.getValue());
			preciousMetalsRepository.save(preciousMetals);
		}
	}
	public Set<String> getExistingKeys(String startDate, String endDate) {

	    return new HashSet<>(
	        preciousMetalsRepository.findExistingKeys(startDate, endDate)
	    );
	}
}