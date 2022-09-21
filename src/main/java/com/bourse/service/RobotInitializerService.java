package com.bourse.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bourse.domain.RobotInitializer;
import com.bourse.dto.RobotInitializerDTO;
import com.bourse.repositories.RobotInitializerRepository;
@Service
public class RobotInitializerService {

	@Autowired
	RobotInitializerRepository robotInitializerRepository;

	private final RestTemplate restTemplate;
	public RobotInitializerService(RestTemplate restTemplate)
	{
		this.restTemplate = restTemplate;
	}
	
	public List<RobotInitializer> getRobotInitializerByRobotName(String robotName)
	{
		return robotInitializerRepository.findByRobotName(robotName);
	}
	
	public void callRobotsAsync(String robotName){
		List<RobotInitializer> listOfRobots =  getRobotInitializerByRobotName(robotName);
		
		 listOfRobots.stream()
			.parallel()
			.forEach(myObject -> {
				try {
					 RobotInitializerDTO robotdto = RobotInitializerDTO.builder()
			                 .columnName(myObject.getColumnName())
			                 .robotName(myObject.getRobotName())
			                 .build();
					  
			    	   
				    
			    	    System.out.println("excuting Robot for column: "+ myObject.getRobotName() +" "+ myObject.getColumnName()+" time:"+new Date());
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			});
	}
	
	@Async
	public void executeRObots(RobotInitializerDTO robotdto){
		 HttpHeaders headers = new HttpHeaders();
  	     HttpEntity<RobotInitializerDTO> requestEntity = new HttpEntity<>(robotdto, headers);
		 restTemplate.exchange("http://localhost:9090/databseSynchro/runrobot", HttpMethod.POST, requestEntity, RobotInitializerDTO.class);
	}
}
