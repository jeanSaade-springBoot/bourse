package com.bourse.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.GraphHistory;
public interface GraphHistoryRepository extends JpaRepository<GraphHistory, Long> {
	public Optional<GraphHistory> findGraphHistoryByScreenName(String screenName);
}
