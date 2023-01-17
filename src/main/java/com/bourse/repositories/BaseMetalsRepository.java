package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.BaseMetals;

public interface BaseMetalsRepository extends JpaRepository<BaseMetals, Long>{
	public long countByReferDate(String referDate);

	public List<BaseMetals> findByReferDate(String referDate);
	
	 @Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from base_metals",
             nativeQuery = true)
	public String findLatestBaseData();

	public BaseMetals findBaseMetalsByReferDateAndSubgroupId(String referdate, Long valueOf);
}
