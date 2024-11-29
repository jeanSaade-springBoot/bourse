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
	
	@Query(value = "WITH factors_16 AS (\r\n"
			+ "		    SELECT group_id, subgroup_id\r\n"
			+ "		    FROM macro_display_settings\r\n"
			+ "		    WHERE factor = 16 AND is_visible = true AND subgroup_id IN (1, 3)\r\n"
			+ "		),\r\n"
			+ "		factors_14 AS (\r\n"
			+ "		    SELECT group_id, subgroup_id\r\n"
			+ "		    FROM macro_display_settings\r\n"
			+ "		    WHERE factor = 14 AND is_visible = true AND subgroup_id IN (1, 3)\r\n"
			+ "		)\r\n"
			+ "		SELECT mds.*\r\n"
			+ "		FROM macro_display_settings mds\r\n"
			+ "		JOIN factors_16 f16 ON mds.group_id = f16.group_id AND mds.subgroup_id = f16.subgroup_id\r\n"
			+ "		JOIN factors_14 f14 ON mds.group_id = f14.group_id AND mds.subgroup_id = f14.subgroup_id\r\n"
			+ "		WHERE mds.is_visible = true AND mds.factor IN (16)\r\n"
			+ "		ORDER BY mds.group_id, mds.subgroup_id;", nativeQuery = true)
	public List<MacroDisplaySettings> findAllFinalWithFcst();
	
	
	@Query(value = " WITH factors_16 AS ( \r\n"
			+ "				    SELECT group_id, subgroup_id \r\n"
			+ "				    FROM macro_display_settings \r\n"
			+ "				    WHERE factor = 16 AND is_visible = true AND subgroup_id IN (1, 3)\r\n"
			+ "				),\r\n"
			+ "				factors_15 AS (\r\n"
			+ "				    SELECT group_id, subgroup_id\r\n"
			+ "				    FROM macro_display_settings\r\n"
			+ "				    WHERE factor = 15 AND is_visible = true AND subgroup_id IN (1, 3)\r\n"
			+ "				)\r\n"
			+ "				SELECT mds.*\r\n"
			+ "				FROM macro_display_settings mds\r\n"
			+ "				JOIN factors_16 f16 ON mds.group_id = f16.group_id AND mds.subgroup_id = f16.subgroup_id\r\n"
			+ "				JOIN factors_15 f14 ON mds.group_id = f14.group_id AND mds.subgroup_id = f14.subgroup_id\r\n"
			+ "				WHERE mds.is_visible = true AND mds.factor IN (16)\r\n"
			+ "				ORDER BY mds.group_id, mds.subgroup_id; ", nativeQuery = true)
	public List<MacroDisplaySettings> findAllFinalWithFlash();
}
