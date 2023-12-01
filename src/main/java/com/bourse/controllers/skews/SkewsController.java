package com.bourse.controllers.skews;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.skews.LongSkewsData;
import com.bourse.domain.skews.ShortSkewsData;
import com.bourse.service.skews.SkewsService;

@RestController
@RequestMapping(value = "skews")
public class SkewsController {

	@Autowired
	private final SkewsService skewsService;
	private String className = "";
	public SkewsController(
			SkewsService skewsService)
	{
		this.skewsService = skewsService;
		className = this.className;
	}
	
	@PostMapping(value = "save-short-skews")
	public ResponseEntity<List<ShortSkewsData>> saveShortSkews(@RequestBody /*List<SkewsDTO>*/ List<ShortSkewsData> skewsDTOLst) {
		System.out.println(className+": saveShortSkews");
		return new ResponseEntity<>(skewsService.saveShortSkews(skewsDTOLst),HttpStatus.OK);
	}
	
	@PostMapping(value = "save-long-skews")
	public ResponseEntity<List<LongSkewsData>> saveLongSkews(@RequestBody List<LongSkewsData> skewsDTOlst) {
		System.out.println(className+": saveLongSkews");
		return new ResponseEntity<>(skewsService.saveLongSkews(skewsDTOlst),HttpStatus.OK);
	}
	
	@GetMapping(value = "long-skews-dataByreferDate/{referDate}")
	public ResponseEntity<List<LongSkewsData>> getLongSkewsDataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getLongSkewsDataByReferDate");
		return new ResponseEntity<>(skewsService.getLongSkewsDataByReferDate(referDate),HttpStatus.OK);
	} 
	
	@GetMapping(value = "short-skews-dataByreferDate/{referDate}")
	public ResponseEntity<List<ShortSkewsData>> getShortSkewsDataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getShortSkewsDataByReferDate");
		return new ResponseEntity<>(skewsService.getShortSkewsDataByReferDate(referDate),HttpStatus.OK);
	} 
	
	@GetMapping(value = "delete-short-skews-byreferDate/{referDate}")
	public ResponseEntity<HttpStatus> deleteShortSkewsDataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": deleteShortSkewsDataByReferDate");
		skewsService.deleteShortSkewsDataByReferDate(referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	
	@GetMapping(value = "delete-long-skews-byreferDate/{referDate}")
	public ResponseEntity<HttpStatus> deleteLongSkewsDataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": deleteLongSkewsDataByReferDate");
		skewsService.deleteLongSkewsDataByReferDate(referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	
}
