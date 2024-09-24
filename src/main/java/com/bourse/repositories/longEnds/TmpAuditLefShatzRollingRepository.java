package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;



import com.bourse.domain.longEnds.TmpAuditLefShatzRolling;


public interface TmpAuditLefShatzRollingRepository extends JpaRepository<TmpAuditLefShatzRolling, Long> {

	List<TmpAuditLefShatzRolling> findByReferDate(String referDate);

}
