package com.bourse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.ManualNews;
import com.bourse.repositories.ManualNewsRepository;


@Service
public class ManualNewsService {
	@Autowired
	ManualNewsRepository manualNewsRepository;
	
	public void saveManualNews(String newsId)
	{
		ManualNews manualNews = ManualNews.builder().newsId(newsId).build();
		manualNewsRepository.save(manualNews);
	}

}
