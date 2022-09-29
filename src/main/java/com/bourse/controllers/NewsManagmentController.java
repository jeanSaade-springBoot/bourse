package com.bourse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.service.NewsManagmentService;

@RestController
@RequestMapping(value = "news")
public class NewsManagmentController {
	@Autowired
	NewsManagmentService newsManagmentService;
	
	@GetMapping(value = "showvisiblenews", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus> ShowVisibleNews(){
		newsManagmentService.showGeneratedNews();
		return new ResponseEntity<>(HttpStatus.OK);
    }
}
