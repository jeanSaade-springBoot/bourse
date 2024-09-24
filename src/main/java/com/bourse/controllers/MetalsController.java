package com.bourse.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.bourse.domain.BaseMetals;
import com.bourse.domain.EnergyData;
import com.bourse.domain.FoodStuffData;
import com.bourse.domain.PreciousMetals;
import com.bourse.domain.TmpAuditBase;
import com.bourse.domain.TmpAuditEnergy;
import com.bourse.domain.TmpAuditFoodStuff;
import com.bourse.domain.TmpAuditPrecious;
import com.bourse.domain.TmpAuditTransportation;
import com.bourse.domain.TransportationData;
import com.bourse.dto.DataFunctionRespDTO;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.GenericDataFunctionReqDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.service.BaseMetalsService;
import com.bourse.service.DataFunctionService;
import com.bourse.service.EnergyService;
import com.bourse.service.FoodStuffService;
import com.bourse.service.MetalsService;
import com.bourse.service.PerciousMetalsService;
import com.bourse.service.TransportationService;

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
	@Autowired
	private final FoodStuffService foodStuffService;
	@Autowired
	private final EnergyService energyService;
	@Autowired
	private final TransportationService transportationService;
	
	public MetalsController(
			PerciousMetalsService perciousMetalsService,
			BaseMetalsService baseMetalsService,
			MetalsService metalsService,
			DataFunctionService dataFunctionService,
			FoodStuffService foodStuffService,
			EnergyService energyService,
			TransportationService transportationService)
	{
		this.perciousMetalsService   = perciousMetalsService;
		this.baseMetalsService = baseMetalsService;
		this.metalsService = metalsService;
		this.dataFunctionService = dataFunctionService;
		this.foodStuffService = foodStuffService;
		this.energyService = energyService;
		this.transportationService = transportationService;
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
	@GetMapping(value = "checkifcansavefoodstuff/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSaveFoodStuff(@PathVariable String referDate) 
	{
		 boolean checkifcanSave= foodStuffService.CheckIfCanSave(referDate);
		 return new ResponseEntity<>(checkifcanSave,HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansaveenergy/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSaveEnergy(@PathVariable String referDate) 
	{
		 boolean checkifcanSave= energyService.CheckIfCanSave(referDate);
		 return new ResponseEntity<>(checkifcanSave,HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansavetransportation/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSaveTransportation(@PathVariable String referDate) 
	{
		 boolean checkifcanSave= transportationService.CheckIfCanSave(referDate);
		 return new ResponseEntity<>(checkifcanSave,HttpStatus.OK);
	}
	@PostMapping(value = "savepreciousdata")
    public List<PreciousMetals> savePreciousData(@RequestBody List<PreciousMetals> preciousInputDataList){
		List<PreciousMetals> preciousDatalst= perciousMetalsService.SavePreciousData(preciousInputDataList);
		perciousMetalsService.doCalculation(preciousInputDataList.get(0).getReferDate());
	  return preciousDatalst;
    }
	@PostMapping(value = "savebasedata")
    public List<BaseMetals> saveBaseData(@RequestBody List<BaseMetals> baseInputDataList){
		List<BaseMetals> baseDatalst= baseMetalsService.SaveBaseData(baseInputDataList);
	    baseMetalsService.doCalculation(baseInputDataList.get(0).getReferDate());
	  return baseDatalst;
    }
	@PostMapping(value = "savefoodstuffdata")
    public List<FoodStuffData> saveFoodStuffData(@RequestBody List<FoodStuffData> foodStuffInputDataList){
		List<FoodStuffData> foodStuffDatalst= foodStuffService.SaveFoodStuffData(foodStuffInputDataList);
	    foodStuffService.doCalculation(foodStuffInputDataList.get(0).getReferDate());
	  return foodStuffDatalst;
    }
	@PostMapping(value = "saveenergydata")
    public List<EnergyData> saveEnergyData(@RequestBody List<EnergyData> energyInputDataList){
		List<EnergyData> energyDatalst= energyService.SaveEnergyData(energyInputDataList);
		energyService.doCalculation(energyInputDataList.get(0).getReferDate());
	  return energyDatalst;
    }
	@PostMapping(value = "savetransportationdata")
    public List<TransportationData> saveTransportationData(@RequestBody List<TransportationData> transportationInputDataList){
		List<TransportationData> transportationDatalst= transportationService.SaveTransportationData(transportationInputDataList);
		transportationService.doCalculation(transportationDatalst.get(0).getReferDate());
	  return transportationDatalst;
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
		perciousMetalsService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@GetMapping(value = "getbaseauditdata/{referDate}")
	public ResponseEntity<List<TmpAuditBase>> getBaseAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(baseMetalsService.getAuditData(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "getfoodstuffauditdata/{referDate}")
	public ResponseEntity<List<TmpAuditFoodStuff>> getFoodStuffAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(foodStuffService.getAuditData(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "getenergyauditdata/{referDate}")
	public ResponseEntity<List<TmpAuditEnergy>> getEnergyAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(energyService.getAuditData(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "gettransportationauditdata/{referDate}")
	public ResponseEntity<List<TmpAuditTransportation>> getTransportationAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(transportationService.getAuditData(referDate),HttpStatus.OK);
	}
	@DeleteMapping(value = "deletebasebyreferdate/{referDate}")
	public ResponseEntity<Object>  deleteBaseByReferDate(@PathVariable("referDate") String referDate) {
		baseMetalsService.deleteBaseByReferDate(referDate);
	 return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping(value = "deletefoodstuffbyreferdate/{referDate}")
	public ResponseEntity<Object>  deleteFoodStuffByReferDate(@PathVariable("referDate") String referDate) {
		foodStuffService.deleteFoodStuffByReferDate(referDate);
	 return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping(value = "deleteenergybyreferdate/{referDate}")
	public ResponseEntity<Object>  deleteEnergyByReferDate(@PathVariable("referDate") String referDate) {
		energyService.deleteEnergyByReferDate(referDate);
	 return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping(value = "deletetransportationbyreferdate/{referDate}")
	public ResponseEntity<Object>  deleteTransportationByReferDate(@PathVariable("referDate") String referDate) {
		transportationService.deletetransportationByReferDate(referDate);
	 return new ResponseEntity<>(HttpStatus.OK);
	}
	@GetMapping(value = "getlatestbase", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatestBase(){
		return new ResponseEntity<>(baseMetalsService.findLatestBaseData(), HttpStatus.OK);
    }
	
	@GetMapping(value = "getlatestfoodstuff", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatestFoodStuff(){
		return new ResponseEntity<>(foodStuffService.findLatestFoodStuffData(), HttpStatus.OK);
    }
	@GetMapping(value = "getlatestenergy", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatestEnergy(){
		return new ResponseEntity<>(energyService.findLatestEnergyData(), HttpStatus.OK);
    }
	@GetMapping(value = "getlatesttrasnportation", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatestTransportation(){
		return new ResponseEntity<>(transportationService.findLatestTransportationData(), HttpStatus.OK);
    }
	@PostMapping(value = "updatebaseauditdata")
	public ResponseEntity<Boolean> updateBaseAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
	
		baseMetalsService.updateBaseData(updateDataDTOlst);
		baseMetalsService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "updatefoodstuffauditdata")
	public ResponseEntity<Boolean> updateFoodStuffAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
	
		foodStuffService.updateFoodStuffData(updateDataDTOlst);
		foodStuffService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "updateenergyauditdata")
	public ResponseEntity<Boolean> updateEnergyAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		energyService.updateEnergyData(updateDataDTOlst);
		energyService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "updatetransportationauditdata")
	public ResponseEntity<Boolean> updateTransportationAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		transportationService.updateTransportationData(updateDataDTOlst);
		transportationService.doCalculation(updateDataDTOlst.get(0).getReferdate());
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
	public ResponseEntity<List<DataFunctionRespDTO>> getGridDataFunction(@RequestBody GenericDataFunctionReqDTO dataFunctionReqDTO) {
		return new ResponseEntity<>(dataFunctionService.getDynamicGridDataFunction(dataFunctionReqDTO),HttpStatus.OK);
	}
   
}
