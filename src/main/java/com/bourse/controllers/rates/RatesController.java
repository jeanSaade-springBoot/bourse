package com.bourse.controllers.rates;

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
import com.bourse.domain.TmpAuditEcbExcessLiquidity;
import com.bourse.domain.rates.RatesData;
import com.bourse.domain.rates.TmpAuditRtsCentralBanks;
import com.bourse.domain.rates.TmpAuditRtsFixings;
import com.bourse.domain.rates.TmpAuditRtsInflationSwapRates;
import com.bourse.domain.rates.TmpAuditRtsMortgageRates;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.service.DataFunctionService;
import com.bourse.service.rates.RatesService;

@RestController
@RequestMapping(value = "rates")
public class RatesController {

	@Autowired
	private final RatesService ratesService;
	
	@Autowired
	private final DataFunctionService dataFunctionService;
	
	private String className = "rates";
	
	public RatesController(
			RatesService ratesService,
			DataFunctionService dataFunctionService)
	{
		this.ratesService = ratesService;
		this.dataFunctionService = dataFunctionService;
	}
	@GetMapping(value = "get-central-banks/{groupId}/{referDate}")
	public ResponseEntity<List<TmpAuditRtsCentralBanks>> getAuditData(@PathVariable("groupId") String groupId,@PathVariable("referDate") String referDate) {
		System.out.println(className+": get-central-banks");
		return new ResponseEntity<>(ratesService.getAuditRtsCentralBanksData(groupId,referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "get-inflation-swap-rates-data/{groupId}/{referDate}")
	public ResponseEntity<List<TmpAuditRtsInflationSwapRates>> getAuditinflationSwapData(@PathVariable("groupId") String groupId,@PathVariable("referDate") String referDate) {
		System.out.println(className+": get-inflation-swap-rates-data");
		return new ResponseEntity<>(ratesService.getAuditRtsinflationSwapData(groupId,referDate),HttpStatus.OK);
	}
	@GetMapping(value = "get-mortage-rates/{referDate}")
	public ResponseEntity<List<TmpAuditRtsMortgageRates>> getMortageRates( @PathVariable("referDate") String referDate) {
		System.out.println(className+": get-mortage-rates");
		return new ResponseEntity<>(ratesService.getAuditRtsMortageRatesData(referDate),HttpStatus.OK);
	}
	@GetMapping(value = "get-fixings-data/{referDate}")
	public ResponseEntity<List<TmpAuditRtsFixings>> getFixingsData(@PathVariable("referDate") String referDate) {
		System.out.println(className+": get-fixings-data");
		return new ResponseEntity<>(ratesService.getAuditRtsFixingsData(referDate),HttpStatus.OK);
	}
	
	@PostMapping(value = "update-rates-data")
	public ResponseEntity<Boolean> updateRtsFixingsAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
		System.out.println(className+": update-rates-data");
		ratesService.updateRtsData(updateDataDTOlst);
		ratesService.doCaclulationData(updateDataDTOlst.get(0).getReferdate(),Long.valueOf(updateDataDTOlst.get(0).getGroupId()));
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "save-rates-data")
    public List<RatesData> saveRatesData(@RequestBody List<RatesData> ratesDataList){
		System.out.println(className+": save-rates-data");
		List<RatesData> ratesDatalst= ratesService.SaveRatesData(ratesDataList);
		ratesService.doCaclulationData(ratesDataList.get(0).getReferDate(),ratesDataList.get(0).getGroupId());
	  return ratesDatalst;
    }
	@DeleteMapping(value = "deletebyreferdate/{rates}/{referDate}")
	public ResponseEntity<Object>  deleteRatesByReferDate(@PathVariable("rates") String rates,@PathVariable("referDate") String referDate) {
		System.out.println(className+": deletebyreferdate");
		if (rates.equalsIgnoreCase("1"))
			ratesService.deleteRtsCentralBanksByReferDate(referDate,Long.valueOf(48));
		else if (rates.equalsIgnoreCase("2"))
			ratesService.deleteRtsInflationSwapRatesByReferDate(referDate,Long.valueOf(49));
		else if (rates.equalsIgnoreCase("3"))
			ratesService.deleteRtsMortageRatesByReferDate(referDate,Long.valueOf(50));
		else if (rates.equalsIgnoreCase("4"))
			ratesService.deleteRtsFixingsByReferDate(referDate,Long.valueOf(51));
		
	return new ResponseEntity<>(HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansave/{group}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSave(@PathVariable("group") String group,@PathVariable String referDate) 
	{   System.out.println(className+": checkifcansave");
		return new ResponseEntity<>(ratesService.CheckIfCanSave(referDate,Long.valueOf(group)),HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansave/{group}/{subgroup}/{factor}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSave(@PathVariable("group") String group,@PathVariable("subgroup") String subgroup,@PathVariable("factor") String factor,@PathVariable String referDate) 
	{  
		return new ResponseEntity<>(ratesService.CheckIfCanSaveFactor(referDate,Long.valueOf(group),Long.valueOf(subgroup),Long.valueOf(factor)),HttpStatus.OK);
	}
	@GetMapping(value = "getlatest/{groupId}", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatest(@PathVariable("groupId") String groupId){
		return new ResponseEntity<>(ratesService.findLatestData(groupId), HttpStatus.OK);
    }
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		 System.out.println(className+": getgriddata");
		return new ResponseEntity<>(ratesService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdatabytype")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(ratesService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "getgraphdatabytypes")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByTypes(@RequestBody List<GraphRequestDTO> graphReqDTO) {
		return new ResponseEntity<>(ratesService.getGraphDataByTypes(graphReqDTO),HttpStatus.OK);
	} 
}

