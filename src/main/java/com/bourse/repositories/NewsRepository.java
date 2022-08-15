package com.bourse.repositories;
import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.News;
import com.bourse.dto.NewsDTO;

public interface NewsRepository extends JpaRepository<News, Long> {
	public News findById(long id);
	public List<News> findByIsPublished(String isPublished, Sort sort);
	
	 @Query( value ="select tab4.id \r\n"
	 		+ "	 		,tab4.template\r\n"
	 		+ "	 		,tab4.column_Description\r\n"
	 		+ "	 		,tab4.robots\r\n"
	 		+ "	 		,tab4.is_Bold\r\n"
	 		+ "	 		,tab4.generation_Date_Date\r\n"
	 		+ "	 		,tab4.is_Published\r\n"
	 		+ "	 		,tab4.is_function_news\r\n"
	 		+ "	 		 from(\r\n"
	 		+ "	 							SELECT t.id,\r\n"
	 		+ "	 							t.template,\r\n"
	 		+ "	 							t.column_Description,\r\n"
	 		+ "	 							t.robots,\r\n"
	 		+ "	 							t.is_Bold,\r\n"
	 		+ "	 							t.generation_Date_Date,\r\n"
	 		+ "	 							t.is_Published,\r\n"
	 		+ "	 							'0' as is_function_news,\r\n"
	 		+ "	 							 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
	 		+ "	 							 FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
	 		+ "	 							  WHERE t.column_Description=c.description\r\n"
	 		+ "	 								and t.robots= r.robot_name\r\n"
	 		+ "	 								and r.column_description=c.description\r\n"
	 		+ "	 								and s.group_Id = c.group_Id\r\n"
	 		+ "	 								and s.id_Sub_Group=c.subgroup_Id\r\n"
	 		+ "	 								and g.id = c.group_Id\r\n"
	 		+ "	 								and g.asset_Id=a.id\r\n"
	 		+ "	 		\r\n"
	 		+ "	 		   union\r\n"
	 		+ "	 						SELECT t.id,\r\n"
	 		+ "	 						t.template,\r\n"
	 		+ "	 						t.column_Description,\r\n"
	 		+ "	 						t.robots,\r\n"
	 		+ "	 						t.is_Bold,\r\n"
	 		+ "	 						t.generation_Date_Date,\r\n"
	 		+ "	 						t.is_Published,\r\n"
	 		+ "	 						'1' as is_function_news,\r\n"
	 		+ "	 						 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code\r\n"
	 		+ "	 						 from \r\n"
	 		+ "	 		     News_function t, function_configuration fc, Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f\r\n"
	 		+ "	 		        where t.column_Description=fc.description\r\n"
	 		+ "	 			      and t.robots = r.robot_name\r\n"
	 		+ "	 		          and t.function_id = f.id\r\n"
	 		+ "	 				  and g.asset_Id=a.id\r\n"
	 		+ "	 				  and g.id = fc.group_Id\r\n"
	 		+ "	 				  and s.group_Id = fc.group_Id\r\n"
	 		+ "	 				  and s.id_Sub_Group=fc.subgroup_Id\r\n"
	 		+ "	 				  and fc.function_id=f.id\r\n"
	 		+ "	 				  and r.function_id=f.id\r\n"
	 		+ "	 		          and r.column_description=fc.description\r\n"
	 		+ "	 		         )tab4 , news_order\r\n"
	 		+ "	 							where tab4.robot_code=news_order.robot_code\r\n"
	 		+ "	 							order by \r\n"
	 		+ "	 		                    date(tab4.generation_Date_Date) desc,\r\n"
	 		+ "	 							news_order.order_id asc  ", 
		 		  nativeQuery = true)
		List<News> findAllOrder();
	
	 @Query( value ="select tab4.id \r\n"
	 		+ "	 		,tab4.template\r\n"
	 		+ "	 		,tab4.column_Description\r\n"
	 		+ "	 		,tab4.robots\r\n"
	 		+ "	 		,tab4.is_Bold\r\n"
	 		+ "	 		,tab4.generation_Date_Date\r\n"
	 		+ "	 		,tab4.is_Published\r\n"
	 		+ "	 		,tab4.is_function_news\r\n"
	 		+ "	 		 from(\r\n"
	 		+ "	 							SELECT t.id,\r\n"
	 		+ "	 							t.template,\r\n"
	 		+ "	 							t.column_Description,\r\n"
	 		+ "	 							t.robots,\r\n"
	 		+ "	 							t.is_Bold,\r\n"
	 		+ "	 							t.generation_Date_Date,\r\n"
	 		+ "	 							t.is_Published,\r\n"
	 		+ "	 							'0' as is_function_news,\r\n"
	 		+ "	 							 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
	 		+ "	 							 FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
	 		+ "	 							  WHERE t.column_Description=c.description\r\n"
	 		+ "	 								and t.robots= r.robot_name\r\n"
	 		+ "	 								and r.column_description=c.description\r\n"
	 		+ "	 								and s.group_Id = c.group_Id\r\n"
	 		+ "	 								and s.id_Sub_Group=c.subgroup_Id\r\n"
	 		+ "	 								and g.id = c.group_Id\r\n"
	 		+ "	 								and g.asset_Id=a.id\r\n"
	 		+ "									and t.is_Published=1 \r\n"
	 		+ "	 		\r\n"
	 		+ "	 		   union\r\n"
	 		+ "	 						SELECT t.id,\r\n"
	 		+ "	 						t.template,\r\n"
	 		+ "	 						t.column_Description,\r\n"
	 		+ "	 						t.robots,\r\n"
	 		+ "	 						t.is_Bold,\r\n"
	 		+ "	 						t.generation_Date_Date,\r\n"
	 		+ "	 						t.is_Published,\r\n"
	 		+ "	 						'1' as is_function_news,\r\n"
	 		+ "	 						 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code\r\n"
	 		+ "	 						 from \r\n"
	 		+ "	 		     News_function t, function_configuration fc, Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f\r\n"
	 		+ "	 		        where t.column_Description=fc.description\r\n"
	 		+ "	 			      and t.robots = r.robot_name\r\n"
	 		+ "	 		          and t.function_id = f.id\r\n"
	 		+ "	 				  and g.asset_Id=a.id\r\n"
	 		+ "	 				  and g.id = fc.group_Id\r\n"
	 		+ "	 				  and s.group_Id = fc.group_Id\r\n"
	 		+ "	 				  and s.id_Sub_Group=fc.subgroup_Id\r\n"
	 		+ "	 				  and fc.function_id=f.id\r\n"
	 		+ "	 				  and r.function_id=f.id\r\n"
	 		+ "	 		          and r.column_description=fc.description\r\n"
	 		+ "					  and t.is_Published=1 \r\n"
	 		+ "	 		         )tab4 , news_order\r\n"
	 		+ "	 							where tab4.robot_code=news_order.robot_code\r\n"
	 		+ "	 							order by \r\n"
	 		+ "	 		                    date(tab4.generation_Date_Date) desc,\r\n"
	 		+ "	 							news_order.order_id asc " , 
	 		  nativeQuery = true)
	List<News> findByIsPublishedFormatedDate();
	 
	 @Query( value ="select tab4.id \r\n"
	 		+ "	 		,tab4.template\r\n"
	 		+ "	 		,tab4.column_Description\r\n"
	 		+ "	 		,tab4.robots\r\n"
	 		+ "	 		,tab4.is_Bold\r\n"
	 		+ "	 		,tab4.generation_Date_Date\r\n"
	 		+ "	 		,tab4.is_Published\r\n"
	 		+ "	 		,tab4.is_function_news\r\n"
	 		+ "	 		 from(\r\n"
	 		+ "	 							SELECT t.id,\r\n"
	 		+ "	 							t.template,\r\n"
	 		+ "	 							t.column_Description,\r\n"
	 		+ "	 							t.robots,\r\n"
	 		+ "	 							t.is_Bold,\r\n"
	 		+ "	 							t.generation_Date_Date,\r\n"
	 		+ "	 							t.is_Published,\r\n"
	 		+ "	 							'0' as is_function_news,\r\n"
	 		+ "	 							 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
	 		+ "	 							 FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
	 		+ "	 							  WHERE t.column_Description=c.description\r\n"
	 		+ "	 								and t.robots= r.robot_name\r\n"
	 		+ "	 								and r.column_description=c.description\r\n"
	 		+ "	 								and s.group_Id = c.group_Id\r\n"
	 		+ "	 								and s.id_Sub_Group=c.subgroup_Id\r\n"
	 		+ "	 								and g.id = c.group_Id\r\n"
	 		+ "	 								and g.asset_Id=a.id\r\n"
	 		+ "									and t.is_Published=1 \r\n"
	 		+ "									and t.is_Bold =  :isBold\r\n"
	 		+ "	 		\r\n"
	 		+ "	 		   union\r\n"
	 		+ "	 						SELECT t.id,\r\n"
	 		+ "	 						t.template,\r\n"
	 		+ "	 						t.column_Description,\r\n"
	 		+ "	 						t.robots,\r\n"
	 		+ "	 						t.is_Bold,\r\n"
	 		+ "	 						t.generation_Date_Date,\r\n"
	 		+ "	 						t.is_Published,\r\n"
	 		+ "	 						'1' as is_function_news,\r\n"
	 		+ "	 						 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code\r\n"
	 		+ "	 						 from \r\n"
	 		+ "	 		     News_function t, function_configuration fc, Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f\r\n"
	 		+ "	 		        where t.column_Description=fc.description\r\n"
	 		+ "	 			      and t.robots = r.robot_name\r\n"
	 		+ "	 		          and t.function_id = f.id\r\n"
	 		+ "	 				  and g.asset_Id=a.id\r\n"
	 		+ "	 				  and g.id = fc.group_Id\r\n"
	 		+ "	 				  and s.group_Id = fc.group_Id\r\n"
	 		+ "	 				  and s.id_Sub_Group=fc.subgroup_Id\r\n"
	 		+ "	 				  and fc.function_id=f.id\r\n"
	 		+ "	 				  and r.function_id=f.id\r\n"
	 		+ "	 		          and r.column_description=fc.description\r\n"
	 		+ "					  and t.is_Published=1 \r\n"
	 		+ "					  and t.is_Bold =  :isBold\r\n"
	 		+ "	 		         )tab4 , news_order\r\n"
	 		+ "	 							where tab4.robot_code=news_order.robot_code\r\n"
	 		+ "	 							order by \r\n"
	 		+ "	 		                    date(tab4.generation_Date_Date) desc,\r\n"
	 		+ "	 							news_order.order_id asc" , 
	 		  nativeQuery = true)   
	 List<News> findByImportance(@Param("isBold") String isBold);
	 
	 @Query( value ="select tab4.id \r\n"
	 		+ "	 		,tab4.template\r\n"
	 		+ "	 		,tab4.column_Description\r\n"
	 		+ "	 		,tab4.robots\r\n"
	 		+ "	 		,tab4.is_Bold\r\n"
	 		+ "	 		,tab4.generation_Date_Date\r\n"
	 		+ "	 		,tab4.is_Published\r\n"
	 		+ "	 		,tab4.is_function_news\r\n"
	 		+ "	 		 from(\r\n"
	 		+ "	 							SELECT t.id,\r\n"
	 		+ "	 							t.template,\r\n"
	 		+ "	 							t.column_Description,\r\n"
	 		+ "	 							t.robots,\r\n"
	 		+ "	 							t.is_Bold,\r\n"
	 		+ "	 							t.generation_Date_Date,\r\n"
	 		+ "	 							t.is_Published,\r\n"
	 		+ "	 							'0' as is_function_news,\r\n"
	 		+ "	 							 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
	 		+ "	 							 FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
	 		+ "	 							  WHERE t.column_Description=c.description\r\n"
	 		+ "	 								and t.robots= r.robot_name\r\n"
	 		+ "	 								and r.column_description=c.description\r\n"
	 		+ "	 								and s.group_Id = c.group_Id\r\n"
	 		+ "	 								and s.id_Sub_Group=c.subgroup_Id\r\n"
	 		+ "	 								and g.id = c.group_Id\r\n"
	 		+ "	 								and g.asset_Id=a.id\r\n"
	 		+ "									and t.is_Published=1 \r\n"
	 		+ "									and c.group_Id=:groupId and c.subgroup_Id=:subGroupId\r\n"
	 		+ "	 		\r\n"
	 		+ "	 		   union\r\n"
	 		+ "	 						SELECT t.id,\r\n"
	 		+ "	 						t.template,\r\n"
	 		+ "	 						t.column_Description,\r\n"
	 		+ "	 						t.robots,\r\n"
	 		+ "	 						t.is_Bold,\r\n"
	 		+ "	 						t.generation_Date_Date,\r\n"
	 		+ "	 						t.is_Published,\r\n"
	 		+ "	 						'1' as is_function_news,\r\n"
	 		+ "	 						 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code\r\n"
	 		+ "	 						 from \r\n"
	 		+ "	 		     News_function t, function_configuration fc, Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f\r\n"
	 		+ "	 		        where t.column_Description=fc.description\r\n"
	 		+ "	 			      and t.robots = r.robot_name\r\n"
	 		+ "	 		          and t.function_id = f.id\r\n"
	 		+ "	 				  and g.asset_Id=a.id\r\n"
	 		+ "	 				  and g.id = fc.group_Id\r\n"
	 		+ "	 				  and s.group_Id = fc.group_Id\r\n"
	 		+ "	 				  and s.id_Sub_Group=fc.subgroup_Id\r\n"
	 		+ "	 				  and fc.function_id=f.id\r\n"
	 		+ "	 				  and r.function_id=f.id\r\n"
	 		+ "	 		          and r.column_description=fc.description\r\n"
	 		+ "					  and t.is_Published=1 \r\n"
	 		+ "					  and fc.group_Id=:groupId and fc.subgroup_Id=:subGroupId\r\n"
	 		+ "	 		         )tab4 , news_order\r\n"
	 		+ "	 							where tab4.robot_code=news_order.robot_code\r\n"
	 		+ "	 							order by \r\n"
	 		+ "	 		                    date(tab4.generation_Date_Date) desc,\r\n"
	 		+ "	 							news_order.order_id asc " , 
		 		  nativeQuery = true)   	
	 List<News> findNewsByGroupIdAndSubgroupId(@Param("groupId") String groupId ,@Param("subGroupId") String subGroupId);
	 
	 @Query( value ="select tab4.id \r\n"
	 		+ "	 		,tab4.template\r\n"
	 		+ "	 		,tab4.column_Description\r\n"
	 		+ "	 		,tab4.robots\r\n"
	 		+ "	 		,tab4.is_Bold\r\n"
	 		+ "	 		,tab4.generation_Date_Date\r\n"
	 		+ "	 		,tab4.is_Published\r\n"
	 		+ "	 		,tab4.is_function_news\r\n"
	 		+ "	 		 from(\r\n"
	 		+ "	 							SELECT t.id,\r\n"
	 		+ "	 							t.template,\r\n"
	 		+ "	 							t.column_Description,\r\n"
	 		+ "	 							t.robots,\r\n"
	 		+ "	 							t.is_Bold,\r\n"
	 		+ "	 							t.generation_Date_Date,\r\n"
	 		+ "	 							t.is_Published,\r\n"
	 		+ "	 							'0' as is_function_news,\r\n"
	 		+ "	 							 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
	 		+ "	 							 FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
	 		+ "	 							  WHERE t.column_Description=c.description\r\n"
	 		+ "	 								and t.robots= r.robot_name\r\n"
	 		+ "	 								and r.column_description=c.description\r\n"
	 		+ "	 								and s.group_Id = c.group_Id\r\n"
	 		+ "	 								and s.id_Sub_Group=c.subgroup_Id\r\n"
	 		+ "	 								and g.id = c.group_Id\r\n"
	 		+ "	 								and g.asset_Id=a.id\r\n"
	 		+ "									and t.is_Published=1 \r\n"
	 		+ "									and c.group_Id in(1,2,3) and c.description LIKE CONCAT('%',:subGroupIdDescription,'%')\r\n"
	 		+ "	 		\r\n"
	 		+ "	 		   union\r\n"
	 		+ "	 						SELECT t.id,\r\n"
	 		+ "	 						t.template,\r\n"
	 		+ "	 						t.column_Description,\r\n"
	 		+ "	 						t.robots,\r\n"
	 		+ "	 						t.is_Bold,\r\n"
	 		+ "	 						t.generation_Date_Date,\r\n"
	 		+ "	 						t.is_Published,\r\n"
	 		+ "	 						'1' as is_function_news,\r\n"
	 		+ "	 						 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code\r\n"
	 		+ "	 						 from \r\n"
	 		+ "	 		     News_function t, function_configuration fc, Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f\r\n"
	 		+ "	 		        where t.column_Description=fc.description\r\n"
	 		+ "	 			      and t.robots = r.robot_name\r\n"
	 		+ "	 		          and t.function_id = f.id\r\n"
	 		+ "	 				  and g.asset_Id=a.id\r\n"
	 		+ "	 				  and g.id = fc.group_Id\r\n"
	 		+ "	 				  and s.group_Id = fc.group_Id\r\n"
	 		+ "	 				  and s.id_Sub_Group=fc.subgroup_Id\r\n"
	 		+ "	 				  and fc.function_id=f.id\r\n"
	 		+ "	 				  and r.function_id=f.id\r\n"
	 		+ "	 		          and r.column_description=fc.description\r\n"
	 		+ "					  and t.is_Published=1 \r\n"
	 		+ "					  and fc.group_Id in(1,2,3) and fc.description LIKE CONCAT('%',:subGroupIdDescription,'%')\r\n"
	 		+ "	 		         )tab4 , news_order\r\n"
	 		+ "	 							where tab4.robot_code=news_order.robot_code\r\n"
	 		+ "	 							order by \r\n"
	 		+ "	 		                    date(tab4.generation_Date_Date) desc,\r\n"
	 		+ "	 							news_order.order_id asc " , 
		 		  nativeQuery = true)   	
	 List<News> findAllNewsByGroupIdAndSubgroupId(@Param("subGroupIdDescription") String subGroupIdDescription);

	 @Query( value ="select tab4.id \r\n"
	 		+ "	 		,tab4.template\r\n"
	 		+ "	 		,tab4.column_Description\r\n"
	 		+ "	 		,tab4.robots\r\n"
	 		+ "	 		,tab4.is_Bold\r\n"
	 		+ "	 		,tab4.generation_Date_Date\r\n"
	 		+ "	 		,tab4.is_Published\r\n"
	 		+ "	 		,tab4.is_function_news\r\n"
	 		+ "	 		 from(\r\n"
	 		+ "	 							SELECT t.id,\r\n"
	 		+ "	 							t.template,\r\n"
	 		+ "	 							t.column_Description,\r\n"
	 		+ "	 							t.robots,\r\n"
	 		+ "	 							t.is_Bold,\r\n"
	 		+ "	 							t.generation_Date_Date,\r\n"
	 		+ "	 							t.is_Published,\r\n"
	 		+ "	 							'0' as is_function_news,\r\n"
	 		+ "	 							 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,c.column_Code,'LAST',r.robot_Code) as robot_code\r\n"
	 		+ "	 							 FROM News t, Column_Configuration c, robots_configuration r,  Asset_Class a, groups_table g, SubGroup s\r\n"
	 		+ "	 							  WHERE t.column_Description=c.description\r\n"
	 		+ "	 								and t.robots= r.robot_name\r\n"
	 		+ "	 								and r.column_description=c.description\r\n"
	 		+ "	 								and s.group_Id = c.group_Id\r\n"
	 		+ "	 								and s.id_Sub_Group=c.subgroup_Id\r\n"
	 		+ "	 								and g.id = c.group_Id\r\n"
	 		+ "	 								and g.asset_Id=a.id\r\n"
	 		+ "									and t.is_Published=1 \r\n"
	 		+ "									and c.description in (:selectedGraphNews)\r\n"
	 		+ "	 		\r\n"
	 		+ "	 		   union\r\n"
	 		+ "	 						SELECT t.id,\r\n"
	 		+ "	 						t.template,\r\n"
	 		+ "	 						t.column_Description,\r\n"
	 		+ "	 						t.robots,\r\n"
	 		+ "	 						t.is_Bold,\r\n"
	 		+ "	 						t.generation_Date_Date,\r\n"
	 		+ "	 						t.is_Published,\r\n"
	 		+ "	 						'1' as is_function_news,\r\n"
	 		+ "	 						 CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code\r\n"
	 		+ "	 						 from \r\n"
	 		+ "	 		     News_function t, function_configuration fc, Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f\r\n"
	 		+ "	 		        where t.column_Description=fc.description\r\n"
	 		+ "	 			      and t.robots = r.robot_name\r\n"
	 		+ "	 		          and t.function_id = f.id\r\n"
	 		+ "	 				  and g.asset_Id=a.id\r\n"
	 		+ "	 				  and g.id = fc.group_Id\r\n"
	 		+ "	 				  and s.group_Id = fc.group_Id\r\n"
	 		+ "	 				  and s.id_Sub_Group=fc.subgroup_Id\r\n"
	 		+ "	 				  and fc.function_id=f.id\r\n"
	 		+ "	 				  and r.function_id=f.id\r\n"
	 		+ "	 		          and r.column_description=fc.description\r\n"
	 		+ "					  and t.is_Published=1 \r\n"
	 		+ "					  and fc.description in (:selectedGraphNews)\r\n"
	 		+ "	 		         )tab4 , news_order\r\n"
	 		+ "	 							where tab4.robot_code=news_order.robot_code\r\n"
	 		+ "	 							order by \r\n"
	 		+ "	 		                    date(tab4.generation_Date_Date) desc,\r\n"
	 		+ "	 							news_order.order_id asc " , 
		 		  nativeQuery = true)   	
	 List<News> findSelectedGraphNews(@Param("selectedGraphNews") List<String> selectedGraphNews);
	 
}
