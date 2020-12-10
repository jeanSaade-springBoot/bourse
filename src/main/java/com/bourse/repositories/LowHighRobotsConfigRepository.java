package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.Groups;
import com.bourse.domain.LowHighRobotsConfiguration;
import com.bourse.domain.SubGroup;

public interface LowHighRobotsConfigRepository extends JpaRepository<LowHighRobotsConfiguration, Long> {
	
}
