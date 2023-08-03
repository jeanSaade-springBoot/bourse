package com.bourse.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.bourse.domain.AllNewsView;
import com.bourse.repositories.AllNewsViewRepository;

@Service
public class AllNewsViewService {
	
	@Autowired
	AllNewsViewRepository allNewsViewRepository;
	

	public int getPages(String pageNo, String pageSize , String assetId, String isbold){
		
		Pageable pageable = PageRequest.of(Integer.valueOf(pageNo) , Integer.valueOf(pageSize));
		Page<AllNewsView> page = null;
		if(assetId.equalsIgnoreCase("0"))
			page =  isbold.equalsIgnoreCase("true")?allNewsViewRepository.findAllByIsPublishedAndIsBold("1",pageable,isbold):allNewsViewRepository.findAllByIsPublished("1",pageable);
		else
			page =  isbold.equalsIgnoreCase("true")?allNewsViewRepository.findAllByIsPublishedAndAssetId("1",assetId,pageable):allNewsViewRepository.findAllByIsPublishedAndAssetIdAndIsBold("1",assetId,pageable,isbold);
		
		int totalPages = page.getTotalPages();
		
		System.out.println("Total Pages: " + totalPages);
		return totalPages;
	}
	
	public Page<AllNewsView> getAllNews(String assetId,String pageNo, String pageSize){
		Pageable pageable = PageRequest.of(Integer.valueOf(pageNo) , Integer.valueOf(pageSize));
		return allNewsViewRepository.findByAssetId(assetId, pageable);
	}
	public List<AllNewsView> findByIsPublishedFormatedDate(String pageNo, String pageSize){
		Pageable pageable = PageRequest.of(Integer.valueOf(pageNo) , Integer.valueOf(pageSize));
		return allNewsViewRepository.findByIsPublished("1",pageable);
	}
	public List<AllNewsView> findByIsPublishedFormatedDate(String assetId){
		return allNewsViewRepository.findByIsPublishedAndAssetId("1",assetId);
	}
	public List<AllNewsView> findByIsPublishedFormatedDate(String assetId,String pageNo, String pageSize){
		Pageable pageable = PageRequest.of(Integer.valueOf(pageNo) , Integer.valueOf(pageSize));
		return allNewsViewRepository.findByIsPublishedAndAssetId("1",assetId,pageable);
	}
	
	public List<AllNewsView> findByIsPublishedAndIsBold(String isBold, String assetId,String pageNo, String pageSize) {
		
		Pageable pageable = PageRequest.of(Integer.valueOf(pageNo) , Integer.valueOf(pageSize));
		List<AllNewsView> allNewsView = null;
		if(assetId.equalsIgnoreCase("0"))
			allNewsView =  allNewsViewRepository.findByIsPublishedAndIsBold("1",isBold,pageable);
		else
			allNewsView = allNewsViewRepository.findByIsPublishedAndIsBoldAndAssetId("1",isBold,assetId,pageable);
		
		return allNewsView;
	}

	public Page<AllNewsView> findNewsByIsPublishedAndGroupIdAndSubgroupId(String groupId, String subGroupId, String pageNo, String pageSize) {
		Pageable pageable = PageRequest.of(Integer.valueOf(pageNo) , Integer.valueOf(pageSize));
		Page<AllNewsView> newsPage = allNewsViewRepository.findByIsPublishedAndGroupIdAndSubgroupId("1",groupId,subGroupId,pageable);
		return newsPage;
	}
	public Page<AllNewsView> findAllNewsBySubGroupIdDescription(String subGroupIdDescription,String pageNo, String pageSize)  {
		Pageable pageable = PageRequest.of(Integer.valueOf(pageNo) , Integer.valueOf(pageSize));
		Page<AllNewsView> newsPage = allNewsViewRepository.findAllNewsByDescription(subGroupIdDescription,pageable);
		return newsPage;
	}
   public Page<AllNewsView> findAllNewsByFilters(String assetId,String robots,String generationDate,String template,String pageNo, String pageSize)
   { 
	   Page<AllNewsView> allNewsView=null;
		try {
	   if ("".equals(robots)) {
	        robots = null;
	    }

	    if ("".equals(generationDate)) {
	        generationDate = null;
	    }
	    else {
	    	 SimpleDateFormat inputFormat = new SimpleDateFormat("EEE MMM dd yyyy HH:mm:ss");
	 	     Date date = inputFormat.parse(generationDate);
			
	 	     SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	 	     generationDate = outputFormat.format(date);
	    }
	    if ("".equals(template)) {
	        template = null;
	    }
	    SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	  
	   Pageable pageable = PageRequest.of(Integer.valueOf(pageNo) , Integer.valueOf(pageSize));
	   allNewsView = allNewsViewRepository.findAllNewsByFilters(assetId,robots,generationDate,template,pageable);
	   
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return allNewsView;
   }
   
}
