package com.bourse.repositories;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.bourse.domain.SovereignData;
import com.bourse.dto.CurveSoveriegnDTO;
import com.bourse.dto.DataGraphDTO;
public interface SovereignYieldsRepository extends JpaRepository<SovereignData, Long> {
	
	public long countByReferDate(String referDate);
	public SovereignData findById(long id);
	public List<SovereignData> findSovereignBysubgroupId(long subGroupId);
	public List<SovereignData> findSovereignByReferDate(String referDate);
	public SovereignData findSovereignByReferDateAndSubgroupId(String referDate, long subGroupId);
	 
	/*
	 * @Query(value = "select i from ExchangeBestDeals i where i.type = 2")
	 * List<SovereignData> findAllClothsUrl( Pageable page);
	 */
	
	 @Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from sovereign_data",
             nativeQuery = true)
    public String findLatestSovereignData();
	
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x,\r\n" + 
			              " five_yr_factor as y\r\n" + 
		 		"from `sovereign_data`\r\n" + 
		 		"where subgroup_id =:subGroupId "
		 		+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
	               nativeQuery = true)
	 public List<DataGraphDTO> findGraphDataForFiveBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x,\r\n" + 
						"     ROUND(two_yr_factor/five_yr_factor,3) as y  \r\n" + 
						"  from `sovereign_data`\r\n" + 
						"  where subgroup_id=:subGroupId "
						+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
					      nativeQuery = true)
	 public List<DataGraphDTO> findGraphDataForTwoOverFiveBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x,\r\n" + 
				"       ROUND(two_yr_factor/ten_yr_factor,3) as y\r\n" + 
				"  from `sovereign_data`\r\n" + 
				"  where subgroup_id=:subGroupId "
				+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
			      nativeQuery = true)
     public List<DataGraphDTO> findGraphDataForTwoOverTenBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x,\r\n" + 
				"       ROUND(five_yr_factor/ten_yr_factor,3) as y\r\n" + 
				"  from `sovereign_data`\r\n" + 
				"  where subgroup_id=:subGroupId "
				+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
			      nativeQuery = true)
     public List<DataGraphDTO> findGraphDataForFiveOverTenBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x ,\r\n" + 
				"      ROUND(ten_yr_factor/thirtee_yr_factor,3) as y \r\n" + 
				"  from `sovereign_data`\r\n" + 
				"  where subgroup_id=:subGroupId "
				+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
			      nativeQuery = true)
    public List<DataGraphDTO> findGraphDataForTenOverThirteeBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x ,\r\n" + 
				"    ROUND(five_yr_factor/thirtee_yr_factor,3) as y  \r\n" + 
				"  from `sovereign_data`\r\n" + 
				"  where subgroup_id=:subGroupId "
				+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
			      nativeQuery = true)
     public List<DataGraphDTO> findGraphDataForFiveOverThirteeBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x,\r\n" + 
				"      two_yr_factor as y\r\n" + 
				"  from `sovereign_data`\r\n" + 
				"  where subgroup_id=:subGroupId "
				+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
			      nativeQuery = true)
     public List<DataGraphDTO> findGraphDataForTwoBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select  STR_TO_DATE(refer_date,'%d-%m-%Y') as x, " + 
				"    ten_yr_factor as y " + 
				"  from `sovereign_data`\r\n" + 
				"  where subgroup_id=:subGroupId "
				+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
			      nativeQuery = true)
     public List<DataGraphDTO> findGraphDataForTenBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select subgroup_id as subGroupId,\r\n" + 
	 		"       ROUND((TRIM(TRAILING '%' FROM five_yr_factor) - TRIM(TRAILING '%' FROM two_yr_factor)),4) as twooverfive,\r\n" + 
	 		"       ROUND((TRIM(TRAILING '%' FROM ten_yr_factor) - TRIM(TRAILING '%' FROM two_yr_factor)),4) as twooverten, \r\n" + 
	 		"	   ROUND((TRIM(TRAILING '%' FROM ten_yr_factor) - TRIM(TRAILING '%' FROM five_yr_factor)),4) as fiveoverten,\r\n" + 
	 		"        ROUND((TRIM(TRAILING '%' FROM thirtee_yr_factor) - TRIM(TRAILING '%' FROM five_yr_factor)),4) as fiveoverthirtee,\r\n" + 
	 		"	   ROUND((TRIM(TRAILING '%' FROM thirtee_yr_factor) - TRIM(TRAILING '%' FROM ten_yr_factor)),4) as tenoverthirtee\r\n" + 
	 		"  from bourse.sovereign_data where refer_date =:referDate",
			      nativeQuery = true)
  public List<CurveSoveriegnDTO> findSoveriegnCurvesByReferDate(@Param("referDate") String referDate);
	 
	 @Modifying
	 @Query(value = "update sovereign_data set thirtee_yr_factor = :value where subgroupId = :subgroupId and referdate = :referdate ",
				      nativeQuery = true)
	  public void  updatethirteeyrfactorSovereignBysubgroupIdAndDate(@Param("subgroupId") String subgroupId,@Param("referdate") String referdate ,@Param(value = "value") String value);

	 @Modifying
	 @Transactional
	 @Query(value = "delete from sovereign_data where refer_date =:referDate",
             nativeQuery = true)
     public void deleteSovereignDataByReferDate(@Param("referDate") String referDate);
	 
	 @Modifying
	 @Transactional
	 @Query(value = "delete from tmp_audit_yields where refer_date =:referDate",
             nativeQuery = true)
     public void deleteTmpAuditYieldsByReferDate(@Param("referDate") String referDate);
	 
	 @Modifying
	 @Transactional
	 @Query(value = "delete from tmp_audit_curve where refer_date =:referDate",
             nativeQuery = true)
     public void deleteTmpAuditCurveByReferDate(@Param("referDate") String referDate);
	 
	 @Modifying
	 @Transactional
	 @Query(value = "delete from tmp_audit_cross where refer_date =:referDate",
             nativeQuery = true)
     public void deleteTmpAuditCrossByReferDate(@Param("referDate") String referDate);
}
