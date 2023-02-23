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

import com.bourse.domain.BaseMetals;
import com.bourse.domain.PreciousMetals;
import com.bourse.domain.TmpAuditBase;
import com.bourse.domain.TmpAuditPrecious;
import com.bourse.dto.DataFunctionRespDTO;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.MetalsDataFunctionReqDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.service.BaseMetalsService;
import com.bourse.service.DataFunctionService;
import com.bourse.service.MetalsService;
import com.bourse.service.PerciousMetalsService;

@RestController
@RequestMapping(value = "metals")
public class MetalsController {
	
	@Autowired
	private final PerciousMetalsService perciousMetalsService;
	@Autowired
	private final BaseMetalsService baseMetalsService;
	@Autowired
	private final MetalsService metalsService;
	@Autowired
	private final DataFunctionService dataFunctionService;
	
	public MetalsController(
			PerciousMetalsService perciousMetalsService,
			BaseMetalsService baseMetalsService,
			MetalsService metalsService,
			DataFunctionService dataFunctionService)
	{
		this.perciousMetalsService   = perciousMetalsService;
		this.baseMetalsService = baseMetalsService;
		this.metalsService = metalsService;
		this.dataFunctionService = dataFunctionService;
	}
	@GetMapping(value = "checkifcansaveprecious/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSavePrecious(@PathVariable String referDate) 
	{
	
		boolean checkifcanSave= perciousMetalsService.CheckIfCanSave(referDate);
		return new ResponseEntity<>(checkifcanSave,HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansavebase/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSaveBase(@PathVariable String referDate) 
	{
		boolean checkifcanSave= baseMetalsService.CheckIfCanSave(referDate);
		return new ResponseEntity<>(checkifcanSave,HttpStatus.OK);
	}
	@PostMapping(value = "savepreciousdata")
    public List<PreciousMetals> savePreciousData(@RequestBody List<PreciousMetals> preciousInputDataList){
		List<PreciousMetals> preciousDatalst= perciousMetalsService.SavePreciousData(preciousInputDataList);
		perciousMetalsService.doCaclulation(preciousInputDataList.get(0).getReferDate());
	  return preciousDatalst;
    }
	@PostMapping(value = "savebasedata")
    public List<BaseMetals> saveBaseData(@RequestBody List<BaseMetals> baseInputDataList){
		List<BaseMetals> baseDatalst= baseMetalsService.SaveBaseData(baseInputDataList);
	    baseMetalsService.doCaclulation(baseInputDataList.get(0).getReferDate());
	  return baseDatalst;
    }
	@GetMapping(value = "getpreciousauditdata/{referDate}")
	public ResponseEntity<List<TmpAuditPrecious>> getAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(perciousMetalsService.getAuditData(referDate),HttpStatus.OK);
	} 
	
	@DeleteMapping(value = "deletepreciousbyreferdate/{referDate}")
	public ResponseEntity<Object>  deletePreciousByReferDate(@PathVariable("referDate") String referDate) {
		perciousMetalsService.deletePreciousByReferDate(referDate);
	 return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping(value = "getlatestprecious", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatestPrecious(){
		return new ResponseEntity<>(perciousMetalsService.findLatestPreciousData(), HttpStatus.OK);
    }
	
	@PostMapping(value = "updatepreciousauditdata")
	public ResponseEntity<Boolean> updatePreciousAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
	
		perciousMetalsService.updatePreciousData(updateDataDTOlst);
		perciousMetalsService.doCaclulation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@GetMapping(value = "getbaseauditdata/{referDate}")
	public ResponseEntity<List<TmpAuditBase>> getBaseAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(baseMetalsService.getAuditData(referDate),HttpStatus.OK);
	} 
	
	@DeleteMapping(value = "deletebasebyreferdate/{referDate}")
	public ResponseEntity<Object>  deleteBaseByReferDate(@PathVariable("referDate") String referDate) {
		baseMetalsService.deleteBaseByReferDate(referDate);
	 return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping(value = "getlatestbase", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatestBase(){
		return new ResponseEntity<>(baseMetalsService.findLatestBaseData(), HttpStatus.OK);
    }
	
	@PostMapping(value = "updatebaseauditdata")
	public ResponseEntity<Boolean> updateBaseAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
	
		baseMetalsService.updateBaseData(updateDataDTOlst);
		baseMetalsService.doCaclulation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		return new ResponseEntity<>(metalsService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdata")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphData(@RequestBody  GraphRequestDTO graphReqDTO) {
	return new ResponseEntity<>(metalsService.getGraphData(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "getgraphdatabytype")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
	return new ResponseEntity<>(metalsService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "getgriddatafunction")
	public ResponseEntity<List<DataFunctionRespDTO>> getGridDataFunction(@RequestBody MetalsDataFunctionReqDTO dataFunctionReqDTO) {
		return new ResponseEntity<>(dataFunctionService.getGridMetalsDataFunction(dataFunctionReqDTO),HttpStatus.OK);
	}
}
