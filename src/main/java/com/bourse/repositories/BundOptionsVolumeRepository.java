package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.BundOptionsVolume;

public interface BundOptionsVolumeRepository extends JpaRepository<BundOptionsVolume, Long> {
	public long countByReferDate(String referDate);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

	public List<BundOptionsVolume> findByReferDate(String referDate);

	public BundOptionsVolume findBundOptionsVolumeByReferDateAndSubgroupId(String referdate, Long valueOf);
	 
	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from bund_options_volume",
             nativeQuery = true)
	public String findLatestBundOptionsVolume();
}
