package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.longEnds.TmpAuditLefBoblsRolling;



public interface TmpAuditLefBoblsRollingRepository extends JpaRepository<TmpAuditLefBoblsRolling, Long> {

	List<TmpAuditLefBoblsRolling> findByReferDate(String referDate);

}
