package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class GraphReqDTO {
	
	private String country1;
	private String factor1;
	private String yieldCurveCross1;
	
	private String country2;
	private String factor2;
	private String yieldCurveCross2;
	
	private String country3;
	private String factor3;
	private String yieldCurveCross3;
	
	private String country4;
	private String factor4;
	private String yieldCurveCross4;
	
	private String country5;
	private String factor5;
	private String yieldCurveCross5;
	
	private String country6;
	private String factor6;
	private String yieldCurveCross6;
	
	private String country7;
	private String factor7;
	private String yieldCurveCross7;
	
	private String dailyOrWeekly;  //d or w
	
	private String movingAverage;
	private String movingTwoHundereOrOneHundred;
	
	private String fromdate;
	private String todate;
	
	private String minusfactor;
	private String minuscountry;

}
