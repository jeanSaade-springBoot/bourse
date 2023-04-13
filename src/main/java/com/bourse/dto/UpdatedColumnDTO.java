package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class UpdatedColumnDTO {
	
	    private String factor;
	    private String value;
	    private int assetId;
	    private int groupId;
}
