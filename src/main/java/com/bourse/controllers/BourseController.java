package com.bourse.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bourse.domain.Person;
import com.bourse.dto.DataDTO;
import com.bourse.dto.PersonReqDTO;
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
	@RequestMapping( value =  "/dataentry")
    public ModelAndView dataEntrePage(ModelMap model)
    {
		return new ModelAndView("html/dataentry");
    }
	@PostMapping(value = "savedata", produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<List<Person>>  registerpatient(@RequestBody DataDTO dataDTO){
		

	    String str= dataDTO.getExcelData();
	    List<Person> personList = new ArrayList();
	     
	     String[] lines = str.split("\n");
	     List<String> column = new ArrayList<>();
	     for(String st : lines)
	     {
	    	 String[] strColumn =  st.split("\t");
	    	 Person p=Person.builder().name(strColumn[0])
	 				.address(strColumn[1])
	 				.comment(strColumn[2])
	 				.build();
	    	
	    	 for(String stcol : strColumn)
	    	 {
	    	  System.out.println(stcol);
	    	 }
	    	 personList.add(p);
	     }
	 	personService.SavePersons(personList);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@GetMapping(value = "getpersons", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<Person>>  getPersons(){
		return new ResponseEntity<>(personService.getAllPersons(),
				HttpStatus.OK);
    }
}
