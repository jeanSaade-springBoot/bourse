package com.bourse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.OngoingProcess;
import com.bourse.dto.OngoingProcessDTO;
import com.bourse.service.OngoingProcessService;

@RestController
@RequestMapping(value = "process")
public class CheckProcessExecutionController {
	
	@Autowired
	OngoingProcessService ongoingProcessService;
	
	@GetMapping(value = "isrobottriggered/{assetId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<Boolean> CheckProcessStatus(@PathVariable("assetId") int assetId ){
		OngoingProcess ongoingProcess= ongoingProcessService.checkIfExistByAssetId(true,assetId);
		Boolean isRunnig =false;
		if(ongoingProcess!=null)
			isRunnig = true;
		return new ResponseEntity<>(isRunnig, HttpStatus.OK);
    }
	@GetMapping(value = "isrobottriggered/{assetId}/{groupId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<Boolean> CheckProcessStatus(@PathVariable("assetId") int assetId , @PathVariable("groupId") int groupId){
	   return new ResponseEntity<>(ongoingProcessService.checkIfRobotIsRunning(assetId, groupId), HttpStatus.OK);
    }
	@GetMapping(value = "mustbetriggered/{assetId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<Boolean> MustBeTriggered(@PathVariable("assetId") int assetId){
		OngoingProcess ongoingProcess= ongoingProcessService.checkIfMustBeTriggeredByAssetId(true,assetId);
		Boolean mustBeTriggered =false;
		if(ongoingProcess!=null)
			mustBeTriggered = true;
		return new ResponseEntity<>(mustBeTriggered, HttpStatus.OK);
    }
	@GetMapping(value = "mustbetriggered/{assetId}/{groupId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<Boolean> MustBeTriggered(@PathVariable("assetId") int assetId,@PathVariable("groupId") int groupId){
		OngoingProcess ongoingProcess= ongoingProcessService.checkIfMustBeTriggeredByAssetIdAndGroupId(true,assetId,groupId);
		Boolean mustBeTriggered =false;
		if(ongoingProcess!=null)
			mustBeTriggered = true;
		return new ResponseEntity<>(mustBeTriggered, HttpStatus.OK);
    }
	@PostMapping(value = "updateongoingprocess", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus>  updateOngoingProcess(){
		ongoingProcessService.updateOngoingProcessSetMustBeTriggeredTrue();
		return new ResponseEntity<>(HttpStatus.OK);
    }
}
