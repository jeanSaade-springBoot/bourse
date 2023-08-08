package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.EuriborOptionsVolume;

public interface EuriborOptionsVolumeRepository extends JpaRepository<EuriborOptionsVolume, Long> {
	public long countByReferDate(String referDate);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

	public List<EuriborOptionsVolume> findByReferDate(String referDate);

	public EuriborOptionsVolume findByReferDateAndSubgroupId(String referdate, Long valueOf);
	 
	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from euribor_options_volume",
             nativeQuery = true)
	public String findLatest();
}
