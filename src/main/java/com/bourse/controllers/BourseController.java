package com.bourse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bourse.domain.Person;
import com.bourse.service.PersonService;
@RestController
@RequestMapping(value = "bourse")
public class BourseController {

	@Autowired
	private final PersonService personService;
	
	public BourseController(PersonService personService)
	{
		this.personService            = personService;
	}
	
	@RequestMapping( value =  "/home")
    public ModelAndView mainPage(ModelMap model)
    {
		return new ModelAndView("html/index");
    }
	
	
	@GetMapping(value = "getpersons", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<Person>>  getPersons(){
		return new ResponseEntity<>(personService.getAllPersons(),
				HttpStatus.OK);
    }
}
