package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class FunctionDTO {
	    private Long id;
	    private String description ;
	    private String functionCode ;
	    private Long groupId;
	    private String groupName;
}
