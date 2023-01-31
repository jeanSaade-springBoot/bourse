package com.bourse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.News;
import com.bourse.domain.NewsFunction;
import com.bourse.repositories.NewsFunctionRepository;
import com.bourse.repositories.NewsRepository;

@Service
public class NewsManagmentService {
	@Autowired
    NewsRepository newsRepository;
	@Autowired
	NewsFunctionRepository newsFunctionRepository;
	
	public void showGeneratedNews(int assetId)
	{
		List<News> newsList = newsRepository.findAllByAssetIdAndIsVisible(String.valueOf(assetId),"0");
		newsList.forEach(news -> news.setIsVisible("1"));
		newsRepository.saveAll(newsList);
		
		List<NewsFunction> newsFunctionList = newsFunctionRepository.findAllByAssetIdAndIsVisible(String.valueOf(assetId),"0");
		newsList.forEach(news -> news.setIsVisible("1"));
		newsFunctionRepository.saveAll(newsFunctionList);
		
	}

}
