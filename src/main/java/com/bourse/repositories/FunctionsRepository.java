package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.Functions;
import com.bourse.dto.FunctionDTO;

public interface FunctionsRepository extends JpaRepository<Functions, Long> {


	@Query(value =   "select new com.bourse.dto.FunctionDTO(fnc.id, fnc.description, fnc.functionCode, fnc.groupId, fg.groupName)  "
			+ " from \r\n"
						+ "	Functions fnc, \r\n"
						+ "	FunctionAsset fa ,\r\n"
						+ "	FunctionGroup fg,\r\n"
						+ " AssetClass ac ,\r\n"
						+ " Groups g\r\n"
						+ "where fnc.id =fa.functionId\r\n"
						+ "   and fnc.groupId = fg.id\r\n"
						+ "   and ac.id = g.assetId  \r\n"
						+ "   and ac.id = fa.assetClassId \r\n"
						+ "   and g.id=:groupId \r\n"
						+ "   and fa.isHidden=false order by fnc.id asc\r\n"
					    + "")
	public List<FunctionDTO> findByGroupId(@Param("groupId") Long groupId);
	
}
