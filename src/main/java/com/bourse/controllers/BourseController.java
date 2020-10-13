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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bourse.domain.Person;
import com.bourse.domain.SkewsData;
import com.bourse.domain.SovereignData;
import com.bourse.dto.AuditProcedureDTO;
import com.bourse.dto.CrossAuditProcedureDTO;
import com.bourse.dto.CurveSoveriegnDTO;
import com.bourse.dto.DataDTO;
import com.bourse.dto.DataGraphDTO;
import com.bourse.dto.DataInputDTO;
import com.bourse.dto.GraphReqDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.PersonReqDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.service.PersonService;
import com.bourse.service.SkewsService;
import com.bourse.service.SovereignYieldsService;
import com.bourse.util.SovereignUtil;
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
    public ModelAndView dataEntryPage(ModelMap model)
    {
		return new ModelAndView("html/sovereignyields");
    }
	@RequestMapping( value =  "/skews")
    public ModelAndView skewsDataEntrePage(ModelMap model)
    {
		return new ModelAndView("html/skews");
    }
	@RequestMapping( value =  "/preciousmetals")
    public ModelAndView dataEntryPreciousMetalsPage(ModelMap model)
    {
		return new ModelAndView("html/preciousMetals");
    }
	@RequestMapping( value =  "/returnfunction")
    public ModelAndView returnFunctionPage(ModelMap model)
    {
		return new ModelAndView("html/returnFunction");
    }
	@RequestMapping( value =  "/any2")
    public ModelAndView anyTwoPage(ModelMap model)
    {
		return new ModelAndView("html/any2");
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
	@PostMapping(value = "savesovereigndata")
    public List<SovereignData>  saveSovereignData(@RequestBody List<SovereignData> sovereignDataList){
	  return sovereignYieldsService.SaveSovereignDatas(sovereignDataList);
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
	
	@GetMapping(value = "findsovereignById/{id}")
	public SovereignData findSovereignById(@PathVariable("id") long id) {
	return sovereignYieldsService.findSovereignById(id);
	}
	
	@PostMapping(value = "updatesovereignbyid")
	public SovereignData UpdateSovereignById(@RequestBody SovereignData sovereignData) {
	SovereignData originalObject = sovereignYieldsService.findSovereignById(sovereignData.getId());
	SovereignData SovereignDataToUpdate = SovereignUtil.buildUpdateObject(originalObject,sovereignData);
	return sovereignYieldsService.UpdateSovereignById(SovereignDataToUpdate);
	}
	
	@PostMapping(value = "updatethirteeyrfactorsovereignbysubgroupidanddate")
	public boolean updatethirteeyrfactorSovereignBysubgroupIdAndDate(@RequestBody List<UpdateDataDTO> updateDataDTO) {
	
	for (int i=0; i<updateDataDTO.size(); i++)
	{
		sovereignYieldsService.updatethirteeyrfactorSovereignBysubgroupIdAndDate(updateDataDTO.get(i).getSubgroupId(), updateDataDTO.get(i).getReferdate(), updateDataDTO.get(i).getValue());
	}
	return true;
	}
	
	@DeleteMapping(value = "deletesovereignbyid/{id}")
	public  ResponseEntity deletesovereignbyid(@PathVariable("id") long id) {
		sovereignYieldsService.deleteSovereignById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping(value = "findsovereignbysubgroup/{subgroupId}")
	public ResponseEntity<List<SovereignData>> findSovereignBySubGroup(@PathVariable("subgroupId") long subgroupId) {
	return new ResponseEntity<>(sovereignYieldsService.findSovereignBySubGroup(subgroupId),HttpStatus.OK);
	}
	
	
	@GetMapping(value = "findgraphdatabysubroupidandfactor/{subgroupId}/{factor}")
	public ResponseEntity<List<DataGraphDTO>> findGraphDataForFiveBySubroupId(@PathVariable("subgroupId") long subgroupId,@PathVariable("factor") String factor) {
	return new ResponseEntity<>(sovereignYieldsService.findGraphDataBySubroupIdAndFactorCalculation(subgroupId,factor),HttpStatus.OK);
	}
	
	@GetMapping(value = "findsovereignbyreferdate/{referDate}")
	public ResponseEntity<List<SovereignData>> findSovereignByReferDate(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(sovereignYieldsService.findSovereignByReferDate(referDate),HttpStatus.OK);
	} 
	 
	@GetMapping(value = "findsoveriegncurvesbyreferdate/{referDate}")
	public ResponseEntity<List<CurveSoveriegnDTO>> findSoveriegnCurvesByReferDate(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(sovereignYieldsService.findSoveriegnCurvesByReferDate(referDate),HttpStatus.OK);
	} 
	
	@GetMapping(value = "getauditdata/{referDate}")
	public ResponseEntity<List<AuditProcedureDTO>> getAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(sovereignYieldsService.getAuditData(referDate),HttpStatus.OK);
	} 
	
	@GetMapping(value = "getcurvedata/{referDate}")
	public ResponseEntity<List<AuditProcedureDTO>> getCurveData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(sovereignYieldsService.getCurveData(referDate),HttpStatus.OK);
	} 
	
	@GetMapping(value = "getcrossauditdata/{referDate}")
	public ResponseEntity<List<CrossAuditProcedureDTO>> getCrossAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(sovereignYieldsService.getCrossAuditData(referDate),HttpStatus.OK);
	} 
	
	@GetMapping(value = "getgraphdata")
	public ResponseEntity<List<GraphResponseDTO>> getGraphData(@RequestBody  GraphReqDTO graphReqDTO) {
	return new ResponseEntity<>(sovereignYieldsService.getGraphData(graphReqDTO),HttpStatus.OK);
	} 
	
}
