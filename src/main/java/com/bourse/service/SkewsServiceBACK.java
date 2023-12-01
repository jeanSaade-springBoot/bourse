package com.bourse.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.SkewsData;
import com.bourse.repositories.SkewsRepository;

@Service
public class SkewsServiceBACK 
{
	@Autowired
	SkewsRepository skewsRepository;
	
	public List<SkewsData> getAllSkewsDatas()
	{      
        return skewsRepository.findAll();
	}
	public List<SkewsData> SaveSKewsDatas(List<SkewsData> plst) 
	{      
        return skewsRepository.saveAll(plst);
	}
}
