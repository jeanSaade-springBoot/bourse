package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;

import javax.persistence.PersistenceContext;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bourse.domain.AssetClass;
import com.bourse.repositories.AssetClassRepository;
import com.bourse.repositories.ConfigurationRepository;


@Service
public class AssetClassService 
{
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	AssetClassRepository assetClassRepository;
	
	@Autowired
	ConfigurationRepository configurationRepository;
	
	public List<AssetClass> getAllAssetClass()
	{      
        return assetClassRepository.findAll();
	}


}
