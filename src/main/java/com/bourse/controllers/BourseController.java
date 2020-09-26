package com.bourse.controllers;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
import com.bourse.domain.SkewsData;
import com.bourse.domain.SovereignData;
import com.bourse.dto.DataDTO;
import com.bourse.dto.PersonReqDTO;
import com.bourse.service.PersonService;
import com.bourse.service.SkewsService;
import com.bourse.service.SovereignYieldsService;
@RestController
@RequestMapping(value = "bourse")
public class BourseController {

	@Autowired
	private final PersonService personService;
	@Autowired
	private final SovereignYieldsService sovereignYieldsService;
	@Autowired
	private final SkewsService skewsService;
	
	public BourseController(PersonService personService,
			SovereignYieldsService sovereignYieldsService,
			SkewsService skewsService)
	{
		this.personService            = personService;
		this.sovereignYieldsService   = sovereignYieldsService;
		this.skewsService   = skewsService;
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
	@RequestMapping( value =  "/skews")
    public ModelAndView skewsDataEntrePage(ModelMap model)
    {
		return new ModelAndView("html/skews");
    }
	@PostMapping(value = "savedata", produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<List<SovereignData>>  saveData(@RequestBody DataDTO dataDTO){
		

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
	    	
	    	 sovereignDataList.add(sovereignData);
	     }
	     sovereignYieldsService.SaveSovereignDatas(sovereignDataList);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	@PostMapping(value = "savesovereigndata", produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<List<SovereignData>>  saveSovereignData(@RequestBody DataDTO dataDTO){
		

	    String str= dataDTO.getExcelData();
	    List<SovereignData> sovereignDataList = new ArrayList();
	     
	     String[] lines = str.split("\n");
	    
	     ArrayList<String> usaValues = new ArrayList<String>();
	     ArrayList<String> gerValues = new ArrayList<String>();
	     ArrayList<String> fraValues = new ArrayList<String>();
	     ArrayList<String> ukkValues = new ArrayList<String>();
	     ArrayList<String> itaValues = new ArrayList<String>();
	     ArrayList<String> spnValues = new ArrayList<String>();
	     
	     for(String st : lines)
	     {
	    	 String[] strColumn =  st.split("\t");
	    	 usaValues.add(strColumn[0]);
	    	 gerValues.add(strColumn[1]);
	    	 fraValues.add(strColumn[2]);
	    	 ukkValues.add(strColumn[3]);
	    	 itaValues.add(strColumn[4]);
	    	 spnValues.add(strColumn[5]);
	     }

    	 SovereignData sovereignUSAData = SovereignData.builder().thirteeYrFactor(usaValues.get(0))
									 				.tenYrFactor(usaValues.get(1))
									 				.fiveYrFactor(usaValues.get(2))
									 				.twoYrFactor(usaValues.get(3))
									 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
									 				.subgroupId((long) 1)
									 				.build();
    	 
    	 SovereignData sovereignGERData = SovereignData.builder().thirteeYrFactor(gerValues.get(0))
	 				.tenYrFactor(gerValues.get(1))
	 				.fiveYrFactor(gerValues.get(2))
	 				.twoYrFactor(gerValues.get(3))
	 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
	 				.subgroupId((long) 2)
	 				.build();
    	 
    	 SovereignData sovereignFRAData = SovereignData.builder().thirteeYrFactor(fraValues.get(0))
	 				.tenYrFactor(fraValues.get(1))
	 				.fiveYrFactor(fraValues.get(2))
	 				.twoYrFactor(fraValues.get(3))
	 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
	 				.subgroupId((long) 3)
	 				.build();
    	 
    	 SovereignData sovereignUKKData = SovereignData.builder().thirteeYrFactor(ukkValues.get(0))
	 				.tenYrFactor(ukkValues.get(1))
	 				.fiveYrFactor(ukkValues.get(2))
	 				.twoYrFactor(ukkValues.get(3))
	 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
	 				.subgroupId((long) 4)
	 				.build();
    	 
    	 SovereignData sovereignITAData = SovereignData.builder().thirteeYrFactor(itaValues.get(0))
	 				.tenYrFactor(itaValues.get(1))
	 				.fiveYrFactor(itaValues.get(2))
	 				.twoYrFactor(itaValues.get(3))
	 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
	 				.subgroupId((long) 5)
	 				.build();
    	 
    	 SovereignData sovereignSPNData = SovereignData.builder().thirteeYrFactor(spnValues.get(0))
	 				.tenYrFactor(spnValues.get(1))
	 				.fiveYrFactor(spnValues.get(2))
	 				.twoYrFactor(spnValues.get(3))
	 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
	 				.subgroupId((long) 6)
	 				.build();
    	 
    	 sovereignDataList.add(sovereignUSAData);
    	 sovereignDataList.add(sovereignGERData);
    	 sovereignDataList.add(sovereignFRAData);
    	 sovereignDataList.add(sovereignUKKData);
    	 sovereignDataList.add(sovereignITAData);
    	 sovereignDataList.add(sovereignSPNData);
    	 
	     sovereignYieldsService.SaveSovereignDatas(sovereignDataList);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	@PostMapping(value = "saveskewsdata", produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<List<SkewsData>>  saveSkews(@RequestBody DataDTO dataDTO){
		

	    String str= dataDTO.getExcelData();
	    List<SkewsData> skewsDataList = new ArrayList();
	     
	     String[] lines = str.split("\n");
	     List<String> column = new ArrayList<>();
	     for(String st : lines)
	     {
	    	 String[] strColumn =  st.split("\t");
	    	 SkewsData skewsData = SkewsData.builder().referDate(strColumn[0])
	    			                                  .fifteenPercentPFactor(strColumn[1])
										 			  .twentyfivePercentPFactor(strColumn[2])
										 			  .ATMFactor(strColumn[3])
										 			  .fifteenPercentCFactor(strColumn[4])
										 			  .twentyfivePercentCFactor(strColumn[5])
										 			  .build();
	    	
	    	 skewsDataList.add(skewsData);
	     }
	     skewsService.SaveSKewsDatas(skewsDataList);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	@GetMapping(value = "getsovereignyields", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<SovereignData>>  getSovereignYields(){
		return new ResponseEntity<>(sovereignYieldsService.getAllSovereignDatas(), HttpStatus.OK);
    }
	@GetMapping(value = "getskews", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<SkewsData>>  getSkews(){
		return new ResponseEntity<>(skewsService.getAllSkewsDatas(), HttpStatus.OK);
    }
}
