package com.bourse.repositories.cryptos;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.cryptos.CrEthereumFourHours;


public interface CrEthereumFourHoursRepository extends JpaRepository<CrEthereumFourHours, Long> {

	@Query(value = " SELECT MAX(start_time) from cr_ethereum_four_hours;",
	         nativeQuery = true)
	public String findLatest();
	
	CrEthereumFourHours findByStartTime(LocalDateTime startTime);

}
