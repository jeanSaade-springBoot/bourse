package com.bourse.service;


import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.News;
import com.bourse.repositories.NewsRepository;

@Service
public class RobotService 
{
	@Autowired
	NewsRepository newsRepository;
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
	
	public void callJumpRobots(){
		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("robots_jump");
		query.execute(); 
	}
	
}
