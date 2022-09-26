package com.bourse.service;

import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bourse.domain.RobotInitializer;
import com.bourse.dto.RobotInitializerDTO;
import com.bourse.repositories.RobotInitializerRepository;
@Service
public class RobotInitializerService {

	@Autowired
	RobotInitializerRepository robotInitializerRepository;
	@PersistenceContext
	private EntityManager entityManager;
	 
	private final RestTemplate restTemplate;
	public RobotInitializerService(RestTemplate restTemplate)
	{
		this.restTemplate = restTemplate;
	}
	
	public List<RobotInitializer> getRobotsInitializer(String processName)
	{
		return robotInitializerRepository.findByProcessName(processName);
	}
	
	public void callrobotswithoutfunctionasync(){
		
		List<RobotInitializer> listOfRobots =  getRobotsInitializer("PROCESS_WITHOUT_FUNCTION");
		
		 Future<Boolean> futureResult = null;
		 StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("INITIATE_ROBOT_WITHOUT_FUNCTION");
		 query.registerStoredProcedureParameter("processName", String.class, ParameterMode.IN);
		 query.setParameter("processName","PROCESS_WITHOUT_FUNCTION" );
		 query.execute();
		 
			for(RobotInitializer myObject:listOfRobots) {
				try {
					 RobotInitializerDTO robotdto = RobotInitializerDTO.builder()
			                 .columnName(myObject.getColumnName())
			                 .robotName(myObject.getRobotName())
			                 .build();
					  
					 
					 futureResult =  executeRobots(robotdto);
				    
			    	    System.out.println("excuting Robot for column: "+ myObject.getRobotName() +" "+ myObject.getColumnName()+" time:"+new Date());
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			try {
				futureResult.get();
				  query = this.entityManager.createStoredProcedureQuery("INSERT_ROBOTS_WITHOUT_FUNCTION_NEWS");
				  query.registerStoredProcedureParameter("processName", String.class, ParameterMode.IN);
				  query.setParameter("processName","PROCESS_WITHOUT_FUNCTION" );
				  query.execute();
				System.out.println("PROCEDURE DONE");
				
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ExecutionException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
	}
public void callrobotswithfunctionasync(){
		
		List<RobotInitializer> listOfRobots =  getRobotsInitializer("PROCESS_WITH_FUNCTION");
		
		 Future<Boolean> futureResult = null;
		 StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("INITIATE_ROBOT_WITH_FUNCTION");
		 query.registerStoredProcedureParameter("processName", String.class, ParameterMode.IN);
		 query.setParameter("processName","PROCESS_WITH_FUNCTION" );
		 query.execute();
		 
			for(RobotInitializer myObject:listOfRobots) {
				try {
					 RobotInitializerDTO robotdto = RobotInitializerDTO.builder()
			                 .columnName(myObject.getColumnName())
			                 .robotName(myObject.getRobotName())
			                 .build();
					  
					 
					 futureResult =  executeRobots(robotdto);
				    
			    	    System.out.println("excuting Robot for column: "+ myObject.getRobotName() +" "+ myObject.getColumnName()+" time:"+new Date());
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			try {
				futureResult.get();
				  query = this.entityManager.createStoredProcedureQuery("INSERT_ROBOTS_WITH_FUNCTION_NEWS");
				  query.registerStoredProcedureParameter("processName", String.class, ParameterMode.IN);
				  query.setParameter("processName","PROCESS_WITH_FUNCTION" );
				  query.execute();
				System.out.println("PROCEDURE DONE");
				
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ExecutionException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
	}
	
	@Async
	public Future<Boolean> executeRobots(RobotInitializerDTO robotdto){
		 HttpHeaders headers = new HttpHeaders();
  	     HttpEntity<RobotInitializerDTO> requestEntity = new HttpEntity<>(robotdto, headers);
		 restTemplate.exchange("http://localhost:9090/databseSynchro/runrobot", HttpMethod.POST, requestEntity, RobotInitializerDTO.class);
		 return new AsyncResult<Boolean>(true);
	}
}
