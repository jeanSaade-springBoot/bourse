package com.bourse.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.RobotsConfiguration;

public interface RobotsConfigRepository extends JpaRepository<RobotsConfiguration, Long> {
	
	  public Optional<RobotsConfiguration> findByColumnDescription(String columnDescription);
	  public Optional<RobotsConfiguration> findByColumnDescriptionAndRobotName(String columnDescription,String robotName);
	  public List<RobotsConfiguration> findByColumnDescriptionOrderById(String configId);
	  public List<RobotsConfiguration> getRobotsByConfigId(String configId);

}
