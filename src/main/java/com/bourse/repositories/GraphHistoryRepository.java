package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.GraphHistory;
public interface GraphHistoryRepository extends JpaRepository<GraphHistory, Long> {
	public GraphHistory findGraphHistoryByScreenName(String screenName);
}
