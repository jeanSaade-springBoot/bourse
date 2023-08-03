package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditEcbQeLiquidity;


public interface TmpAuditEcbQeLiquidityRepository extends JpaRepository<TmpAuditEcbQeLiquidity, Long> {

	List<TmpAuditEcbQeLiquidity> findByReferDate(String referDate);

}
