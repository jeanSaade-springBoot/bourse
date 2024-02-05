package com.bourse.repositories.skews;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.skews.ShortSkewsData;

public interface ShortSkewsRepository extends JpaRepository<ShortSkewsData, Long> {
	
	public long countByReferDate(String referDate);
	public ShortSkewsData findShortSkewsDataByReferDateAndGroupIdAndSubgroupIdAndFactorId(String referDate,Long groupId,Long subgroupId,Long factorId);
	@Transactional
	public void deleteShortSkewsDataByReferDate(String referDate);
	
	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from short_skews_data",
            nativeQuery = true)
	public String findLatest();
}
