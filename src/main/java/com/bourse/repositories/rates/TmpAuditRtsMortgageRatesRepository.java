package com.bourse.repositories.rates;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.rates.TmpAuditRtsMortgageRates;


public interface TmpAuditRtsMortgageRatesRepository extends JpaRepository<TmpAuditRtsMortgageRates, Long> {

	List<TmpAuditRtsMortgageRates> findByReferDate(String referDate);

}
