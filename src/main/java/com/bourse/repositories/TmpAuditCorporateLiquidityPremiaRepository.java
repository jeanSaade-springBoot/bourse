package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditCorporateLiquidityPremia;

public interface TmpAuditCorporateLiquidityPremiaRepository extends JpaRepository<TmpAuditCorporateLiquidityPremia, Long> {

	TmpAuditCorporateLiquidityPremia findByReferDate(String referDate);
    
}
