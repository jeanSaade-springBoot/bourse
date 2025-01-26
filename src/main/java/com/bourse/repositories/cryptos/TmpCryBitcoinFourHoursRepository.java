package com.bourse.repositories.cryptos;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.cryptos.TmpCryBitcoinFourHours;


public interface TmpCryBitcoinFourHoursRepository extends JpaRepository<TmpCryBitcoinFourHours, Long> {

	@Query(value = " SELECT MAX(start_time) from tmp_cry_bitcoin_four_hours;",
	         nativeQuery = true)
	public String findLatest();
	
	TmpCryBitcoinFourHours findByStartTime(LocalDateTime startTime);

}
