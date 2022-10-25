package com.bourse.authsecurity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.domain.Page;
import com.bourse.authsecurity.repositories.PageRepository;

@Service
public class PageService {
	
  @Autowired 
  PageRepository pageRepository;
  
  public List<Page> getAllPages()
  {
	  return pageRepository.findAll();
  }
}
