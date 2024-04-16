package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.TableManagement;

public interface TableManagementRepository extends JpaRepository<TableManagement, Long> {
	TableManagement findByGroupIdAndSubgroupId(String groupId,  String subgroupId);

	  @Query("SELECT tm FROM TableManagement tm WHERE tm.groupId = :groupId GROUP BY tm.groupId")
	  TableManagement findDistinctByGroupId(@Param("groupId") String groupId);
}
