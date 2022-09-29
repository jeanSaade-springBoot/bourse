package com.bourse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.OngoingProcess;
import com.bourse.service.OngoingProcessService;

@RestController
@RequestMapping(value = "process")
public class CheckProcessExecutionController {
	
	@Autowired
	OngoingProcessService ongoingProcessService;
	
	@GetMapping(value = "isrobottriggered", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<Boolean> CheckProcessStatus(){
		OngoingProcess ongoingProcess= ongoingProcessService.checkIfExist(true);
		Boolean isRunnig =false;
		if(ongoingProcess!=null)
			isRunnig = true;
		return new ResponseEntity<>(isRunnig, HttpStatus.OK);
    }
	@GetMapping(value = "mustbetriggered", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<Boolean> MustBeTriggered(){
		OngoingProcess ongoingProcess= ongoingProcessService.checkIfMustBeTriggered(true);
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
