package com.bourse.controllers;

import java.util.List;
import java.util.Map;

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
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.graph.TechnicalAnalysisGraphHistoryDTO;
import com.bourse.dto.graph.TechnicalAnalysisRelevantHistoryDTO;
import com.bourse.dto.graph.TechnicalAnalysisRetracementHistoryDTO;
import com.bourse.service.AdminService;
import com.bourse.service.GraphService;
import com.bourse.service.TechnicalAnalysisGraphHistoryService;

@RestController
@RequestMapping(value = "graph")
public class GraphController {
	
	@Autowired
	private final TechnicalAnalysisGraphHistoryService technicalAnalysisGraphHistoryService;
	@Autowired
	private final GraphService graphService;
	@Autowired
	private final AdminService adminService;
	
	public GraphController(TechnicalAnalysisGraphHistoryService technicalAnalysisGraphHistoryService,GraphService graphService,AdminService adminService)
	{
		this.technicalAnalysisGraphHistoryService=technicalAnalysisGraphHistoryService;
		this.graphService = graphService;
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
	@GetMapping(value = "find-graph-history-by-userid-screen-name/{screenName}")
	public  List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserIdAndScreenName(@PathVariable("screenName") String screenName, Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findGraphHistoryByUserIdAndScreenName(screenName,authentication);
	} 
	@GetMapping(value = "find-retracement-history-by-userid-screen-name/{screenName}")
	public  List<TechnicalAnalysisRetracementHistory> findRetracementHistoryByUserId( @PathVariable("screenName") String screenName,  Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findRetracementHistoryByUserIdAndScreenName(screenName,authentication);
	} 
	@GetMapping(value = "find-relevant-history-by-userid-screen-name/{screenName}")
	public  List<TechnicalAnalysisRelevantHistory> findRelevantHistoryByUserId(@PathVariable("screenName") String screenName,  Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findRelevantHistoryByUserIdAndScreenName(screenName,authentication);
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
				technicalAnalysisGraphHistoryService.deleteRelevantHistoryByGraphId(graphid, authentication);
			return new ResponseEntity<>(HttpStatus.OK);
		}
	@PostMapping(value = "getperformancegraphdata")
	 public ResponseEntity<List<Map<String, List<?>>>> getGraphBarData(@RequestBody List<GraphRequestDTO> graphReqDTO) {

		List<Map<String, List<?>>> graphData = graphService.getPerformanceGraphBarDataResults(graphReqDTO);
       return new ResponseEntity<>(graphData, HttpStatus.OK);
   }
}
