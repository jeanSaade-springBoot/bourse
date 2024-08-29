package com.bourse.repositories.longEnds;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.longEnds.LongEndData;


public interface LongEndsDataRepository extends JpaRepository<LongEndData, Long> {

	boolean existsByReferDateAndGroupId(String referDate, Long groupId);

	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from long_end_data where group_id=:groupId",
	         nativeQuery = true)
	public String findLatest(@Param("groupId") String groupId);

	LongEndData findLongEndsDataByReferDateAndGroupIdAndSubgroupId(String referdate, Long valueOf, Long valueOf2);

	void deleteLongEndsByGroupIdAndReferDate(Long valueOf, String referDate);

	boolean existsByReferDateAndGroupIdAndSubgroupId(String referDate, Long groupId, Long subgroupId);
}
