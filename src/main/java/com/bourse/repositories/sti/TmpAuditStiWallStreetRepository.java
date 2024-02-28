package com.bourse.repositories.sti;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.sti.TmpAuditStiWallStreet;

public interface TmpAuditStiWallStreetRepository extends JpaRepository<TmpAuditStiWallStreet, Long> {
	@Transactional
	public void deleteDataByReferDate(String referDate);
}
