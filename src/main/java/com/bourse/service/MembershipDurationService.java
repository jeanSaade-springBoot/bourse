package com.bourse.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.MembershipDuration;
import com.bourse.repositories.MembershipDurationRepository;

@Service
public class MembershipDurationService {
	
   @Autowired
   MembershipDurationRepository membershipDurationRepository;
   
   public Optional<MembershipDuration> getMembershipDurationById(Long Id) {
	return membershipDurationRepository.findById(Id);
   }
   
   public List<MembershipDuration> findAll() {
		return membershipDurationRepository.findAll();
	   }
   
}
