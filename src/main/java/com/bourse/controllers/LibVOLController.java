package com.bourse.controllers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.SovereignData;
import com.bourse.domain.SovereignDataCorrected;
import com.bourse.service.SovereignYieldsCorrectedService;
import com.bourse.util.SovereignUtil;
@RestController
@RequestMapping(value = "libvol")
public class LibVOLController {

	
	@Autowired
	private final SovereignYieldsCorrectedService sovereignYieldsCorrectedService;

	
	public LibVOLController(SovereignYieldsCorrectedService sovereignYieldsCorrectedService)
	{
		this.sovereignYieldsCorrectedService   = sovereignYieldsCorrectedService;
	}
	
	@PostMapping(value = "savedata", produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<List<SovereignData>>  saveData(@RequestBody List<SovereignDataCorrected> dataLst){
	    
		sovereignYieldsCorrectedService.SaveSovereignDatas(dataLst);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@GetMapping(value = "getsovereignyields", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<SovereignDataCorrected>>  getSovereignYields(){
		return new ResponseEntity<>(sovereignYieldsCorrectedService.getAllSovereignData(), HttpStatus.OK);
    }
	
	@GetMapping(value = "getsovereignyieldsbydate/{referDate}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<SovereignDataCorrected>>  getSovereignYieldsByDate(@PathVariable("referDate") String referDate){
		 DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd"); 
		 LocalDate localDate = LocalDate.parse(referDate, formatter);
		return new ResponseEntity<>(sovereignYieldsCorrectedService.getSovereignYieldsByDate(localDate), HttpStatus.OK);
    }
	
	@PostMapping(value = "editsovereignyields", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<SovereignDataCorrected>  editSovereignYields(@RequestBody SovereignDataCorrected sovereignDataCorrected){
	
		SovereignDataCorrected originalObject = sovereignYieldsCorrectedService.findSovereignById(sovereignDataCorrected.getId());
		SovereignDataCorrected SovereignDataToUpdate = SovereignUtil.buildUpdateObjectCorrected(originalObject,sovereignDataCorrected);
		return new ResponseEntity<>(sovereignYieldsCorrectedService.editSovereignYields(SovereignDataToUpdate), HttpStatus.OK);
    
	}
	
	
	
	
}
