package com.bourse.service;


import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.News;
import com.bourse.domain.RobotInitializer;
import com.bourse.repositories.NewsRepository;

@Service
public class RobotService 
{
	@Autowired
	NewsRepository newsRepository;
	@Autowired
	TriggerRobotService triggerRobotService;
	@PersistenceContext
    private EntityManager entityManager;
	
	public List<News> getNews() 
	{      
        return newsRepository.findAll();
	}
	
	public void publishNews(List<News> newsLst) {
		News updatedObject;
		for(News n :newsLst) {
			Optional<News> optionalObject= newsRepository.findById(n.getId());
			if(optionalObject.isPresent()) {
				updatedObject = optionalObject.get();
				updatedObject.setIsPublished("1");
				newsRepository.save(updatedObject);
			}
		}
	}
	
	public void callRobots(){
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("robots_starter");
		query.execute(); 
	}
	
	public void triggerRobotAsync(List<RobotInitializer> listOfRobots){
		
		for (int i = 0; i < listOfRobots.size(); i++) {
			if(i==5)
				return;
			     try {
			    	
					triggerRobotService.triggerRobot(listOfRobots.get(i).getRobotName(),  listOfRobots.get(i).getColumnName());
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
		 /*  listOfRobots.stream()
					.parallel()
					.forEach(myObject -> {
						try {
							triggerRobotService.triggerRobot(myObject.getRobotName(),  myObject.getColumnName());
							 System.out.println("Number of threads " + Thread.activeCount() +" "+Thread.State.values().toString());
						} catch (InterruptedException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					});
		  	*/
	}
}
