package com.bourse.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
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
import com.bourse.domain.graph.TechnicalAnalysisTrendFollowingHistory;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.graph.TechnicalAnalysisGraphHistoryDTO;
import com.bourse.dto.graph.TechnicalAnalysisRelevantHistoryDTO;
import com.bourse.dto.graph.TechnicalAnalysisRetracementHistoryDTO;
import com.bourse.service.AdminService;
import com.bourse.service.GraphService;
import com.bourse.service.TechnicalAnalysisGraphHistoryService;

@RestController
@RequestMapping(value = "graph")
public class GraphController {
	
    private final SimpMessagingTemplate messagingTemplate;

	@Autowired
	private final TechnicalAnalysisGraphHistoryService technicalAnalysisGraphHistoryService;
	@Autowired
	private final GraphService graphService;
	@Autowired
	private final AdminService adminService;
	
	private String className = "GraphController";
	
	public GraphController(SimpMessagingTemplate template, TechnicalAnalysisGraphHistoryService technicalAnalysisGraphHistoryService,GraphService graphService,AdminService adminService)
	{
		this.technicalAnalysisGraphHistoryService=technicalAnalysisGraphHistoryService;
		this.graphService = graphService;
		this.adminService = adminService;
		this.messagingTemplate = template;
	}
	@PostMapping(value = "save-history")
    public TechnicalAnalysisGraphHistory saveGraphHistory(@RequestBody TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication){
	
		System.out.println(" ----------  save-trend-line-history");
		TechnicalAnalysisGraphHistory saved = technicalAnalysisGraphHistoryService.SaveGraphHistory(graphHistorydto,authentication);

        String groupId = saved.getGraphId().toLowerCase().split("-")[1];  
        
        messagingTemplate.convertAndSend("/all/chart/trendline/" + groupId,  authentication.getName());

        return saved;
        
    }
	@PostMapping(value = "update-trendline-history")
	public ResponseEntity<Boolean> updateGraphHistory(
	        @RequestBody List<TechnicalAnalysisGraphHistoryDTO> graphHistorydto,
	        Authentication authentication) {
		System.out.println(" ----------  update-trendline-history");

	    boolean success = technicalAnalysisGraphHistoryService.SaveGraphListHistory(graphHistorydto, authentication);

	    if (success && graphHistorydto != null && !graphHistorydto.isEmpty()) {
	        String groupId = graphHistorydto.get(0).getGraphId().toLowerCase().split("-")[1];
	        messagingTemplate.convertAndSend("/all/chart/trendline/" + groupId,  authentication.getName());
	    }

	    return ResponseEntity.ok(success);
	}
	@PostMapping(value = "save-retracement-history")
	public ResponseEntity<List<TechnicalAnalysisRetracementHistory>> saveRetracementHistory(
	        @RequestBody List<TechnicalAnalysisRetracementHistoryDTO> graphRetracementdto,
	        Authentication authentication) {

	    System.out.println(" ----------  save-retracement-history");

	    List<TechnicalAnalysisRetracementHistory> saved =
	            technicalAnalysisGraphHistoryService.SaveRetracementListHistory(graphRetracementdto, authentication);

	    if (saved != null && !saved.isEmpty()) {
	        String groupId = saved.get(0).getGraphId().toLowerCase().split("-")[1];
	        messagingTemplate.convertAndSend("/all/chart/retracement/" + groupId,  authentication.getName());
	    }

	    return new ResponseEntity<>(saved, HttpStatus.OK);
	}
	@PostMapping(value = "save-relevant-history")
	public ResponseEntity<List<TechnicalAnalysisRelevantHistory>> saveRelevantHistory(
	        @RequestBody List<TechnicalAnalysisRelevantHistoryDTO> graphRelevantdto,
	        Authentication authentication) {

	    List<TechnicalAnalysisRelevantHistory> saved =
	            technicalAnalysisGraphHistoryService.SaveRelevantListHistory(graphRelevantdto, authentication);

	    if (saved != null && !saved.isEmpty()) {
	        String groupId = saved.get(0).getGraphId().toLowerCase().split("-")[1];
	        messagingTemplate.convertAndSend("/all/chart/relevant/" + groupId,  authentication.getName());
	    }

	    return ResponseEntity.ok(saved);
	}
	@PostMapping(value = "save-trend-following-history")
    public ResponseEntity<TechnicalAnalysisTrendFollowingHistory> saveTrendFollowingHistory(@RequestBody  TechnicalAnalysisTrendFollowingHistory history, Authentication authentication){
		
		System.out.println(" ----------  save-trend-following-history");
        TechnicalAnalysisTrendFollowingHistory saved = technicalAnalysisGraphHistoryService
            .saveTrendFollowingHistory(history, authentication);

        // Broadcast to others watching this crypto (e.g., "btc", "eth")
        String groupId = saved.getGroupId().toLowerCase();  // Assuming you have this field
        messagingTemplate.convertAndSend("/all/chart/technical/" + groupId, authentication.getName());

        return new ResponseEntity<>(saved, HttpStatus.OK);
	}
	@PostMapping(value = "save-visible-channel")
    public TechnicalAnalysisGraphHistory saveVisibiltyOfChannel(@RequestBody TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication){
	    System.out.println(" ----------  save-visible-channel");
		TechnicalAnalysisGraphHistory saved = technicalAnalysisGraphHistoryService.saveVisibiltyOfChannel(graphHistorydto,authentication);

      String groupId = saved.getGraphId().toLowerCase().split("-")[1];  
      
      messagingTemplate.convertAndSend("/all/chart/trendline/" + groupId, authentication.getName());

      return saved;
	}
	@PostMapping(value = "save-visible-trendline")
    public TechnicalAnalysisGraphHistory saveVisibiltyOfTrendline(@RequestBody TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication){
	  
		System.out.println(" ----------  save-visible-history");
		TechnicalAnalysisGraphHistory saved = technicalAnalysisGraphHistoryService.saveVisibiltyOfTrendline(graphHistorydto,authentication);

        String groupId = saved.getGraphId().toLowerCase().split("-")[1];  
        
        messagingTemplate.convertAndSend("/all/chart/trendline/" + groupId, authentication.getName());

        return saved;
    }
	@GetMapping(value = "find-graph-history-by-userid-screen-name/{screenName}")
	public  List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserIdAndScreenName(@PathVariable("screenName") String screenName, Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findGraphHistoryByUserIdAndScreenName(screenName,authentication);
	} 
	@GetMapping(value = "find-trendline-history-by-userid-screen-name/{screenName}/{isShared}")
	public  List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserIdAndScreenNameAndIsShared(@PathVariable("screenName") String screenName,@PathVariable("isShared") Boolean isShared, Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findGraphHistoryByUserIdAndScreenNameAndIsShared(screenName,isShared,authentication);
	} 
	@GetMapping(value = "find-retracement-history-by-userid-screen-name/{screenName}")
	public  List<TechnicalAnalysisRetracementHistory> findRetracementHistoryByUserId( @PathVariable("screenName") String screenName,  Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findRetracementHistoryByUserIdAndScreenName(screenName,authentication);
	} 
	@GetMapping(value = "find-retracement-history-by-userid-screen-name/{screenName}/{isShared}")
	public  List<TechnicalAnalysisRetracementHistory> findRetracementHistoryByUserId( @PathVariable("screenName") String screenName, @PathVariable("isShared") Boolean isShared, Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findRetracementHistoryByUserIdAndScreenNameAndIsShared(screenName,authentication,isShared);
	} 
	@GetMapping(value = "find-relevant-history-by-userid-screen-name/{screenName}")
	public  List<TechnicalAnalysisRelevantHistory> findRelevantHistoryByUserId(@PathVariable("screenName") String screenName,  Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findRelevantHistoryByUserIdAndScreenName(screenName,authentication);
	} 
	@GetMapping(value = "find-relevant-history-by-userid-screen-name/{screenName}/{isShared}")
	public  List<TechnicalAnalysisRelevantHistory> findRelevantHistoryByUserIdAndScreenNameAndIsShared(@PathVariable("screenName") String screenName,@PathVariable("isShared") Boolean isShared, Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findRelevantHistoryByUserIdAndScreenNameAndIsShared(screenName,authentication,isShared);
	} 
	
	@GetMapping(value = "find-trend-following-history-by-userid-groupId/{groupId}/{isShared}")
	public  List<TechnicalAnalysisTrendFollowingHistory> findTrendFollowingHistoryByUserIdAndScreenName(@PathVariable("groupId") String groupId,@PathVariable("isShared") Boolean isShared , Authentication authentication) {
	return technicalAnalysisGraphHistoryService.findGraphHistoryByGroupIdAndUserNameAndIsShared(groupId,isShared, authentication);
	} 
	@DeleteMapping(value = "deletetrendline/{id}")
	public ResponseEntity<Object>  deleteByReferDate(@PathVariable("id") String id) {
		technicalAnalysisGraphHistoryService.deleteTrendlineById(id);
	return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping(value = "deletetrendline/{id}/{groupId}")
	public ResponseEntity<Object>  deleteByReferDate(@PathVariable("id") String id, @PathVariable("groupId") String groupId , Authentication authentication) {
		technicalAnalysisGraphHistoryService.deleteTrendlineById(id);
	    messagingTemplate.convertAndSend("/all/chart/trendline/" + groupId, authentication.getName());

	return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping(value = "delete-retracement-by-id/{id}")
	public ResponseEntity<Object>  deleteRetracementById(@PathVariable("id") String id) {
		technicalAnalysisGraphHistoryService.deleteRetracementById(id);
	return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping(value = "delete-retracement-by-id/{id}/{groupId}")
	public ResponseEntity<Object>  deleteRetracementById(@PathVariable("id") String id, @PathVariable("groupId") String groupId , Authentication authentication) {
		technicalAnalysisGraphHistoryService.deleteRetracementById(id);
        messagingTemplate.convertAndSend("/all/chart/retracement/" + groupId,  authentication.getName());

	return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping(value = "delete-relevant-by-id/{id}")
	public ResponseEntity<Object>  deleteRelevantById(@PathVariable("id") String id) {
		technicalAnalysisGraphHistoryService.deleteRelevantById(id);
	return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping(value = "delete-relevant-by-id/{id}/{groupId}")
	public ResponseEntity<Object>  deleteRelevantById(@PathVariable("id") String id, @PathVariable("groupId") String groupId , Authentication authentication) {
		technicalAnalysisGraphHistoryService.deleteRelevantById(id);
        messagingTemplate.convertAndSend("/all/chart/relevant/" + groupId,  authentication.getName());

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
