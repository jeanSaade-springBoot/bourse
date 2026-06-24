package com.bourse.service.liquidity;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.liquidity.FedLiquidity;
import com.bourse.domain.liquidity.TmpAuditFedLiquidity;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.liquidity.FedLiquidityRepository;
import com.bourse.repositories.liquidity.TmpAuditFedLiquidityRepository;
import com.bourse.service.AdminService;

@Service
public class FedLiquidityService {

  @PersistenceContext
  private EntityManager entityManager;

  @Autowired
  FedLiquidityRepository fedLiquidityRepository;

  @Autowired
  AdminService adminService;

  @Autowired
  TmpAuditFedLiquidityRepository tmpAuditFedLiquidityRepository;

  public boolean CheckIfCanSave(String referDate) {
    long cnt = fedLiquidityRepository.countByReferDate(referDate);
    return cnt == 0;
  }

  public boolean CheckIfCanSave(String referDate, Long subgroupId) {
    return fedLiquidityRepository.existsByReferDateAndSubgroupId(referDate, subgroupId);
  }

  public void doCalculation(String referDate) {
    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_fed_liquidity");

    query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
    query.setParameter("referDate", referDate);
    query.execute();
  }

  public void doCalculation() {
    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_fed_liquidity_main");

    query.execute();
  }

  public void doCalculationLoader(String fromDate, String toDate) {
    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_fed_liquidity_loader");

    query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
    query.setParameter("fromDate", fromDate);

    query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
    query.setParameter("toDate", toDate);

    query.execute();
  }

  public List<FedLiquidity> SaveFedLiquidityData(List<FedLiquidity> fedLiquidityDataList) {
    return fedLiquidityRepository.saveAll(fedLiquidityDataList);
  }

  @SuppressWarnings("unchecked")
  public List<TmpAuditFedLiquidity> getAuditData(String referDate) {

    boolean hasData = adminService.getData();

    if (!hasData) {
      return null;
    }

    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_fed_liquidity",
      TmpAuditFedLiquidity.class);

    query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
    query.setParameter("referDate", referDate);

    query.execute();

    return (List < TmpAuditFedLiquidity > ) query.getResultList();
  }

  public void deleteFedLiquidityByReferDate(String referDate) {

    List < FedLiquidity > fedLiquidityList = fedLiquidityRepository.findByReferDate(referDate);

    fedLiquidityList.forEach(entity -> fedLiquidityRepository.deleteById(entity.getId()));

    List < TmpAuditFedLiquidity > auditList = tmpAuditFedLiquidityRepository.findByReferDate(referDate);

    auditList.forEach(entity -> tmpAuditFedLiquidityRepository.deleteById(entity.getId()));
  }

  public String findLatestFedLiquidityData() {

    boolean hasData = adminService.getData();

    if (!hasData) {
      return null;
    }

    return fedLiquidityRepository.findLatestFedLiquidity();
  }

  public void updateFedLiquidityData(List < UpdateDataDTO > updateDataDTOlst) {

    FedLiquidity fedLiquidity;

    for (UpdateDataDTO updateDataDTO: updateDataDTOlst) {

      fedLiquidity = fedLiquidityRepository.findFedLiquidityByReferDateAndSubgroupId(updateDataDTO.getReferdate(),
        Long.valueOf(updateDataDTO.getSubgroupId()));

      if (fedLiquidity != null) {
        fedLiquidity.setValue(updateDataDTO.getValue());
        fedLiquidityRepository.save(fedLiquidity);
      }
    }
  }

  @Transactional
  public void updateValue(String date, Long subgroupId, String value) {

    FedLiquidity entity = fedLiquidityRepository.findFedLiquidityByReferDateAndSubgroupId(date, subgroupId);

    if (entity != null) {
      entity.setValue(value);
      fedLiquidityRepository.save(entity);
    }
  }
}