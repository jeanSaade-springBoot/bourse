package com.bourse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.AllNewsView;
import com.bourse.domain.News;
import com.bourse.repositories.AllNewsViewRepository;
import com.bourse.repositories.NewsRepository;

@Service
public class GraphNewsService {
	@Autowired
	AdminService adminService;
	@Autowired
	AllNewsViewRepository allNewsViewRepository;
	public List<AllNewsView> findSelectedGraphNews(List<String> selectedGraphs) {
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		return allNewsViewRepository.findByIsPublishedAndDescription(selectedGraphs);
	}

}
