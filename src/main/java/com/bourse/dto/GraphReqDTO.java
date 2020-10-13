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
	
	private String country;
	private String factor;
	private String fromdate;
	private String todate;
	private String yieldCurveCross;

}
