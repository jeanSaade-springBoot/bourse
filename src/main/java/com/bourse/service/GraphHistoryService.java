package com.bourse.service;


import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.GraphHistory;
import com.bourse.domain.LowHighRobotsConfiguration;
import com.bourse.dto.GraphHistoryDTO;
import com.bourse.repositories.GraphHistoryRepository;

@Service
public class GraphHistoryService 
{

	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	GraphHistoryRepository graphHistoryRepository;
	
	public GraphHistory findGraphHistoryByScreenName(String screenName) 
	{      
		GraphHistory resp = GraphHistory.builder().build();
		Optional<GraphHistory> respOpt = graphHistoryRepository.findGraphHistoryByScreenName(screenName);
		if(respOpt.isPresent())
			resp = respOpt.get();
        return resp;
	}
	public GraphHistory SaveGraphHistory(GraphHistoryDTO graphHistorydto) 
	{  
		long id;
		Optional<GraphHistory> graphHistory = graphHistoryRepository.findGraphHistoryByScreenName(graphHistorydto.getScreenName());
	    if (graphHistory.isPresent())
	    {
	    	GraphHistory entity = graphHistory.get();
	    	id = entity.getId();
	    	entity = GraphHistory.builder()
	    		 .id(id)
				 .parameter(graphHistorydto.getParameter())
				 .screenName(graphHistorydto.getScreenName())
				.build();
		return graphHistoryRepository.save(entity);
	    }else {
	    	GraphHistory entity = graphHistory.get();
	    	entity = GraphHistory.builder()
	    	 .parameter(graphHistorydto.getParameter())
			 .screenName(graphHistorydto.getScreenName())
			.build();
			return graphHistoryRepository.save(entity);
	    }
	}
}
