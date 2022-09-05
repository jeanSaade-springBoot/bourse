package com.bourse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.News;
import com.bourse.repositories.NewsRepository;

@Service
public class GraphNewsService {
	@Autowired
	NewsRepository newsRepository;
	@Autowired
	AdminService adminService;
	public List<News> findSelectedGraphNews(List<String> selectedGraphs) {
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		return newsRepository.findSelectedGraphNews(selectedGraphs);
	}

}
