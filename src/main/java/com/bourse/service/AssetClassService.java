package com.bourse.service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
        List<Long> ids = Arrays.asList(1L, 9L , 5L, 2L, 3L, 4L, 6L, 7L, 8L ); // Only 2 IDs
        List<AssetClass> assetClasses = assetClassRepository.findAllById(ids);
        
        // Create a map for easy lookup by id
        Map<Long, AssetClass> assetClassMap = assetClasses.stream()
                                                          .collect(Collectors.toMap(AssetClass::getId, ac -> ac));

        // Return the list in the specified order
        return ids.stream()
                  .map(assetClassMap::get)
                  .collect(Collectors.toList());
	}


}
