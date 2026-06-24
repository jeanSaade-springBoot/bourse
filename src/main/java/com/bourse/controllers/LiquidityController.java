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

import com.bourse.domain.EcbExcessLiquidity;
import com.bourse.domain.EcbQeLiquidity;
import com.bourse.domain.EurozoneMonetaryMass;
import com.bourse.domain.TmpAuditCorporateLiquidityPremia;
import com.bourse.domain.TmpAuditEcbExcessLiquidity;
import com.bourse.domain.TmpAuditEcbQeLiquidity;
import com.bourse.domain.TmpAuditEzMonetaryMassLiquidity;
import com.bourse.domain.liquidity.EcbBalanceSheetLiquidity;
import com.bourse.domain.liquidity.FedLiquidity;
import com.bourse.domain.liquidity.TmpAuditEcbBalanceSheetLiquidity;
import com.bourse.domain.liquidity.TmpAuditFedLiquidity;
import com.bourse.dto.GenericDataFunctionReqDTO;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GridDataDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.service.CorporatesYieldsService;
import com.bourse.service.DataFunctionService;
import com.bourse.service.EcbExcessLiquidityService;
import com.bourse.service.EcbQeLiquidityService;
import com.bourse.service.EzMonetaryMassLiquidityService;
import com.bourse.service.LiquidityService;
import com.bourse.service.liquidity.EcbBalanceSheetService;
import com.bourse.service.liquidity.FedLiquidityService;

@RestController
@RequestMapping(value = "liquidity")
public class LiquidityController {

	@Autowired
	private final DataFunctionService dataFunctionService;
	@Autowired
	private final LiquidityService liquidityService;
	@Autowired
	private final EcbExcessLiquidityService ecbExcessLiquidityService;
	@Autowired
	private final EcbQeLiquidityService ecbQeLiquidityService;
	@Autowired
	private final EzMonetaryMassLiquidityService ezMonetaryMassLiquidityService;
	@Autowired
	private final FedLiquidityService fedLiquidityService;
	@Autowired
	private final EcbBalanceSheetService ecbBalanceSheetService;
	@Autowired
	private final CorporatesYieldsService corporatesYieldsService;
	public LiquidityController(
			DataFunctionService dataFunctionService,
			LiquidityService liquidityService,
			EcbExcessLiquidityService ecbExcessLiquidityService,
			EcbQeLiquidityService ecbQeLiquidityService,
			EzMonetaryMassLiquidityService ezMonetaryMassLiquidityService,
			CorporatesYieldsService corporatesYieldsService,
			FedLiquidityService fedLiquidityService,
			EcbBalanceSheetService ecbBalanceSheetService)
	{
		this.dataFunctionService = dataFunctionService;
		this.liquidityService = liquidityService;
		this.ecbExcessLiquidityService = ecbExcessLiquidityService;	
		this.ecbQeLiquidityService = ecbQeLiquidityService;
		this.ezMonetaryMassLiquidityService=ezMonetaryMassLiquidityService;
		this.corporatesYieldsService = corporatesYieldsService;
		this.fedLiquidityService = fedLiquidityService;
		this.ecbBalanceSheetService = ecbBalanceSheetService;
	}
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		return new ResponseEntity<>(liquidityService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgriddatafunction")
	public ResponseEntity<GridDataDTO> getGridDataFunction(@RequestBody GenericDataFunctionReqDTO dataFunctionReqDTO) {
		return new ResponseEntity<>(dataFunctionService.getDynamicGridDataDTOFunction(dataFunctionReqDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdatabytype")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(liquidityService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "saveecbexcessdata")
    public List<EcbExcessLiquidity> saveEcbExcessData(@RequestBody List<EcbExcessLiquidity> ecbExcessLiquidityList){
		List<EcbExcessLiquidity> ecbExcessLiquidityDatalst= ecbExcessLiquidityService.SaveExcessLiquidityData(ecbExcessLiquidityList);
		ecbExcessLiquidityService.doCalculation(ecbExcessLiquidityList.get(0).getReferDate());
	  return ecbExcessLiquidityDatalst;
    }
	@PostMapping(value = "saveecbqedata")
    public List<EcbQeLiquidity> saveEcbQeData(@RequestBody List<EcbQeLiquidity> ecbQeLiquidityList){
		List<EcbQeLiquidity> ecbQeLiquidityDatalst= ecbQeLiquidityService.SaveQeLiquidityData(ecbQeLiquidityList);
	  return ecbQeLiquidityDatalst;
    }
	@PostMapping(value = "saveezmmdata")
    public List<EurozoneMonetaryMass> saveEzmmData(@RequestBody List<EurozoneMonetaryMass> eurozoneMonetaryMassList){
		List<EurozoneMonetaryMass> ecbQeLiquidityDatalst= ezMonetaryMassLiquidityService.SaveEurozoneMonetaryMassData(eurozoneMonetaryMassList);
		ezMonetaryMassLiquidityService.doCalculation(ecbQeLiquidityDatalst.get(0).getReferDate());
	   return ecbQeLiquidityDatalst;
    }
	@PostMapping(value = "savefedliquidity")
    public List<FedLiquidity> saveFedLiquidity(@RequestBody List<FedLiquidity> FedLiquidityList){
		List<FedLiquidity> Datalst= fedLiquidityService.SaveFedLiquidityData(FedLiquidityList);
		fedLiquidityService.doCalculation(Datalst.get(0).getReferDate());
	   return Datalst;
    }
	@PostMapping(value = "saveecbbalancesheet")
    public List<EcbBalanceSheetLiquidity> saveEcbBalanceSheet(@RequestBody List<EcbBalanceSheetLiquidity> EcbBalanceSheetLiquidityList){
		List<EcbBalanceSheetLiquidity> Datalst= ecbBalanceSheetService.SaveEcbBalanceSheetData(EcbBalanceSheetLiquidityList);
		ecbBalanceSheetService.doCalculation(Datalst.get(0).getReferDate());
	   return Datalst;
    }
	@GetMapping(value = "getecbexcessdata/{referDate}")
	public ResponseEntity<List<TmpAuditEcbExcessLiquidity>> getAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(ecbExcessLiquidityService.getAuditData(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "getecbqedata/{referDate}")
	public ResponseEntity<List<TmpAuditEcbQeLiquidity>> getEcbqeAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(ecbQeLiquidityService.getAuditData(referDate),HttpStatus.OK);
	}
	@GetMapping(value = "getezmmdata/{referDate}")
	public ResponseEntity<List<TmpAuditEzMonetaryMassLiquidity>> getEzMonetaryMassAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(ezMonetaryMassLiquidityService.getAuditData(referDate),HttpStatus.OK);
	}
	@GetMapping(value = "getfedliquidity/{referDate}")
	public ResponseEntity<List<TmpAuditFedLiquidity>> getFedLiquidityAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(fedLiquidityService.getAuditData(referDate),HttpStatus.OK);
	}
	@GetMapping(value = "getecbbalancesheet/{referDate}")
	public ResponseEntity<List<TmpAuditEcbBalanceSheetLiquidity>> getEcbBalanceSheet(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(ecbBalanceSheetService.getAuditData(referDate),HttpStatus.OK);
	}
	@GetMapping(value = "getcorporatedata/{referDate}")
	public ResponseEntity<List<TmpAuditCorporateLiquidityPremia>> getCorporateLiquidityPremiaAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(corporatesYieldsService.getCorporateLiquidityAuditData(referDate),HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansave/{liquidity}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSavePrecious(@PathVariable("liquidity") String liquidity,@PathVariable String referDate) 
	{  boolean checkifcanSave= false;
		if (liquidity.equalsIgnoreCase("1"))
		 checkifcanSave= ecbExcessLiquidityService.CheckIfCanSave(referDate);
		else if (liquidity.equalsIgnoreCase("2"))
			 checkifcanSave= ecbQeLiquidityService.CheckIfCanSave(referDate);
		else if (liquidity.equalsIgnoreCase("3"))
			 checkifcanSave= ezMonetaryMassLiquidityService.CheckIfCanSave(referDate);
		else if (liquidity.equalsIgnoreCase("5"))
			 checkifcanSave= fedLiquidityService.CheckIfCanSave(referDate);
		else if (liquidity.equalsIgnoreCase("6"))
			 checkifcanSave= ecbBalanceSheetService.CheckIfCanSave(referDate);
		
		return new ResponseEntity<>(checkifcanSave,HttpStatus.OK);
	}
	@GetMapping(value = "getlatest/{liquidity}", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatest(@PathVariable("liquidity") String liquidity){
			String value=null;
			if (liquidity.equalsIgnoreCase("1"))
				value = ecbExcessLiquidityService.findLatestEcbExcessLiquidityData();
			else if (liquidity.equalsIgnoreCase("2"))
				value = ecbQeLiquidityService.findLatestecbQeLiquidityData();
			else if (liquidity.equalsIgnoreCase("3"))
				value = ezMonetaryMassLiquidityService.findLatestEzmmLiquidityData();
			else if (liquidity.equalsIgnoreCase("4"))
				value = corporatesYieldsService.findLatestCorporateData();
			else if (liquidity.equalsIgnoreCase("5"))
				value = fedLiquidityService.findLatestFedLiquidityData();
			else if (liquidity.equalsIgnoreCase("6"))
				value = ecbBalanceSheetService.findLatestEcbBalanceSheetData();
		return new ResponseEntity<>(value, HttpStatus.OK);
    }
	@DeleteMapping(value = "deletebyreferdate/{liquidity}/{referDate}")
	public ResponseEntity<Object>  deletePreciousByReferDate(@PathVariable("liquidity") String liquidity,@PathVariable("referDate") String referDate) {
		if (liquidity.equalsIgnoreCase("1"))
		  ecbExcessLiquidityService.deleteEcbExcessLiquidityByReferDate(referDate);
		else if (liquidity.equalsIgnoreCase("2"))
			ecbQeLiquidityService.deleteecbQeLiquidityByReferDate(referDate);
		else if (liquidity.equalsIgnoreCase("3"))
			ezMonetaryMassLiquidityService.deleteEzmmLiquidityByReferDate(referDate);
		else if (liquidity.equalsIgnoreCase("5"))
			fedLiquidityService.deleteFedLiquidityByReferDate(referDate);
		else if (liquidity.equalsIgnoreCase("6"))
			ecbBalanceSheetService.deleteEcbBalanceSheetByReferDate(referDate);
	return new ResponseEntity<>(HttpStatus.OK);
	}
	@PostMapping(value = "updateecbexcessdata")
	public ResponseEntity<Boolean> updateEcbExcessAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
	
		ecbExcessLiquidityService.updateEcbExcessLiquidityData(updateDataDTOlst);
		ecbExcessLiquidityService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "updateecbqedata")
	public ResponseEntity<Boolean> updateEcbQeAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
	
		ecbQeLiquidityService.updateEcbQeLiquidityData(updateDataDTOlst);
		ecbQeLiquidityService.doCalculation();
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "updateezmmdata")
	public ResponseEntity<Boolean> updateEzmmAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		ezMonetaryMassLiquidityService.updateEzmmLiquidityData(updateDataDTOlst);
		ezMonetaryMassLiquidityService.doCalculation();
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "updatefedliquidity")
	public ResponseEntity<Boolean> updateFedLiquidity(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		fedLiquidityService.updateFedLiquidityData(updateDataDTOlst);
		fedLiquidityService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "updateecbbalancesheet")
	public ResponseEntity<Boolean> updateEcbBalanceSheet(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		ecbBalanceSheetService.updateEcbBalanceSheetData(updateDataDTOlst);
		ecbBalanceSheetService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
}
