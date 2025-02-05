package com.bourse.notification.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import com.bourse.authsecurity.service.UsersMembershipViewService;
import com.bourse.notification.dto.MessageDTO;

@Controller
public class MessageController {

	@Autowired 
	UsersMembershipViewService usersMembershipViewService;

	 @Autowired
	    private SimpMessagingTemplate messagingTemplate;
    
    @MessageMapping("/application")
    @SendTo("/all/messages")
    public MessageDTO send() throws Exception {
    	int count = usersMembershipViewService.getPendingApprovalUsers();
    	MessageDTO message= MessageDTO.builder().value(String.valueOf(count)).build();
        return message;
    }
    
    @Scheduled(cron = "0 0/6 * * * ?")// Runs every 5 minutes
    public void updateGraph() {
        try {
            // Create the message
            MessageDTO message = MessageDTO.builder().value("update").build();
            
            // Send to clients via WebSocket
            messagingTemplate.convertAndSend("/all/chart", message);
            
            // Log or debug for confirmation
            System.out.println("Sent message to /all/chart: " + message.getValue());
        } catch (Exception e) {
            e.printStackTrace();  // Log any exceptions
        }
    }
  
    
}