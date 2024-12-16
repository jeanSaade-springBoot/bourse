package com.bourse.controllers.cryptos;

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

import com.bourse.domain.cryptos.CryptosData;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.dto.cryptos.CryptosAuditCommonDTO;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.service.DataFunctionService;
import com.bourse.service.cryptos.CryptosService;

@RestController
@RequestMapping(value = "cryptos")
public class CryptosController {

	@Autowired
	private final CryptosService cryptosService;
	@Autowired
	TableManagementRepository tableManagementRepository;
	@Autowired
	private final DataFunctionService dataFunctionService;
	
	private String className = "";
	
	public CryptosController(
			CryptosService cryptosService,
			DataFunctionService dataFunctionService)
	{
		this.cryptosService = cryptosService;
		this.dataFunctionService = dataFunctionService;
	}

	@GetMapping(value = "checkifcansave/{group}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSave(@PathVariable("group") String group,@PathVariable String referDate) 
	{  
		return new ResponseEntity<>(cryptosService.CheckIfCanSave(referDate,Long.valueOf(group)),HttpStatus.OK);
	}
	@PostMapping(value = "save-cryptos-data")
	public ResponseEntity<Boolean> saveCryptosData(@RequestBody List<CryptosData> cryptosDTOlst) {
		System.out.println(className+": save-cryptos-data");
		cryptosService.saveCryptos(cryptosDTOlst);
		cryptosService.doCalculation(cryptosDTOlst.get(0).getReferDate(),String.valueOf(cryptosDTOlst.get(0).getGroupId()));
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		 System.out.println(className+": getgriddata");
		return new ResponseEntity<>(cryptosService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}
	@GetMapping(value = "cryptos-data/{groupId}/{referDate}")
	public ResponseEntity<List<CryptosAuditCommonDTO>> getCryptosByGroupIdAndDataByReferDate(@PathVariable("groupId") String groupId, @PathVariable("referDate") String referDate) {
	    System.out.println(className + ": getCryptosByGroupIdAndDataByReferDate");
	    List<CryptosAuditCommonDTO> data = cryptosService.getCryptosByGroupIdAndDataByReferDate(groupId, referDate);
	   
	    return new ResponseEntity<>(data, HttpStatus.OK);
	}
	@GetMapping(value = "getlatest/{groupId}", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatest(@PathVariable("groupId") String groupId){
		return new ResponseEntity<>(cryptosService.findLatestData(groupId), HttpStatus.OK);
    }
	@PostMapping(value = "update-cryptos-data")
	public ResponseEntity<Boolean> updateCryptosData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{  System.out.println(className+": updateCryptosData");
		cryptosService.updateData(updateDataDTOlst);
		cryptosService.doCalculation(updateDataDTOlst.get(0).getReferdate(),updateDataDTOlst.get(0).getGroupId());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@DeleteMapping(value = "delete-cryptos/{groupId}/{referDate}")
	public ResponseEntity<HttpStatus> deleteCryptosData(@PathVariable("groupId") String groupId ,@PathVariable("referDate") String referDate) {
		System.out.println(className+": deleteCryptosDataByReferDate");
		cryptosService.deleteCryptosData(groupId,referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdata")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getCryptosGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		System.out.println(className+": getgraphdata");

		return new ResponseEntity<>(cryptosService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "getgraphdatabytype")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(cryptosService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "getcandlegraphdata")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getCandleGraphDataResult(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(cryptosService.getCandleGraphData(graphReqDTO),HttpStatus.OK);
	} 
	
}