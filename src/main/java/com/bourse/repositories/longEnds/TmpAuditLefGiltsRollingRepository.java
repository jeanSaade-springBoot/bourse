package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.longEnds.TmpAuditLefGiltsRolling;



public interface TmpAuditLefGiltsRollingRepository extends JpaRepository<TmpAuditLefGiltsRolling, Long> {

	List<TmpAuditLefGiltsRolling> findByReferDate(String referDate);
	void deleteDataByReferDate(String referDate);
}
