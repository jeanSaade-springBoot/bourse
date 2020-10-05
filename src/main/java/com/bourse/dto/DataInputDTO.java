package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class DataInputDTO {
	    private String thirteeYrFactor;
	    private String tenYrFactor;
	    private String fiveYrFactor;
	    private String twoYrFactor;
	    private String referDate;
	    private Long subgroupId;
}
