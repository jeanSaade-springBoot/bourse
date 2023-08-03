package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditEzMonetaryMassLiquidity;


public interface TmpAuditEzMonetaryMassRepository extends JpaRepository<TmpAuditEzMonetaryMassLiquidity, Long> {

	List<TmpAuditEzMonetaryMassLiquidity> findByReferDate(String referDate);

}
