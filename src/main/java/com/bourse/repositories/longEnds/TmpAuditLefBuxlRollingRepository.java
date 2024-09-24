package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;



import com.bourse.domain.longEnds.TmpAuditLefBuxlRolling;


public interface TmpAuditLefBuxlRollingRepository extends JpaRepository<TmpAuditLefBuxlRolling, Long> {

	List<TmpAuditLefBuxlRolling> findByReferDate(String referDate);

}
