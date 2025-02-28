package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.FunctionConfiguration;

public interface FunctionConfigurationRepository extends JpaRepository<FunctionConfiguration, Long> {
	
	FunctionConfiguration findByConfigIdAndFunctionId(String configId,String functionId) ;

	FunctionConfiguration findByGroupIdAndSubgroupIdAndFactorAndFunctionId(String yieldCurveCross, String country,
			String factor, String function);

}
