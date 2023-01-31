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
	@Autowired
	AdminService adminService;
	
	public DataEntryFilterHistory findDataEntryFilterHistoryByScreenName(String screenName) 
	{   boolean hasData= adminService.getData();
	    if(!hasData)
		return null;   
        return dataEntryFilterHistoryRepository.findByScreenName(screenName);
	}
	public DataEntryFilterHistory SaveDataEntryFilterHistory(DataEntryFilterHistory dataEntryFilterHistory) 
	{     
		DataEntryFilterHistory data = dataEntryFilterHistoryRepository.findByScreenName(dataEntryFilterHistory.getScreenName());
		data.setFilterHistory(dataEntryFilterHistory.getFilterHistory());
        return dataEntryFilterHistoryRepository.save(data);
	}
}
