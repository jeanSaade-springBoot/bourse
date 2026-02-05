package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.longEnds.TmpAuditLefBobls;



public interface TmpAuditLefBoblsRepository extends JpaRepository<TmpAuditLefBobls, Long> {

	List<TmpAuditLefBobls> findByReferDate(String referDate);

	 @Query(value = "SELECT * FROM tmp_audit_lef_bobls l ORDER BY STR_TO_DATE(l.refer_Date,'%d-%m-%Y') DESC LIMIT 1;",
				      nativeQuery = true)
	TmpAuditLefBobls findFirstOrderByReferDateDesc();
	 
	void deleteDataByReferDate(String referDate);


}
