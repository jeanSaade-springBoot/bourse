package com.bourse.controllers.longEnds;

import java.util.HashMap;
import java.util.List;

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

import com.bourse.domain.longEnds.LongEndData;
import com.bourse.domain.longEnds.LongEndsDisplaySettings;
import com.bourse.domain.longEnds.TmpAuditLefBunds;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.dto.longends.LongEndsAuditCommonDTO;
import com.bourse.service.DataFunctionService;
import com.bourse.service.longEnds.LongEndsService;

@RestController
@RequestMapping(value = "longEnds")
public class LongEndsController {

	@Autowired
	private final LongEndsService longEndsService;
	
	@Autowired
	private final DataFunctionService dataFunctionService;
	
	private String className = "LongEndsController";
	
	public LongEndsController(
			LongEndsService longEndsService,
			DataFunctionService dataFunctionService)
	{
		this.longEndsService = longEndsService;
		this.dataFunctionService = dataFunctionService;
	}
	@GetMapping(value = "get-longends-display-settings")
	public ResponseEntity<List<LongEndsDisplaySettings>> getLongEndsDisplaySettingsList() {
		System.out.println(className+": get-longends-display-settings");
		return new ResponseEntity<>(longEndsService.getLongEndsDisplaySettingsList(),HttpStatus.OK);
	}
	@GetMapping(value = "get-all-longends-display-settings")
	public ResponseEntity<List<LongEndsDisplaySettings>> getAllLongEndsDisplaySettingsList() {
		System.out.println(className+": get-all-longends-display-settings");
		return new ResponseEntity<>(longEndsService.getAllLongEndsDisplaySettingsList(),HttpStatus.OK);
	}
	@GetMapping(value = "get-longends-display-settings/{groupId}")
	public ResponseEntity<List<LongEndsDisplaySettings>> getLongEndsDisplaySettingsList(@PathVariable("groupId") String groupId) {
		System.out.println(className+": get-longends-display-settings");
		return new ResponseEntity<>(longEndsService.getLongEndsDisplaySettingsList(groupId),HttpStatus.OK);
	}
	@GetMapping(value = "longEnds-data/{groupId}/{referDate}")
	public ResponseEntity<List<LongEndsAuditCommonDTO>> getLongEndsByGroupIdAndDataByReferDate(@PathVariable("groupId") String groupId, @PathVariable("referDate") String referDate) {
	    System.out.println(className + ": getLongEndsByGroupIdAndDataByReferDate");
	    List<LongEndsAuditCommonDTO> data = longEndsService.getLongEndsByGroupIdAndDataByReferDate(groupId, referDate);
	   
	    return new ResponseEntity<>(data, HttpStatus.OK);
	}
	@GetMapping(value = "longEnds-data-rolling/{groupId}/{referDate}")
	public ResponseEntity<List<LongEndsAuditCommonDTO>> getLongEndsRollingByGroupIdAndDataByReferDate(@PathVariable("groupId") String groupId, @PathVariable("referDate") String referDate) {
	    System.out.println(className + ": longEnds-data-rolling");
	    List<LongEndsAuditCommonDTO> data = longEndsService.getLongEndsRollingByGroupIdAndByReferDate(groupId, referDate);
	   
	    return new ResponseEntity<>(data, HttpStatus.OK);
	}
	@PostMapping(value = "save-longends-display-settings")
	public ResponseEntity<List<LongEndsDisplaySettings>> saveLongEndsDisplaySettingsList(@RequestBody List<LongEndsDisplaySettings> dTOlst) {
		System.out.println(className+": save-longends-display-settings");
		return new ResponseEntity<>(longEndsService.saveLongEndsDisplaySettingsList(dTOlst),HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansave/{group}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSave(@PathVariable("group") String group,@PathVariable String referDate) 
	{  
		return new ResponseEntity<>(!longEndsService.CheckIfCanSave(referDate,Long.valueOf(group)),HttpStatus.OK);
	}
	@PostMapping(value = "save-longEnds-data")
	public ResponseEntity<Boolean> saveLongEndsData(@RequestBody List<LongEndData> longEndDataDTOlst) {
		System.out.println(className+": save-longEnds-data");
		longEndsService.saveLongEndsData(longEndDataDTOlst);
		longEndsService.doCalculation(longEndDataDTOlst.get(0).getReferDate(),String.valueOf(longEndDataDTOlst.get(0).getGroupId()));
		longEndsService.doCalculationSaveSpreadData(longEndDataDTOlst,null);
		longEndsService.runTrendFollowingMavgTask(longEndDataDTOlst.get(0).getGroupId(),longEndDataDTOlst.get(0).getReferDate(),longEndDataDTOlst.get(0).getReferDate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@GetMapping("findlatestdata/{groupId}")
	public ResponseEntity<Object> findLatestData( @PathVariable("groupId") String groupId) {
		Object data =  longEndsService.findLatestAuditData(Long.valueOf(groupId));
		return ResponseEntity.ok(data);
	}
	@GetMapping(value = "getlatest/{groupId}", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatest(@PathVariable("groupId") String groupId){
		return new ResponseEntity<>(longEndsService.findLatestData(groupId), HttpStatus.OK);
    }
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		 System.out.println(className+": getgriddata");
		return new ResponseEntity<>(longEndsService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}

    @PostMapping(value = "/update-long-longEnds-data")
	public ResponseEntity<Boolean> updateLongEndsData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{  System.out.println(className+":  update-long-longEnds-data ");
	    longEndsService.updateData(updateDataDTOlst);
	
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdatabytype")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(longEndsService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
    @DeleteMapping(value = "delete-longEnds/{groupId}/{referDate}")
	public ResponseEntity<HttpStatus> deleteLongEndData(@PathVariable("groupId") String groupId ,@PathVariable("referDate") String referDate) {
		System.out.println(className+": deleteLongEndsDataByReferDate");
		  List<LongEndData> longEndsData = longEndsService.findLongEndsDataByReferDateAndGroupId(referDate,groupId);
		  longEndsService.deleteLongEndsData(groupId,referDate);
		  longEndsService.onSuccessfulDelete(longEndsData);
		  longEndsService.runTrendFollowingMavgTask(Long.valueOf(groupId),referDate,referDate);

		return new ResponseEntity<>(HttpStatus.OK);
	}
   
}

