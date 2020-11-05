package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;

import javax.persistence.PersistenceContext;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bourse.domain.Groups;
import com.bourse.repositories.ConfigurationRepository;
import com.bourse.repositories.GroupsRepository;


@Service
public class GroupsService 
{
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	GroupsRepository groupsRepository;
	
	@Autowired
	ConfigurationRepository configurationRepository;
	
	public List<Groups> getGroupsByAssetId(String familyId)
	{      
        return groupsRepository.findByAssetId(familyId);
	}
	
	public List<Groups> getAllGroups()
	{      
        return groupsRepository.findAll();
	}


}
