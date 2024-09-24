package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.longEnds.TmpAuditLefBuxl;




public interface TmpAuditLefBuxlRepository extends JpaRepository<TmpAuditLefBuxl, Long> {

	List<TmpAuditLefBuxl> findByReferDate(String referDate);

	 @Query(value = "SELECT * FROM tmp_audit_lef_buxl l ORDER BY STR_TO_DATE(l.refer_Date,'%d-%m-%Y') DESC LIMIT 1;",
				      nativeQuery = true)
	TmpAuditLefBuxl findFirstOrderByReferDateDesc();

	void deleteDataByReferDate(String referDate);

}
