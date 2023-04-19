package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.EnergyData;

public interface EnergyRepository extends JpaRepository<EnergyData, Long>{
	public long countByReferDate(String referDate);

	public List<EnergyData> findByReferDate(String referDate);
	
	 @Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from energy_data",
             nativeQuery = true)
	public String findLatestEnergyData();
	 
    public EnergyData findEnergyByReferDateAndSubgroupId(String referdate, Long valueOf);

	public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

}
