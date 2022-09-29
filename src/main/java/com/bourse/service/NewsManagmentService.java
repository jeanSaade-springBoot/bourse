package com.bourse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.repositories.NewsFunctionRepository;
import com.bourse.repositories.NewsRepository;

@Service
public class NewsManagmentService {
	@Autowired
    NewsRepository newsRepository;
	@Autowired
	NewsFunctionRepository newsFunctionRepository;
	
	public void showGeneratedNews()
	{
		newsRepository.showGeneratedNews();
		newsFunctionRepository.showGeneratedNews();
	}

}
