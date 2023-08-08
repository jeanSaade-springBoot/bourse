package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.BoblOptionsVolume;

public interface BoblOptionsVolumeRepository extends JpaRepository<BoblOptionsVolume, Long> {
	public long countByReferDate(String referDate);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

	public List<BoblOptionsVolume> findByReferDate(String referDate);

	public BoblOptionsVolume findByReferDateAndSubgroupId(String referdate, Long valueOf);
	 
	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from bobl_options_volume",
             nativeQuery = true)
	public String findLatest();
}
