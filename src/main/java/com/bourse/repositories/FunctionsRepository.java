package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.Functions;

public interface FunctionsRepository extends JpaRepository<Functions, Long> {


	@Query(value =   "select fnc.* from \r\n"
						+ "	functions fnc, \r\n"
						+ "	function_asset fa ,\r\n"
						+ "    asset_class ac ,\r\n"
						+ "    groups_table g\r\n"
						+ "where fnc.id =fa.function_id\r\n"
						+ "   and ac.id = g.asset_id  \r\n"
						+ "   and ac.id = fa.asset_class_id \r\n"
						+ "   and g.id=:groupId \r\n"
						+ "   and fa.is_hidden=false \r\n"
					+ " ;",
				      nativeQuery = true)
	public List<Functions> findByGroupId(@Param("groupId") String groupId);
		 
	
}
