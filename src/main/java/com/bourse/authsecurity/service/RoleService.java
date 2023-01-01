package com.bourse.authsecurity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.domain.Role;
import com.bourse.authsecurity.dto.CreateRoleDTO;
import com.bourse.authsecurity.enums.FailureEnum;
import com.bourse.authsecurity.enums.MessageEnum;
import com.bourse.authsecurity.exception.BadRequestException;
import com.bourse.authsecurity.repositories.RoleRepository;

@Service
public class RoleService {
 @Autowired
 RoleRepository roleRepository;
 
	public Boolean checkIfRoleNameExists(String roleName)
	{
		boolean roleExists = roleRepository.existsByName(roleName);
		if (roleExists)
			return true;
		else return false;
	}
 	public List<Role> getRoles()
	 {   List<Role> roles = roleRepository.findAll();
	     roles.replaceAll(role -> {
	    	 role.setName(role.getName().replace("ROLE_", ""));
	         return role;
	     });
		 return roles;
	 }

	public Role createRole(CreateRoleDTO createRoleDTO) {
		boolean roleExists =  checkIfRoleNameExists(createRoleDTO.getRoleName());
		if(roleExists)
			throw new BadRequestException(MessageEnum.ROLENAME_EXISTS.message, FailureEnum.SAVE_REQUESTED_ROLE_FAILED, MessageEnum.ROLENAME_EXISTS.service);

		Role role = Role.builder().name(createRoleDTO.getRoleName()).build();
		return roleRepository.save(role);
	}
}
