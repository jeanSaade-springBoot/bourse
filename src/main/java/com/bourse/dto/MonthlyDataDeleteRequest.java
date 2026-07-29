package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class MonthlyDataDeleteRequest {
	private Long assetId;
    private Long groupId;
    private String fromDate;
    private String toDate;
}
