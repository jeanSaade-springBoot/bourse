package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class GraphRequestDTO {

	private String subGroupId1;
	private String groupId1;
	
	private String subGroupId2;
	private String groupId2;
	
	private String period;  //d or w or m or q or y
	private String type;  //0 or 1 or 2 or 3 or 4
	
	private String isMovingAverage;
	private String movingTwoHundereOrOneHundred;
	
	private String fromdate;
	private String todate;
	
	private String isFunctionGraph;
	private String functionId;
	
	private String removeEmpty1;
	private String removeEmpty2;
}
