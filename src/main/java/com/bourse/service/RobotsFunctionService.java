package com.bourse.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.RobotsConfiguration;
import com.bourse.domain.RobotsFunctionConfiguration;
import com.bourse.dto.RobotsConfigDTO;
import com.bourse.repositories.RobotsFunctionConfigRepository;

@Service
public class RobotsFunctionService {
	
	@Autowired
	RobotsFunctionConfigRepository robotsFunctionConfigRepository;
	
	public List<RobotsFunctionConfiguration> getColumnRobotsFunctionByConfigIdAndFunctionId(String configId, String functionId) {
	
		return robotsFunctionConfigRepository.getColumnRobotsFunctionByConfigIdAndFunctionId(configId, functionId);
	}
	public void updateRobotsFunction(List<RobotsConfigDTO> robotsConfigDTOLst) {
		// TODO Auto-generated method stub
		long id ;
		for(RobotsConfigDTO robotsConfigDTO :robotsConfigDTOLst) {
		Optional<RobotsFunctionConfiguration> robotConfig = robotsFunctionConfigRepository.findByConfigIdAndFunctionIdAndRobotName(robotsConfigDTO.getConfigId(),robotsConfigDTO.getFunctionId(),robotsConfigDTO.getRobotName());
	    if (robotConfig.isPresent())
	    {
	    	RobotsFunctionConfiguration entity = robotConfig.get();
	    	id = entity.getId();
	    	entity = RobotsFunctionConfiguration.builder()
	    		 .id(id)
				.columnDescription(robotsConfigDTO.getColumnDescription())
				.displayDescription(robotsConfigDTO.getDisplayDescription())
				.description(robotsConfigDTO.getDescription())
				.lastData(robotsConfigDTO.getLastData())
				.rule(robotsConfigDTO.getRule())
				.template(robotsConfigDTO.getTemplate())
				.threshHoldNotification(robotsConfigDTO.getThreshHoldNotification())
				.threshholdTrigger(robotsConfigDTO.getThreshholdTrigger())
				.isactive(robotsConfigDTO.isIsactive())
				.JumpPercentage(robotsConfigDTO.getJumpPercentage())
				.JumpValueTick(robotsConfigDTO.getJumpValueTick())
				.robotName(robotsConfigDTO.getRobotName())
				.groupId(robotsConfigDTO.getGroupId())
				.subgroupId(robotsConfigDTO.getSubgroupId())
				.configId(robotsConfigDTO.getConfigId())
				.functionId(robotsConfigDTO.getFunctionId())
				.robotCode(robotsConfigDTO.getRobotCode())
				.build();
	    	robotsFunctionConfigRepository.save(entity);
	    }else {
	    	RobotsFunctionConfiguration robotsfunctionConfiguration = RobotsFunctionConfiguration.builder()
					.columnDescription(robotsConfigDTO.getColumnDescription())
					.displayDescription(robotsConfigDTO.getDisplayDescription())
					.description(robotsConfigDTO.getDescription())
					.lastData(robotsConfigDTO.getLastData())
					.rule(robotsConfigDTO.getRule())
					.template(robotsConfigDTO.getTemplate())
					.threshHoldNotification(robotsConfigDTO.getThreshHoldNotification())
					.threshholdTrigger(robotsConfigDTO.getThreshholdTrigger())
					.isactive(robotsConfigDTO.isIsactive())
					.JumpPercentage(robotsConfigDTO.getJumpPercentage())
					.JumpValueTick(robotsConfigDTO.getJumpValueTick())
					.robotName(robotsConfigDTO.getRobotName())
					.groupId(robotsConfigDTO.getGroupId())
					.subgroupId(robotsConfigDTO.getSubgroupId())
					.configId(robotsConfigDTO.getConfigId())
					.functionId(robotsConfigDTO.getFunctionId())
					.robotCode(robotsConfigDTO.getRobotCode())
					.build();
	    	robotsFunctionConfigRepository.save(robotsfunctionConfiguration);
	    }
	  
		}
	}
}
