package com.bourse.service;

import java.util.List;

import javax.persistence.EntityManager;

import javax.persistence.PersistenceContext;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bourse.domain.Functions;
import com.bourse.repositories.FunctionsRepository;


@Service
public class FunctionsService 
{
	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	FunctionsRepository functionsRepository;
	
	public List<Functions> getFunctions()
	{      
        return functionsRepository.findAll();
	}


}
