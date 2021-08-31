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
@Table(name = "ROBOTS_CONFIGURATION")
public class RobotsConfiguration {
	@Id
    @GeneratedValue
    private Long id;
	private String columnDescription;
	private String displayDescription;
	private String description;
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
