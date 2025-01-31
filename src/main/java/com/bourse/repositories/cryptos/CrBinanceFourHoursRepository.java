package com.bourse.repositories.cryptos;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.cryptos.CrBinanceFourHours;


public interface CrBinanceFourHoursRepository extends JpaRepository<CrBinanceFourHours, Long> {

	@Query(value = " SELECT MAX(start_time) from cr_binance_four_hours;",
	         nativeQuery = true)
	public String findLatest();
	
	CrBinanceFourHours findByStartTime(LocalDateTime startTime);

}
