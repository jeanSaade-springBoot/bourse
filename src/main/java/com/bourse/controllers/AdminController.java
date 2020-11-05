package com.bourse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.AssetClass;
import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.Groups;
import com.bourse.domain.SubGroup;
import com.bourse.service.AdminService;
import com.bourse.service.AssetClassService;
import com.bourse.service.GroupsService;
import com.bourse.service.SubGroupService;
@RestController
@RequestMapping(value = "admin")
public class AdminController {

	@Autowired
	private final AssetClassService assetClassService;
	@Autowired
	private final GroupsService groupsService;
	@Autowired
	private final SubGroupService subGroupService;
	@Autowired
	private final AdminService adminService;
	
	public AdminController(AssetClassService assetClassService,
						   GroupsService groupsService,
						   SubGroupService subGroupService,
						   AdminService adminService)
	{
		this.assetClassService   = assetClassService;
		this.groupsService   = groupsService;
		this.subGroupService   = subGroupService;
		this.adminService = adminService;
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
	
	
	
}
