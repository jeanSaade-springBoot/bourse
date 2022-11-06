package com.bourse.authsecurity.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.domain.Role;
import com.bourse.authsecurity.domain.User;
import com.bourse.authsecurity.dto.UserRoleDTO;
import com.bourse.authsecurity.repositories.RoleRepository;
import com.bourse.authsecurity.repositories.UserRepository;

@Service
public class UserRoleService {
	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository;

	public User updateUserRole(UserRoleDTO userRoleDTO) {
		User user = userRepository.findById(userRoleDTO.getUserId()).get();
		Collection<Role> newRole = roleRepository.findByName(userRoleDTO.getRoleName());
		user.removeRoles(user.getRoles());
		user.setRoles(newRole);
		return userRepository.save(user);
	}

}
