package com.bourse.repositories.graph;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.graph.TechnicalAnalysisRelevantHistory;
public interface TechnicalAnalysisRelevantHistoryRepository extends JpaRepository<TechnicalAnalysisRelevantHistory, Long> {
	public List<TechnicalAnalysisRelevantHistory> findRelevantHistoryByGraphIdAndUserName(String graphId,String userName);

	public List<TechnicalAnalysisRelevantHistory> findRelevantHistoryByUserName(String userName);

	public List<TechnicalAnalysisRelevantHistory> findRelevantHistoryByGraphId(String graphid);

	public Optional<TechnicalAnalysisRelevantHistory> findRelevantHistoryById(Long dbId);
}
