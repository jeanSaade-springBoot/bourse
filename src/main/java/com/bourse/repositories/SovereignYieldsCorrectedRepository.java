package com.bourse.repositories;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.SovereignDataCorrected;
public interface SovereignYieldsCorrectedRepository extends JpaRepository<SovereignDataCorrected, Long> {
	
	public SovereignDataCorrected findById(long id);
	public List<SovereignDataCorrected> findByReferDate(LocalDate referDate);
	
}
