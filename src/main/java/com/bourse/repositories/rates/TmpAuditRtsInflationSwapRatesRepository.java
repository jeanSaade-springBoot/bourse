package com.bourse.repositories.rates;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.rates.TmpAuditRtsInflationSwapRates;



public interface TmpAuditRtsInflationSwapRatesRepository extends JpaRepository<TmpAuditRtsInflationSwapRates, Long> {

	List<TmpAuditRtsInflationSwapRates> findByReferDate(String referDate);

}
