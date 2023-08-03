package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.EurozoneMonetaryMass;

public interface EzMonetaryMassLiquidityRepository extends JpaRepository<EurozoneMonetaryMass, Long> {
	public long countByReferDate(String referDate);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

	public List<EurozoneMonetaryMass> findByReferDate(String referDate);

	public EurozoneMonetaryMass findEurozoneMonetaryMassByReferDateAndSubgroupId(String referdate, Long valueOf);
	 
	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from eurozone_monetary_mass",
             nativeQuery = true)
	public String findLatestEurozoneMonetaryMass();
}
