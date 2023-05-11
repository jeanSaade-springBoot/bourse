package com.bourse.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bourse.domain.AllNewsView;
import com.bourse.domain.DataEntryFilterHistory;
import com.bourse.domain.GraphHistory;
import com.bourse.domain.News;
import com.bourse.domain.SkewsData;
import com.bourse.domain.SovereignData;
import com.bourse.dto.AuditProcedureDTO;
import com.bourse.dto.CrossAuditProcedureDTO;
import com.bourse.dto.CurveSoveriegnDTO;
import com.bourse.dto.DataDTO;
import com.bourse.dto.DataFunctionReqDTO;
import com.bourse.dto.DataFunctionRespDTO;
import com.bourse.dto.DataGraphDTO;
import com.bourse.dto.GraphHistoryDTO;
import com.bourse.dto.GraphNewsDTO;
import com.bourse.dto.GraphReqDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseColConfigListDTO;
import com.bourse.dto.SearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.service.DataEntryFilterHistoryService;
import com.bourse.service.DataFunctionService;
import com.bourse.service.GraphHistoryService;
import com.bourse.service.GraphNewsService;
import com.bourse.service.SkewsService;
import com.bourse.service.SovereignYieldsService;
import com.bourse.util.SovereignUtil;
@RestController
@RequestMapping(value = "bourse")
public class BourseController {

	@Autowired
	private final SovereignYieldsService sovereignYieldsService;
	@Autowired
	private final GraphHistoryService graphHistoryService;
	@Autowired
	private final DataEntryFilterHistoryService dataEntryFilterHistoryService;
	@Autowired
	private final SkewsService skewsService;
	@Autowired
	private final GraphNewsService graphNewsService;
	@Autowired
	private final DataFunctionService dataFunctionService;
	
	public BourseController(
			SovereignYieldsService sovereignYieldsService,
			GraphHistoryService graphHistoryService,
			DataEntryFilterHistoryService dataEntryFilterHistoryService,
			SkewsService skewsService,
			GraphNewsService graphNewsService,
			DataFunctionService dataFunctionService)
	{
		this.sovereignYieldsService   = sovereignYieldsService;
		this.graphHistoryService      = graphHistoryService;
		this.dataEntryFilterHistoryService = dataEntryFilterHistoryService;
		this.skewsService             = skewsService;
		this.graphNewsService         = graphNewsService;
		this.dataFunctionService         = dataFunctionService;
	}
	@RequestMapping( value =  "/pageunderconstruction")
    public ModelAndView underConstructionPage(ModelMap model)
    {
		return new ModelAndView("html/pageUnderConstruction");
    }
	@PreAuthorize("hasAuthority('HOME_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/home")
	 public ModelAndView mainPage(ModelMap model)
    {
		return new ModelAndView("html/index");
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/sovereignyields")
    public ModelAndView dataEntryPage(ModelMap model)
    {
		return new ModelAndView("html/sovereignyields");
    }
	@RequestMapping( value =  "/skews")
    public ModelAndView skewsDataEntrePage(ModelMap model)
    {
		return new ModelAndView("html/skews");
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_METALS') and principal.tacAccepted == true")
	@RequestMapping( value =  "/metals")
    public ModelAndView dataEntryPreciousMetalsPage(@RequestParam("commodity") String commodity,ModelMap model)
    {   model.addAttribute("commodity", Integer.valueOf(commodity));
		return new ModelAndView("html/metals");
    }
	@RequestMapping( value =  "/returnfunction")
    public ModelAndView returnFunctionPage(ModelMap model)
    {
		return new ModelAndView("html/returnFunction");
    }
	@PreAuthorize("hasAuthority('ANY2_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/any2")
    public ModelAndView anyTwoPage(ModelMap model)
    {
		return new ModelAndView("html/any2");
    }
	@PreAuthorize("hasAuthority('ANY2_METALS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/any2metals")
    public ModelAndView anyTwoMetalsPage(ModelMap model)
    {
		return new ModelAndView("html/any2metals");
    }
	@PreAuthorize("hasAuthority('PRECIOUS_METALS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/precious")
    public ModelAndView preciousMetalsPage(ModelMap model)
    {
		return new ModelAndView("html/precious");
    }
	@PreAuthorize("hasAuthority('BASE_METALS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/base")
    public ModelAndView baseMetalsPage(ModelMap model)
    {
		return new ModelAndView("html/base");
    }
	@PreAuthorize("hasAuthority('FOODSTUFF_COMMODITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/foodstuff")
    public ModelAndView foodStuffCommodityPage(ModelMap model)
    {
		return new ModelAndView("html/foodstuff");
    }
	@PreAuthorize("hasAuthority('ENERGY_COMMODITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/energy")
    public ModelAndView energyCommodityPage(ModelMap model)
    {
		return new ModelAndView("html/energy");
    }
	@PreAuthorize("hasAuthority('TRANSPORTATION_COMMODITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/transportation")
    public ModelAndView transportationCommodityPage(ModelMap model)
    {
		return new ModelAndView("html/transportation");
    }
	@PreAuthorize("hasAuthority('SOVEREIGN_YIELDS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "sovereignyieldsgraph")
    public ModelAndView sovereignYieldsGraphPage(ModelMap model)
    {
		return new ModelAndView("html/sovereignYieldsGraph");
    }
	@PreAuthorize("hasAuthority('YIELD_CURVES_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "sovereigncurvesgraph")
    public ModelAndView sovereignCurvesGraphPage(ModelMap model)
    {
		return new ModelAndView("html/sovereignCurvesGraph");
    }
	@PreAuthorize("hasAuthority('YIELD_CROSSES_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "sovereigncrossesgraph")
    public ModelAndView sovereignCrossesGraphPage(ModelMap model)
    {
		return new ModelAndView("html/sovereignCrossesGraph");
    }
	@PreAuthorize("hasAuthority('SPREAD_MAKER_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "spreadmakergraph")
    public ModelAndView spreadMakerGraphPage(ModelMap model)
    {
		return new ModelAndView("html/spreadMaker");
    }
	@PreAuthorize("hasAuthority('SETTINGS_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "settings")
    public ModelAndView settingsPage(ModelMap model)
    {
		return new ModelAndView("html/settings");
    }
	@PreAuthorize("hasAuthority('ROBOT_NEWS_REORDER_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "robotnewsreorder")
    public ModelAndView robotNewsReorderPage(ModelMap model)
    {
		return new ModelAndView("html/robotNewsReorder");
    }
	@RequestMapping( value =  "holidaycalendar")
    public ModelAndView holidayCalendarPage(ModelMap model)
    {
		return new ModelAndView("html/holidayCalendar");
    }
	@RequestMapping( value =  "helpdescription")
    public ModelAndView helpDescriptionPage(ModelMap model)
    {
		return new ModelAndView("html/helpDescription");
    }
	@PreAuthorize("hasAuthority('VIEW_ALL_NEWS') and principal.tacAccepted == true")
	@RequestMapping( value =  "allnews")
    public ModelAndView allNewsPage(ModelMap model)
    {
		return new ModelAndView("html/allNews");
    }
	@RequestMapping( value =  "termsandconditions")
    public ModelAndView termsAndConditions(ModelMap model)
    {
		return new ModelAndView("html/termsAndConditions");
    }
	@PreAuthorize("hasAuthority('NEWS_MANAGEMENT_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/newsmanagement")
    public ModelAndView newsManagement(ModelMap model)
    {
		return new ModelAndView("html/newsManagement");
    }
	@PreAuthorize("hasAuthority('DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/datafunctiondisplay")
    public ModelAndView dataFunctionDisplay(ModelMap model)
    {
		return new ModelAndView("html/dataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('METAL_DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/metaldatafunctiondisplay")
    public ModelAndView metalDataFunctionDisplay(ModelMap model)
    {
		return new ModelAndView("html/metaldataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('USERS_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/users")
    public ModelAndView userPage(ModelMap model)
    {
		return new ModelAndView("html/userPage");
    }
	@PreAuthorize("hasAuthority('ROLE_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/roles")
    public ModelAndView rolePage(ModelMap model)
    {
		return new ModelAndView("html/rolePage");
    }
	@RequestMapping(value =  "/readexcelwritedb")
    public ModelAndView dataReadRxcelWritedb(ModelMap model)
    {
		return new ModelAndView("html/readExcelWriteDB");
    }
	@PostMapping(value = "savedata", produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<List<SovereignData>>  saveData(@RequestBody DataDTO dataDTO){
		

	    String str= dataDTO.getExcelData();
	    List<SovereignData> sovereignDataList = new ArrayList();
	     
	     String[] lines = str.split("\n");
	     List<String> column = new ArrayList<>();
	     for(String st : lines)
	     {
	    	 String[] strColumn =  st.split("\t");
	    	 SovereignData sovereignData = SovereignData.builder().thirteeYrFactor(strColumn[0])
										 				.tenYrFactor(strColumn[1])
										 				.fiveYrFactor(strColumn[2])
										 				.twoYrFactor(strColumn[3])
										 				.referDate(strColumn[4])
										 				.build();
	    	
	    	 sovereignDataList.add(sovereignData);
	     }
	     sovereignYieldsService.SaveSovereignDatas(sovereignDataList);
	     sovereignYieldsService.doCaclulation(sovereignDataList.get(0).getReferDate());
		return new ResponseEntity<>(HttpStatus.OK);
    }
	@PostMapping(value = "savesovereigndata")
    public List<SovereignData>  saveSovereignData(@RequestBody List<SovereignData> sovereignDataList){
	    List<SovereignData> sovereignDataLst= sovereignYieldsService.SaveSovereignDatas(sovereignDataList);
	    sovereignYieldsService.doCaclulation(sovereignDataLst.get(0).getReferDate());
	  return sovereignDataLst;
    }
	

	@PostMapping(value = "saveskewsdata", produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<List<SkewsData>>  saveSkews(@RequestBody DataDTO dataDTO){
		

	    String str= dataDTO.getExcelData();
	    List<SkewsData> skewsDataList = new ArrayList();
	     
	     String[] lines = str.split("\n");
	     List<String> column = new ArrayList<>();
	     for(String st : lines)
	     {
	    	 String[] strColumn =  st.split("\t");
	    	 SkewsData skewsData = SkewsData.builder().referDate(strColumn[0])
	    			                                  .fifteenPercentPFactor(strColumn[1])
										 			  .twentyfivePercentPFactor(strColumn[2])
										 			  .ATMFactor(strColumn[3])
										 			  .fifteenPercentCFactor(strColumn[4])
										 			  .twentyfivePercentCFactor(strColumn[5])
										 			  .build();
	    	
	    	 skewsDataList.add(skewsData);
	     }
	     skewsService.SaveSKewsDatas(skewsDataList);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	@GetMapping(value = "getsovereignyields", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<SovereignData>>  getSovereignYields(){
		return new ResponseEntity<>(sovereignYieldsService.getAllSovereignDatas(), HttpStatus.OK);
    }
	@GetMapping(value = "getlatestsovereignyields", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatestSovereignYields(){
		return new ResponseEntity<>(sovereignYieldsService.findLatestSovereignData(), HttpStatus.OK);
    }
	@PostMapping(value = "savedataentryfilterhistory")
    public DataEntryFilterHistory saveDataEntryFilterHistory(@RequestBody DataEntryFilterHistory dataEntryFilterHistory){
		DataEntryFilterHistory filterHistory = dataEntryFilterHistoryService.SaveDataEntryFilterHistory(dataEntryFilterHistory);
	  return filterHistory;
    }
	@GetMapping(value = "getdataentryfilterhistory/{screenName}",produces = "application/json;charset=UTF-8")
    public DataEntryFilterHistory GetDataEntryFilterHistory(@PathVariable("screenName") String screenName){
		return dataEntryFilterHistoryService.findDataEntryFilterHistoryByScreenName(screenName);
    }
	
	@GetMapping(value = "getskews", produces = "application/json;charset=UTF-8")
    public  ResponseEntity<List<SkewsData>>  getSkews(){
		return new ResponseEntity<>(skewsService.getAllSkewsDatas(), HttpStatus.OK);
    }
	
	@GetMapping(value = "findsovereignById/{id}")
	public SovereignData findSovereignById(@PathVariable("id") long id) {
	return sovereignYieldsService.findSovereignById(id);
	}
	
	@DeleteMapping(value = "deletesovereignbyreferdate/{referDate}")
	public ResponseEntity<Object>  deleteSovereignByReferDate(@PathVariable("referDate") String referDate) {
	 sovereignYieldsService.deleteSovereignByReferDate(referDate);
	 return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	@PostMapping(value = "updatesovereignbyid")
	public SovereignData UpdateSovereignById(@RequestBody SovereignData sovereignData) {
	SovereignData originalObject = sovereignYieldsService.findSovereignById(sovereignData.getId());
	SovereignData SovereignDataToUpdate = SovereignUtil.buildUpdateObject(originalObject,sovereignData);
	return sovereignYieldsService.UpdateSovereignById(SovereignDataToUpdate);
	}
	
	@PostMapping(value = "updatethirteeyrfactorsovereignbysubgroupidanddate")
	public boolean updatethirteeyrfactorSovereignBysubgroupIdAndDate(@RequestBody List<UpdateDataDTO> updateDataDTO) {
	
	for (int i=0; i<updateDataDTO.size(); i++)
	{
		sovereignYieldsService.updatethirteeyrfactorSovereignBysubgroupIdAndDate(updateDataDTO.get(i).getSubgroupId(), updateDataDTO.get(i).getReferdate(), updateDataDTO.get(i).getValue());
	}
	return true;
	}
	
	@PostMapping(value = "updateauditdata")
	public ResponseEntity<Boolean> updateAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
	
		sovereignYieldsService.updateAuditData(updateDataDTOlst);
		sovereignYieldsService.doCaclulation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	
	@GetMapping(value = "checkifcansave/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSave(@PathVariable String referDate) 
	{
	
		boolean checkifcanSave= sovereignYieldsService.CheckIfCanSave(referDate);
		return new ResponseEntity<>(checkifcanSave,HttpStatus.OK);
	}
	
	@DeleteMapping(value = "deletesovereignbyid/{id}")
	public  ResponseEntity deletesovereignbyid(@PathVariable("id") long id) {
		sovereignYieldsService.deleteSovereignById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping(value = "findsovereignbysubgroup/{subgroupId}")
	public ResponseEntity<List<SovereignData>> findSovereignBySubGroup(@PathVariable("subgroupId") long subgroupId) {
	return new ResponseEntity<>(sovereignYieldsService.findSovereignBySubGroup(subgroupId),HttpStatus.OK);
	}
	
	
	@GetMapping(value = "findgraphdatabysubroupidandfactor/{subgroupId}/{factor}")
	public ResponseEntity<List<DataGraphDTO>> findGraphDataForFiveBySubroupId(@PathVariable("subgroupId") long subgroupId,@PathVariable("factor") String factor) {
	return new ResponseEntity<>(sovereignYieldsService.findGraphDataBySubroupIdAndFactorCalculation(subgroupId,factor),HttpStatus.OK);
	}
	
	@GetMapping(value = "findsovereignbyreferdate/{referDate}")
	public ResponseEntity<List<SovereignData>> findSovereignByReferDate(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(sovereignYieldsService.findSovereignByReferDate(referDate),HttpStatus.OK);
	} 
	 
	@GetMapping(value = "findsoveriegncurvesbyreferdate/{referDate}")
	public ResponseEntity<List<CurveSoveriegnDTO>> findSoveriegnCurvesByReferDate(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(sovereignYieldsService.findSoveriegnCurvesByReferDate(referDate),HttpStatus.OK);
	} 
	
	@GetMapping(value = "getauditdata/{referDate}")
	public ResponseEntity<List<AuditProcedureDTO>> getAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(sovereignYieldsService.getAuditData(referDate),HttpStatus.OK);
	} 
	
	@GetMapping(value = "getcurvedata/{referDate}")
	public ResponseEntity<List<AuditProcedureDTO>> getCurveData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(sovereignYieldsService.getCurveData(referDate),HttpStatus.OK);
	} 
	
	@GetMapping(value = "getcrossauditdata/{referDate}")
	public ResponseEntity<List<CrossAuditProcedureDTO>> getCrossAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(sovereignYieldsService.getCrossAuditData(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "getlatestgraphdate/{country}/{factor}/{yieldCurveCross}")
	public String getLatestGraphDate(@PathVariable("country") long country,@PathVariable("factor") String factor,@PathVariable("yieldCurveCross") String yieldCurveCross) {
      	return sovereignYieldsService.getLatestGraphDate(country,factor,yieldCurveCross);
	} 
	@PostMapping(value = "getgraphdata")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphData(@RequestBody  GraphReqDTO graphReqDTO) {
	return new ResponseEntity<>(sovereignYieldsService.getGraphData(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "getgraphdatabytype")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(@RequestBody  GraphReqDTO graphReqDTO) {
	return new ResponseEntity<>(sovereignYieldsService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	} 
	@PostMapping(value = "getgraphdatalistconfig")
	public ResponseEntity<List<GraphResponseColConfigListDTO>> getGraphDataListConfig(@RequestBody  GraphReqDTO graphReqDTO) {
	return new ResponseEntity<>(sovereignYieldsService.getGraphDataListConfig(graphReqDTO),HttpStatus.OK);
	}
	@PostMapping(value = "savegraphhistory")
    public GraphHistory saveGraphHistory(@RequestBody GraphHistoryDTO graphHistorydto){
	  return  graphHistoryService.SaveGraphHistory(graphHistorydto);
    }
	@GetMapping(value = "findgraphhistorybyscreenname/{screenName}")
	public  GraphHistory findGraphHistoryByScreenName(@PathVariable("screenName") String screenName) {
	return graphHistoryService.findGraphHistoryByScreenName(screenName);
	} 
	
//	@PostMapping(value = "docalculation")
//	public ResponseEntity<Boolean> doCalculation() {
//		sovereignYieldsService.doCaclulation();
//	return new ResponseEntity<>(true,HttpStatus.OK);
//	} 
//	
	@PostMapping(value = "findselectedgraphnews")
	public List<AllNewsView> findSelectedGraphNews(@RequestBody GraphNewsDTO graphNewsDTO) {
		return graphNewsService.findSelectedGraphNews(graphNewsDTO.getSelectedGraphs());
	}
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody SearchFilterDTO searchFilterDTO) {
		return new ResponseEntity<>(sovereignYieldsService.getGridData(searchFilterDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgriddatafunction")
	public ResponseEntity<List<DataFunctionRespDTO>> getGridDataFunction(@RequestBody DataFunctionReqDTO dataFunctionReqDTO) {
		return new ResponseEntity<>(dataFunctionService.getGridDataFunction(dataFunctionReqDTO),HttpStatus.OK);
	}
	
}
