package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.bourse.domain.longEnds.TmpAuditLefBtpRolling;



public interface TmpAuditLefBtpRollingRepository extends JpaRepository<TmpAuditLefBtpRolling, Long> {

	List<TmpAuditLefBtpRolling> findByReferDate(String referDate);

}
