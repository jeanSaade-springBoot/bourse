package com.bourse.repositories.cryptos;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.cryptos.CrXrpFourHours;


public interface CrXrpFourHoursRepository extends JpaRepository<CrXrpFourHours, Long> {

	@Query(value = " SELECT MAX(start_time) from cr_xrp_four_hours;",
	         nativeQuery = true)
	public String findLatest();
	
	CrXrpFourHours findByStartTime(LocalDateTime startTime);

}
