package com.bourse.repositories.skews;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.skews.ShortSkewsData;

public interface ShortSkewsRepository extends JpaRepository<ShortSkewsData, Long> {
	public List<ShortSkewsData> findShortSkewsDataByReferDate(String referDate);
	public void deleteShortSkewsDataByReferDate(String referDate);
}
