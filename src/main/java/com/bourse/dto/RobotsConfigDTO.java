package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class RobotsConfigDTO {
	private String columnDescription;
	private String displayDescription;
	private String description;
	private String rule;
	private String template;
	private String lastData;
	private String threshholdTrigger;
	private String threshHoldNotification;
	private String jumpValueTick;
	private String jumpPercentage;
	private String robotName;
	private String groupId;
	private String subgroupId;
	private String configId;
	private String functionId;
	private boolean isactive;
	private String robotCode;
}
