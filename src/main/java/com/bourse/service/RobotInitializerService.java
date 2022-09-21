package com.bourse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.RobotInitializer;
import com.bourse.repositories.RobotInitializerRepository;
@Service
public class RobotInitializerService {

	@Autowired
	RobotInitializerRepository robotInitializerRepository;
	
	public List<RobotInitializer> getRobotInitializerByRobotName(String robotName)
	{
		return robotInitializerRepository.findByRobotName(robotName);
	}
}
