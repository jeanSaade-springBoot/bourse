package com.bourse.dto.graph;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class TechnicalAnalysisRetracementHistoryDTO {
	private String dbId;
    private String graphId;
    private String startDate;
    private String startPrice;
    private String endDate;
    private String endPrice;
    private String percentage10;
    private String percentage25;
    private String percentage33;
    private String percenetage38;
    private String percentage50;
    private String percentage62;
    private String percentage66;
    private String percentage75;
    private Boolean hidePercentage10;
    private Boolean hidePercentage25;
    private Boolean hidePercentage33;
    private Boolean hidePercenetage38;
    private Boolean hidePercentage50;
    private Boolean hidePercentage62;
    private Boolean hidePercentage66;
    private Boolean hidePercentage75;
    private Boolean hideAll;
    private String screenName;
}
