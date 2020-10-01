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
	
	 @Query(value = "select refer_date as x,\r\n" + 
			              " five_yr_factor as y\r\n" + 
		 		"from `sovereign_data`\r\n" + 
		 		"where subgroup_id =:subGroupId",
	               nativeQuery = true)
	 public List<DataGraphDTO> findGraphDataForFiveBySubroupId(@Param("subGroupId") long subGroupId);

}
