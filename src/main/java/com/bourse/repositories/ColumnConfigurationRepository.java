package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.Groups;
import com.bourse.domain.SubGroup;
import com.bourse.dto.ColumnConfigurationDTO;

public interface ColumnConfigurationRepository extends JpaRepository<ColumnConfiguration, Long> {
	List<ColumnConfiguration> findByGroupIdAndSubgroupId(String groupId,String subgroupId);
	
	ColumnConfiguration findByGroupIdAndSubgroupIdAndDescription(String groupId,String subgroupId,String description) ;
	
	@Query(value = " select \r\n" + 
			"coalesce((select  coalesce(column_name,:description)\r\n" + 
			"  from bourse.column_configuration where lower(description) like :description),:description)\r\n" + 
			"  from dual",
       nativeQuery = true)
      public String findColumnDispayDescription(@Param("description") String description);
	
	@Query(value = " select data_format\r\n" + 
			"  from bourse.column_configuration where upper(description) like :description",
       nativeQuery = true)
	public String findColumnDataFormat(@Param("description") String description);
	
	@Query(value = " select id,\r\n" + 
			"	description,\r\n" + 
			"    display_description as displayDescription,\r\n" + 
			"    column_name as columnName,\r\n" + 
			"    group_id as groupId,\r\n" + 
			"    subgroup_id as subgroupId,\r\n" + 
			"    data_format as dataFormat,\r\n" + 
			"    can_be_negative as canBeNegative,\r\n" + 
			"    graph_scale as graphScale,\r\n" + 
			"    start_date as startDate,\r\n" + 
			"    calculation_type as calculationType,\r\n" + 
			"    data_min_increment as dataMinIncrement,\r\n" + 
			"    tick_value as tickValue,\r\n" + 
			"    currency as currency,\r\n" + 
			"    chart_type as chartType,\r\n" + 
			"    chart_color as chartColor,\r\n" + 
			"    chart_size as chartSize,\r\n" + 
			"    chartshow_markes as chartshowMarkes,\r\n" + 
			"    chart_transparency as chartTransparency,\r\n" + 
			"    chart_showgrid as chartShowgrid,\r\n" + 
			"    exchange_link as exchangeLink,\r\n" + 
			"    show_in_database as showInDatabase,\r\n" + 
			"    show_in_news_graph as showInNewsGraph,\r\n" + 
			"    y_axis_format as yAxisFormat,\r\n" + 
			"    column_code as columnCode,\r\n" + 
			" ( select  n.isactive\r\n"
			+ "           from bourse.robots_configuration n \r\n"
			+ "       where n.config_id = cc.id\r\n"
			+ "         and n.robot_name ='JumpRobot')  as jumpActive,\r\n"
			+ "     ( select  n.isactive\r\n"
			+ "           from bourse.robots_configuration n \r\n"
			+ "       where n.config_id = cc.id\r\n"
			+ "         and n.robot_name ='HighLowRobot')  as lowHighActive,\r\n"
			+ "      ( select  n.isactive\r\n"
			+ "           from bourse.robots_configuration n \r\n"
			+ "       where n.config_id = cc.id\r\n"
			+ "         and n.robot_name ='TrendRobot')  as trendActive "+
			"  from bourse.column_configuration cc \r\n" + 
			" where group_id = :groupId\r\n" + 
			"    and subgroup_id = :subGroupId",
       nativeQuery = true)
	public List<ColumnConfigurationDTO> findNativeByGroupIdAndSubgroupId(@Param("groupId") String groupId,
			                                                       @Param("subGroupId") String subGroupId);
}
