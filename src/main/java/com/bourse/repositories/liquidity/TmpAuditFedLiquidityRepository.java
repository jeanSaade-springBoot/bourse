package com.bourse.repositories.liquidity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.liquidity.TmpAuditFedLiquidity;

public interface TmpAuditFedLiquidityRepository extends JpaRepository<TmpAuditFedLiquidity, Long> {
List<TmpAuditFedLiquidity> findByReferDate(String referDate);
}
