package com.bourse.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.bourse.domain.NewsFunction;

public interface NewsFunctionRepository extends JpaRepository<NewsFunction, Long> {

	public Optional<NewsFunction> findById(Long id);

	  @Transactional
	  @Modifying
	  @Query("Update NewsFunction set isVisible=1")
	 void showGeneratedNews();
	  
	  @Transactional
	  @Modifying
	  @Query("Update NewsFunction set isPublished=1")
	  public void publishNews();
	 
}
