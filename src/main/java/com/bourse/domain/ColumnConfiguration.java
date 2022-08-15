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
@Table(name = "ColumnConfiguration")
public class ColumnConfiguration {
	@Id
    @GeneratedValue
    private Long id;
    private String description ;
	private String displayDescription;
	private String columnName;
	private String groupId;
	private String subgroupId;
	private String factor;
	private String dataFormat;
	private boolean canBeNegative;
	private String graphScale;
	private String startDate;
	private String calculationType;
	private String dataMinIncrement;
	private String tickValue;
	private String currency;
	private String chartType;
	private String chartColor;
	private String chartSize;
	private String chartshowMarkes;
	private String chartTransparency;
	private String chartShowgrid;
	private String exchangeLink;
	private boolean showInDatabase;
	private boolean showInNewsGraph;
	@JsonProperty("yAxisFormat")
	private String yAxisFormat;
	private String columnCode;
}
