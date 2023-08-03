package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.EcbQeLiquidity;

public interface EcbQeLiquidityRepository extends JpaRepository<EcbQeLiquidity, Long> {
	public long countByReferDate(String referDate);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

	public List<EcbQeLiquidity> findByReferDate(String referDate);

	public EcbQeLiquidity findEcbQeLiquidityByReferDateAndSubgroupId(String referdate, Long valueOf);
	 
	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from ecb_qe_liquidity",
             nativeQuery = true)
	public String findLatestEcbQeLiquidity();
}
