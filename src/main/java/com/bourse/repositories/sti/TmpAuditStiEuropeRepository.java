package com.bourse.repositories.sti;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.sti.TmpAuditStiEurope;

public interface TmpAuditStiEuropeRepository extends JpaRepository<TmpAuditStiEurope, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
