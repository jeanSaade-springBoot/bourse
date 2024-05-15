package com.bourse.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TechnicalAnalysisGraphHistory;
public interface TechnicalAnalysisGraphHistoryRepository extends JpaRepository<TechnicalAnalysisGraphHistory, Long> {
	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByGraphIdAndUserName(String graphId,String userName);

	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserName(String userName);

	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByGraphId(String graphid);

	public Optional<TechnicalAnalysisGraphHistory> findGraphHistoryById(Long dbId);
}
