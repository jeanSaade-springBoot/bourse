package com.bourse.repositories.skews;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.skews.TmpAuditSkewsBund3Maturity;

public interface TmpAuditSkewsBund3MaturityRepository extends JpaRepository<TmpAuditSkewsBund3Maturity, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
