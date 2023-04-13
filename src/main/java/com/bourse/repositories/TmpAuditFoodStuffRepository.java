package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditFoodStuff;

public interface TmpAuditFoodStuffRepository  extends JpaRepository<TmpAuditFoodStuff, Long> {

	List<TmpAuditFoodStuff> findByReferDate(String referDate);

}
