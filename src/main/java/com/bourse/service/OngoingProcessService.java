package com.bourse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.repositories.OngoingProcessRepository;

@Service
public class OngoingProcessService {
	@Autowired
	OngoingProcessRepository ongoingProcessRepository;
	
	public void updateOngoingProcessSetMustBeTriggeredTrue()
	{
		ongoingProcessRepository.updateOngoingProcess();
	}
}
