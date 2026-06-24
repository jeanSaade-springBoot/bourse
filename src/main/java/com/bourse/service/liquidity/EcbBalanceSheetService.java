package com.bourse.service.liquidity;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.liquidity.EcbBalanceSheetLiquidity;
import com.bourse.domain.liquidity.TmpAuditEcbBalanceSheetLiquidity;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.liquidity.EcbBalanceSheetRepository;
import com.bourse.repositories.liquidity.TmpAuditEcbBalanceSheetRepository;
import com.bourse.service.AdminService;

@Service
public class EcbBalanceSheetService {

@PersistenceContext
private EntityManager entityManager;

@Autowired
EcbBalanceSheetRepository ecbBalanceSheetRepository;

@Autowired
AdminService adminService;

@Autowired
TmpAuditEcbBalanceSheetRepository tmpAuditEcbBalanceSheetRepository;

public boolean CheckIfCanSave(String referDate) {
    long cnt = ecbBalanceSheetRepository.countByReferDate(referDate);
    return cnt == 0;
}

public boolean CheckIfCanSave(String referDate, Long subgroupId) {
    return ecbBalanceSheetRepository.existsByReferDateAndSubgroupId(referDate, subgroupId);
}

public void doCalculation(String referDate) {
    StoredProcedureQuery query =
            this.entityManager.createStoredProcedureQuery("calculation_ecb_balance_sheet");

    query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
    query.setParameter("referDate", referDate);
    query.execute();
}

public void doCalculation() {
    StoredProcedureQuery query =
            this.entityManager.createStoredProcedureQuery("calculation_ecb_balance_sheet_main");

    query.execute();
}

public void doCalculationLoader(String fromDate, String toDate) {
    StoredProcedureQuery query =
            this.entityManager.createStoredProcedureQuery("calculation_ecb_balance_sheet_loader");

    query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
    query.setParameter("fromDate", fromDate);

    query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
    query.setParameter("toDate", toDate);

    query.execute();
}

public List<EcbBalanceSheetLiquidity> SaveEcbBalanceSheetData(List<EcbBalanceSheetLiquidity> ecbBalanceSheetDataList) {
    return ecbBalanceSheetRepository.saveAll(ecbBalanceSheetDataList);
}

@SuppressWarnings("unchecked")
public List<TmpAuditEcbBalanceSheetLiquidity> getAuditData(String referDate) {

    boolean hasData = adminService.getData();

    if (!hasData) {
        return null;
    }

    StoredProcedureQuery query =
            this.entityManager.createStoredProcedureQuery(
                    "calculation_audit_ecb_balance_sheet",
                    TmpAuditEcbBalanceSheetLiquidity.class);

    query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
    query.setParameter("referDate", referDate);

    query.execute();

    return (List<TmpAuditEcbBalanceSheetLiquidity>) query.getResultList();
}

public void deleteEcbBalanceSheetByReferDate(String referDate) {

    List<EcbBalanceSheetLiquidity> ecbBalanceSheetList =
            ecbBalanceSheetRepository.findByReferDate(referDate);

    ecbBalanceSheetList.forEach(entity ->
            ecbBalanceSheetRepository.deleteById(entity.getId()));

    List<TmpAuditEcbBalanceSheetLiquidity> auditList =
            tmpAuditEcbBalanceSheetRepository.findByReferDate(referDate);

    auditList.forEach(entity ->
            tmpAuditEcbBalanceSheetRepository.deleteById(entity.getId()));
}

public String findLatestEcbBalanceSheetData() {

    boolean hasData = adminService.getData();

    if (!hasData) {
        return null;
    }

    return ecbBalanceSheetRepository.findLatestEcbBalanceSheet();
}

public void updateEcbBalanceSheetData(List<UpdateDataDTO> updateDataDTOlst) {

	EcbBalanceSheetLiquidity ecbBalanceSheet;

    for (UpdateDataDTO updateDataDTO : updateDataDTOlst) {

        ecbBalanceSheet =
                ecbBalanceSheetRepository.findEcbBalanceSheetByReferDateAndSubgroupId(
                        updateDataDTO.getReferdate(),
                        Long.valueOf(updateDataDTO.getSubgroupId()));

        if (ecbBalanceSheet != null) {
            ecbBalanceSheet.setValue(updateDataDTO.getValue());
            ecbBalanceSheetRepository.save(ecbBalanceSheet);
        }
    }
}

@Transactional
public void updateValue(String date, Long subgroupId, String value) {

	EcbBalanceSheetLiquidity entity =
            ecbBalanceSheetRepository.findEcbBalanceSheetByReferDateAndSubgroupId(
                    date,
                    subgroupId);

    if (entity != null) {
        entity.setValue(value);
        ecbBalanceSheetRepository.save(entity);
    }
}

}