package com.bourse.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.Configuration;
public interface ConfigurationRepository extends JpaRepository<Configuration, Long> {
	
	public long countByEnvironement(String env);
	
}
