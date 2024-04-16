package com.bourse.repositories.macro;

import java.util.List;
import org.springframework.data.domain.Sort;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.macro.MacroDisplaySettings;

public interface MacroDisplaySettingsRepository extends JpaRepository<MacroDisplaySettings, Long> {

	List<MacroDisplaySettings> findAllByGroupId(Long groupId, Sort sort);

	@Query(value = "select * from macro_display_settings where factor = 16 and subgroup_id in(1 , 3) order by group_id, subgroup_id;",
	         nativeQuery = true)
	public List<MacroDisplaySettings> findAllFinal();

}
