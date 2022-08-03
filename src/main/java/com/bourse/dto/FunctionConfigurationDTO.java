package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class FunctionConfigurationDTO {
	
	    private Long id;
		private String calculationType;
		private String dataFormat;
	    private String description;
		private String displayDescription;
		private String groupId;
		private String startDate;
		private String subgroupId;
		private String configId;
		private String functionId;
		private String tickValue;
		private String chartType;
		private String yAxisFormat;
		private String columnName;
		private String dataMinIncrement;
		private String chartColor;
		private String chartShowgrid;
		private String chartSize;
		private String chartTransparency;
		private String chartshowMarkes;
		private String exchangeLink;
		private String columnCode;
		private boolean showInDatabase;
		private boolean showInNewsGraph;
		private String currency;
}
