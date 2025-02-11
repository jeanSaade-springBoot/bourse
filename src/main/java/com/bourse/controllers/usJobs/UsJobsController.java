package com.bourse.controllers.usJobs;

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

import com.bourse.domain.usJobs.TmpAuditUsADPChange;
import com.bourse.domain.usJobs.TmpAuditUsHouseHoldSurv;
import com.bourse.domain.usJobs.TmpAuditUsJobsopenings;
import com.bourse.domain.usJobs.TmpAuditUsNFP;
import com.bourse.domain.usJobs.TmpAuditUsUnempRate;
import com.bourse.domain.usJobs.UsJobsData;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.service.usJobs.UsJobsService;

@RestController
@RequestMapping(value = "usjobs")
public class UsJobsController {

	@Autowired
	private final UsJobsService usJobsService;
	@Autowired
	TableManagementRepository tableManagementRepository;
	
	private String className = "";
	
	public UsJobsController(
			UsJobsService usJobsService)
	{
		this.usJobsService = usJobsService;
	}

	@GetMapping(value = "checkifcansave/{group}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSave(@PathVariable("group") String group,@PathVariable String referDate) 
	{  
		return new ResponseEntity<>(usJobsService.CheckIfCanSave(referDate,Long.valueOf(group)),HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansave/{group}/{subgroup}/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSave(@PathVariable("group") String group,@PathVariable("subgroup") String subgroup,@PathVariable String referDate) 
	{  
		return new ResponseEntity<>(usJobsService.CheckIfCanSaveData(referDate,Long.valueOf(group),Long.valueOf(subgroup)),HttpStatus.OK);
	}
	@PostMapping(value = "save-usjobs-data")
	public ResponseEntity<Boolean> saveUsJobsData(@RequestBody List<UsJobsData> UsJobsDTOlst) {
		System.out.println(className+": save-UsJobs-data");
		usJobsService.saveUsJobs(UsJobsDTOlst);
		usJobsService.doCalculation(UsJobsDTOlst.get(0).getReferDate(),String.valueOf(UsJobsDTOlst.get(0).getGroupId()));
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody MainSearchFilterDTO mainSearchFilterDTO) {
		 System.out.println(className+": getgriddata");
		return new ResponseEntity<>(usJobsService.getGridData(mainSearchFilterDTO),HttpStatus.OK);
	}
	@GetMapping(value = "us-jobsopening-data/{groupId}/{referDate}")
	public ResponseEntity<List<TmpAuditUsJobsopenings>> getUsJobsByGroupIdAndDataByReferDate(@PathVariable("groupId") String groupId, @PathVariable("referDate") String referDate) {
	    System.out.println(className + ": getUsJobsByGroupIdAndDataByReferDate");
	    List<TmpAuditUsJobsopenings> data = usJobsService.getAuditUsJobsopenings(groupId, referDate);
	   
	    return new ResponseEntity<>(data, HttpStatus.OK);
	}
	@GetMapping(value = "us-adpchange-data/{groupId}/{referDate}")
	public ResponseEntity<List<TmpAuditUsADPChange>> getAuditUsADPChange(@PathVariable("groupId") String groupId, @PathVariable("referDate") String referDate) {
	    System.out.println(className + ": getUsJobsByGroupIdAndDataByReferDate");
	    List<TmpAuditUsADPChange> data = usJobsService.getAuditUsADPChange(groupId, referDate);
	   
	    return new ResponseEntity<>(data, HttpStatus.OK);
	}
	@GetMapping(value = "us-nfp-data/{groupId}/{referDate}")
	public ResponseEntity<List<TmpAuditUsNFP>> getAuditUsNFPChange(@PathVariable("groupId") String groupId, @PathVariable("referDate") String referDate) {
	    System.out.println(className + ": getUsJobsByGroupIdAndDataByReferDate");
	    List<TmpAuditUsNFP> data = usJobsService.getAuditUsNFPChange(groupId, referDate);
	   
	    return new ResponseEntity<>(data, HttpStatus.OK);
	}
	@GetMapping(value = "us-unemprate-data/{groupId}/{referDate}")
	public ResponseEntity<List<TmpAuditUsUnempRate>> getAuditUsUnempRate(@PathVariable("groupId") String groupId, @PathVariable("referDate") String referDate) {
	    System.out.println(className + ": getUsJobsByGroupIdAndDataByReferDate");
	    List<TmpAuditUsUnempRate> data = usJobsService.getAuditUsUnempRate(groupId, referDate);
	   
	    return new ResponseEntity<>(data, HttpStatus.OK);
	}
	@GetMapping(value = "us-householdsurv-data/{groupId}/{referDate}")
	public ResponseEntity<List<TmpAuditUsHouseHoldSurv>> getAuditUsHouseHoldSurv(@PathVariable("groupId") String groupId, @PathVariable("referDate") String referDate) {
	    System.out.println(className + ": getUsJobsByGroupIdAndDataByReferDate");
	    List<TmpAuditUsHouseHoldSurv> data = usJobsService.getAuditUsHouseHoldSurv(groupId, referDate);
	   
	    return new ResponseEntity<>(data, HttpStatus.OK);
	}
	@GetMapping(value = "getlatest/{groupId}", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatest(@PathVariable("groupId") String groupId){
		return new ResponseEntity<>(usJobsService.findLatestData(groupId), HttpStatus.OK);
    }

	@PostMapping(value = "update-usjobs-data")
	public ResponseEntity<Boolean> updateUsJobsData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{  System.out.println(className+": updateUsJobsData");
		usJobsService.updateData(updateDataDTOlst);
		usJobsService.doCalculation(updateDataDTOlst.get(0).getReferdate(),updateDataDTOlst.get(0).getGroupId());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	
	@DeleteMapping(value = "delete-usjobs/{groupId}/{referDate}")
	public ResponseEntity<HttpStatus> deleteUsJobsData(@PathVariable("groupId") String groupId ,@PathVariable("referDate") String referDate) {
		System.out.println(className+": deleteUsJobsDataByReferDate");
		usJobsService.deleteUsJobsData(groupId,referDate);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@PostMapping(value = "getgraphdata")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getUsJobsGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		System.out.println(className+": getgraphdata");

		return new ResponseEntity<>(usJobsService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "getgraphdatabytype")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(usJobsService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
	
	
}
