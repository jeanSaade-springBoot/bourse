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
import com.bourse.domain.graph.TechnicalAnalysisGraphHistory;
import com.bourse.domain.graph.TechnicalAnalysisRelevantHistory;
import com.bourse.domain.graph.TechnicalAnalysisRetracementHistory;
import com.bourse.dto.graph.TechnicalAnalysisGraphHistoryDTO;
import com.bourse.dto.graph.TechnicalAnalysisRelevantHistoryDTO;
import com.bourse.dto.graph.TechnicalAnalysisRetracementHistoryDTO;
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
	@PostMapping(value = "update-trendline-history")
    public boolean updateGraphHistory(@RequestBody  List<TechnicalAnalysisGraphHistoryDTO> graphHistorydto, Authentication authentication){
	  return  technicalAnalysisGraphHistoryService.SaveGraphListHistory(graphHistorydto,authentication);
    }
	@PostMapping(value = "save-retracement-history")
    public ResponseEntity<List<TechnicalAnalysisRetracementHistory>> saveRetracementHistory(@RequestBody  List<TechnicalAnalysisRetracementHistoryDTO> graphRetracementdto, Authentication authentication){
	  return  new ResponseEntity<>( technicalAnalysisGraphHistoryService.SaveRetracementListHistory(graphRetracementdto,authentication), HttpStatus.OK);
    }
	@PostMapping(value = "save-relevant-history")
    public ResponseEntity<List<TechnicalAnalysisRelevantHistory>> saveRelevantHistory(@RequestBody  List<TechnicalAnalysisRelevantHistoryDTO> graphRelevantdto, Authentication authentication){
	  return  new ResponseEntity<>( technicalAnalysisGraphHistoryService.SaveRelevantListHistory(graphRelevantdto,authentication), HttpStatus.OK);
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
	@GetMapping(value = "find-retracement-history-by-userid")
	public  List<TechnicalAnalysisRetracementHistory> findRetracementHistoryByUserId( Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findRetracementHistoryByUserId(authentication);
	} 
	@GetMapping(value = "find-relevant-history-by-userid")
	public  List<TechnicalAnalysisRelevantHistory> findRelevantHistoryByUserId( Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findRelevantHistoryByUserId(authentication);
	} 
	@DeleteMapping(value = "deletetrendline/{id}")
	public ResponseEntity<Object>  deleteByReferDate(@PathVariable("id") String id) {
		technicalAnalysisGraphHistoryService.deleteTrendlineById(id);
	return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping(value = "delete-retracement-by-id/{id}")
	public ResponseEntity<Object>  deleteRetracementById(@PathVariable("id") String id) {
		technicalAnalysisGraphHistoryService.deleteRetracementById(id);
	return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping(value = "delete-relevant-by-id/{id}")
	public ResponseEntity<Object>  deleteRelevantById(@PathVariable("id") String id) {
		technicalAnalysisGraphHistoryService.deleteRelevantById(id);
	return new ResponseEntity<>(HttpStatus.OK);
	}
	 @GetMapping(value ="configurations")
    public List<ColumnConfiguration> getColumnConfigurations(@RequestParam("condition") String condition) {
		 return adminService.getRelatedColumn(condition);
    }
	@DeleteMapping(value = "delete-graph-history/{graphid}")
		public ResponseEntity<Object>  deleteGraphHistory(@PathVariable("graphid") String graphid ,  Authentication authentication) {
				technicalAnalysisGraphHistoryService.deleteGraphHistoryByGraphId(graphid, authentication);
				technicalAnalysisGraphHistoryService.deleteRetracementHistoryByGraphId(graphid, authentication);
			return new ResponseEntity<>(HttpStatus.OK);
		}
}
