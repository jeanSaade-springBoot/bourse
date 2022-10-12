package com.bourse.authsecurity.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.authsecurity.domain.User;
import com.bourse.authsecurity.dto.LoginRequestDTO;
import com.bourse.authsecurity.dto.UserDTO;
import com.bourse.authsecurity.dto.UserInfoResponseDTO;
import com.bourse.authsecurity.security.jwt.JwtUtils;
import com.bourse.authsecurity.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
	private final UserService userService;
    
    @Autowired
    private JwtUtils jwtUtils;
    
	public AuthController(UserService userService)
	{
		this.userService   = userService;
	}
	
    @PostMapping("/signin")
	public ResponseEntity<?> authenticateUserJwt(@Valid @RequestBody LoginRequestDTO loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUserName(), loginRequest.getPassword()));
		
	  	 SecurityContextHolder.getContext().setAuthentication(authentication);
	  	 User user = userService.getUserInfoByUsername(authentication.getName());
	  	 
	     String jwt =  jwtUtils.generateJwtToken(user.getUserName());
	   
         return ResponseEntity.ok()
        		 .body(new UserInfoResponseDTO(user.getId(), 
        				 					   user.getUserName(),
        				 					   user.getFirstName(),
        				 					   user.getSurName(),
        				 					   user.getIsFirstLogin(),
        		 							   jwt));
     }
    @PostMapping("/changepassword")
	public ResponseEntity<?> changeUserPassword(@RequestBody @Valid UserDTO userDTO) {
    	return ResponseEntity.ok()
       		 .body(userService.saveChangedPassword(userDTO));
    }
    
   
}