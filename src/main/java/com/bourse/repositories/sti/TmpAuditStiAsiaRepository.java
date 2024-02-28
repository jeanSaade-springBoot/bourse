package com.bourse.repositories.sti;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.sti.TmpAuditStiAsia;

public interface TmpAuditStiAsiaRepository extends JpaRepository<TmpAuditStiAsia, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
