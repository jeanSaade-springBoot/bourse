package com.bourse.authsecurity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.domain.UsersMembershipView;
import com.bourse.authsecurity.repositories.UsersMembershipViewRepository;

@Service
public class UsersMembershipViewService {
  @Autowired
  UsersMembershipViewRepository usersMembershipViewRepository;
	
  public List<UsersMembershipView> getUsersMembershipByStatus(String status)
  {
	  return usersMembershipViewRepository.findAllByStatus(status);
  }
  public int getPendingApprovalUsers()
  {
	  return usersMembershipViewRepository.findAllByStatus("PENDING_APPROVAL").size();
  } 
public UsersMembershipView findById(Long userId) {
	// TODO Auto-generated method stub
	return usersMembershipViewRepository.findById(userId).get();
}
}
