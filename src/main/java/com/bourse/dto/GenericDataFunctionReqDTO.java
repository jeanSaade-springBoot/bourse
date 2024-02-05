package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class GenericDataFunctionReqDTO {
	
	private String subgroupId;
	private String groupId;
	
	private String factor;
	
	private String[] functions;  
	
	private String fromdate;
	private String todate;
	

}
