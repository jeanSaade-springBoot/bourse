package com.bourse.notification.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.bourse.authsecurity.service.UsersMembershipViewService;
import com.bourse.notification.dto.Message;
import com.bourse.notification.dto.MessageDTO;

@Controller
public class MessageController {

	@Autowired 
	UsersMembershipViewService usersMembershipViewService;
	
    @MessageMapping("/application")
    @SendTo("/all/messages")
    public MessageDTO send() throws Exception {
    	int count = usersMembershipViewService.getPendingApprovalUsers();
    	MessageDTO message= MessageDTO.builder().value(String.valueOf(count)).build();
        return message;
    }
    
    
}