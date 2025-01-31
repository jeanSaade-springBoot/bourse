package com.bourse.repositories.cryptos;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.cryptos.CrSolanaFourHours;


public interface CrSolanaFourHoursRepository extends JpaRepository<CrSolanaFourHours, Long> {

	@Query(value = " SELECT MAX(start_time) from cr_solana_four_hours;",
	         nativeQuery = true)
	public String findLatest();
	
	CrSolanaFourHours findByStartTime(LocalDateTime startTime);

}
