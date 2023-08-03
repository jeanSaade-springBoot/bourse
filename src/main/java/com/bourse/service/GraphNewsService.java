package com.bourse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.bourse.domain.AllNewsView;
import com.bourse.repositories.AllNewsViewRepository;
@Service
public class GraphNewsService {
	@Autowired
	AdminService adminService;
	@Autowired
	AllNewsViewRepository allNewsViewRepository;
	public Page<AllNewsView> findSelectedGraphNews(List<String> selectedGraphs, String pageNo, String pageSize) {
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		Pageable pageable = PageRequest.of(Integer.valueOf(pageNo) , Integer.valueOf(pageSize));
		return allNewsViewRepository.findByIsPublishedAndDescription(selectedGraphs ,pageable);
	}

}
