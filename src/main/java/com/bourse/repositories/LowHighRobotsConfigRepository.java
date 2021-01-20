package com.bourse.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.LowHighRobotsConfiguration;

public interface LowHighRobotsConfigRepository extends JpaRepository<LowHighRobotsConfiguration, Long> {
	
	  public Optional<LowHighRobotsConfiguration> findByColumnDescription(String columnDescription);

	   public LowHighRobotsConfiguration findByColumnDescriptionOrderById(String configId);

}
