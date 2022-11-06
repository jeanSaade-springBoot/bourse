package com.bourse.authsecurity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.domain.UsersRolesView;
import com.bourse.authsecurity.repositories.UsersRolesViewRepository;

@Service
public class UsersRolesViewService {
  @Autowired
  UsersRolesViewRepository usersRolesViewRepository;
	
  public List<UsersRolesView> getUsersRoles()
  {
	  return usersRolesViewRepository.findAll();
  }

}
