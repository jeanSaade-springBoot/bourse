package com.bourse.repositories.rates;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.rates.TmpAuditRtsCentralBanks;


public interface TmpAuditRtsCentralBanksRepository extends JpaRepository<TmpAuditRtsCentralBanks, Long> {

	List<TmpAuditRtsCentralBanks> findByReferDate(String referDate);

}
