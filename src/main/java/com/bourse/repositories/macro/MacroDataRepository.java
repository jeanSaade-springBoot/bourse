package com.bourse.repositories.macro;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.macro.MacroData;

public interface MacroDataRepository extends JpaRepository<MacroData, Long> {
	
	boolean existsByReferDateAndGroupIdAndSubgroupIdAndFactorIdAndValueNot(String referDate, Long groupId, Long subgroupId, Long factorId, String value);

	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from macro_data where group_id=:groupId",
	         nativeQuery = true)
	public String findLatest(@Param("groupId") String groupId);

	MacroData findMacroDataByReferDateAndGroupIdAndSubgroupIdAndFactorId(String referdate, Long groupId, Long subgroupId,
			Long factorId);

	@Transactional
	public void deleteMacroDataByGroupIdAndReferDate(Long groupId, String referDate);

}
