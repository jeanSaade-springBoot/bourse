package com.bourse.service.macro;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;

import com.bourse.domain.macro.MacroDisplaySettings;
import com.bourse.repositories.macro.MacroDisplaySettingsRepository;
import org.springframework.data.domain.Sort;

@Service
public class MacroService {
	@Autowired
	MacroDisplaySettingsRepository macroDisplaySettingsRepository;
	
	public List<MacroDisplaySettings> getMacroDisplaySettingsList() {
		List<Order> orders = new ArrayList<Order>();

        Order groupIdOrder = new Order(Sort.Direction.ASC, "groupId");
        orders.add(groupIdOrder);
        Order subgroupIdOrder = new Order(Sort.Direction.ASC, "subgroupId");
        orders.add(subgroupIdOrder);
        Order factorOrder = new Order(Sort.Direction.ASC, "factor");
        orders.add(factorOrder);
		return macroDisplaySettingsRepository.findAll(Sort.by(orders));
	}

	public List<MacroDisplaySettings> getMacroDisplaySettingsList(String groupId) {
		List<Order> orders = new ArrayList<Order>();

        Order groupIdOrder = new Order(Sort.Direction.ASC, "groupId");
        orders.add(groupIdOrder);
        Order subgroupIdOrder = new Order(Sort.Direction.ASC, "subgroupId");
        orders.add(subgroupIdOrder);
        Order factorOrder = new Order(Sort.Direction.ASC, "factor");
        orders.add(factorOrder);
		return macroDisplaySettingsRepository.findAllByGroupId(Long.valueOf(groupId),Sort.by(orders));
		
	}
	public List<MacroDisplaySettings> saveMacroDisplaySettingsList(List<MacroDisplaySettings> dTOLst) {
		return macroDisplaySettingsRepository.saveAll(dTOLst);
	}
}
