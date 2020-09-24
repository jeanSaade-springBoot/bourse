package com.bourse.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.SovereignData;
import com.bourse.repositories.SovereignYieldsRepository;

@Service
public class SovereignYieldsService 
{
	@Autowired
	SovereignYieldsRepository sovereignYieldsRepository;
	
	public List<SovereignData> getAllSovereignDatas()
	{      
        return sovereignYieldsRepository.findAll();
	}
	public List<SovereignData> SaveSovereignDatas(List<SovereignData> plst) 
	{      
        return sovereignYieldsRepository.saveAll(plst);
	}
}
