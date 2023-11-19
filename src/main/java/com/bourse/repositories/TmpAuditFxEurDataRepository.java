package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditFxEurData;


public interface TmpAuditFxEurDataRepository extends JpaRepository<TmpAuditFxEurData, Long> {

	List<TmpAuditFxEurData> findByReferDate(String referDate);

}
