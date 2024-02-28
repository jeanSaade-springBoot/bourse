package com.bourse.repositories.sti;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.sti.StiEmergingData;

public interface StiEmergingRepository extends JpaRepository<StiEmergingData, Long> {

	public long countByReferDate(String referDate);
	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

	public StiEmergingData findByReferDateAndSubgroupId(String referDate,Long subgroupId);
	@Transactional
	public void deleteByReferDate(String referDate);
	 
		@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from sti_emerging_data",
	             nativeQuery = true)
		public String findLatest();
}
