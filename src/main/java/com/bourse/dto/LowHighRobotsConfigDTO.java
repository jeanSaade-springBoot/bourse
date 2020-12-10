package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class LowHighRobotsConfigDTO {
	private String columnDescription;
	private String displayDescription;
	private String rule;
	private String template;
	private String lastData;
	private String threshholdTrigger;
	private String threshHoldNotification;

}
