package com.bourse.repositories.liquidity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.liquidity.TmpAuditEcbBalanceSheetLiquidity;


public interface TmpAuditEcbBalanceSheetRepository extends JpaRepository<TmpAuditEcbBalanceSheetLiquidity, Long> {

List<TmpAuditEcbBalanceSheetLiquidity> findByReferDate(String referDate);

}
