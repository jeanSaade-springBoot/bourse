package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class DataFunctionRespDTO {
	private String dailyInput;
	private String referDate;
	private String value1;
	private String value2;
	private String value3;
}
