package com.bourse.repositories.skews;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.skews.TmpAuditSkewsBuxl2Maturity;

public interface TmpAuditSkewsBuxl2MaturityRepository extends JpaRepository<TmpAuditSkewsBuxl2Maturity, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
