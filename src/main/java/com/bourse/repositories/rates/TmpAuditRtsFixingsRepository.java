package com.bourse.repositories.rates;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.rates.TmpAuditRtsFixings;


public interface TmpAuditRtsFixingsRepository extends JpaRepository<TmpAuditRtsFixings, Long> {

	List<TmpAuditRtsFixings> findByReferDate(String referDate);

}
