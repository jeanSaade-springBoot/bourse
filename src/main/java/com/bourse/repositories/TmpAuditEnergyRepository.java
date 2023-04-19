package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditEnergy;

public interface TmpAuditEnergyRepository  extends JpaRepository<TmpAuditEnergy, Long> {

	List<TmpAuditEnergy> findByReferDate(String referDate);

}
