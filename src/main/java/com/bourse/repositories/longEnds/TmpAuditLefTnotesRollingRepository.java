package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;




import com.bourse.domain.longEnds.TmpAuditLefTnotesRolling;


public interface TmpAuditLefTnotesRollingRepository extends JpaRepository<TmpAuditLefTnotesRolling, Long> {

	List<TmpAuditLefTnotesRolling> findByReferDate(String referDate);

}
