package com.bourse.repositories.rates;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.rates.RatesData;

public interface RatesDataRepository extends JpaRepository<RatesData, Long> {
	
	boolean existsByReferDateAndGroupId(String referDate, Long groupId);

	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from rates_data where group_id=:groupId",
	         nativeQuery = true)
	public String findLatest(@Param("groupId") String groupId);

	RatesData findRatesDataByReferDateAndGroupIdAndSubgroupId(String referdate, Long groupId, Long subgroupId);
	
	List<RatesData> findRatesDataByReferDateAndGroupId(String referdate, Long groupId);

	@Transactional
	public void deleteRatesDataByGroupIdAndReferDate(Long groupId, String referDate);

	boolean existsByReferDateAndGroupIdAndSubgroupIdAndFactorIdAndValueNot(String referDate, Long groupId,
			Long subgroupId, Long factorId, String string);

	RatesData findMacroDataByReferDateAndGroupIdAndSubgroupIdAndFactorId(String referdate, Long groupId, Long subgroupId,
			Long factorId);

	boolean existsByReferDateAndGroupIdAndSubgroupId(String referDate, Long groupId, Long subgroupId);

}
