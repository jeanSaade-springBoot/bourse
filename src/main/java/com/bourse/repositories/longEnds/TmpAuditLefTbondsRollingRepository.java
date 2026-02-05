package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.longEnds.TmpAuditLefTbondsRolling;


public interface TmpAuditLefTbondsRollingRepository extends JpaRepository<TmpAuditLefTbondsRolling, Long> {

	List<TmpAuditLefTbondsRolling> findByReferDate(String referDate);
	void deleteDataByReferDate(String referDate);
}
