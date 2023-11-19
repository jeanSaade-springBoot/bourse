package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.FxUsdData;

public interface FxUsdDataRepository extends JpaRepository<FxUsdData, Long> {
	public long countByReferDate(String referDate);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

	public List<FxUsdData> findByReferDate(String referDate);

	public FxUsdData findByReferDateAndSubgroupId(String referdate, Long valueOf);
	 
	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from fx_usd_data",
             nativeQuery = true)
	public String findLatest();
}
