package com.bourse.repositories.macro;

import java.util.List;
import org.springframework.data.domain.Sort;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.macro.MacroDisplaySettings;

public interface MacroDisplaySettingsRepository extends JpaRepository<MacroDisplaySettings, Long> {

	List<MacroDisplaySettings> findAllByGroupId(Long groupId, Sort sort);
}
