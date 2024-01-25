package com.bourse.controllers.skews;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.skews.LongSkewsData;
import com.bourse.domain.skews.ShortSkewsData;
import com.bourse.domain.skews.TmpAuditSkewsBobl2Maturity;
import com.bourse.domain.skews.TmpAuditSkewsBobl3Maturity;
import com.bourse.domain.skews.TmpAuditSkewsBund2Maturity;
import com.bourse.domain.skews.TmpAuditSkewsBund3Maturity;
import com.bourse.domain.skews.TmpAuditSkewsBuxl2Maturity;
import com.bourse.domain.skews.TmpAuditSkewsEuribor4Mtty;
import com.bourse.domain.skews.TmpAuditSkewsEuribor7Mtty;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
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
	}
	
	@PostMapping(value = "save-short-skews")
	public ResponseEntity<List<ShortSkewsData>> saveShortSkews(@RequestBody /*List<SkewsDTO>*/ List<ShortSkewsData> skewsDTOLst) {
		System.out.println(className+": saveShortSkews");
		return new ResponseEntity<>(skewsService.saveShortSkews(skewsDTOLst),HttpStatus.OK);
	}
	
	@PostMapping(value = "save-long-skews")
	public ResponseEntity<List<LongSkewsData>> saveLongSkews(@RequestBody List<LongSkewsData> skewsDTOlst) {
		System.out.println(className+": saveLongSkews");
		List<LongSkewsData> datalst = skewsService.saveLongSkews(skewsDTOlst);
		skewsService.doCaclulation(skewsDTOlst.get(0).getReferDate());
		return new ResponseEntity<>(datalst,HttpStatus.OK);
	}
	
	@GetMapping(value = "long-skews-data-bund2/{referDate}")
	public ResponseEntity<List<TmpAuditSkewsBund2Maturity>> getLongSkewsBund2DataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getLongSkewsDataByReferDate");
		return new ResponseEntity<>(skewsService.getLongSkewsBund2DataByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "long-skews-data-bund3/{referDate}")
	public ResponseEntity<List<TmpAuditSkewsBund3Maturity>> getLongSkewsBund3DataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getLongSkewsDataByReferDate");
		return new ResponseEntity<>(skewsService.getLongSkewsBund3DataByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "long-skews-data-bobl2/{referDate}")
	public ResponseEntity<List<TmpAuditSkewsBobl2Maturity>> getLongSkewsBobl2DataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getLongSkewsDataByReferDate");
		return new ResponseEntity<>(skewsService.getLongSkewsBobl2DataByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "long-skews-data-bobl3/{referDate}")
	public ResponseEntity<List<TmpAuditSkewsBobl3Maturity>> getLongSkewsBobl3DataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getLongSkewsDataByReferDate");
		return new ResponseEntity<>(skewsService.getLongSkewsBobl3DataByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "long-skews-data-buxl2/{referDate}")
	public ResponseEntity<List<TmpAuditSkewsBuxl2Maturity>> getLongSkewsBuxl2DataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getLongSkewsDataByReferDate");
		return new ResponseEntity<>(skewsService.getLongSkewsBuxl2DataByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "long-skews-data-euribor4/{referDate}")
	public ResponseEntity<List<TmpAuditSkewsEuribor4Mtty>> getLongSkewsEuribor4DataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getLongSkewsDataByReferDate");
		return new ResponseEntity<>(skewsService.getLongSkewsEuribor4MttyDataByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "long-skews-data-euribor7/{referDate}")
	public ResponseEntity<List<TmpAuditSkewsEuribor7Mtty>> getLongSkewsEuribor7DataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getLongSkewsDataByReferDate");
		return new ResponseEntity<>(skewsService.getLongSkewsEuribor7MttyDataByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "short-skews-dataByreferDate/{referDate}")
	public ResponseEntity<List<ShortSkewsData>> getShortSkewsDataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getShortSkewsDataByReferDate");
		return new ResponseEntity<>(skewsService.getShortSkewsDataByReferDate(referDate),HttpStatus.OK);
	} 
	
	@DeleteMapping(value = "delete-short-skews-byreferDate/{referDate}")
	public ResponseEntity<HttpStatus> deleteShortSkewsDataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": deleteShortSkewsDataByReferDate");
		skewsService.deleteShortSkewsDataByReferDate(referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	
	@DeleteMapping(value = "delete-long-skews-byreferDate/{referDate}")
	public ResponseEntity<HttpStatus> deleteLongSkewsDataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": deleteLongSkewsDataByReferDate");
		skewsService.deleteLongSkewsDataByReferDate(referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@PostMapping(value = "update-long-skews-data")
	public ResponseEntity<Boolean> updateLongSkewsData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		skewsService.updateData(updateDataDTOlst);
		skewsService.doCaclulation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@GetMapping(value = "getlatest/{skews}", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatest(@PathVariable("skews") String skews){
		return new ResponseEntity<>(skewsService.findLatestData(skews), HttpStatus.OK);
    }
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		return new ResponseEntity<>(skewsService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}
}
