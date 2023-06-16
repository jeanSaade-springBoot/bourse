package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bourse.domain.TmpAuditCorporateYields;
import com.bourse.domain.TmpAuditCreditSpreads;

public interface TmpAuditCorporateYieldsRepository extends JpaRepository<TmpAuditCorporateYields, Long> {

	 TmpAuditCorporateYields findByReferDate(String referDate);
	
}
