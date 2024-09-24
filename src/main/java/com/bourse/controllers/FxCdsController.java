package com.bourse.controllers;

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

import com.bourse.domain.CdsData;
import com.bourse.domain.FxUsdData;
import com.bourse.domain.TmpAuditCdsData;
import com.bourse.domain.TmpAuditFxEurData;
import com.bourse.domain.TmpAuditFxUsdData;
import com.bourse.dto.GenericDataFunctionReqDTO;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseColConfigVolumeDTO;
import com.bourse.dto.GridDataDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.service.CdsDataService;
import com.bourse.service.DataFunctionService;
import com.bourse.service.FxCdsService;
import com.bourse.service.FxDataService;

@RestController
@RequestMapping(value = "fxcds")
public class FxCdsController {

	@Autowired
	private final DataFunctionService dataFunctionService;
	@Autowired
	private final FxCdsService fxCdsService;
	@Autowired
	private final FxDataService fxDataService;
	@Autowired
	private final CdsDataService cdsDataService;
	
	public FxCdsController(
			DataFunctionService dataFunctionService,
			FxCdsService fxCdsService,
			FxDataService fxDataService,
			CdsDataService cdsDataService)
	{
		this.dataFunctionService = dataFunctionService;
		this.fxCdsService = fxCdsService;
		this.fxDataService = fxDataService;
		this.cdsDataService = cdsDataService;
	}
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		return new ResponseEntity<>(fxCdsService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgriddatafunction")
	public ResponseEntity<GridDataDTO> getGridDataFunction(@RequestBody GenericDataFunctionReqDTO dataFunctionReqDTO) {
		return new ResponseEntity<>(dataFunctionService.getDynamicGridDataDTOFunction(dataFunctionReqDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdatabytype")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(fxCdsService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "getgraphdatabyperiod")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByPeriod(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(fxCdsService.getGraphDataByPeriodValue(graphReqDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdatabytypesum")
	public ResponseEntity<List<GraphResponseColConfigVolumeDTO>> getGraphDataByTypeSum(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(fxCdsService.getGraphDataByTypeSum(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "savefxdata")
    public List<FxUsdData> saveFxData(@RequestBody List<FxUsdData> list){
		List<FxUsdData> datalst= fxDataService.SaveData(list);
		fxDataService.doCalculation(list.get(0).getReferDate());
	  return datalst;
    }
	@PostMapping(value = "savecdsdata")
    public List<CdsData> saveCdsData(@RequestBody List<CdsData> list){
		List<CdsData> datalst= cdsDataService.SaveData(list);
		cdsDataService.doCalculation(list.get(0).getReferDate());
	  return datalst;
    }
	@GetMapping(value = "getfxusddata/{referDate}")
	public ResponseEntity<List<TmpAuditFxUsdData>> getFxUsdAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(fxDataService.getAuditDataFxUsd(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "getfxeurdata/{referDate}")
	public ResponseEntity<List<TmpAuditFxEurData>> getFxEurAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(fxDataService.getAuditDataFxEur(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "getcdsdata/{referDate}")
	public ResponseEntity<List<TmpAuditCdsData>> getBuxlAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(cdsDataService.getAuditData(referDate),HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansave/{fxcds}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSavePrecious(@PathVariable("fxcds") String fxcds,@PathVariable String referDate) 
	{  boolean checkifcanSave= false;
		if (fxcds.equalsIgnoreCase("1"))
		 checkifcanSave= fxDataService.CheckIfCanSave(referDate);
		else if (fxcds.equalsIgnoreCase("2")) 
			checkifcanSave = cdsDataService.CheckIfCanSave(referDate); 
		
		return new ResponseEntity<>(checkifcanSave,HttpStatus.OK);
	}
	@GetMapping(value = "getlatest/{fxcds}", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatest(@PathVariable("fxcds") String fxcds){
			String value=null;
			if (fxcds.equalsIgnoreCase("1"))
				value = fxDataService.findLatestData();
			else if (fxcds.equalsIgnoreCase("2")) 
				value =  cdsDataService.findLatestData();
		
		return new ResponseEntity<>(value, HttpStatus.OK);
    }
	@DeleteMapping(value = "deletebyreferdate/{fxcds}/{referDate}")
	public ResponseEntity<Object>  deleteByReferDate(@PathVariable("fxcds") String fxcds,@PathVariable("referDate") String referDate) {
		if (fxcds.equalsIgnoreCase("1"))
			fxDataService.deleteByReferDate(referDate);
		else if (fxcds.equalsIgnoreCase("2"))
			cdsDataService.deleteByReferDate(referDate);
		
	return new ResponseEntity<>(HttpStatus.OK);
	}
	@PostMapping(value = "updatefxdata")
	public ResponseEntity<Boolean> updatefxAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		fxDataService.updateData(updateDataDTOlst);
		fxDataService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "updatecdsdata")
	public ResponseEntity<Boolean> updateBoblAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		cdsDataService.updateData(updateDataDTOlst);
		cdsDataService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
}
