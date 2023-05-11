package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditTransportation;

public interface TmpAuditTrasnportationRepository  extends JpaRepository<TmpAuditTransportation, Long> {

	List<TmpAuditTransportation> findByReferDate(String referDate);

}
