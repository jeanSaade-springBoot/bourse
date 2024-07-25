package com.bourse.controllers.macro;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.macro.MacroData;
import com.bourse.domain.macro.MacroDisplaySettings;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.dto.macro.MacroGraphResponseColConfigDTO;
import com.bourse.dto.macro.MacroAuditCommonDTO;
import com.bourse.dto.macro.MacroLatestDateResponseDTO;
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
	@GetMapping(value = "get-macro-display-final")
	public ResponseEntity<List<MacroDisplaySettings>> getMacroDisplaySettingsFinalList() {
		System.out.println(className+": get-macro-display-final");
		return new ResponseEntity<>(macroService.getMacroDisplaySettingsFinalList(),HttpStatus.OK);
	}
	@GetMapping(value = "get-macro-display-final-with-fcst")
	public ResponseEntity<List<MacroDisplaySettings>> getMacroDisplaySettingsFinalWithFcstList() {
		System.out.println(className+": get-macro-display-final-with-fcst");
		return new ResponseEntity<>(macroService.getMacroDisplaySettingsFinalWithFcstList(),HttpStatus.OK);
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
	@GetMapping(value = "checkifcansave/{group}/{subgroup}/{factor}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSave(@PathVariable("group") String group,@PathVariable("subgroup") String subgroup,@PathVariable("factor") String factor,@PathVariable String referDate) 
	{  
		return new ResponseEntity<>(macroService.CheckIfCanSave(referDate,Long.valueOf(group),Long.valueOf(subgroup),Long.valueOf(factor)),HttpStatus.OK);
	}
	@PostMapping(value = "save-macro-data")
	public ResponseEntity<Boolean> saveMacroData(@RequestBody List<MacroData> macroDTOlst) {
		System.out.println(className+": save-macro-data");
		macroService.saveMacro(macroDTOlst);
		macroService.doCaclulation(macroDTOlst.get(0).getReferDate(),String.valueOf(macroDTOlst.get(0).getGroupId()));
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		 System.out.println(className+": getgriddata");
		return new ResponseEntity<>(macroService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}
	@GetMapping(value = "macro-data/{groupId}/{referDate}")
	public ResponseEntity<List<MacroAuditCommonDTO>> getMacroByGroupIdAndDataByReferDate(@PathVariable("groupId") String groupId, @PathVariable("referDate") String referDate) {
	    System.out.println(className + ": getMacroByGroupIdAndDataByReferDate");
	    List<MacroAuditCommonDTO> data = macroService.getMacroByGroupIdAndDataByReferDate(groupId, referDate);
	   
	    return new ResponseEntity<>(data, HttpStatus.OK);
	}
	@GetMapping(value = "getlatest/{groupId}", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatest(@PathVariable("groupId") String groupId){
		return new ResponseEntity<>(macroService.findLatestData(groupId), HttpStatus.OK);
    }
	@PostMapping(value = "update-macro-data")
	public ResponseEntity<Boolean> updateMacroData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{  System.out.println(className+": updateMacroData");
		macroService.updateData(updateDataDTOlst);
		macroService.doCaclulation(updateDataDTOlst.get(0).getReferdate(),updateDataDTOlst.get(0).getGroupId());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@DeleteMapping(value = "delete-macro/{groupId}/{referDate}")
	public ResponseEntity<HttpStatus> deleteMacroData(@PathVariable("groupId") String groupId ,@PathVariable("referDate") String referDate) {
		System.out.println(className+": deleteMacroDataByReferDate");
		macroService.deleteMacroData(groupId,referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdata")
	public ResponseEntity<List<MacroGraphResponseColConfigDTO>> getMacroGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		System.out.println(className+": getgraphdata");

		return new ResponseEntity<>(macroService.getMacroGraphData(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "get-graph-data")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		System.out.println(className+": get-graph-data");

		return new ResponseEntity<>(macroService.getGraphData(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "getgraphbardata")
	 public ResponseEntity<List<Map<String, List<?>>>> getGraphBarData(@RequestBody List<GraphRequestDTO> graphReqDTO) {
		System.out.println(className+": getgraphbardata");

		List<Map<String, List<?>>> graphData = macroService.getMacroGraphBarDataResults(graphReqDTO);
        return new ResponseEntity<>(graphData, HttpStatus.OK);
    }
	@GetMapping(value = "get-macro-latest-date")
	public ResponseEntity<List<MacroLatestDateResponseDTO>> getMacroLatestReferDateResult() {
		System.out.println(className+": get-macro-latest-date");
		return new ResponseEntity<>(macroService.getMacroLatestReferDateResult(),HttpStatus.OK);
	}
}

