package com.bourse.authsecurity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.dto.PrivilegesRoleDTO;
import com.bourse.authsecurity.repositories.PrivilegeRepository;

@Service
public class PrivilegeService {
@Autowired
PrivilegeRepository privilegeRepository;

	 public List<PrivilegesRoleDTO> findPrivilegeByRoleId(Long roleId)
	 {
		 return privilegeRepository.findPrivilegeByRoleId(roleId);
	 }
}
