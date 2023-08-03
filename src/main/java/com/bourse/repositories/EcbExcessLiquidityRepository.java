package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.EcbExcessLiquidity;

public interface EcbExcessLiquidityRepository extends JpaRepository<EcbExcessLiquidity, Long> {
	public long countByReferDate(String referDate);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

	public List<EcbExcessLiquidity> findByReferDate(String referDate);

	public EcbExcessLiquidity findEcbExcessLiquidityByReferDateAndSubgroupId(String referdate, Long valueOf);
	 
	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from ecb_excess_liquidity",
             nativeQuery = true)
	public String findLatestEcbExcessLiquidity();
}
