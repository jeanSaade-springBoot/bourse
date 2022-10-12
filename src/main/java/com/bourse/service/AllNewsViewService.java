package com.bourse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.AllNewsView;
import com.bourse.repositories.AllNewsViewRepository;

@Service
public class AllNewsViewService {
	
	@Autowired
	AllNewsViewRepository allNewsViewRepository;
	
	public List<AllNewsView> getAllNews(){
		return allNewsViewRepository.findAll();
	}
	
	public List<AllNewsView> findByIsPublishedFormatedDate(){
		return allNewsViewRepository.findByIsPublished("1");
	}

	public List<AllNewsView> findByIsPublishedAndIsBold(String isBold) {
		return allNewsViewRepository.findByIsPublishedAndIsBold("1",isBold);
	}

	public List<AllNewsView> findNewsByIsPublishedAndGroupIdAndSubgroupId(String groupId, String subGroupId) {
		return allNewsViewRepository.findByIsPublishedAndGroupIdAndSubgroupId("1",groupId,subGroupId);
	}
	public List<AllNewsView> findAllNewsBySubGroupIdDescription(String subGroupIdDescription) {
		return allNewsViewRepository.findAllNewsByDescription(subGroupIdDescription);
	}

}
