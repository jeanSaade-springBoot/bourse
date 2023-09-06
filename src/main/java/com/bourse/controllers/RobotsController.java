package com.bourse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping(value = "publishNews/{assetId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus>  publishNews(@PathVariable("assetId") int assetId){
		robotService.publishNews(assetId);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@GetMapping(value = "callRobots", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus>  callRobots(){
		robotService.callRobots();
		return new ResponseEntity<>(HttpStatus.OK);
    }

	@GetMapping(value = "callrobotsasync/{assetId}/{groupId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus> callrobotsasync(@PathVariable("assetId") int assetId,@PathVariable("groupId") int groupId){ 
		
		robotInitializerService.initiateRobots(assetId,groupId);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	@PostMapping(value ="updaterobotnewsonchangecolumns")
	public ResponseEntity<HttpStatus> UpdateColumnConfigurationById(@RequestBody List<UpdatedColumnDTO> updatedColumnDTOList) {
		robotInitializerService.UpdateColumnConfigurationById(updatedColumnDTOList);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
