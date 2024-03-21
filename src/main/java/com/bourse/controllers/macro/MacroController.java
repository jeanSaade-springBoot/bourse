package com.bourse.controllers.macro;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.macro.MacroDisplaySettings;
import com.bourse.service.DataFunctionService;
import com.bourse.service.macro.MacroService;

@RestController
@RequestMapping(value = "macro")
public class MacroController {

	@Autowired
	private final MacroService macroService;
	
	@Autowired
	private final DataFunctionService dataFunctionService;
	
	private String className = "";
	
	public MacroController(
			MacroService macroService,
			DataFunctionService dataFunctionService)
	{
		this.macroService = macroService;
		this.dataFunctionService = dataFunctionService;
	}
	@GetMapping(value = "get-macro-display-settings")
	public ResponseEntity<List<MacroDisplaySettings>> getMacroDisplaySettingsList() {
		System.out.println(className+": get-macro-display-settings");
		return new ResponseEntity<>(macroService.getMacroDisplaySettingsList(),HttpStatus.OK);
	}
	@GetMapping(value = "get-macro-display-settings/{groupId}")
	public ResponseEntity<List<MacroDisplaySettings>> getMacroDisplaySettingsList(@PathVariable("groupId") String groupId) {
		System.out.println(className+": get-macro-display-settings-1");
		return new ResponseEntity<>(macroService.getMacroDisplaySettingsList(groupId),HttpStatus.OK);
	}
	@PostMapping(value = "save-macro-display-settings")
	public ResponseEntity<List<MacroDisplaySettings>> saveMacroDisplaySettingsList(@RequestBody List<MacroDisplaySettings> dTOlst) {
		System.out.println(className+": save-macro-display-settings");
		return new ResponseEntity<>(macroService.saveMacroDisplaySettingsList(dTOlst),HttpStatus.OK);
	}
}
