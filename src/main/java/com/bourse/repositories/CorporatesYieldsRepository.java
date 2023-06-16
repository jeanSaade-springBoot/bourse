package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.CorporateYieldsData;
public interface CorporatesYieldsRepository extends JpaRepository<CorporateYieldsData, Long> {
	public long countByReferDate(String referDate);
	
	 @Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from corporate_yields_data",
             nativeQuery = true)
	 public String findLatestCorporateYieldsData();
	 
	 List<CorporateYieldsData> findByReferDate(String referDate);
	 public CorporateYieldsData findByReferDateAndSubgroupId(String referDate, long subGroupId);

}
