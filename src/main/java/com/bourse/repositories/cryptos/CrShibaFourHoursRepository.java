package com.bourse.repositories.cryptos;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.cryptos.CrShibaFourHours;


public interface CrShibaFourHoursRepository extends JpaRepository<CrShibaFourHours, Long> {

	@Query(value = " SELECT MAX(start_time) from cr_shiba_four_hours;",
	         nativeQuery = true)
	public String findLatest();
	
	CrShibaFourHours findByStartTime(LocalDateTime startTime);

}
