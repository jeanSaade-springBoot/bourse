package com.bourse.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bourse.domain.SovereignData;
import com.bourse.domain.SovereignDataCorrected;
import com.bourse.repositories.SovereignYieldsCorrectedRepository;

@Service
public class SovereignYieldsCorrectedService 
{
	@Autowired
	SovereignYieldsCorrectedRepository sovereignYieldsCorrectedRepository;
	
	
	public SovereignDataCorrected findSovereignById(long id) 
	{      
        return sovereignYieldsCorrectedRepository.findById(id);
	}
	
	public List<SovereignDataCorrected> getAllSovereignData()
	{      
        return sovereignYieldsCorrectedRepository.findAll(Sort.by("id").descending());
	}
	public List<SovereignDataCorrected> SaveSovereignDatas(List<SovereignDataCorrected> plst) 
	{      
        return sovereignYieldsCorrectedRepository.saveAll(plst);
	}
	
	public SovereignDataCorrected editSovereignYields(SovereignDataCorrected sovereignDataCorrected) 
	{      
        return sovereignYieldsCorrectedRepository.save(sovereignDataCorrected);
	}
	
	
}
