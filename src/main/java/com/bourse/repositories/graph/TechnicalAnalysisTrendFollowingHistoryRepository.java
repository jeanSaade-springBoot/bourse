package com.bourse.repositories.graph;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.graph.TechnicalAnalysisTrendFollowingHistory;


public interface TechnicalAnalysisTrendFollowingHistoryRepository extends JpaRepository<TechnicalAnalysisTrendFollowingHistory, Long> {

	public List<TechnicalAnalysisTrendFollowingHistory> findGraphHistoryByUserName(String userName);
	
	public List<TechnicalAnalysisTrendFollowingHistory> findGraphHistoryByGroupIdAndUserNameAndIsShared(String groupId,String userName, Boolean isShared );

	public List<TechnicalAnalysisTrendFollowingHistory> findGraphHistoryByGroupIdAndIsShared(String groupId, Boolean isShared );

	
}
