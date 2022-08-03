package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.bourse.domain.NewsOrder;

public interface NewsOrderRepository extends JpaRepository<NewsOrder, Long> {

	@Query(value ="select *\r\n"
			+ "from(\r\n"
			+ "select \r\n"
			+ "  n.id , \r\n"
			+ "  n.robot_code , \r\n"
			+ "  n.order_id , \r\n"
			+ "  n.state \r\n"
			+ "from news_order n \r\n"
			+ "where n.robot_code in ( select concat( a.asset_code, g.group_code, \r\n"
			+ "                                       s.subgroup_code, c.column_code, \r\n"
			+ "                                    'LAST', r.robot_code) \r\n"
			+ "							from column_configuration c , \r\n"
			+ "							     robots_configuration r , \r\n"
			+ "							     asset_class a , \r\n"
			+ "							     groups_table g , \r\n"
			+ "							     subgroup s \r\n"
			+ "							where r.column_description = c.description \r\n"
			+ "							  and s.group_id = c.group_id \r\n"
			+ "							  and s.id_sub_group = c.subgroup_id \r\n"
			+ "							  and g.id = c.group_id \r\n"
			+ "							  and g.asset_id = a.id \r\n"
			+ "							  and r.isactive = 1) \r\n"
			+ "union\r\n"
			+ " select \r\n"
			+ "  n.id , \r\n"
			+ "  n.robot_code , \r\n"
			+ "  n.order_id , \r\n"
			+ "  n.state \r\n"
			+ "from news_order n \r\n"
			+ "where n.robot_code in (\r\n"
			+ "  select \r\n"
			+ "       CONCAT(a.asset_Code,\r\n"
			+ "              g.group_Code,\r\n"
			+ "              s.subgroup_Code,\r\n"
			+ "              fc.column_Code,\r\n"
			+ "              'LAST',\r\n"
			+ "              r.robot_Code,\r\n"
			+ "              f.function_code)\r\n"
			+ "    from \r\n"
			+ "      function_configuration fc,  Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f\r\n"
			+ "      where g.asset_Id=a.id\r\n"
			+ "      and g.id = fc.group_Id\r\n"
			+ "	  and s.group_Id = fc.group_Id\r\n"
			+ "      and s.id_Sub_Group=fc.subgroup_Id\r\n"
			+ "      and r.config_id=fc.config_id\r\n"
			+ "      and r.column_description=fc.description\r\n"
			+ "      and fc.function_id=f.id\r\n"
			+ "      and r.function_id=f.id\r\n"
			+ "      and r.isactive = 1))tab\r\n"
			+ "                              \r\n"
			+ "                       order by  tab.order_id asc;       \r\n",
		       nativeQuery = true)
	  List<NewsOrder> getActiveNewsOrder();
	
	  @Transactional
	  @Modifying
	  @Query("delete from NewsOrder \r\n"
			+ " where id in (:listid)")
	  void deleteByListOfId(@Param("listid") Long[] listid);
}
