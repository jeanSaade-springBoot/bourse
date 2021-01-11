package com.bourse.service;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.DataEntryFilterHistory;
import com.bourse.repositories.DataEntryFilterHistoryRepository;

@Service
public class DataEntryFilterHistoryService 
{

	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	DataEntryFilterHistoryRepository dataEntryFilterHistoryRepository;
	
	public List<DataEntryFilterHistory> findDataEntryFilterHistory() 
	{      
        return dataEntryFilterHistoryRepository.findAll();
	}
	public DataEntryFilterHistory SaveDataEntryFilterHistory(DataEntryFilterHistory dataEntryFilterHistory) 
	{      
        return dataEntryFilterHistoryRepository.save(dataEntryFilterHistory);
	}
}
