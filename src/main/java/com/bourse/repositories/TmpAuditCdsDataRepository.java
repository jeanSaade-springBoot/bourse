package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditCdsData;
import com.bourse.domain.TmpAuditFxUsdData;


public interface TmpAuditCdsDataRepository extends JpaRepository<TmpAuditCdsData, Long> {

	List<TmpAuditCdsData> findByReferDate(String referDate);

}
