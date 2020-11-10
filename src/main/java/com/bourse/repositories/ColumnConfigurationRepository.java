package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.Groups;
import com.bourse.domain.SubGroup;

public interface ColumnConfigurationRepository extends JpaRepository<ColumnConfiguration, Long> {
	List<ColumnConfiguration> findByGroupIdAndSubgroupId(String groupId,String subgroupId);
	ColumnConfiguration findByGroupIdAndSubgroupIdAndDescription(String groupId,String subgroupId,String description) ;
}
