package com.bourse.repositories.skews;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.skews.LongSkewsData;

public interface LongSkewsRepository extends JpaRepository<LongSkewsData, Long> {

	public List<LongSkewsData> findLongSkewsDataByReferDate(String referDate);
	public void deleteLongSkewsDataByReferDate(String referDate);
}
