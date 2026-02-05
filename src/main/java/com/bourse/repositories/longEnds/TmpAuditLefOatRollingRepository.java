package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.longEnds.TmpAuditLefOatRolling;



public interface TmpAuditLefOatRollingRepository extends JpaRepository<TmpAuditLefOatRolling, Long> {

	List<TmpAuditLefOatRolling> findByReferDate(String referDate);
	void deleteDataByReferDate(String referDate);
}
