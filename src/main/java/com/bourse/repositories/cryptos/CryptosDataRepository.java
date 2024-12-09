package com.bourse.repositories.cryptos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.cryptos.CryptosData;

public interface CryptosDataRepository extends JpaRepository<CryptosData, Long> {

	boolean existsByReferDateAndGroupId(String referDate, Long groupId);

	@Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from cryptos_data where group_id=:groupId",
	         nativeQuery = true)
	public String findLatest(@Param("groupId") String groupId);

	CryptosData findCryptosDataByReferDateAndGroupIdAndSubgroupId(String referdate, Long groupId, Long subgroupId);

	void deleteCryptosByGroupIdAndReferDate(Long valueOf, String referDate);

	boolean existsByReferDateAndGroupIdAndSubgroupId(String referDate, Long groupId, Long subgroupId);

	List<CryptosData> findCryptosDataByReferDateAndGroupId(String referDate, Long groupId);
}
