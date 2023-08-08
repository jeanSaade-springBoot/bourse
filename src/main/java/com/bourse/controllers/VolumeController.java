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

import com.bourse.domain.BoblOptionsVolume;
import com.bourse.domain.BundOptionsVolume;
import com.bourse.domain.BuxlOptionsVolume;
import com.bourse.domain.TmpAuditBoblOptionsVolume;
import com.bourse.domain.TmpAuditBundOptionsVolume;
import com.bourse.domain.TmpAuditBuxlOptionsVolume;
import com.bourse.dto.GenericDataFunctionReqDTO;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GridDataDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.service.BoblOptionsVolumeService;
import com.bourse.service.BundOptionsVolumeService;
import com.bourse.service.BuxlOptionsVolumeService;
import com.bourse.service.DataFunctionService;
import com.bourse.service.VolumeService;

@RestController
@RequestMapping(value = "volume")
public class VolumeController {

	@Autowired
	private final DataFunctionService dataFunctionService;
	@Autowired
	private final VolumeService volumeService;
	@Autowired
	private final BundOptionsVolumeService bundOptionsVolumeService;
	@Autowired
	private final BoblOptionsVolumeService boblOptionsVolumeService;
	@Autowired
	private final BuxlOptionsVolumeService buxlOptionsVolumeService;
	
	public VolumeController(
			DataFunctionService dataFunctionService,
			VolumeService volumeService,
			BundOptionsVolumeService bundOptionsVolumeService,
			BoblOptionsVolumeService boblOptionsVolumeService,
			BuxlOptionsVolumeService buxlOptionsVolumeService)
	{
		this.dataFunctionService = dataFunctionService;
		this.volumeService = volumeService;
		this.bundOptionsVolumeService = bundOptionsVolumeService;	
		this.boblOptionsVolumeService = boblOptionsVolumeService;
		this.buxlOptionsVolumeService = buxlOptionsVolumeService;
	}
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		return new ResponseEntity<>(volumeService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgriddatafunction")
	public ResponseEntity<GridDataDTO> getGridDataFunction(@RequestBody GenericDataFunctionReqDTO dataFunctionReqDTO) {
		return new ResponseEntity<>(dataFunctionService.getDynamicGridDataDTOFunction(dataFunctionReqDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdatabytype")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(volumeService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "savebunddata")
    public List<BundOptionsVolume> savebundData(@RequestBody List<BundOptionsVolume> bundLiquidityList){
		List<BundOptionsVolume> bundLiquidityDatalst= bundOptionsVolumeService.SaveData(bundLiquidityList);
		bundOptionsVolumeService.doCaclulation(bundLiquidityList.get(0).getReferDate());
	  return bundLiquidityDatalst;
    }
	@PostMapping(value = "savebobldata")
    public List<BoblOptionsVolume> saveBoblData(@RequestBody List<BoblOptionsVolume> boblLiquidityList){
		List<BoblOptionsVolume> boblLiquidityDatalst= boblOptionsVolumeService.SaveData(boblLiquidityList);
		boblOptionsVolumeService.doCaclulation(boblLiquidityList.get(0).getReferDate());
	  return boblLiquidityDatalst;
    }
	@PostMapping(value = "savebuxldata")
    public List<BuxlOptionsVolume> saveBuxlData(@RequestBody List<BuxlOptionsVolume> buxlOptionsVolume){
		List<BuxlOptionsVolume> buxlLiquidityDatalst= buxlOptionsVolumeService.SaveData(buxlOptionsVolume);
		buxlOptionsVolumeService.doCaclulation(buxlOptionsVolume.get(0).getReferDate());
	  return buxlLiquidityDatalst;
    }
	@GetMapping(value = "getbunddata/{referDate}")
	public ResponseEntity<List<TmpAuditBundOptionsVolume>> getAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(bundOptionsVolumeService.getAuditData(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "getbobldata/{referDate}")
	public ResponseEntity<List<TmpAuditBoblOptionsVolume>> getBoblAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(boblOptionsVolumeService.getAuditData(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "getbuxldata/{referDate}")
	public ResponseEntity<List<TmpAuditBuxlOptionsVolume>> getBuxlAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(buxlOptionsVolumeService.getAuditData(referDate),HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansave/{volume}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSavePrecious(@PathVariable("volume") String volume,@PathVariable String referDate) 
	{  boolean checkifcanSave= false;
		if (volume.equalsIgnoreCase("1"))
		 checkifcanSave= bundOptionsVolumeService.CheckIfCanSave(referDate);
		else if (volume.equalsIgnoreCase("2")) 
			checkifcanSave = boblOptionsVolumeService.CheckIfCanSave(referDate); 
		else if (volume.equalsIgnoreCase("3")) 
			checkifcanSave = buxlOptionsVolumeService.CheckIfCanSave(referDate); 
		
		return new ResponseEntity<>(checkifcanSave,HttpStatus.OK);
	}
	@GetMapping(value = "getlatest/{volume}", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatest(@PathVariable("volume") String volume){
			String value=null;
			if (volume.equalsIgnoreCase("1"))
				value = bundOptionsVolumeService.findLatestData();
			else if (volume.equalsIgnoreCase("2")) 
				value =  boblOptionsVolumeService.findLatestData();
			else if (volume.equalsIgnoreCase("3")) 
				value =  buxlOptionsVolumeService.findLatestData();
		
		return new ResponseEntity<>(value, HttpStatus.OK);
    }
	@DeleteMapping(value = "deletebyreferdate/{volume}/{referDate}")
	public ResponseEntity<Object>  deleteByReferDate(@PathVariable("volume") String volume,@PathVariable("referDate") String referDate) {
		if (volume.equalsIgnoreCase("1"))
			bundOptionsVolumeService.deleteByReferDate(referDate);
		else if (volume.equalsIgnoreCase("2"))
			boblOptionsVolumeService.deleteByReferDate(referDate);
		else if (volume.equalsIgnoreCase("3"))
			buxlOptionsVolumeService.deleteByReferDate(referDate);
		
	return new ResponseEntity<>(HttpStatus.OK);
	}
	@PostMapping(value = "updatebunddata")
	public ResponseEntity<Boolean> updatebundAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		bundOptionsVolumeService.updateData(updateDataDTOlst);
		bundOptionsVolumeService.doCaclulation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "updatebobldata")
	public ResponseEntity<Boolean> updateBoblAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		boblOptionsVolumeService.updateData(updateDataDTOlst);
		boblOptionsVolumeService.doCaclulation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "updatebuxldata")
	public ResponseEntity<Boolean> updateBuxlAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		buxlOptionsVolumeService.updateData(updateDataDTOlst);
		buxlOptionsVolumeService.doCaclulation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
}
