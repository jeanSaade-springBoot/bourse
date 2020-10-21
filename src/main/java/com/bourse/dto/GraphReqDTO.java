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
	
	private String fromdate;
	private String todate;

}
