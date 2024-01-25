package com.bourse.repositories.skews;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.skews.TmpAuditSkewsBobl2Maturity;

public interface TmpAuditSkewsBobl2MaturityRepository extends JpaRepository<TmpAuditSkewsBobl2Maturity, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
