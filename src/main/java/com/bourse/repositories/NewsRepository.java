package com.bourse.repositories;
import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.News;

public interface NewsRepository extends JpaRepository<News, Long> {
	public News findById(long id);
	public List<News> findByIsPublished(String isPublished, Sort sort);
	
	 @Query( value ="select * from(\r\n"
	 		+ "select  tab.id,\r\n"
	 		+ "tab.template,\r\n"
	 		+ "tab.column_Description,\r\n"
	 		+ "tab.robots,\r\n"
	 		+ "tab.is_Bold,\r\n"
	 		+ "tab.generation_Date_Date,\r\n"
	 		+ "tab.is_Published from (\r\n"
	 		+ "SELECT t.id,\r\n"
	 		+ "t.template,\r\n"
	 		+ "t.column_Description,\r\n"
	 		+ "t.robots,\r\n"
	 		+ "t.is_Bold,\r\n"
	 		+ "t.generation_Date_Date,\r\n"
	 		+ "t.is_Published,\r\n"
	 		+ " CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
	 		+ " FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
	 		+ "  WHERE t.column_Description=c.description\r\n"
	 		+ "	and t.robots= r.robot_name\r\n"
	 		+ "    and  r.column_description=c.description\r\n"
	 		+ "    and s.group_Id = c.group_Id\r\n"
	 		+ "    and s.id_Sub_Group=c.subgroup_Id\r\n"
	 		+ "    and g.id = c.group_Id\r\n"
	 		+ "    and g.asset_Id=a.id\r\n"
	 		+ "   )tab, news_order\r\n"
	 		+ "    where tab.robot_code=news_order.robot_code\r\n"
	 		+ "    order by date(generation_Date_Date) desc,\r\n"
	 		+ "    news_order.order_id asc) tab3\r\n"
	 		+ "   union\r\n"
	 		+ "   select n.id as id,\r\n"
	 		+ "    n.template as template,\r\n"
	 		+ "    n.column_Description as column_Description,\r\n"
	 		+ "    n.robots as robots,\r\n"
	 		+ "    n.is_Bold as is_Bold,\r\n"
	 		+ "    n.generation_Date_Date as generation_Date_Date,\r\n"
	 		+ "    n.is_Published as is_Published\r\n"
	 		+ "    from manual_news mn,\r\n"
	 		+ "         News n\r\n"
	 		+ "         where mn.news_id =n.id;" , 
		 		  nativeQuery = true)
		List<News> findAllOrder();
	
	 @Query( value ="select * from(\r\n"
	 		+ "select  tab.id,\r\n"
	 		+ "tab.template,\r\n"
	 		+ "tab.column_Description,\r\n"
	 		+ "tab.robots,\r\n"
	 		+ "tab.is_Bold,\r\n"
	 		+ "date(tab.generation_Date_Date) as generation_Date_Date,\r\n"
	 		+ "tab.is_Published from (\r\n"
	 		+ "SELECT t.id,\r\n"
	 		+ "t.template,\r\n"
	 		+ "t.column_Description,\r\n"
	 		+ "t.robots,\r\n"
	 		+ "t.is_Bold,\r\n"
	 		+ "t.generation_Date_Date,\r\n"
	 		+ "t.is_Published,\r\n"
	 		+ " CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
	 		+ " FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
	 		+ "  WHERE t.column_Description=c.description\r\n"
	 		+ "	and t.robots= r.robot_name\r\n"
	 		+ "    and  r.column_description=c.description\r\n"
	 		+ "    and s.group_Id = c.group_Id\r\n"
	 		+ "    and s.id_Sub_Group=c.subgroup_Id\r\n"
	 		+ "    and g.id = c.group_Id\r\n"
	 		+ "    and g.asset_Id=a.id\r\n"
	 		+ "	and t.is_Published=1 \r\n"
	 		+ "   )tab, news_order\r\n"
	 		+ "    where tab.robot_code=news_order.robot_code\r\n"
	 		+ "    order by date(generation_Date_Date) desc,\r\n"
	 		+ "    news_order.order_id asc)tab3\r\n"
	 		+ "    union\r\n"
	 		+ "   select n.id as id,\r\n"
	 		+ "    n.template as template,\r\n"
	 		+ "    n.column_Description as column_Description,\r\n"
	 		+ "    n.robots as robots,\r\n"
	 		+ "    n.is_Bold as is_Bold,\r\n"
	 		+ "    n.generation_Date_Date as generation_Date_Date,\r\n"
	 		+ "    n.is_Published as is_Published\r\n"
	 		+ "    from manual_news mn,\r\n"
	 		+ "         News n\r\n"
	 		+ "         where mn.news_id =n.id\r\n"
	 		+ "         	and n.is_Published=1 ;" , 
	 		  nativeQuery = true)
	List<News> findByIsPublishedFormatedDate();
	 
	 @Query( value ="select * from(\r\n"
	 		+ "select  tab.id,\r\n"
	 		+ "tab.template,\r\n"
	 		+ "tab.column_Description,\r\n"
	 		+ "tab.robots,\r\n"
	 		+ "tab.is_Bold,\r\n"
	 		+ "date(tab.generation_Date_Date) as generation_Date_Date,\r\n"
	 		+ "tab.is_Published from (\r\n"
	 		+ "SELECT t.id,\r\n"
	 		+ "t.template,\r\n"
	 		+ "t.column_Description,\r\n"
	 		+ "t.robots,\r\n"
	 		+ "t.is_Bold,\r\n"
	 		+ "t.generation_Date_Date,\r\n"
	 		+ "t.is_Published,\r\n"
	 		+ " CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
	 		+ " FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
	 		+ "  WHERE t.column_Description=c.description\r\n"
	 		+ "	and t.robots= r.robot_name\r\n"
	 		+ "    and  r.column_description=c.description\r\n"
	 		+ "    and s.group_Id = c.group_Id\r\n"
	 		+ "    and s.id_Sub_Group=c.subgroup_Id\r\n"
	 		+ "    and g.id = c.group_Id\r\n"
	 		+ "    and g.asset_Id=a.id\r\n"
	 		+ "	and t.is_Published=1 \r\n"
	 		+ "   and t.is_Bold =  :isBold )tab, news_order\r\n"
	 		+ "    where tab.robot_code=news_order.robot_code\r\n"
	 		+ "    order by date(generation_Date_Date) desc,\r\n"
	 		+ "    news_order.order_id asc)tab3\r\n"
	 		+ "    union\r\n"
	 		+ "   select n.id as id,\r\n"
	 		+ "    n.template as template,\r\n"
	 		+ "    n.column_Description as column_Description,\r\n"
	 		+ "    n.robots as robots,\r\n"
	 		+ "    n.is_Bold as is_Bold,\r\n"
	 		+ "    n.generation_Date_Date as generation_Date_Date,\r\n"
	 		+ "    n.is_Published as is_Published\r\n"
	 		+ "    from manual_news mn,\r\n"
	 		+ "         News n\r\n"
	 		+ "         where mn.news_id =n.id\r\n"
	 		+ "         	and n.is_Published=1\r\n"
	 		+ "            and n.is_Bold = :isBold" , 
	 		  nativeQuery = true)   
	 List<News> findByImportance(@Param("isBold") String isBold);
	 
	 @Query( value ="select  tab.id,\r\n"
		 		+ "tab.template,\r\n"
		 		+ "tab.column_Description,\r\n"
		 		+ "tab.robots,\r\n"
		 		+ "tab.is_Bold,\r\n"
		 		+ "date(tab.generation_Date_Date) as generation_Date_Date,\r\n"
		 		+ "tab.is_Published from (\r\n"
		 		+ "SELECT t.id,\r\n"
		 		+ "t.template,\r\n"
		 		+ "t.column_Description,\r\n"
		 		+ "t.robots,\r\n"
		 		+ "t.is_Bold,\r\n"
		 		+ "t.generation_Date_Date,\r\n"
		 		+ "t.is_Published,\r\n"
		 		+ " CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
		 		+ " FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
		 		+ "  WHERE t.column_Description=c.description\r\n"
		 		+ "	and t.robots= r.robot_name\r\n"
		 		+ "    and  r.column_description=c.description\r\n"
		 		+ "    and s.group_Id = c.group_Id\r\n"
		 		+ "    and s.id_Sub_Group=c.subgroup_Id\r\n"
		 		+ "    and g.id = c.group_Id\r\n"
		 		+ "    and g.asset_Id=a.id\r\n"
		 		+ "	and t.is_Published=1 \r\n"
		 		+ " and c.group_Id=:groupId and c.subgroup_Id=:subGroupId"
		 		+ "   )tab, news_order\r\n"
		 		+ "    where tab.robot_code=news_order.robot_code\r\n"
		 		+ "    order by date(generation_Date_Date) desc,\r\n"
		 		+ "    news_order.order_id asc;" , 
		 		  nativeQuery = true)   	
	 List<News> findNewsByGroupIdAndSubgroupId(@Param("groupId") String groupId ,@Param("subGroupId") String subGroupId);
	 
	 @Query( value ="select  tab.id,\r\n"
		 		+ "tab.template,\r\n"
		 		+ "tab.column_Description,\r\n"
		 		+ "tab.robots,\r\n"
		 		+ "tab.is_Bold,\r\n"
		 		+ "date(tab.generation_Date_Date) as generation_Date_Date,\r\n"
		 		+ "tab.is_Published from (\r\n"
		 		+ "SELECT t.id,\r\n"
		 		+ "t.template,\r\n"
		 		+ "t.column_Description,\r\n"
		 		+ "t.robots,\r\n"
		 		+ "t.is_Bold,\r\n"
		 		+ "t.generation_Date_Date,\r\n"
		 		+ "t.is_Published,\r\n"
		 		+ " CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
		 		+ " FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
		 		+ "  WHERE t.column_Description=c.description\r\n"
		 		+ "	and t.robots= r.robot_name\r\n"
		 		+ "    and  r.column_description=c.description\r\n"
		 		+ "    and s.group_Id = c.group_Id\r\n"
		 		+ "    and s.id_Sub_Group=c.subgroup_Id\r\n"
		 		+ "    and g.id = c.group_Id\r\n"
		 		+ "    and g.asset_Id=a.id\r\n"
		 		+ "	and t.is_Published=1 \r\n"
		 		+ " and c.group_Id in(1,2,3) and c.description LIKE CONCAT('%',:subGroupIdDescription,'%')"
		 		+ "   )tab, news_order\r\n"
		 		+ "    where tab.robot_code=news_order.robot_code\r\n"
		 		+ "    order by date(generation_Date_Date) desc,\r\n"
		 		+ "    news_order.order_id asc;" , 
		 		  nativeQuery = true)   	
	 List<News> findAllNewsByGroupIdAndSubgroupId(@Param("subGroupIdDescription") String subGroupIdDescription);

	 @Query( value ="select   tab.id, \r\n"
	 		+ "		 tab.template, \r\n"
	 		+ "		 tab.column_Description, \r\n"
	 		+ "		 tab.robots, \r\n"
	 		+ "		 tab.is_Bold, \r\n"
	 		+ "		 date(tab.generation_Date_Date) as generation_Date_Date, \r\n"
	 		+ "		 tab.is_Published from ( \r\n"
	 		+ "		 		 SELECT t.id, \r\n"
	 		+ "		 		 t.template, \r\n"
	 		+ "		 		 t.column_Description, \r\n"
	 		+ "		 		 t.robots, \r\n"
	 		+ "		 		 t.is_Bold, \r\n"
	 		+ "		 		 t.generation_Date_Date, \r\n"
	 		+ "		 		 t.is_Published, \r\n"
	 		+ "                 c.factor,\r\n"
	 		+ "		 		  CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code \r\n"
	 		+ "		 		  FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s \r\n"
	 		+ "		 		    WHERE t.column_Description=c.description \r\n"
	 		+ "		 		 	and t.robots= r.robot_name \r\n"
	 		+ "		 		     and  r.column_description=c.description \r\n"
	 		+ "		 		     and s.group_Id = c.group_Id \r\n"
	 		+ "		 		     and s.id_Sub_Group=c.subgroup_Id \r\n"
	 		+ "		 		     and g.id = c.group_Id \r\n"
	 		+ "		 		     and g.asset_Id=a.id \r\n"
	 		+ "		 		 	and t.is_Published=1  \r\n"
	 		+ "				  and c.description in (:selectedGraphNews) \r\n"
	 		+ "		 		      and t.generation_Date_Date between sysdate() - INTERVAL 6 MONTH and sysdate()"
	 		+ ")tab, news_order \r\n"
	 		+ "		 		     where tab.robot_code=news_order.robot_code \r\n"
	 		+ "		 		     order by date(generation_Date_Date) desc, \r\n"
	 		+ "		 		     news_order.order_id asc;" , 
		 		  nativeQuery = true)   	
	 List<News> findSelectedGraphNews(@Param("selectedGraphNews") List<String> selectedGraphNews);
	 
}
