package com.bourse.repositories.skews;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.skews.TmpAuditSkewsBund2Maturity;

public interface TmpAuditSkewsBund2MaturityRepository extends JpaRepository<TmpAuditSkewsBund2Maturity, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
