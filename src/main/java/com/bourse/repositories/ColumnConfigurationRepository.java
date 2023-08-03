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
	
	@Query(value = "select  cc.id, \r\n"
			+ "				cc.factor, \r\n"
			+ "				cc.description, \r\n"
			+ "			    cc.display_description as displayDescription, \r\n"
			+ "			    cc.column_name as columnName, \r\n"
			+ "			    cc.group_id as groupId, \r\n"
			+ "			    cc.subgroup_id as subgroupId, \r\n"
			+ "			    cc.data_format as dataFormat, \r\n"
			+ "			    cc.can_be_negative as canBeNegative, \r\n"
			+ "			    CONCAT(ac.asset_Code,gc.group_Code,sc.subgroup_Code,cc.column_Code) as graphScale, \r\n" // return the fullcode since i dont have a graphscale and i don't wont to change the exisiting column code 
			+ "			    cc.start_date as startDate, \r\n"
			+ "			    cc.calculation_type as calculationType, \r\n"
			+ "			    cc.data_min_increment as dataMinIncrement, \r\n"
			+ "			    cc.tick_value as tickValue, \r\n"
			+ "			    cc.currency as currency, \r\n"
			+ "			    cc.chart_type as chartType, \r\n"
			+ "			    cc.chart_color as chartColor, \r\n"
			+ "			    cc.chart_size as chartSize, \r\n"
			+ "			    cc.chartshow_markes as chartshowMarkes, \r\n"
			+ "			    cc.chart_transparency as chartTransparency, \r\n"
			+ "			    cc.chart_showgrid as chartShowgrid, \r\n"
			+ "			    cc.exchange_link as exchangeLink, \r\n"
			+ "			    cc.show_in_database as showInDatabase, \r\n"
			+ "			    cc.show_in_news_graph as showInNewsGraph, \r\n"
			+ "			    cc.y_axis_format as yAxisFormat, \r\n"
			+ "			    cc.column_Code as columnCode, \r\n"
			+ "			    cc.status as status, \r\n"
			+ "			 ( select  n.isactive\r\n"
			+ "			           from bourse.robots_configuration n \r\n"
			+ "			       where n.config_id = cc.id\r\n"
			+ "			         and n.robot_name ='JumpRobot')  as jumpActive,\r\n"
			+ "			     ( select  n.isactive\r\n"
			+ "			           from bourse.robots_configuration n \r\n"
			+ "			       where n.config_id = cc.id\r\n"
			+ "			         and n.robot_name ='HighLowRobot')  as lowHighActive,\r\n"
			+ "			      ( select  n.isactive\r\n"
			+ "			           from bourse.robots_configuration n \r\n"
			+ "			       where n.config_id = cc.id\r\n"
			+ "			         and n.robot_name ='TrendRobot')  as trendActive \r\n"
			+ "			  from bourse.column_configuration cc,  Asset_Class ac, groups_table gc, SubGroup sc  \r\n"
			+ " where    sc.group_Id = cc.group_Id\r\n"
			+ "				   and sc.id_Sub_Group=cc.subgroup_Id\r\n"
			+ "				   and gc.id = cc.group_Id\r\n"
			+ "				   and gc.asset_Id=ac.id"
			+ "				   and cc.group_id = :groupId \r\n"
			+ "				   and cc.subgroup_id = :subGroupId",
       nativeQuery = true)
	public List<ColumnConfigurationDTO> findNativeByGroupIdAndSubgroupId(@Param("groupId") String groupId,
			                                                       @Param("subGroupId") String subGroupId);

	ColumnConfiguration findByGroupIdAndSubgroupIdAndFactor(String groupIdByName, String country, String factor);

	ColumnConfiguration findByDescriptionAndGroupId(String description, String groupId);
}
