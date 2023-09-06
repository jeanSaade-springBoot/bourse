package com.bourse.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bourse.domain.OngoingProcess;
import com.bourse.domain.RobotInitializer;
import com.bourse.dto.OngoingProcessDTO;
import com.bourse.dto.RobotInitializerDTO;
import com.bourse.dto.UpdatedColumnDTO;
import com.bourse.repositories.RobotInitializerRepository;
@Service
public class RobotInitializerService {

	@Autowired
	RobotInitializerRepository robotInitializerRepository;
	@Autowired
	OngoingProcessService ongoingProcessService;
	
	@PersistenceContext
	private EntityManager entityManager;
	
	
	private String withFunctionProcess = "PROCESS_WITH_FUNCTION";
	private String withoutFunctionProcess = "PROCESS_WITHOUT_FUNCTION";
	private String withFunctionInitiateProc = "INITIATE_ROBOT_WITH_FUNCTION";
	private String withoutFunctionInitiateProc = "INITIATE_ROBOT_WITHOUT_FUNCTION";
	private String withFunctionFinalizationProc = "INSERT_ROBOTS_WITH_FUNCTION_NEWS";
	private String withoutFunctionFinalizationProc = "INSERT_ROBOTS_WITHOUT_FUNCTION_NEWS";
	
	private final RestTemplate restTemplate;
	public RobotInitializerService(RestTemplate restTemplate)
	{
		this.restTemplate = restTemplate;
	}
	
	public List<RobotInitializer> getRobotsInitializer(String processName,int assetId , int groupId)
	{
		return robotInitializerRepository.findByProcessNameAndAssetIdAndGroupId(processName,assetId ,groupId);
	}
	public void callRobotsForUpdateColumnAsync(List<RobotInitializer> listOfRobots,String ProcedureInitialization,String ProcedureFinalization,String proccessName,int assetId,int groupId){
		
		List<CompletableFuture<Boolean>> futures = new ArrayList<>();
		
		 StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery(ProcedureInitialization);
		 query.registerStoredProcedureParameter("processName", String.class, ParameterMode.IN);
		 query.setParameter("processName",proccessName);
		 query.registerStoredProcedureParameter("assetId", Integer.class, ParameterMode.IN);
		 query.setParameter("assetId",assetId);
		 query.registerStoredProcedureParameter("groupId", Integer.class, ParameterMode.IN);
		 query.setParameter("groupId",groupId); 
		 query.execute();
		 
		for(RobotInitializer myObject:listOfRobots) {
			try {
				 RobotInitializerDTO robotdto = RobotInitializerDTO.builder()
		                 .columnName(myObject.getColumnName())
		                 .robotName(myObject.getRobotName())
		                 .functionId(myObject.getFunctionId())
		                 .build();
				  
				 futures.add(CompletableFuture.supplyAsync(() -> executeRobots(robotdto)));
			     System.out.println("excuting Robot for column: "+ myObject.getRobotName() +" "+ myObject.getColumnName()+" time:"+new Date());
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
			PublishNewsAfterAllThreadAreExcuted(futures,ProcedureFinalization,proccessName, assetId, groupId);
		
		}	
public void callRobotsAsync(String ProcedureInitialization,String ProcedureFinalization,String proccessName,int assetId, int groupId){
	
	List<RobotInitializer> listOfRobots =  getRobotsInitializer(proccessName, assetId, groupId);
	List<CompletableFuture<Boolean>> futures = new ArrayList<>();
	
	 StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery(ProcedureInitialization);
	 query.registerStoredProcedureParameter("processName", String.class, ParameterMode.IN);
	 query.setParameter("processName",proccessName);
	 query.registerStoredProcedureParameter("assetId", Integer.class, ParameterMode.IN);
	 query.setParameter("assetId",assetId);
	 query.registerStoredProcedureParameter("groupId", Integer.class, ParameterMode.IN);
	 query.setParameter("groupId",groupId);
	 query.execute();
	 
	for(RobotInitializer myObject:listOfRobots) {
		try {
			 RobotInitializerDTO robotdto = RobotInitializerDTO.builder()
	                 .columnName(myObject.getColumnName())
	                 .robotName(myObject.getRobotName())
	                 .functionId(myObject.getFunctionId())
	                 .build();
			  
			 futures.add(CompletableFuture.supplyAsync(() -> executeRobots(robotdto)));
		     System.out.println("excuting Robot for column: "+ myObject.getRobotName() +" "+ myObject.getColumnName()+" time:"+new Date());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
		PublishNewsAfterAllThreadAreExcuted(futures,ProcedureFinalization,proccessName, assetId,groupId);
	
	}

	public void PublishNewsAfterAllThreadAreExcuted(List<CompletableFuture<Boolean>> com,String procedureName,String proccessName,int assetId, int groupId) {
		CompletableFuture<Void> resultantCf = CompletableFuture.allOf(com.toArray(new CompletableFuture<?>[0]));
		CompletableFuture<Object> allFutureResults = resultantCf.thenApply(t -> com.stream().map(CompletableFuture::join).collect(Collectors.toList()));
		try {
			System.out.println("Result - " + allFutureResults.get());
			  StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery(procedureName);
			  query.registerStoredProcedureParameter("processName", String.class, ParameterMode.IN);
			  query.setParameter("processName",proccessName);
			  query.registerStoredProcedureParameter("assetId", Integer.class, ParameterMode.IN);
			  query.setParameter("assetId",assetId);
			  query.registerStoredProcedureParameter("groupId", Integer.class, ParameterMode.IN);
			  query.setParameter("groupId",groupId);
			  
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
	public Boolean executeRobots(RobotInitializerDTO robotdto){
		 HttpHeaders headers = new HttpHeaders();
  	     HttpEntity<RobotInitializerDTO> requestEntity = new HttpEntity<>(robotdto, headers);
  	     ResponseEntity<Boolean> respEntity = restTemplate.exchange("http://localhost:9090/databseSynchro/runrobot", HttpMethod.POST, requestEntity, Boolean.class);
		return respEntity.getBody();
		 	}

	public void UpdateColumnConfigurationById(List<UpdatedColumnDTO> updatedColumnDTOList) {
		int assetId = updatedColumnDTOList.get(0).getAssetId();
		int groupId = updatedColumnDTOList.get(0).getGroupId();
		
		List<OngoingProcessDTO> ongoingProcessList = ongoingProcessService.findByAssetIdAndGroupIdOrParentGroupId(assetId,groupId);
		
		for(OngoingProcessDTO ongoingProcess:ongoingProcessList) {
			try {
				
				int ongoingProcessAssetId = ongoingProcess.getAssetId();
				int ongoingProcessGroupId = ongoingProcess.getGroupId();
				
				List<String> lstRelatedColumn = getRelatedColumn(buildDyamicQuery(updatedColumnDTOList,String.valueOf(ongoingProcessGroupId)));
				List<RobotInitializer> columnWithFunction = robotInitializerRepository.findRelatedColumn(lstRelatedColumn,withFunctionProcess);
				List<RobotInitializer> columnWithoutFunction = robotInitializerRepository.findRelatedColumn(lstRelatedColumn,withoutFunctionProcess);
				
				callRobotsForUpdateColumnAsync(columnWithoutFunction,withoutFunctionInitiateProc,withoutFunctionFinalizationProc,withoutFunctionProcess,ongoingProcessAssetId,ongoingProcessGroupId);
				callRobotsForUpdateColumnAsync(columnWithFunction,withFunctionInitiateProc,withFunctionFinalizationProc,withFunctionProcess,ongoingProcessAssetId,ongoingProcessGroupId);
			
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
	}
	public String buildDyamicQuery(List<UpdatedColumnDTO> updatedColumnDTOList,String groupId)
	{
		String query="";
		Iterator<UpdatedColumnDTO> iterator = updatedColumnDTOList.iterator();
		  while (iterator.hasNext()) {
			  UpdatedColumnDTO UpdatedColumn = iterator.next();
			
			  if(UpdatedColumn.getAssetId()==1)
			    if(UpdatedColumn.getFactor()!=null)
				  query+="select description from column_configuration where description like'%"+UpdatedColumn.getValue()+"%"+UpdatedColumn.getFactor()+"%'";
			    else 
			    	query+="select description from column_configuration where description like'%"+UpdatedColumn.getValue()+"%'";
			 else 
				query+="select description from column_configuration where description like'%"+UpdatedColumn.getValue()+"%'";
			  
			  query+=" and group_id = "+groupId;
			  if (iterator.hasNext()) {
		        	query+=" union "; 
		        }
		  }
				
		return query;
	}
	public List<String> getRelatedColumn(String queryStr)
	{
		javax.persistence.Query query = entityManager.createNativeQuery(queryStr);
		List<String> lstRelatedColumn = query.getResultList();   
		return lstRelatedColumn;
		
	}

	public void initiateRobots(int assetId, int groupId) {
		
		List<OngoingProcessDTO> ongoingProcessList = ongoingProcessService.findByAssetIdAndGroupIdOrParentGroupId(assetId,groupId);
	
		for(OngoingProcessDTO ongoingProcess:ongoingProcessList) {
			try {
				int ongoingProcessAssetId = ongoingProcess.getAssetId();
				int ongoingProcessGroupId = ongoingProcess.getGroupId();
				
				callRobotsAsync(withoutFunctionInitiateProc,withoutFunctionFinalizationProc,withoutFunctionProcess, ongoingProcessAssetId,ongoingProcessGroupId);
				callRobotsAsync(withFunctionInitiateProc,withFunctionFinalizationProc,withFunctionProcess, ongoingProcessAssetId,ongoingProcessGroupId);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
	}
}
