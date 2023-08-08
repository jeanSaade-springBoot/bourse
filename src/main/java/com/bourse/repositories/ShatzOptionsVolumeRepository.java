package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.ShatzOptionsVolume;

public interface ShatzOptionsVolumeRepository extends JpaRepository<ShatzOptionsVolume, Long> {
	public long countByReferDate(String referDate);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

	public List<ShatzOptionsVolume> findByReferDate(String referDate);

	public ShatzOptionsVolume findByReferDateAndSubgroupId(String referdate, Long valueOf);
	 
	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from shatz_options_volume",
             nativeQuery = true)
	public String findLatest();
}
