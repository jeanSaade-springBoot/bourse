package com.bourse.dto.graph;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class TechnicalAnalysisRelevantHistoryDTO {
	private String dbId;
    private String graphId;
    private String startDate;
    private String startPrice;
    private String endDate;
    private String endPrice;
    private Boolean isHidden;
    private String screenName;
    private String color;

}
