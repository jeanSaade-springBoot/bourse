package com.bourse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.News;
import com.bourse.service.RobotService;
@RestController
@RequestMapping(value = "robot")
public class RobotsController {

	@Autowired
	private final RobotService robotService;
	
	public RobotsController(RobotService robotService)
	{
		this.robotService = robotService;
	}
	
	@PostMapping(value = "publishNews", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus>  publishNews(@RequestBody List<News> newsLst){
		robotService.publishNews(newsLst);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@GetMapping(value = "callRobots", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus>  callRobots(){
		robotService.callRobots();
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	
}
