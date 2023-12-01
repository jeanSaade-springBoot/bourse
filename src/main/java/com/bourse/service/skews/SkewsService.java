package com.bourse.service.skews;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.skews.LongSkewsData;
import com.bourse.domain.skews.ShortSkewsData;
import com.bourse.repositories.skews.LongSkewsRepository;
import com.bourse.repositories.skews.ShortSkewsRepository;

@Service
public class SkewsService 
{
	@Autowired
	LongSkewsRepository longSkewsRepository;
	@Autowired
	ShortSkewsRepository shortSkewsRepository;
	// saveShortSkews
	// saveLongSkews
	
	//getLongSkewsDataByReferDate
	//getShortSkewsDataByReferDate
	
	public List<ShortSkewsData> saveShortSkews(List<ShortSkewsData> skewsDTOLst ){
		return shortSkewsRepository.saveAll(skewsDTOLst);
	}
	
	public List<LongSkewsData> saveLongSkews(List<LongSkewsData> skewsDTOLst ){
		return longSkewsRepository.saveAll(skewsDTOLst);
	}
	
	public List<LongSkewsData> getLongSkewsDataByReferDate(String referDate ){
		return longSkewsRepository.findLongSkewsDataByReferDate(referDate);
	}
	
	public List<ShortSkewsData> getShortSkewsDataByReferDate(String referDate ){
		return shortSkewsRepository.findShortSkewsDataByReferDate(referDate);
	}
	
	public void deleteLongSkewsDataByReferDate(String referDate ){
		 longSkewsRepository.deleteLongSkewsDataByReferDate(referDate);
	}
	
	public void deleteShortSkewsDataByReferDate(String referDate ){
		 shortSkewsRepository.deleteShortSkewsDataByReferDate(referDate);
	}
	
	
}
