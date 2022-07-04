package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class DataFunctionReqDTO {
	
	private String country;
	private String factor;
	private String yieldCurveCross;
	
	private String[] functions;  
	
	private String fromdate;
	private String todate;
	

}
