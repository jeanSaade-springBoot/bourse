package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class MetalsDataFunctionReqDTO {
	
	private String subgroupId;
	private String groupId;
	
	private String[] functions;  
	
	private String fromdate;
	private String todate;
	

}
