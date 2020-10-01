package com.bourse.repositories;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.SovereignData;
import com.bourse.dto.DataGraphDTO;
public interface SovereignYieldsRepository extends JpaRepository<SovereignData, Long> {
	
	public SovereignData findById(long id);
	public List<SovereignData> findSovereignBysubgroupId(long subGroupId);
	 
	/*
	 * @Query(value = "select i from ExchangeBestDeals i where i.type = 2")
	 * List<SovereignData> findAllClothsUrl( Pageable page);
	 */
	
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x,\r\n" + 
			              " five_yr_factor as y\r\n" + 
		 		"from `sovereign_data`\r\n" + 
		 		"where subgroup_id =:subGroupId "
		 		+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
	               nativeQuery = true)
	 public List<DataGraphDTO> findGraphDataForFiveBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x,\r\n" + 
						"      two_yr_factor/five_yr_factor as y  \r\n" + 
						"  from `sovereign_data`\r\n" + 
						"  where subgroup_id=:subGroupId "
						+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
					      nativeQuery = true)
	 public List<DataGraphDTO> findGraphDataForTwoOverFiveBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x,\r\n" + 
				"       two_yr_factor/ten_yr_factor as y\r\n" + 
				"  from `sovereign_data`\r\n" + 
				"  where subgroup_id=:subGroupId "
				+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
			      nativeQuery = true)
     public List<DataGraphDTO> findGraphDataForTwoOverTenBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x,\r\n" + 
				"       five_yr_factor/ten_yr_factor as y\r\n" + 
				"  from `sovereign_data`\r\n" + 
				"  where subgroup_id=:subGroupId "
				+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
			      nativeQuery = true)
     public List<DataGraphDTO> findGraphDataForFiveOverTenBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x ,\r\n" + 
				"      ten_yr_factor/thirtee_yr_factor as y \r\n" + 
				"  from `sovereign_data`\r\n" + 
				"  where subgroup_id=:subGroupId "
				+ "order by STR_TO_DATE(refer_date,'%d-%m-%Y')",
			      nativeQuery = true)
    public List<DataGraphDTO> findGraphDataForTenOverThirteeBySubroupId(@Param("subGroupId") long subGroupId);
	 
	 @Query(value = "select STR_TO_DATE(refer_date,'%d-%m-%Y') as x ,\r\n" + 
				"    five_yr_factor/thirtee_yr_factor as y  \r\n" + 
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

}
