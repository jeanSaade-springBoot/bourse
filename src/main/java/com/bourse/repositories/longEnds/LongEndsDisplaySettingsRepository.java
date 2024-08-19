package com.bourse.repositories.longEnds;

import java.util.List;

import org.springframework.data.domain.Sort;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.longEnds.LongEndsDisplaySettings;


public interface LongEndsDisplaySettingsRepository extends JpaRepository<LongEndsDisplaySettings, Long> {

	List<LongEndsDisplaySettings> findAllByGroupIdAndParentgroupId(Long groupId, Long parentgroupId, Sort sort);

	List<LongEndsDisplaySettings> findAllByParentgroupId(Long parentgroupId, Sort by);

    List<LongEndsDisplaySettings> findByParentgroupIdAndSubgroupId(Long parentgroupId, Long subgroupId);
	
    List<LongEndsDisplaySettings> findAllByGroupId(Long groupId);
 
}
