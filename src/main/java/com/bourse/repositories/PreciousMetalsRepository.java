package com.bourse.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.PreciousMetals;

public interface PreciousMetalsRepository extends JpaRepository<PreciousMetals, Long>{
	public long countByReferDate(String referDate);
	
	 @Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from precious_metals",
             nativeQuery = true)
    public String findLatestPreciousData();

	public List<PreciousMetals> findByReferDate(String referDate);

	public PreciousMetals findPreciousMetalsByReferDateAndSubgroupId(String referdate, Long valueOf);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

}
