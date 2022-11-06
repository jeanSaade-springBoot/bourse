package com.bourse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.dto.UpdatedColumnDTO;
import com.bourse.service.RobotInitializerService;
import com.bourse.service.RobotService;
@RestController
@RequestMapping(value = "robot")
//@PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN') or hasRole('ROLE_SUPER_ADMIN')")
public class RobotsController {

	@Autowired
	private final RobotService robotService;
	@Autowired
	private final RobotInitializerService robotInitializerService;
	
	
	public RobotsController(RobotService robotService,RobotInitializerService robotInitializerService)
	{
		this.robotService = robotService;
		this.robotInitializerService = robotInitializerService;
	}
	
	@GetMapping(value = "publishNews", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus>  publishNews(){
		robotService.publishNews();
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@GetMapping(value = "callRobots", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus>  callRobots(){
		robotService.callRobots();
		return new ResponseEntity<>(HttpStatus.OK);
    }

	@GetMapping(value = "callrobotsasync", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus> callrobotsasync(){
		String withFunctionProcess = "PROCESS_WITH_FUNCTION";
		String withoutFunctionProcess = "PROCESS_WITHOUT_FUNCTION";
		String withFunctionInitiateProc = "INITIATE_ROBOT_WITH_FUNCTION";
		String withoutFunctionInitiateProc = "INITIATE_ROBOT_WITHOUT_FUNCTION";
		String withFunctionFinalizationProc = "INSERT_ROBOTS_WITH_FUNCTION_NEWS";
		String withoutFunctionFinalizationProc = "INSERT_ROBOTS_WITHOUT_FUNCTION_NEWS";
		
		robotInitializerService.callRobotsAsync(withoutFunctionInitiateProc,withoutFunctionFinalizationProc,withoutFunctionProcess);
		robotInitializerService.callRobotsAsync(withFunctionInitiateProc,withFunctionFinalizationProc,withFunctionProcess);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	@PostMapping(value ="updaterobotnewsonchangecolumns")
	public ResponseEntity<HttpStatus> UpdateColumnConfigurationById(@RequestBody List<UpdatedColumnDTO> updatedColumnDTOList) {
		robotInitializerService.UpdateColumnConfigurationById(updatedColumnDTOList);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
