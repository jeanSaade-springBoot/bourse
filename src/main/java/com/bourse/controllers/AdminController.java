package com.bourse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.AssetClass;
import com.bourse.domain.Groups;
import com.bourse.domain.SubGroup;
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
	
	public AdminController(AssetClassService assetClassService,
						   GroupsService groupsService,
						   SubGroupService subGroupService)
	{
		this.assetClassService   = assetClassService;
		this.groupsService   = groupsService;
		this.subGroupService   = subGroupService;
	}
	
	@GetMapping(value = "getassetclass", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<AssetClass>>  getAssetClass(){
		return new ResponseEntity<>(assetClassService.getAllAssetClass(), HttpStatus.OK);
    }
	@GetMapping(value = "getgroups", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<Groups>>  getGroups(){
		return new ResponseEntity<>(groupsService.getAllGroups(), HttpStatus.OK);
    }
	@GetMapping(value = "getsubgroups", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<SubGroup>>  getSubGroups(){
		return new ResponseEntity<>(subGroupService.getAllSubGroups(), HttpStatus.OK);
    }
	
	
	
}
