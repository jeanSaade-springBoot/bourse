package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.bourse.domain.longEnds.TmpAuditLefBundsRolling;


public interface TmpAuditLefBundsRollingRepository extends JpaRepository<TmpAuditLefBundsRolling, Long> {

	List<TmpAuditLefBundsRolling> findByReferDate(String referDate);

}
