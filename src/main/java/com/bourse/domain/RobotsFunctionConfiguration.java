package com.bourse.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "ROBOTS_FUNCTION_CONFIGURATION")
public class RobotsFunctionConfiguration {
	@Id
    @GeneratedValue
    private Long id;
	private String JumpValueTick;
	private String JumpPercentage;
	private String JumpScaledValue;
	private String columnDescription;
	private String configId;
	private String functionId;
	private String description;
	private String displayDescription;
	private String groupId;
	private boolean isactive;
	private String lastData;
	private String rule;
	private String subgroupId;
	private String template;
	private String threshholdTrigger;
	private String threshHoldNotification;
	private String robotName;
	private String robotCode;
}
