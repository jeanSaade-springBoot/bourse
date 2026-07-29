package com.bourse.repositories.liquidity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.liquidity.TmpAuditUsBanksReserveLiquidity;

public interface TmpAuditUsBanksReserveLiquidityRepository extends JpaRepository<TmpAuditUsBanksReserveLiquidity, Long> {
List<TmpAuditUsBanksReserveLiquidity> findByReferDate(String referDate);
}
