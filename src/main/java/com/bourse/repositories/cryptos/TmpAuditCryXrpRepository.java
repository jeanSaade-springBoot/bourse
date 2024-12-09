package com.bourse.repositories.cryptos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.cryptos.TmpAuditCryXrp;


public interface TmpAuditCryXrpRepository extends JpaRepository<TmpAuditCryXrp, Long> {

	List<TmpAuditCryXrp> findByReferDate(String referDate);

	 @Query(value = "SELECT * FROM tmp_audit_cry_xrp l ORDER BY STR_TO_DATE(l.refer_Date,'%d-%m-%Y') DESC LIMIT 1;",
				      nativeQuery = true)
	TmpAuditCryXrp findFirstOrderByReferDateDesc();

	void deleteDataByReferDate(String referDate);

}
