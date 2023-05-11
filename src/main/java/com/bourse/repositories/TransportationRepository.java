package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.TransportationData;

public interface TransportationRepository extends JpaRepository<TransportationData, Long>{
	public long countByReferDate(String referDate);

	public List<TransportationData> findByReferDate(String referDate);
	
	 @Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from transportation_data",
             nativeQuery = true)
	public String findLatestTransportationData();
	 
    public TransportationData findTransportationByReferDateAndSubgroupId(String referdate, Long valueOf);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

}
