package com.bourse.repositories.sti;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.sti.TmpAuditStiCryptos;

public interface TmpAuditStiCryptosRepository extends JpaRepository<TmpAuditStiCryptos, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
