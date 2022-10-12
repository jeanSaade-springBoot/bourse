package com.bourse.authsecurity.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.domain.User;
import com.bourse.authsecurity.dto.UserDTO;
import com.bourse.authsecurity.repositories.UserRepository;

@Service
public class UserService {
	
@Autowired
UserRepository userRepository;

@Autowired
private PasswordEncoder passwordEncoder;

public User getUserInfoByUsername(String userName)
{      
    return userRepository.findUserByUserName(userName);
}

public User saveChangedPassword(@Valid UserDTO userDTO) {
	User user = getUserInfoByUsername(userDTO.getUserName());
	user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
	user.setIsFirstLogin(false);
	return userRepository.save(user);
}

}
