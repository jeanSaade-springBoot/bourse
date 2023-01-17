package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditPrecious;

public interface TmpAuditPreciousRepository extends JpaRepository<TmpAuditPrecious, Long> {

	List<TmpAuditPrecious> findByReferDate(String referDate);

}
