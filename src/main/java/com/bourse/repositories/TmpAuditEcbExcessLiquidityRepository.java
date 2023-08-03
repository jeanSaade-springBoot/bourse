package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditEcbExcessLiquidity;


public interface TmpAuditEcbExcessLiquidityRepository extends JpaRepository<TmpAuditEcbExcessLiquidity, Long> {

	List<TmpAuditEcbExcessLiquidity> findByReferDate(String referDate);

}
