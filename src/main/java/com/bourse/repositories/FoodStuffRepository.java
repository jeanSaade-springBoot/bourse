package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.FoodStuffData;

public interface FoodStuffRepository extends JpaRepository<FoodStuffData, Long>{
	public long countByReferDate(String referDate);

	public List<FoodStuffData> findByReferDate(String referDate);
	
	 @Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from foodstuff_data",
             nativeQuery = true)
	public String findLatestFoodStuffData();

	public FoodStuffData findFoodStuffByReferDateAndSubgroupId(String referdate, Long valueOf);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);
}
