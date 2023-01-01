package com.bourse.mail.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.mail.service.EmailService;

@RestController
@RequestMapping("/mail")
public class MailController {

	 @Autowired
	 public final EmailService emailService;
	 
	 public MailController(EmailService emailService) {
		 this.emailService=emailService;
	 }
	 

}
