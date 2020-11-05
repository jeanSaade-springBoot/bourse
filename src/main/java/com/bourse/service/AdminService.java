package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;

import javax.persistence.PersistenceContext;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.SubGroup;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.ConfigurationRepository;
import com.bourse.repositories.SubGroupRepository;


@Service
public class AdminService 
{
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	SubGroupRepository subGroupRepository;
	
	@Autowired
	ConfigurationRepository configurationRepository;
	
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	
	public List<SubGroup> getAllSubGroups()
	{      
        return subGroupRepository.findAll(Sort.by("id").descending());
	}
	
	public List<SubGroup> getSubGroupsByGroupId(String groupId)
	{      
        return subGroupRepository.findByGroupId(groupId);
	}
	
	public List<ColumnConfiguration> getColumnsConfiguration()
	{      
        return columnConfigurationRepository.findAll();
	}
	
	public List<ColumnConfiguration> getColumnsConfigurationByGroupAndSubgroup(String groupId,String subgroupId)
	{      
        return columnConfigurationRepository.findByGroupIdAndSubgroupId(groupId, subgroupId);
	}
	
	
	



}
