package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.RobotInitializer;

public interface RobotInitializerRepository extends JpaRepository<RobotInitializer, Long> {

	List<RobotInitializer> findByRobotName(String robotName);

}
