package com.bourse.repositories;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.RobotsFunctionConfiguration;

public interface RobotsFunctionConfigRepository extends JpaRepository<RobotsFunctionConfiguration, Long> {
	
	  
	  @Query("SELECT new com.bourse.domain.RobotsFunctionConfiguration(     rc.id,\r\n"
													  		+ "	  rc.JumpValueTick,\r\n"
													  		+ "	  rc.JumpPercentage,\r\n"
													 		+ "   rc.JumpScaledValue,\r\n"
													  		+ "	  rc.columnDescription,\r\n"
													  		+ "	  rc.configId,\r\n"
													  		+ "	  rc.functionId,\r\n"
													  		+ "	  rc.description,\r\n"
													  		+ "	  rc.displayDescription,\r\n"
													  		+ "	  rc.groupId,\r\n"
													  		+ "	  rc.isactive,\r\n"
													  		+ "	  rc.lastData,\r\n"
													  		+ "	  rc.rule,\r\n"
													  		+ "	  rc.subgroupId,\r\n"
													  		+ "	  rc.template,\r\n"
													  		+ "	  rc.threshholdTrigger,\r\n"
													  		+ "	  rc.threshHoldNotification,\r\n"
													  		+ "	  rc.robotName, "
													 		+ " CONCAT(ac.assetCode,gc.groupCode,sc.subgroupCode,cc.columnCode,'LAST',rc.robotCode,fc.functionCode))"
													 		+ " FROM ColumnConfiguration cc,  RobotsFunctionConfiguration rc,  AssetClass ac, Groups gc, SubGroup sc,Functions fc"
															+ " WHERE  rc.columnDescription = cc.description\r\n"
														 		+ "   and sc.groupId = cc.groupId\r\n"
														 		+ "   and sc.idSubGroup=cc.subgroupId\r\n"
														 		+ "   and gc.id = cc.groupId\r\n"
														 		+ "   and gc.assetId=ac.id\r\n"
																+ "   and rc.functionId=fc.id\r\n"
																+ "   and rc.configId= :configId "
														 		+ "   and rc.functionId= :functionId")
	  	List<RobotsFunctionConfiguration> getColumnRobotsFunctionByConfigIdAndFunctionId(@Param("configId") String configId,@Param("functionId") String functionId);

	    Optional<RobotsFunctionConfiguration> findByConfigIdAndFunctionIdAndRobotName(String configId, String functionId, String robotName);
}
