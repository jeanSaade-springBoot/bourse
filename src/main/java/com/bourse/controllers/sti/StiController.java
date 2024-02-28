package com.bourse.controllers.sti;

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

import com.bourse.domain.skews.TmpAuditSkewsBund2Maturity;
import com.bourse.domain.sti.StiAsiaData;
import com.bourse.domain.sti.StiCryptosData;
import com.bourse.domain.sti.StiEmergingData;
import com.bourse.domain.sti.StiEuropeData;
import com.bourse.domain.sti.StiWallStreetData;
import com.bourse.domain.sti.TmpAuditStiAsia;
import com.bourse.domain.sti.TmpAuditStiCryptos;
import com.bourse.domain.sti.TmpAuditStiEmerging;
import com.bourse.domain.sti.TmpAuditStiEurope;
import com.bourse.domain.sti.TmpAuditStiWallStreet;
import com.bourse.dto.GenericDataFunctionReqDTO;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GridDataDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.service.DataFunctionService;
import com.bourse.service.sti.StiService;

@RestController
@RequestMapping(value = "sti")
public class StiController {

	@Autowired
	private final StiService stiService;
	@Autowired
	TableManagementRepository tableManagementRepository;
	@Autowired
	private final DataFunctionService dataFunctionService;
	
	private String className = "";
	
	public StiController(
			StiService stiService,
			DataFunctionService dataFunctionService)
	{
		this.stiService = stiService;
		this.dataFunctionService = dataFunctionService;
	}
	@GetMapping(value = "getlatest/{sti}", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatest(@PathVariable("sti") String sti){
		return new ResponseEntity<>(stiService.findLatestData(sti), HttpStatus.OK);
    }
	@GetMapping(value = "check-if-fxcds-has-data/{referDate}")
	public ResponseEntity<Boolean> CheckIfHasData(@PathVariable String referDate) 
	{  System.out.println(className+": check-if-fxcds-has-data");
		return new ResponseEntity<>(stiService.CheckIfHasData(referDate),HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansave/{sti}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSave(@PathVariable("sti") String sti,@PathVariable String referDate) 
	{  
		return new ResponseEntity<>(stiService.CheckIfCanSave(referDate,sti),HttpStatus.OK);
	}
	@PostMapping(value = "save-sti-asia")
	public ResponseEntity<List<StiAsiaData>> saveStiAsia(@RequestBody List<StiAsiaData> stiDTOlst) {
		System.out.println(className+": save-sti-asia");
		List<StiAsiaData> datalst = stiService.saveStiAsia(stiDTOlst);
		stiService.doCaclulationAsia(stiDTOlst.get(0).getReferDate());
		return new ResponseEntity<>(datalst,HttpStatus.OK);
	}
	@PostMapping(value = "save-sti-wall-street")
	public ResponseEntity<List<StiWallStreetData>> saveWallStreet(@RequestBody List<StiWallStreetData> stiDTOlst) {
		System.out.println(className+": saveWallStreet");
		List<StiWallStreetData> datalst = stiService.saveStiWallStreet(stiDTOlst);
		stiService.doCaclulationWallStreet(stiDTOlst.get(0).getReferDate());
		return new ResponseEntity<>(datalst,HttpStatus.OK);
	}
	@PostMapping(value = "save-sti-europe")
	public ResponseEntity<List<StiEuropeData>> saveEurope(@RequestBody List<StiEuropeData> stiDTOlst) {
		System.out.println(className+": saveEurope");
		List<StiEuropeData> datalst = stiService.saveStiEurope(stiDTOlst);
		stiService.doCaclulationEurope(stiDTOlst.get(0).getReferDate());
		return new ResponseEntity<>(datalst,HttpStatus.OK);
	}
	@PostMapping(value = "save-sti-emerging")
	public ResponseEntity<List<StiEmergingData>> saveEmerging(@RequestBody List<StiEmergingData> stiDTOlst) {
		System.out.println(className+": saveEmerging");
		List<StiEmergingData> datalst = stiService.saveStiEmerging(stiDTOlst);
		stiService.doCaclulationEmerging(stiDTOlst.get(0).getReferDate());
		return new ResponseEntity<>(datalst,HttpStatus.OK);
	}
	@PostMapping(value = "save-sti-cryptos")
	public ResponseEntity<List<StiCryptosData>> saveCryptos(@RequestBody List<StiCryptosData> stiDTOlst) {
		System.out.println(className+": saveCryptos");
		List<StiCryptosData> datalst = stiService.saveStiCryptos(stiDTOlst);
		stiService.doCaclulationCryptos(stiDTOlst.get(0).getReferDate());
		return new ResponseEntity<>(datalst,HttpStatus.OK);
	}
	@GetMapping(value = "sti-asia-data/{referDate}")
	public ResponseEntity<List<TmpAuditStiAsia>> getStiAsiaDataByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getStiAsiaDataByReferDate");
		return new ResponseEntity<>(stiService.getStiAsiaDataByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "sti-wall-street-data/{referDate}")
	public ResponseEntity<List<TmpAuditStiWallStreet>> getStiWallStreetByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getStiWallStreetByReferDate");
		return new ResponseEntity<>(stiService.getStiWallStreetByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "sti-europe-data/{referDate}")
	public ResponseEntity<List<TmpAuditStiEurope>> getStiEuropeByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getStiEuropeByReferDate");
		return new ResponseEntity<>(stiService.getStiEuropeByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "sti-emerging-data/{referDate}")
	public ResponseEntity<List<TmpAuditStiEmerging>> getStiEmergingByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getStiEmergingByReferDate");
		return new ResponseEntity<>(stiService.getStiEmergingByReferDate(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "sti-cryptos-data/{referDate}")
	public ResponseEntity<List<TmpAuditStiCryptos>> getStiCryptosByReferDate(@PathVariable("referDate") String referDate) {
		System.out.println(className+": getStiCryptosByReferDate");
		return new ResponseEntity<>(stiService.getStiCryptosByReferDate(referDate),HttpStatus.OK);
	} 
	@PostMapping(value = "update-sti-asia-data")
	public ResponseEntity<Boolean> updateAsiaData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{  System.out.println(className+": update-sti-asia-data");
		stiService.updateAsiaData(updateDataDTOlst);
		stiService.doCaclulationAsia(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "update-sti-wall-street-data")
	public ResponseEntity<Boolean> updateWallStreetData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{  System.out.println(className+": updateWallStreetData");
		stiService.updateWallStreetData(updateDataDTOlst);
		stiService.doCaclulationWallStreet(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "update-sti-europe-data")
	public ResponseEntity<Boolean> updateEuropeData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{  System.out.println(className+": updateEuropeData");
		stiService.updateEuropeData(updateDataDTOlst);
		stiService.doCaclulationEurope(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "update-sti-emerging-data")
	public ResponseEntity<Boolean> updateEmergingData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{  System.out.println(className+": updateEmergingData");
		stiService.updateEmergingData(updateDataDTOlst);
		stiService.doCaclulationEmerging(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "update-sti-cryptos-data")
	public ResponseEntity<Boolean> updateCryptosData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{  System.out.println(className+": updateCryptosData");
		stiService.updateCryptosData(updateDataDTOlst);
		stiService.doCaclulationCryptos(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@DeleteMapping(value = "delete-sti-asia-byreferDate/{referDate}")
	public ResponseEntity<HttpStatus> deleteAsiaDataByReferDate(@PathVariable("referDate") String referDate) {
		 System.out.println(className+": deleteAsiaDataByReferDate");
		 stiService.deleteStiAsiaDataByReferDate(referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	@DeleteMapping(value = "delete-sti-wall-street-byreferDate/{referDate}")
	public ResponseEntity<HttpStatus> deleteWallStreetDataByReferDate(@PathVariable("referDate") String referDate) {
		 System.out.println(className+": deleteWallStreetDataByReferDate");
		 stiService.deleteStiWallStreetByReferDate(referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	@DeleteMapping(value = "delete-sti-europe-byreferDate/{referDate}")
	public ResponseEntity<HttpStatus> deleteEuropeDataByReferDate(@PathVariable("referDate") String referDate) {
		 System.out.println(className+": deleteEuropeDataByReferDate");
		 stiService.deleteStiEuropeByReferDate(referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	@DeleteMapping(value = "delete-sti-emerging-byreferDate/{referDate}")
	public ResponseEntity<HttpStatus> deleteEmergingDataByReferDate(@PathVariable("referDate") String referDate) {
		 System.out.println(className+": deleteEmergingDataByReferDate");
		 stiService.deleteStiEmergingByReferDate(referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	@DeleteMapping(value = "delete-sti-cryptos-byreferDate/{referDate}")
	public ResponseEntity<HttpStatus> deleteCryptosDataByReferDate(@PathVariable("referDate") String referDate) {
		 System.out.println(className+": deleteCryptosDataByReferDate");
		 stiService.deleteStiCryptosByReferDate(referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		 System.out.println(className+": getgriddata");
		return new ResponseEntity<>(stiService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgriddatafunction")
	public ResponseEntity<GridDataDTO> getGridDataFunction(@RequestBody GenericDataFunctionReqDTO dataFunctionReqDTO) {
		return new ResponseEntity<>(dataFunctionService.getDynamicGridDataDTOFunction(dataFunctionReqDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdatabytype")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(stiService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
}
