package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class DataDTO {
    private String excelData;

	public String getExcelData() {
		return excelData;
	}

	public void setExcelData(String excelData) {
		this.excelData = excelData;
	}
    
}
