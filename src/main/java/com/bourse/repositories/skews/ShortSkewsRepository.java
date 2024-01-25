package com.bourse.repositories.skews;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.skews.ShortSkewsData;

public interface ShortSkewsRepository extends JpaRepository<ShortSkewsData, Long> {
	public List<ShortSkewsData> findShortSkewsDataByReferDate(String referDate);
	public void deleteShortSkewsDataByReferDate(String referDate);
	
	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from short_skews_data",
            nativeQuery = true)
	public String findLatest();
}
