package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.Functions;
import com.bourse.dto.FunctionDTO;

public interface FunctionsRepository extends JpaRepository<Functions, Long> {


	@Query(value =
		    "select distinct new com.bourse.dto.FunctionDTO( " +
		    "    fnc.id, fnc.description, fnc.functionCode, " +
		    "    fnc.groupId, fg.groupName " +
		    ") " +
		    "from Functions fnc " +
		    "join FunctionAsset fa on fnc.id = fa.functionId " +
		    "join FunctionGroup fg on fnc.groupId = fg.id " +
		    "join AssetClass ac on ac.id = fa.assetClassId " +
		    "join Groups g on ac.id = g.assetId " +
		    "where g.id = :groupId " +
		    "and fa.isHidden = false " +
		    "and ( " +
		    "    (fa.groupid is null and fa.subgroupid is null) " +
		    "    or " +
		    "    ( :subgroupId in (1,2) " +
		    "      and fa.groupid = :groupId " +
		    "      and fa.subgroupid = :subgroupId ) " +
		    ") " +
		    "order by fnc.id asc"
		)
	public List<FunctionDTO> findByGroupId(@Param("groupId") Long groupId, @Param("subgroupId") Long subgroupId);
	
}
