package com.bourse.repositories.longEnds;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.longEnds.TmpAuditLefBunds;


public interface TmpAuditLefBundsRepository extends JpaRepository<TmpAuditLefBunds, Long> {

	List<TmpAuditLefBunds> findByReferDate(String referDate);
	Optional<TmpAuditLefBunds> findTmpAuditLefBundsByReferDate(String referDate);
	
	 @Query(value = "SELECT * FROM tmp_audit_lef_bunds l ORDER BY STR_TO_DATE(l.refer_Date,'%d-%m-%Y') DESC LIMIT 1;",
				      nativeQuery = true)
	TmpAuditLefBunds findFirstOrderByReferDateDesc();

	void deleteDataByReferDate(String referDate);

}
