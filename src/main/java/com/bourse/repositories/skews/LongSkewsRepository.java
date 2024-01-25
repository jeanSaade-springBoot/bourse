package com.bourse.repositories.skews;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.skews.LongSkewsData;

public interface LongSkewsRepository extends JpaRepository<LongSkewsData, Long> {

	public LongSkewsData findLongSkewsDataByReferDateAndGroupIdAndSubgroupIdAndFactorId(String referDate,Long groupId,Long subgroupId,Long factorId);
	@Transactional
	public void deleteLongSkewsDataByReferDate(String referDate);
	 
		@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from long_skews_data",
	             nativeQuery = true)
		public String findLatest();
}
