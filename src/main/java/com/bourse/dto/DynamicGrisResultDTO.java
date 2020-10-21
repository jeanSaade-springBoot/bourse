package com.bourse.dto;

import java.util.HashMap;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class DynamicGrisResultDTO {
	
	// private List<DynamicGridColumns>  columns;
	private List<DynamicGridRows> rows;

}
