package com.bourse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.service.NewsManagmentService;

@RestController
@RequestMapping(value = "news")
//@PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN') or hasRole('ROLE_SUPER_ADMIN')")
public class NewsManagmentController {
	@Autowired
	NewsManagmentService newsManagmentService;
	
	@GetMapping(value = "showvisiblenews/{assetId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<HttpStatus> ShowVisibleNews(@PathVariable("assetId") int assetId){
		newsManagmentService.showGeneratedNews(assetId);
		return new ResponseEntity<>(HttpStatus.OK);
    }
}
