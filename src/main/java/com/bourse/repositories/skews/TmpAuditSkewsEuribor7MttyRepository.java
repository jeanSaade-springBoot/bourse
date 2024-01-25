package com.bourse.repositories.skews;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.skews.TmpAuditSkewsEuribor7Mtty;

public interface TmpAuditSkewsEuribor7MttyRepository extends JpaRepository<TmpAuditSkewsEuribor7Mtty, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
