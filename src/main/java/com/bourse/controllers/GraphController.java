package com.bourse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.TechnicalAnalysisGraphHistory;
import com.bourse.dto.TechnicalAnalysisGraphHistoryDTO;
import com.bourse.service.AdminService;
import com.bourse.service.TechnicalAnalysisGraphHistoryService;

@RestController
@RequestMapping(value = "graph")
public class GraphController {
	
	@Autowired
	private final TechnicalAnalysisGraphHistoryService technicalAnalysisGraphHistoryService;
	@Autowired
	private final AdminService adminService;
	
	public GraphController(TechnicalAnalysisGraphHistoryService technicalAnalysisGraphHistoryService,AdminService adminService)
	{
		this.technicalAnalysisGraphHistoryService=technicalAnalysisGraphHistoryService;
		this.adminService = adminService;
	}
	@PostMapping(value = "save-history")
    public TechnicalAnalysisGraphHistory saveGraphHistory(@RequestBody TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication){
	  return  technicalAnalysisGraphHistoryService.SaveGraphHistory(graphHistorydto,authentication);
    }
	@PostMapping(value = "save-visible-channel")
    public TechnicalAnalysisGraphHistory saveVisibiltyOfChannel(@RequestBody TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication){
	  return  technicalAnalysisGraphHistoryService.saveVisibiltyOfChannel(graphHistorydto,authentication);
    }
	@PostMapping(value = "save-visible-trendline")
    public TechnicalAnalysisGraphHistory saveVisibiltyOfTrendline(@RequestBody TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication){
	  return  technicalAnalysisGraphHistoryService.saveVisibiltyOfTrendline(graphHistorydto,authentication);
    }
	@GetMapping(value = "find-graph-history-by-userid")
	public  List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserId( Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findGraphHistoryByUserId(authentication);
	} 
	@DeleteMapping(value = "deletetrendline/{id}")
	public ResponseEntity<Object>  deleteByReferDate(@PathVariable("id") String id) {
		technicalAnalysisGraphHistoryService.deleteTrendlineById(id);
	return new ResponseEntity<>(HttpStatus.OK);
	}
	 @GetMapping(value ="configurations")
    public List<ColumnConfiguration> getColumnConfigurations(@RequestParam("condition") String condition) {
		 return adminService.getRelatedColumn(condition);
    }
	@DeleteMapping(value = "delete-graph-history/{graphid}")
		public ResponseEntity<Object>  deleteGraphHistory(@PathVariable("graphid") String graphid ,  Authentication authentication) {
			technicalAnalysisGraphHistoryService.deleteGraphHistoryByGraphId(graphid, authentication);
		return new ResponseEntity<>(HttpStatus.OK);
		}
}
