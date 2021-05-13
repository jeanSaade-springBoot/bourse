package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.Groups;
import com.bourse.domain.SubGroup;

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
}
