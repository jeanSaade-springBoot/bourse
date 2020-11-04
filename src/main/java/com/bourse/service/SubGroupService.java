package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;

import javax.persistence.PersistenceContext;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bourse.domain.SubGroup;
import com.bourse.repositories.ConfigurationRepository;
import com.bourse.repositories.SubGroupRepository;


@Service
public class SubGroupService 
{
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	SubGroupRepository subGroupRepository;
	
	@Autowired
	ConfigurationRepository configurationRepository;
	
	public List<SubGroup> getAllSubGroups()
	{      
        return subGroupRepository.findAll(Sort.by("id").descending());
	}


}
