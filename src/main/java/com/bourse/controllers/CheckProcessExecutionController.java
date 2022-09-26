package com.bourse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.service.OngoingProcessService;

@RestController
@RequestMapping(value = "process")
public class CheckProcessExecutionController {
	
	@Autowired
	OngoingProcessService ongoingProcessService;
	
	@GetMapping(value = "isrobottriggered", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus>  checkProcessStatus(){
	
		return new ResponseEntity<>(HttpStatus.OK);
    }
	@PostMapping(value = "updateongoingprocess", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus>  updateOngoingProcess(){
		ongoingProcessService.updateOngoingProcessSetMustBeTriggeredTrue();
		return new ResponseEntity<>(HttpStatus.OK);
    }
}
