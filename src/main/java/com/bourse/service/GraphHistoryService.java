package com.bourse.service;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.GraphHistory;
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
        return graphHistoryRepository.findGraphHistoryByScreenName(screenName);
	}
	public GraphHistory SaveGraphHistory(GraphHistory graphHistory, Long id) 
	{   if (id!=null)
		graphHistoryRepository.deleteById(id);
	
        return graphHistoryRepository.save(graphHistory);
	}
}
