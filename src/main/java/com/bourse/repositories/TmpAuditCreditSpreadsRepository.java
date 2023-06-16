package com.bourse.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditCreditSpreads;

public interface TmpAuditCreditSpreadsRepository extends JpaRepository<TmpAuditCreditSpreads, Long> {

	TmpAuditCreditSpreads findByReferDate(String referDate);

}
