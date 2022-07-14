package com.bourse.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "FunctionConfiguration")
public class FunctionConfiguration {
	@Id
    @GeneratedValue
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
	@JsonProperty("yAxisFormat")
	private String yAxisFormat;
	private String columnName;
	private String dataMinIncrement;
	private String chartColor;
	private String chartShowgrid;
	private String chartSize;
	private String chartTransparency;
	private String chartshowMarkes;
	private String exchangeLink;
	private boolean showInDatabase;
	private boolean showInNewsGraph;
	private String currency;
}
