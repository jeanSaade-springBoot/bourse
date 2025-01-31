package com.bourse.repositories.cryptos;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.cryptos.CrBitcoinFourHours;


public interface CrBitcoinFourHoursRepository extends JpaRepository<CrBitcoinFourHours, Long> {

	@Query(value = " SELECT MAX(start_time) from cr_bitcoin_four_hours;",
	         nativeQuery = true)
	public String findLatest();
	
	CrBitcoinFourHours findByStartTime(LocalDateTime startTime);

}
