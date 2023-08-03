package com.bourse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.AllNewsView;
import com.bourse.domain.AssetClass;
import com.bourse.domain.AssetNewsOrder;
import com.bourse.domain.CalendarDates;
import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.FunctionConfiguration;
import com.bourse.domain.Functions;
import com.bourse.domain.Groups;
import com.bourse.domain.RobotsConfiguration;
import com.bourse.domain.RobotsFunctionConfiguration;
import com.bourse.domain.News;
import com.bourse.domain.NewsOrder;
import com.bourse.domain.SubGroup;
import com.bourse.dto.AssetNewsOrderDTO;
import com.bourse.dto.ColumnConfigurationDTO;
import com.bourse.dto.FunctionConfigurationDTO;
import com.bourse.dto.NewsOrderDTO;
import com.bourse.dto.RobotsConfigDTO;
import com.bourse.service.AdminService;
import com.bourse.service.AssetClassService;
import com.bourse.service.AssetNewsOrderService;
import com.bourse.service.FunctionConfigurationService;
import com.bourse.service.FunctionsService;
import com.bourse.service.GroupsService;
import com.bourse.service.RobotsFunctionService;
import com.bourse.service.SubGroupService;
@RestController
@RequestMapping(value = "admin")
//@PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN') or hasRole('ROLE_SUPER_ADMIN')")
public class AdminController {

	@Autowired
	private final AssetClassService assetClassService;
	@Autowired
	private final GroupsService groupsService;
	@Autowired
	private final SubGroupService subGroupService;
	@Autowired
	private final AdminService adminService;
	@Autowired
	private final FunctionsService functionsService;
	@Autowired
	private final FunctionConfigurationService functionConfigurationService;
	@Autowired
	private final RobotsFunctionService robotsFunctionService;
	@Autowired
	private final AssetNewsOrderService assetNewsOrderService;
	
	public AdminController(AssetClassService assetClassService,
						   GroupsService groupsService,
						   SubGroupService subGroupService,
						   AdminService adminService,
						   FunctionsService functionsService,
						   FunctionConfigurationService functionConfigurationService,
						   RobotsFunctionService robotsFunctionService,
						   AssetNewsOrderService assetNewsOrderService)
	{
		this.assetClassService   = assetClassService;
		this.groupsService   = groupsService;
		this.subGroupService   = subGroupService;
		this.adminService = adminService;
		this.functionsService = functionsService;
		this.functionConfigurationService = functionConfigurationService;
		this.robotsFunctionService = robotsFunctionService;
		this.assetNewsOrderService = assetNewsOrderService;
	}
	@GetMapping(value = "getassetnewsorder", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<AssetNewsOrder>>  getAssetNewsOrder(){
		return new ResponseEntity<>(assetNewsOrderService.getAssetNewsOrder(), HttpStatus.OK);
    }
	@PostMapping(value = "updateassetnewsorder", produces = "application/json;charset=UTF-8")
    public boolean updateAssetNewsOrder(@RequestBody  List<AssetNewsOrderDTO> AssetNewsOrderDTOlst){
		return assetNewsOrderService.updateAssetNewsOrder(AssetNewsOrderDTOlst);
    }
	@GetMapping(value = "getassetclass", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<AssetClass>>  getAssetClass(){
		return new ResponseEntity<>(assetClassService.getAllAssetClass(), HttpStatus.OK);
    }
	@GetMapping(value = "getgroups", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<Groups>>  getGroups(){
		return new ResponseEntity<>(groupsService.getAllGroups(), HttpStatus.OK);
    }
	
	@GetMapping(value = "getgroupsbyfamily/{familyId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<Groups>>  getGroupsByFamily(@PathVariable String familyId){
		return new ResponseEntity<>(groupsService.getGroupsByAssetId(familyId), HttpStatus.OK);
    }
	
	@GetMapping(value = "getsubgroups", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<SubGroup>>  getSubGroups(){
		return new ResponseEntity<>(subGroupService.getAllSubGroups(), HttpStatus.OK);
    }
	@GetMapping(value = "getfunctions", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<Functions>>  getFunctions(){
		return new ResponseEntity<>(functionsService.getFunctions(), HttpStatus.OK);
    }
	@GetMapping(value = "getsubgroupsbygroup/{groupId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<SubGroup>>  getSubGroupsByGroupId(@PathVariable String groupId){
		return new ResponseEntity<>(subGroupService.getSubGroupsByGroupId(groupId), HttpStatus.OK);
    }
	
	@GetMapping(value = "getcolumnsconfiguration", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<ColumnConfiguration>>  getColumnsConfiguration(){
		return new ResponseEntity<>( adminService.getColumnsConfiguration(), HttpStatus.OK);
    }
	
	
	@GetMapping(value = "getcolumnsconfigurationBygroupandsubgroup/{groupId}/{subgroupId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<ColumnConfiguration>>  getColumnsconfigurationByGroupAndSubgroup(@PathVariable String groupId
    		,@PathVariable String subgroupId){
		return new ResponseEntity<>( adminService.getColumnsConfigurationByGroupAndSubgroup(groupId,subgroupId), HttpStatus.OK);
    }
	
	@GetMapping(value = "getcolumnsconfigurationBygroupandsubgroupdescription/{groupId}/{subgroupId}/{description}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<ColumnConfiguration> getColumnsconfigurationByGroupAndSubgroupDescription(@PathVariable String groupId
    		,@PathVariable String subgroupId,@PathVariable String description){
		return new ResponseEntity<>( adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId,subgroupId,description), HttpStatus.OK);
    }
	
	@GetMapping(value = "findNativeByGroupIdAndSubgroupId/{groupId}/{subgroupId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<ColumnConfigurationDTO>> findNativeByGroupIdAndSubgroupId(@PathVariable String groupId
    		,@PathVariable String subgroupId){
		return new ResponseEntity<>( adminService.findNativeByGroupIdAndSubgroupId(groupId,subgroupId), HttpStatus.OK);
    }
	@PostMapping(value = "updatecolumnconfigurationbyid")
	public ColumnConfiguration UpdateColumnConfigurationById(@RequestBody ColumnConfiguration columnConfiguration) {
	return adminService.UpdateColumnConfigurationById(columnConfiguration);
	}
	@GetMapping(value = "findfuntionconfiguration/{configId}/{functionId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<FunctionConfiguration> findFunctionConfigurationByConfigIdAndFonctionId(@PathVariable String configId
    		,@PathVariable String functionId){
		return new ResponseEntity<>(functionConfigurationService.findFunctionConfigurationByConfigIdAndFonctionId(configId,functionId), HttpStatus.OK);
    }
	@PostMapping(value = "updatefunctionconfiguration")
	public FunctionConfiguration UpdateFunctionConfiguration(@RequestBody FunctionConfigurationDTO functionConfigurationDTO) {
	return functionConfigurationService.UpdateFunctionConfiguration(functionConfigurationDTO);
	}
	@PostMapping(value = "saverobots")
	public RobotsConfiguration SaveRobots(@RequestBody RobotsConfigDTO RobotsConfigDTO) {
	return adminService.SaveRobots(RobotsConfigDTO);
	}
	
	@PostMapping(value = "updaterobotsbyconfigid")
	public boolean UpdateRobotsByConfigId(@RequestBody  List<RobotsConfigDTO> robotsConfigDTOLst) {
		adminService.UpdateRobotsByConfigId(robotsConfigDTOLst);
	    return true;
	//return adminService.UpdateRobotsByConfigId(RobotsConfigDTO);
	}
	@PostMapping(value = "updaterobotsfunction")
	public boolean updateRobotsFunction(@RequestBody List<RobotsConfigDTO> robotsConfigDTOLst) {
		robotsFunctionService.updateRobotsFunction(robotsConfigDTOLst);
	    return true;
	}
	@GetMapping(value = "getrobotsbyconfigid/{configId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<RobotsConfiguration>>  getRobotsByConfigId(@PathVariable String configId){
		return new ResponseEntity<>(adminService.getRobotsConfigurationByConfigId(configId), HttpStatus.OK);
    }
	@GetMapping(value = "getrobotsbycolumnconfigid/{configId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<RobotsConfiguration>>  getRobotsByColumnConfigId(@PathVariable String configId){
		return new ResponseEntity<>(adminService.getRobotsByColumnConfigId(configId), HttpStatus.OK);
    }
	@GetMapping(value = "getrobotsfunctionbycolumnconfigidandfunctionid/{configId}/{functionId}", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<RobotsFunctionConfiguration>>  getColumnRobotsFunctionByConfigIdAndFunctionId(@PathVariable String configId,@PathVariable String functionId){
		return new ResponseEntity<>(robotsFunctionService.getColumnRobotsFunctionByConfigIdAndFunctionId(configId,functionId), HttpStatus.OK);
    }
	@GetMapping(value = "getcalendardata")
	public ResponseEntity<List<CalendarDates>>  getCalendarDates() {
		return new ResponseEntity<>( adminService.getVacations(), HttpStatus.OK);
	}
	@GetMapping(value = "getnewsorder/{assetId}")
	public ResponseEntity<List<NewsOrder>>  getActiveNewsOrder(@PathVariable("assetId") String assetId) {
		return new ResponseEntity<>( adminService.getActiveNewsOrder(assetId), HttpStatus.OK);
	}
	
	@PostMapping(value = "updatenewsorder")
	public boolean UpdateNewsOrder(@RequestBody NewsOrderDTO newsOrderDTOLst) {
         adminService.UpdateNewsOrder(newsOrderDTOLst);
		return true;
	}
	
	@GetMapping(value = "getnews")
	public ResponseEntity<List<News>>  getNews() {
		return new ResponseEntity<>( adminService.getNews(), HttpStatus.OK);
	}
	@GetMapping(value = "gettotalpages/{pageNo}/{pageSize}/{assetId}/{isbold}")
	public ResponseEntity<Integer>  getTotalPages(@PathVariable("pageNo") String pageNo,@PathVariable("pageSize") String pageSize,@PathVariable("assetId") String assetId,@PathVariable String isbold ) {
		return new ResponseEntity<>( adminService.getPages(pageNo,pageSize,assetId,isbold), HttpStatus.OK);
	}
	@GetMapping(value = "findnewsformateddate/{pageNo}/{pageSize}")
	public ResponseEntity<List<AllNewsView>>  findByIsPublishedFormatedDate(@PathVariable("pageNo") String pageNo,@PathVariable("pageSize") String pageSize) {
		return new ResponseEntity<>( adminService.findByIsPublishedFormatedDate(pageNo,pageSize), HttpStatus.OK);
	}
	@GetMapping(value = "findnewsformateddate/{assetId}")
	public ResponseEntity<List<AllNewsView>>  findByIsPublishedFormatedDate(@PathVariable("assetId") String assetId) {
		return new ResponseEntity<>( adminService.findByIsPublishedFormatedDate(assetId), HttpStatus.OK);
	}
	@GetMapping(value = "findnewsformateddate/{assetId}/{pageNo}/{pageSize}")
	public ResponseEntity<List<AllNewsView>>  findByIsPublishedFormatedDate(@PathVariable("assetId") String assetId,@PathVariable("pageNo") String pageNo,@PathVariable("pageSize") String pageSize) {
		return new ResponseEntity<>( adminService.findByIsPublishedFormatedDate(assetId,pageNo,pageSize), HttpStatus.OK);
	}
	@GetMapping(value = "getnewsbyimportance/{isbold}/{assetId}/{pageNo}/{pageSize}", produces = "application/json;charset=UTF-8")
	public ResponseEntity<List<AllNewsView>>  getNewsByImportance(@PathVariable String isbold,@PathVariable String assetId,@PathVariable("pageNo") String pageNo,@PathVariable("pageSize") String pageSize) {
		return new ResponseEntity<>( adminService.getNewsByImportance(isbold,assetId, pageNo, pageSize), HttpStatus.OK);
	}
	@GetMapping(value = "findnewsbygroupidandsubgroupid/{groupId}/{subGroupId}/{pageNo}/{pageSize}", produces = "application/json;charset=UTF-8")
	public ResponseEntity<Page<AllNewsView>>  findNewsByGroupIdAndSubgroupId(@PathVariable String groupId
    		,@PathVariable String subGroupId,@PathVariable("pageNo") String pageNo, @PathVariable("pageSize") String pageSize) {
		return new ResponseEntity<>( adminService.findNewsByGroupIdAndSubgroupId(groupId,subGroupId, pageNo, pageSize), HttpStatus.OK);
	}
	@GetMapping(value = "gettotalpagesbygroupidandsubgroupid/{groupId}/{subGroupId}/{pageNo}/{pageSize}", produces = "application/json;charset=UTF-8")
	public ResponseEntity<Integer>  getTotalPagesForAllNewsByGroupIdAndSubgroupId(@PathVariable String groupId
    		,@PathVariable String subGroupId,@PathVariable("pageNo") String pageNo, @PathVariable("pageSize") String pageSize) {
		return new ResponseEntity<>( adminService.findNewsByGroupIdAndSubgroupId(groupId,subGroupId, pageNo, pageSize).getTotalPages(), HttpStatus.OK);
	}
	@GetMapping(value = "findallnewsbygroupidandsubgroupid/{subGroupIdDescription}/{pageNo}/{pageSize}", produces = "application/json;charset=UTF-8")
	public ResponseEntity<Page<AllNewsView>>  findAllNewsByGroupIdAndSubgroupId(@PathVariable String subGroupIdDescription,@PathVariable("pageNo") String pageNo,@PathVariable("pageSize") String pageSize) {
		return new ResponseEntity<>( adminService.findAllNewsByGroupIdAndSubgroupId(subGroupIdDescription, pageNo, pageSize), HttpStatus.OK);
	}
	@GetMapping(value = "gettotalpagesforallnewsbygroupidandsubgroupid/{subGroupIdDescription}/{pageNo}/{pageSize}", produces = "application/json;charset=UTF-8")
	public ResponseEntity<Integer>  getTotalPagesForAllNewsByGroupTdAndSubGroupId(@PathVariable String subGroupIdDescription,@PathVariable("pageNo") String pageNo,@PathVariable("pageSize") String pageSize) {
		return new ResponseEntity<>( adminService.findAllNewsByGroupIdAndSubgroupId(subGroupIdDescription, pageNo, pageSize).getTotalPages(), HttpStatus.OK);
	}
	@GetMapping(value = "getunpublishednews/{assetId}/{pageNo}/{pageSize}")
	public ResponseEntity<Page<AllNewsView>>  getUnPublishedNews(@PathVariable("assetId") String assetId,@PathVariable("pageNo") String pageNo,@PathVariable("pageSize") String pageSize) {
		return new ResponseEntity<>( adminService.getAllNews(assetId,pageNo,pageSize), HttpStatus.OK);
	}
	@GetMapping(value = "getfilterednews")
	public ResponseEntity<Page<AllNewsView>>  getfilteredNews(  @RequestParam(name = "assetId", required = false) String assetId,
	        												    @RequestParam(name = "robots", required = false) String robots,
	        												    @RequestParam(name = "generationDate", required = false) String generationDate,
	        												    @RequestParam(name = "template", required = false) String template,
	        												    @RequestParam(name = "pageNo", required = false) String pageNo,
	        												    @RequestParam(name = "pageSize", required = false) String pageSize) {
		return new ResponseEntity<>( adminService.getfilteredNews(assetId, robots, generationDate, template, pageNo,  pageSize), HttpStatus.OK);
	}
	
	@DeleteMapping(value = "deletenewsbyid/{id}/{isFunctionNews}")
	public  ResponseEntity<Object> deleteNewsById(@PathVariable("id") long id,@PathVariable("isFunctionNews") String isFunctionNews) {
		adminService.deleteNews(id,isFunctionNews);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@PostMapping(value = "updatenewsbyid")
	public News UpdateNewsById(@RequestBody News news) {
		return adminService.updateNewsById(news);
	}
	@PostMapping(value = "savenews")
	public News saveNews(@RequestBody News news) {
		return adminService.saveNews(news);
	}
}
