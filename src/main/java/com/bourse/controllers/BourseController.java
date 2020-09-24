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
import com.bourse.domain.SovereignData;
import com.bourse.dto.DataDTO;
import com.bourse.dto.PersonReqDTO;
import com.bourse.service.PersonService;
import com.bourse.service.SovereignYieldsService;
@RestController
@RequestMapping(value = "bourse")
public class BourseController {

	@Autowired
	private final PersonService personService;
	@Autowired
	private final SovereignYieldsService sovereignYieldsService;
	
	public BourseController(PersonService personService,
			SovereignYieldsService sovereignYieldsService)
	{
		this.personService            = personService;
		this.sovereignYieldsService   = sovereignYieldsService;
	}
	
	@RequestMapping( value =  "/home")
    public ModelAndView mainPage(ModelMap model)
    {
		return new ModelAndView("html/index");
    }
	@RequestMapping( value =  "/sovereignyields")
    public ModelAndView dataEntrePage(ModelMap model)
    {
		return new ModelAndView("html/sovereignyields");
    }
	@PostMapping(value = "savedata", produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<List<Person>>  registerpatient(@RequestBody DataDTO dataDTO){
		

	    String str= dataDTO.getExcelData();
	    List<SovereignData> sovereignDataList = new ArrayList();
	     
	     String[] lines = str.split("\n");
	     List<String> column = new ArrayList<>();
	     for(String st : lines)
	     {
	    	 String[] strColumn =  st.split("\t");
	    	 SovereignData sovereignData = SovereignData.builder().thirteeYrFactor(strColumn[0])
										 				.tenYrFactor(strColumn[1])
										 				.fiveYrFactor(strColumn[2])
										 				.twoYrFactor(strColumn[3])
										 				.referDate(strColumn[4])
										 				.build();
	    	
	    	 for(String stcol : strColumn)
	    	 {
	    	  System.out.println(stcol);
	    	 }
	    	 sovereignDataList.add(sovereignData);
	     }
	     sovereignYieldsService.SaveSovereignDatas(sovereignDataList);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@GetMapping(value = "getsovereignyields", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<SovereignData>>  getSovereignYields(){
		return new ResponseEntity<>(sovereignYieldsService.getAllSovereignDatas(), HttpStatus.OK);
    }
}
