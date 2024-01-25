package com.bourse.repositories.skews;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.skews.TmpAuditSkewsEuribor4Mtty;

public interface TmpAuditSkewsEuribor4MttyRepository extends JpaRepository<TmpAuditSkewsEuribor4Mtty, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
