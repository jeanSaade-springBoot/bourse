package com.bourse.repositories.usJobs;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.usJobs.UsJobsData;

public interface UsJobsDataRepository extends JpaRepository<UsJobsData, Long> {

	boolean existsByReferDateAndGroupId(String referDate, Long groupId);

	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from usjobs_data where group_id=:groupId",
	         nativeQuery = true)
	public String findLatest(@Param("groupId") String groupId);

	UsJobsData findUsJobsDataByReferDateAndGroupIdAndSubgroupId(String referdate, Long groupId, Long subgroupId);

	void deleteUsJobsByGroupIdAndReferDate(Long valueOf, String referDate);

	boolean existsByReferDateAndGroupIdAndSubgroupId(String referDate, Long groupId, Long subgroupId);

	List<UsJobsData> findUsJobsDataByReferDateAndGroupId(String referDate, Long groupId);
}
