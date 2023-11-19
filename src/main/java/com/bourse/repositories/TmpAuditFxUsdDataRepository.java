package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditFxUsdData;


public interface TmpAuditFxUsdDataRepository extends JpaRepository<TmpAuditFxUsdData, Long> {

	List<TmpAuditFxUsdData> findByReferDate(String referDate);

}
