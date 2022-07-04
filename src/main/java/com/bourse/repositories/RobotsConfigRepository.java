package com.bourse.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.RobotsConfiguration;

public interface RobotsConfigRepository extends JpaRepository<RobotsConfiguration, Long> {
	
	  public Optional<RobotsConfiguration> findByColumnDescription(String columnDescription);
	  public Optional<RobotsConfiguration> findByColumnDescriptionAndRobotName(String columnDescription,String robotName);
	  public List<RobotsConfiguration> findByColumnDescriptionOrderById(String configId);
	  public List<RobotsConfiguration> getRobotsByConfigId(String configId);
	  
	  @Query("SELECT new com.bourse.domain.RobotsConfiguration(rc.id,\r\n"
													 		+ " rc.columnDescription,\r\n"
													 		+ " rc.displayDescription,\r\n"
													 		+ " rc.description,\r\n"
													 		+ " rc.rule,\r\n"
													 		+ " rc.template,\r\n"
													 		+ " rc.lastData,\r\n"
													 		+ " rc.threshholdTrigger,\r\n"
													 		+ " rc.threshHoldNotification,\r\n"
													 		+ " rc.JumpValueTick,\r\n"
													 		+ " rc.JumpPercentage,\r\n"
													 		+ " rc.robotName,\r\n"
													 		+ " rc.groupId,\r\n"
													 		+ " rc.subgroupId,\r\n"
													 		+ " rc.configId,\r\n"
													 		+ " rc.isactive,\r\n"
													 		+ " CONCAT(ac.assetCode,gc.groupCode,sc.subgroupCode,cc.columnCode,'LAST',rc.robotCode))"
													 		+ " FROM ColumnConfiguration cc,  RobotsConfiguration rc,  AssetClass ac, Groups gc, SubGroup sc"
															+ " WHERE  rc.columnDescription = cc.description\r\n"
														 		+ "   and sc.groupId = cc.groupId\r\n"
														 		+ "   and sc.idSubGroup=cc.subgroupId\r\n"
														 		+ "   and gc.id = cc.groupId\r\n"
														 		+ "   and gc.assetId=ac.id\r\n"
														 		+ "   and rc.configId= :configId")
	  List<RobotsConfiguration> getColumnRobotsByConfigId(@Param("configId") String configId);
}
