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
	
	public SovereignData findSovereignById(long id) 
	{      
        return sovereignYieldsRepository.findById(id);
	}
	
	public SovereignData UpdateSovereignById(SovereignData sovereignData) 
	{      
        return sovereignYieldsRepository.save(sovereignData);
	}
	
	public void deleteSovereignById(long id) 
	{      
        sovereignYieldsRepository.deleteById(id);
	}
	
	public List<SovereignData> findSovereignBySubGroup(long id) 
	{      
        return sovereignYieldsRepository.findSovereignBysubgroupId(id);
	}
	
}
