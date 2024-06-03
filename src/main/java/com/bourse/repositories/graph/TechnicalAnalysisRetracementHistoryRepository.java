package com.bourse.repositories.graph;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.graph.TechnicalAnalysisRetracementHistory;
public interface TechnicalAnalysisRetracementHistoryRepository extends JpaRepository<TechnicalAnalysisRetracementHistory, Long> {
	public List<TechnicalAnalysisRetracementHistory> findRetracementHistoryByGraphIdAndUserName(String graphId,String userName);

	public List<TechnicalAnalysisRetracementHistory> findRetracementHistoryByUserName(String userName);

	public List<TechnicalAnalysisRetracementHistory> findRetracementHistoryByGraphId(String graphid);

	public Optional<TechnicalAnalysisRetracementHistory> findRetracementHistoryById(Long dbId);
}
