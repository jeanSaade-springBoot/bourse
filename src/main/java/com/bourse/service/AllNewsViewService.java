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
	
	public List<AllNewsView> getAllNews(String assetId){
		return allNewsViewRepository.findByAssetId(assetId);
	}
	
	public List<AllNewsView> findByIsPublishedFormatedDate(String assetId){
		return allNewsViewRepository.findByIsPublishedAndAssetId("1",assetId);
	}

	public List<AllNewsView> findByIsPublishedAndIsBold(String isBold, String assetId) {
		return allNewsViewRepository.findByIsPublishedAndIsBoldAndAssetId("1",isBold,assetId);
	}

	public List<AllNewsView> findNewsByIsPublishedAndGroupIdAndSubgroupId(String groupId, String subGroupId) {
		return allNewsViewRepository.findByIsPublishedAndGroupIdAndSubgroupId("1",groupId,subGroupId);
	}
	public List<AllNewsView> findAllNewsBySubGroupIdDescription(String subGroupIdDescription) {
		return allNewsViewRepository.findAllNewsByDescription(subGroupIdDescription);
	}

}
