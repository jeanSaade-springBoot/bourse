package com.bourse.dto;

public interface ColumnConfigurationDTO {
	public Long getId();
	public String getFactor() ;
	public String getDescription() ;
	public String getDisplayDescription();
	public String getColumnName();
	public String getGroupId();
	public String getSubgroupId();
	public String getDataFormat();
	public boolean isCanBeNegative();
	public String getGraphScale();
	public String getStartDate();
	public String getCalculationType();
	public String getDataMinIncrement();
	public String getTickValue();
	public String getCurrency();
	public String getChartType();
	public String getChartColor();
	public String getChartSize();
	public String getChartshowMarkes();
	public String getChartTransparency();
	public String getChartShowgrid();
	public String getExchangeLink();
	public boolean isShowInDatabase();
	public boolean isShowInNewsGraph();
	public String getYAxisFormat();
	public String getJumpActive();
	public String getLowHighActive();
	public String getTrendActive();
	public String getColumnCode();
	public String getStatus();
	public String getFieldType();
}
