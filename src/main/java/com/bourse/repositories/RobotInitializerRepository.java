package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.RobotInitializer;

public interface RobotInitializerRepository extends JpaRepository<RobotInitializer, Long> {

	List<RobotInitializer> findByProcessName(String processName);
	
    @Query
    ("SELECT u FROM RobotInitializer u WHERE u.columnName in ?1 and u.processName = ?2")
	List<RobotInitializer> findRelatedColumn(List<String> lstRelatedColumn, String processName);

	List<RobotInitializer> findByProcessNameAndAssetId(String processName, int assetId);

}
