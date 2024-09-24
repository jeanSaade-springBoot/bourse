package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.TransportationData;
import com.bourse.domain.TmpAuditTransportation;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.TmpAuditTrasnportationRepository;
import com.bourse.repositories.TransportationRepository;

@Service
public class TransportationService 
{

	@PersistenceContext
    private EntityManager entityManager;
	
    @Autowired
    TransportationRepository transportationRepository;
    @Autowired
    TmpAuditTrasnportationRepository tmpAuditTrasnportationRepository;
    @Autowired
  	AdminService adminService;
    
    public boolean CheckIfCanSave(String referDate)
	{
		long cnt = transportationRepository.countByReferDate(referDate);
		boolean returnvalue = (cnt == 0) ? true : false;
		return returnvalue;
	}
    public boolean CheckIfCanSave(String referDate,Long subgroupId)
   	{
   		return  transportationRepository.existsByReferDateAndSubgroupId(referDate,subgroupId);
   	}
	public List<TransportationData> SaveTransportationData(List<TransportationData> TransportationDataList) {
		
		return transportationRepository.saveAll(TransportationDataList);
	}
	
	public List<TmpAuditTransportation> getAuditData(String referDate)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_transportation",TmpAuditTransportation.class);
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
		List<TmpAuditTransportation> auditProcedureDTOLst = (List<TmpAuditTransportation>) query.getResultList();
		return auditProcedureDTOLst;
	}
	public void deletetransportationByReferDate(String referDate) {
		List<TransportationData> transportationList = transportationRepository.findByReferDate(referDate);
		transportationList.forEach(
	            (transportation) -> {
	            	transportationRepository.deleteById(transportation.getId());
	            });
		List<TmpAuditTransportation> transportationAuditList = tmpAuditTrasnportationRepository.findByReferDate(referDate);
		transportationAuditList.forEach(
	            (transportation) -> {
	            	tmpAuditTrasnportationRepository.deleteById(transportation.getId());
	            });
	}
	public String findLatestTransportationData() {
		 boolean hasData= adminService.getData();
	        if(!hasData)
			return null;
	        return transportationRepository.findLatestTransportationData();
	}
	 public void doCalculation(String referDate)
	{
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_transportation");
		query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
		query.setParameter("referDate",referDate );
		query.execute();
	}
	 public void doCalculation()
	   	{
		 	StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_transportation_main");
			query.execute();
	   	}
	 public void doCalculationLoader(String fromDate,String toDate)
	   	{
		 	StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_transportation_loader");
		 	query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query.setParameter("fromDate", fromDate);
			query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query.setParameter("toDate", toDate);
			query.execute();
	   	}
	 public void updateTransportationData(List<UpdateDataDTO> updateDataDTOlst) {
		
		 TransportationData transportationData;
		for(UpdateDataDTO updateDataDTO:updateDataDTOlst)
		{
			transportationData = transportationRepository.findTransportationByReferDateAndSubgroupId(updateDataDTO.getReferdate(),Long.valueOf(updateDataDTO.getSubgroupId()));
			transportationData.setValue(updateDataDTO.getValue());
			transportationRepository.save(transportationData);
		}
	}
}