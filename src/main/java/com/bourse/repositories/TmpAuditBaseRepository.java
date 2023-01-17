package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditBase;

public interface TmpAuditBaseRepository  extends JpaRepository<TmpAuditBase, Long> {

	List<TmpAuditBase> findByReferDate(String referDate);

}
