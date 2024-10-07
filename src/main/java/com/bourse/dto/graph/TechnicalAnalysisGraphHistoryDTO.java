package com.bourse.dto.graph;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class TechnicalAnalysisGraphHistoryDTO {
	private String dbId;
    private String graphId;
	private String trendlines;
	private String chartOptions;
    private Boolean isVisibleTrendline;
    private String channel;
    private Boolean isVisibleChannel;
    private String screenName;
}
