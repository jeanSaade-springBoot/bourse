package com.bourse.service.liquidity;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.liquidity.UsBanksReserveLiquidity;
import com.bourse.domain.liquidity.TmpAuditUsBanksReserveLiquidity;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.liquidity.UsBanksReserveLiquidityRepository;
import com.bourse.repositories.liquidity.TmpAuditUsBanksReserveLiquidityRepository;
import com.bourse.service.AdminService;

@Service
public class UsBanksReserveLiquidityService {

  @PersistenceContext
  private EntityManager entityManager;

  @Autowired
  UsBanksReserveLiquidityRepository usBanksReserveLiquidityRepository;

  @Autowired
  AdminService adminService;

  @Autowired
  TmpAuditUsBanksReserveLiquidityRepository tmpAuditUsBanksReserveLiquidityRepository;

  public boolean CheckIfCanSave(String referDate) {
    long cnt = usBanksReserveLiquidityRepository.countByReferDate(referDate);
    return cnt == 0;
  }

  public boolean CheckIfCanSave(String referDate, Long subgroupId) {
    return usBanksReserveLiquidityRepository.existsByReferDateAndSubgroupId(referDate, subgroupId);
  }

  public void doCalculation(String referDate) {
    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_us_banks_reserve_liquidity");

    query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
    query.setParameter("referDate", referDate);
    query.execute();
  }

  public void doCalculation() {
    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_UsBanksReserve_liquidity_main");

    query.execute();
  }

  public void doCalculationLoader(String fromDate, String toDate) {
    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_us_banks_reserve_liquidity_loader");

    query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
    query.setParameter("fromDate", fromDate);

    query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
    query.setParameter("toDate", toDate);

    query.execute();
  }

  public List<UsBanksReserveLiquidity> SaveUsBanksReserveLiquidityData(List<UsBanksReserveLiquidity> UsBanksReserveLiquidityDataList) {
    return usBanksReserveLiquidityRepository.saveAll(UsBanksReserveLiquidityDataList);
  }

  @SuppressWarnings("unchecked")
  public List<TmpAuditUsBanksReserveLiquidity> getAuditData(String referDate) {

    boolean hasData = adminService.getData();

    if (!hasData) {
      return null;
    }

    StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_audit_us_banks_reserve_liquidity",
      TmpAuditUsBanksReserveLiquidity.class);

    query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
    query.setParameter("referDate", referDate);

    query.execute();

    return (List < TmpAuditUsBanksReserveLiquidity > ) query.getResultList();
  }

  public void deleteUsBanksReserveLiquidityByReferDate(String referDate) {

    List < UsBanksReserveLiquidity > UsBanksReserveLiquidityList = usBanksReserveLiquidityRepository.findByReferDate(referDate);

    UsBanksReserveLiquidityList.forEach(entity -> usBanksReserveLiquidityRepository.deleteById(entity.getId()));

    List < TmpAuditUsBanksReserveLiquidity > auditList = tmpAuditUsBanksReserveLiquidityRepository.findByReferDate(referDate);

    auditList.forEach(entity -> tmpAuditUsBanksReserveLiquidityRepository.deleteById(entity.getId()));
  }

  public String findLatestUsBanksReserveLiquidityData() {

    boolean hasData = adminService.getData();

    if (!hasData) {
      return null;
    }

    return usBanksReserveLiquidityRepository.findLatestUsBanksReserveLiquidity();
  }

  public void updateUsBanksReserveLiquidityData(List < UpdateDataDTO > updateDataDTOlst) {

    UsBanksReserveLiquidity UsBanksReserveLiquidity;

    for (UpdateDataDTO updateDataDTO: updateDataDTOlst) {

      UsBanksReserveLiquidity = usBanksReserveLiquidityRepository.findUsBanksReserveLiquidityByReferDateAndSubgroupId(updateDataDTO.getReferdate(),
        Long.valueOf(updateDataDTO.getSubgroupId()));

      if (UsBanksReserveLiquidity != null) {
        UsBanksReserveLiquidity.setValue(updateDataDTO.getValue());
        usBanksReserveLiquidityRepository.save(UsBanksReserveLiquidity);
      }
    }
  }

  @Transactional
  public void updateValue(String date, Long subgroupId, String value) {

    UsBanksReserveLiquidity entity = usBanksReserveLiquidityRepository.findUsBanksReserveLiquidityByReferDateAndSubgroupId(date, subgroupId);

    if (entity != null) {
      entity.setValue(value);
      usBanksReserveLiquidityRepository.save(entity);
    }
  }
}