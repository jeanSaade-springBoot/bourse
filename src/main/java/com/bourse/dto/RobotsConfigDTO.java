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
	private String rule;
	private String template;
	private String lastData;
	private String threshholdTrigger;
	private String threshHoldNotification;
	private String JumpValueTick;
	private String JumpPercentage;
	private String robotName;
	private boolean isactive;
}
