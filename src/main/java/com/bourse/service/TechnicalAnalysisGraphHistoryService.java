package com.bourse.service;


import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.bourse.domain.TechnicalAnalysisGraphHistory;
import com.bourse.dto.TechnicalAnalysisGraphHistoryDTO;
import com.bourse.repositories.TechnicalAnalysisGraphHistoryRepository;

@Service
public class TechnicalAnalysisGraphHistoryService 
{

	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	TechnicalAnalysisGraphHistoryRepository technicalAnalysisGraphHistoryRepository;
	
	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserId( Authentication authentication) 
	{      
        return technicalAnalysisGraphHistoryRepository.findGraphHistoryByUserName(authentication.getName());
	}
	public TechnicalAnalysisGraphHistory SaveGraphHistory(TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication) 
	{  
		long id;
		Long dbId=(graphHistorydto.getDbId()!=null)?Long.valueOf(graphHistorydto.getDbId()):null;
		Optional<TechnicalAnalysisGraphHistory> graphHistory = technicalAnalysisGraphHistoryRepository.findGraphHistoryById(dbId);
	    if (graphHistory.isPresent())
	    {
	    	TechnicalAnalysisGraphHistory entity = graphHistory.get();
	    	id = entity.getId();
	    	entity = TechnicalAnalysisGraphHistory.builder()
	    		 .id(id)
	    		 .trendlines(graphHistorydto.getTrendlines())
		    	 .graphId(graphHistorydto.getGraphId())
				 .userName(authentication.getName())
				 .chartOptions(graphHistorydto.getChartOptions())
				 .isVisibleTrendline(graphHistorydto.getIsVisibleTrendline())
				 .channel(graphHistorydto.getChannel())
				 .isVisibleChannel(graphHistorydto.getIsVisibleChannel())
				.build();
	    	return technicalAnalysisGraphHistoryRepository.save(entity);
	    }else {
	    	TechnicalAnalysisGraphHistory entity = TechnicalAnalysisGraphHistory.builder()
	    	 .trendlines(graphHistorydto.getTrendlines())
	    	 .graphId(graphHistorydto.getGraphId())
			 .userName(authentication.getName())
			 .chartOptions(graphHistorydto.getChartOptions())
			 .isVisibleTrendline(graphHistorydto.getIsVisibleTrendline())
			 .channel(graphHistorydto.getChannel())
			 .isVisibleChannel(graphHistorydto.getIsVisibleChannel())
			.build();
			return technicalAnalysisGraphHistoryRepository.save(entity);
		}
		}
	
	public TechnicalAnalysisGraphHistory saveVisibiltyOfChannel(TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication) 
	{  
		Long dbId=(graphHistorydto.getDbId()!=null)?Long.valueOf(graphHistorydto.getDbId()):null;
		Optional<TechnicalAnalysisGraphHistory> graphHistory = technicalAnalysisGraphHistoryRepository.findGraphHistoryById(dbId);
	  
	    	TechnicalAnalysisGraphHistory entity = graphHistory.get();
	    	   entity.setIsVisibleChannel(graphHistorydto.getIsVisibleChannel());
	    	return technicalAnalysisGraphHistoryRepository.save(entity);
	    
		}
	public TechnicalAnalysisGraphHistory saveVisibiltyOfTrendline(TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication) 
	{  
		Long dbId=(graphHistorydto.getDbId()!=null)?Long.valueOf(graphHistorydto.getDbId()):null;
		Optional<TechnicalAnalysisGraphHistory> graphHistory = technicalAnalysisGraphHistoryRepository.findGraphHistoryById(dbId);
	  
	    	TechnicalAnalysisGraphHistory entity = graphHistory.get();
	    	   entity.setIsVisibleTrendline(graphHistorydto.getIsVisibleTrendline());
	    	return technicalAnalysisGraphHistoryRepository.save(entity);
	    
		}
	public void deleteTrendlineById(String id)
	{
		technicalAnalysisGraphHistoryRepository.deleteById(Long.valueOf(id));
	}
	public void deleteGraphHistoryByGraphId(String graphid, Authentication authentication) {
		List<TechnicalAnalysisGraphHistory> list = technicalAnalysisGraphHistoryRepository.findGraphHistoryByGraphIdAndUserName(graphid,authentication.getName());		
		list.forEach(
	            (data) -> {
	            	technicalAnalysisGraphHistoryRepository.deleteById(data.getId());
	            });
	}
}
