package com.bourse.repositories.skews;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bourse.domain.skews.TmpAuditSkewsBobl3Maturity;

public interface TmpAuditSkewsBobl3MaturityRepository extends JpaRepository<TmpAuditSkewsBobl3Maturity, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
