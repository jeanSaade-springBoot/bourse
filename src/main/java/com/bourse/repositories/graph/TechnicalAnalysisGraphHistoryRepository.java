package com.bourse.repositories.graph;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.graph.TechnicalAnalysisGraphHistory;
public interface TechnicalAnalysisGraphHistoryRepository extends JpaRepository<TechnicalAnalysisGraphHistory, Long> {
	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByGraphIdAndUserName(String graphId,String userName);

	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserName(String userName);

	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByGraphId(String graphid);

	public Optional<TechnicalAnalysisGraphHistory> findGraphHistoryById(Long dbId);

	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserNameAndScreenName(String userName, String screenName);
	
	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserNameAndScreenNameAndIsShared(String userName, String screenName, Boolean isShared);

	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByScreenNameAndIsShared(String screenName, Boolean isShared);

}
