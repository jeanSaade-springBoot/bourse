package com.bourse.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.bourse.domain.News;
import com.bourse.domain.RobotInitializer;
import com.bourse.dto.RobotInitializerDTO;
import com.bourse.service.RobotInitializerService;
import com.bourse.service.RobotService;
@RestController
@RequestMapping(value = "robot")
public class RobotsController {

	@Autowired
	private final RobotService robotService;
	@Autowired
	private final RobotInitializerService robotInitializerService;
	
	private final RestTemplate restTemplate;
	
	public RobotsController(RobotService robotService,RobotInitializerService robotInitializerService,RestTemplate restTemplate)
	{
		this.robotService = robotService;
		this.robotInitializerService = robotInitializerService;
		this.restTemplate = restTemplate;
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
	@GetMapping(value = "callRobotsAsync/{robotName}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus> callRobotsAsync(@PathVariable String robotName){
		List<RobotInitializer> listOfRobots =  robotInitializerService.getRobotInitializerByRobotName(robotName);
		/*for (int i = 0; i < listOfRobots.size(); i++) {
			  try {
			    	 RobotInitializerDTO robotdto = RobotInitializerDTO.builder()
			                 .columnName(listOfRobots.get(i).getColumnName())
			                 .robotName(listOfRobots.get(i).getRobotName())
			                 .build();
			    	 
		 		    HttpHeaders headers = new HttpHeaders();
		    	    HttpEntity<RobotInitializerDTO> requestEntity = new HttpEntity<>(robotdto, headers);
		    	    
		    	    restTemplate.exchange("http://localhost:9090/databseSynchro/runrobot", HttpMethod.POST, requestEntity, RobotInitializerDTO.class);
			    	    
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}*/
		 listOfRobots.stream()
			.parallel()
			.forEach(myObject -> {
				try {
					 RobotInitializerDTO robotdto = RobotInitializerDTO.builder()
			                 .columnName(myObject.getColumnName())
			                 .robotName(myObject.getRobotName())
			                 .build();
					    HttpHeaders headers = new HttpHeaders();
			    	    HttpEntity<RobotInitializerDTO> requestEntity = new HttpEntity<>(robotdto, headers);
			    	    
			    	    restTemplate.exchange("http://localhost:9090/databseSynchro/runrobot", HttpMethod.POST, requestEntity, RobotInitializerDTO.class);
				    
			    	    System.out.println("excuting Robot for column: "+ myObject.getRobotName() +" "+ myObject.getColumnName()+" time:"+new Date());
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			});
		
		// robotService.triggerRobotAsync(listOfRobots);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	
}
