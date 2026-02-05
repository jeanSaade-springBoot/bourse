package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.bourse.domain.longEnds.TmpAuditLefTnotes;



public interface TmpAuditLefTnotesRepository extends JpaRepository<TmpAuditLefTnotes, Long> {

	List<TmpAuditLefTnotes> findByReferDate(String referDate);

	 @Query(value = "SELECT * FROM tmp_audit_lef_tnotes l ORDER BY STR_TO_DATE(l.refer_Date,'%d-%m-%Y') DESC LIMIT 1;",
				      nativeQuery = true)
	TmpAuditLefTnotes findFirstOrderByReferDateDesc();

	 void deleteDataByReferDate(String referDate);
}
