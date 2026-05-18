package com.bourse.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.PreciousMetals;

public interface PreciousMetalsRepository extends JpaRepository<PreciousMetals, Long>{
	public long countByReferDate(String referDate);
	
	 @Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from precious_metals",
             nativeQuery = true)
    public String findLatestPreciousData();

	public List<PreciousMetals> findByReferDate(String referDate);

	public PreciousMetals findPreciousMetalsByReferDateAndSubgroupId(String referdate, Long valueOf);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);
	
	@Query("SELECT CONCAT(p.referDate, '_', p.subgroupId) FROM PreciousMetals p WHERE p.referDate BETWEEN :startDate AND :endDate")
	List<String> findExistingKeys(@Param("startDate") String startDate, @Param("endDate") String endDate);

	@Modifying
	@Query(" UPDATE PreciousMetals p SET p.value = :value WHERE p.referDate = :date AND p.subgroupId = :subgroupId ")
	int updateValue(@Param("date") String date, @Param("subgroupId") Long subgroupId, @Param("value") String value);
}
