package com.bourse.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.Person;
import com.bourse.repositories.PersonRepository;

@Service
public class PersonService 
{
	@Autowired
	PersonRepository personRepository;
	
	public List<Person> getAllPersons() 
	{      
        return personRepository.findAll();
	}
	public List<Person> SavePersons(List<Person> plst) 
	{      
        return personRepository.saveAll(plst);
	}
}
