package com.bourse.authsecurity.service;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.domain.Privilege;
import com.bourse.authsecurity.domain.Role;
import com.bourse.authsecurity.dto.RolePrivilegeDTO;
import com.bourse.authsecurity.repositories.RoleRepository;
import com.bourse.authsecurity.repositories.PrivilegeRepository;
@Service
public class RolePrivilegeService {
	
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	PrivilegeRepository PrivilegeRepository;
	
	public Role updateRolePrivilege(RolePrivilegeDTO rolePrivilegeDTO) {
		
		   Collection<Privilege> privileges = new HashSet<Privilege>();
		
			Optional<Role> role= roleRepository.findById(rolePrivilegeDTO.getRoleId());
			Role updatedRole = role.get();
			
			for (Long privilegId : rolePrivilegeDTO.getPrivilegeId()) {
			Privilege newRolePrivilege = PrivilegeRepository.getById(privilegId);
			privileges.add(newRolePrivilege);
		    }
			updatedRole.removePrivileges(privileges);
			updatedRole.setPrivileges(privileges);
			
		return roleRepository.save(updatedRole);
		
	}
}
