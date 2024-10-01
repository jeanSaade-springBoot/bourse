package com.bourse.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
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
import com.bourse.domain.CorporateYieldsData;
import com.bourse.domain.DataEntryFilterHistory;
import com.bourse.domain.GraphHistory;
import com.bourse.domain.SkewsData;
import com.bourse.domain.SovereignData;
import com.bourse.domain.TmpAuditCorporateYields;
import com.bourse.domain.TmpAuditCreditSpreads;
import com.bourse.dto.AuditProcedureDTO;
import com.bourse.dto.CrossAuditProcedureDTO;
import com.bourse.dto.CurveSoveriegnDTO;
import com.bourse.dto.DataDTO;
import com.bourse.dto.DataFunctionReqDTO;
import com.bourse.dto.DataGraphDTO;
import com.bourse.dto.GraphHistoryDTO;
import com.bourse.dto.GraphNewsDTO;
import com.bourse.dto.GraphReqDTO;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseColConfigListDTO;
import com.bourse.dto.GridDataDTO;
import com.bourse.dto.SearchFilterDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.service.CorporatesYieldsService;
import com.bourse.service.DataEntryFilterHistoryService;
import com.bourse.service.DataFunctionService;
import com.bourse.service.DynamicTemplateService;
import com.bourse.service.GraphHistoryService;
import com.bourse.service.GraphNewsService;
import com.bourse.service.GraphService;
import com.bourse.service.SkewsServiceBACK;
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
	private final SkewsServiceBACK skewsService;
	@Autowired
	private final GraphNewsService graphNewsService;
	@Autowired
	private final DataFunctionService dataFunctionService;
	@Autowired
	private final CorporatesYieldsService corporatesYieldsService;
	@Autowired
	private final DynamicTemplateService dynamicTemplateService;
	@Autowired
	private final GraphService graphService;
	public BourseController(
			SovereignYieldsService sovereignYieldsService,
			GraphHistoryService graphHistoryService,
			DataEntryFilterHistoryService dataEntryFilterHistoryService,
			SkewsServiceBACK skewsService,
			GraphNewsService graphNewsService,
			DataFunctionService dataFunctionService,
			CorporatesYieldsService corporatesYieldsService,
			DynamicTemplateService dynamicTemplateService,
			GraphService graphService)
	{
		this.sovereignYieldsService   = sovereignYieldsService;
		this.graphHistoryService      = graphHistoryService;
		this.dataEntryFilterHistoryService = dataEntryFilterHistoryService;
		this.skewsService             = skewsService;
		this.graphNewsService         = graphNewsService;
		this.dataFunctionService      = dataFunctionService;
		this.corporatesYieldsService  = corporatesYieldsService;
		this.dynamicTemplateService   = dynamicTemplateService;
		this.graphService             = graphService;
	}
	@RequestMapping( value =  "/pageunderconstruction")
    public ModelAndView underConstructionPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/pageUnderConstruction");
    }
	@PreAuthorize("hasAuthority('HOME_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/home")
	public ModelAndView mainPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
	    ModelAndView modelAndView = new ModelAndView("html/index");
	    
	    return modelAndView;
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_SOVEREIGN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/sovereignyields")
    public ModelAndView dataEntryPage(@RequestParam("yield") String yield,ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("maindatainputnav", "html/templates/dataInputNav");
	    model.addAttribute("datainputmenu", "DATABASE_INPUT_SCREEN_SOVEREIGN");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "DATABASE_INPUT_SCREEN"));
        model.addAttribute("yield", Integer.valueOf(yield));
	    ModelAndView modelAndView = new ModelAndView("html/sovereignyields");
	    
	    return modelAndView;
    }
	
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_METALS') and principal.tacAccepted == true")
	@RequestMapping( value =  "/metals")
    public ModelAndView dataEntryPreciousMetalsPage(@RequestParam("commodity") String commodity,ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("maindatainputnav", "html/templates/dataInputNav");
	    model.addAttribute("datainputmenu", "DATABASE_INPUT_SCREEN_METALS");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "DATABASE_INPUT_SCREEN"));
        model.addAttribute("commodity", Integer.valueOf(commodity));
		return new ModelAndView("html/metals");
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_LIQUIDITY') and principal.tacAccepted == true")
	@RequestMapping( value =  "/liquidity")
    public ModelAndView dataEntryLiquidityPage(@RequestParam("liquidity") String liquidity,ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("maindatainputnav", "html/templates/dataInputNav");
	    model.addAttribute("datainputmenu", "DATABASE_INPUT_SCREEN_LIQUIDITY");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "DATABASE_INPUT_SCREEN"));
        model.addAttribute("liquidity", Integer.valueOf(liquidity));
		return new ModelAndView("html/liquidity");
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_VOLUME') and principal.tacAccepted == true")
	@RequestMapping( value =  "/volume")
    public ModelAndView dataEntryVolumePage(@RequestParam("volume") String volume,ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("maindatainputnav", "html/templates/dataInputNav");
	    model.addAttribute("datainputmenu", "DATABASE_INPUT_SCREEN_VOLUME");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "DATABASE_INPUT_SCREEN"));
        model.addAttribute("volume", Integer.valueOf(volume));
		return new ModelAndView("html/volume");
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_FXCDS') and principal.tacAccepted == true")
	@RequestMapping( value =  "/fxandcds")
    public ModelAndView dataEntryPageFxCds(@RequestParam("fxcds") String fxcds,ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("maindatainputnav", "html/templates/dataInputNav");
	    model.addAttribute("datainputmenu", "DATABASE_INPUT_SCREEN_FXCDS");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "DATABASE_INPUT_SCREEN"));
        model.addAttribute("fxcds", Integer.valueOf(fxcds));
	    ModelAndView modelAndView = new ModelAndView("html/fxAndCds");
	    
	    return modelAndView;
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_SKEWS') and principal.tacAccepted == true")
	@RequestMapping( value =  "/skews")
    public ModelAndView dataEntryPageSkews(@RequestParam("skews") String skews,ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("maindatainputnav", "html/templates/dataInputNav");
	    model.addAttribute("datainputmenu", "DATABASE_INPUT_SCREEN_SKEWS");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "DATABASE_INPUT_SCREEN"));
        model.addAttribute("skews", Integer.valueOf(skews));
	    ModelAndView modelAndView = new ModelAndView("html/skewsDataInput");
	    
	    return modelAndView;
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_STI') and principal.tacAccepted == true")
	@RequestMapping( value =  "/sti")
    public ModelAndView dataEntryPageSti(@RequestParam("sti") String sti,ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("maindatainputnav", "html/templates/dataInputNav");
	    model.addAttribute("datainputmenu", "DATABASE_INPUT_SCREEN_STI");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "DATABASE_INPUT_SCREEN"));
        model.addAttribute("sti", Integer.valueOf(sti));
	    ModelAndView modelAndView = new ModelAndView("html/sti/stiDataInput");
	    
	    return modelAndView;
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_MACRO') and principal.tacAccepted == true")
	@RequestMapping( value =  "/macro")
    public ModelAndView dataEntryPageMacro(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("maindatainputnav", "html/templates/dataInputNav");
	    model.addAttribute("datainputmenu", "DATABASE_INPUT_SCREEN_MACRO");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "DATABASE_INPUT_SCREEN"));
        ModelAndView modelAndView = new ModelAndView("html/macro/macroDataInput");
	    
	    return modelAndView;
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_RATES') and principal.tacAccepted == true")
	@RequestMapping( value =  "/rates")
    public ModelAndView dataEntryRatesPage(@RequestParam("rates") String rates,ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("maindatainputnav", "html/templates/dataInputNav");
	    model.addAttribute("datainputmenu", "DATABASE_INPUT_SCREEN_RATES");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "DATABASE_INPUT_SCREEN"));
        model.addAttribute("rates", Integer.valueOf(rates));
		return new ModelAndView("html/rates/ratesDataInput");
    }
	@PreAuthorize("hasAuthority('DATABASE_INPUT_SCREEN_LONGENDS') and principal.tacAccepted == true")
	@RequestMapping( value =  "/longends")
    public ModelAndView dataEntryPageLongEnds(@RequestParam("longend") String longend, ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("maindatainputnav", "html/templates/dataInputNav");
	    model.addAttribute("datainputmenu", "DATABASE_INPUT_SCREEN_LONGENDS");
        model.addAttribute("longend", Integer.valueOf(longend));
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "DATABASE_INPUT_SCREEN"));
        ModelAndView modelAndView = new ModelAndView("html/longEnds/longEndsDataInput");
	    
	    return modelAndView;
    }
	@RequestMapping( value =  "/returnfunction")
    public ModelAndView returnFunctionPage(ModelMap model)
    {
		return new ModelAndView("html/returnFunction");
    }
	@PreAuthorize("hasAuthority('ANY2_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/any2")
    public ModelAndView anyTwoPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/any2");
    }
	@PreAuthorize("hasAuthority('ANY2_METALS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/any2metals")
    public ModelAndView anyTwoMetalsPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/any2metals");
    }
	@PreAuthorize("hasAuthority('ANY2_VOLUME_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/any2volume")
    public ModelAndView anyTwoVolumePage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/any2Volume");
    }
	@PreAuthorize("hasAuthority('ANY2_LIQUIDITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/any2liquidity")
    public ModelAndView anyTwoLiquidityPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/any2Liquidity");
    }
    @PreAuthorize("hasAuthority('ANY2_FXCDS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/any2fxcds")
    public ModelAndView anyTwoFxCdsPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/any2FxCds");
	   // return new ModelAndView("html/graphtest");
    }
    @PreAuthorize("hasAuthority('ANY2_SKEWS_GRAPH_SCREEN') and principal.tacAccepted == true")
   	@RequestMapping( value =  "/any2skews")
       public ModelAndView anyTwoSkewsPage(ModelMap model, Authentication authentication)
       {
   	    model.addAttribute("mainmenu", "html/templates/mainMenu");
   	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
   		return new ModelAndView("html/skews/any2Skews");
       }
    @PreAuthorize("hasAuthority('ANY2_STI_GRAPH_SCREEN') and principal.tacAccepted == true")
   	@RequestMapping( value =  "/any2sti")
       public ModelAndView anyTwoStiPage(ModelMap model, Authentication authentication)
       {
   	    model.addAttribute("mainmenu", "html/templates/mainMenu");
   	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
   		return new ModelAndView("html/sti/any2Sti");
       }
	@PreAuthorize("hasAuthority('PRECIOUS_METALS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/precious")
    public ModelAndView preciousMetalsPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/precious");
    }
	@PreAuthorize("hasAuthority('BASE_METALS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/base")
    public ModelAndView baseMetalsPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/base");
    }
	@PreAuthorize("hasAuthority('TRENDLINE_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/trendline")
    public ModelAndView stiGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/graph/trendlines");
    }
	@PreAuthorize("hasAuthority('FOODSTUFF_COMMODITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/foodstuff")
    public ModelAndView foodStuffCommodityPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/foodstuff");
    }
	@PreAuthorize("hasAuthority('ENERGY_COMMODITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/energy")
    public ModelAndView energyCommodityPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/energy");
    }
	@PreAuthorize("hasAuthority('TRANSPORTATION_COMMODITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/transportation")
    public ModelAndView transportationCommodityPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/transportation");
    }
	@PreAuthorize("hasAuthority('SOVEREIGN_YIELDS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "sovereignyieldsgraph")
    public ModelAndView sovereignYieldsGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/sovereignYieldsGraph");
    }
	@PreAuthorize("hasAuthority('YIELD_CURVES_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "sovereigncurvesgraph")
    public ModelAndView sovereignCurvesGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/sovereignCurvesGraph");
    }
	@PreAuthorize("hasAuthority('YIELD_CROSSES_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "sovereigncrossesgraph")
    public ModelAndView sovereignCrossesGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/sovereignCrossesGraph");
    }
	@PreAuthorize("hasAuthority('YIELD_CORPORATE_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "sovereigncorporategraph")
    public ModelAndView sovereignCorporateGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/sovereignCorporate");
    }
	@PreAuthorize("hasAuthority('CREDIT_SPREAD_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "creditsspreadgraph")
    public ModelAndView sovereignCreditSpreadGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/sovereignCredits");
    }
	
	@PreAuthorize("hasAuthority('SPREAD_MAKER_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "spreadmakergraph")
    public ModelAndView spreadMakerGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/spreadMaker");
    }
	
	@PreAuthorize("hasAuthority('FX_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "fx")
    public ModelAndView fxGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/fxChart");
    }
	@PreAuthorize("hasAuthority('CDS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "cds")
    public ModelAndView cdsGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/cdsChart");
    }
	@PreAuthorize("hasAuthority('SETTINGS_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "settings")
    public ModelAndView settingsPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "SETTINGS_SCREEN"));
	    ModelAndView modelAndView = new ModelAndView("html/settings");
	    
	    return modelAndView;
    }
	@PreAuthorize("hasAuthority('ROBOT_NEWS_REORDER_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "robotnewsreorder")
    public ModelAndView robotNewsReorderPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "NEWS_MANAGEMENT_SCREEN"));
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
    public ModelAndView newsManagement(ModelMap model, Authentication authentication)
    {
		    model.addAttribute("mainmenu", "html/templates/mainMenu");
		    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "NEWS_MANAGEMENT_SCREEN"));
		    ModelAndView modelAndView = new ModelAndView("html/newsManagement");
		    
		return modelAndView;
    }
	@PreAuthorize("hasAuthority('DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/datafunctiondisplay")
    public ModelAndView dataFunctionDisplay(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
	    model.addAttribute("datainputmenu", "DATA_FUNCTION_DISPLAY_SCREEN");
	    model.addAttribute("maindatainputnav", "html/templates/dataFunctionDisplayNav");
	    return new ModelAndView("html/dataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('METAL_DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/metaldatafunctiondisplay")
    public ModelAndView metalDataFunctionDisplay(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
	    model.addAttribute("datainputmenu", "METAL_DATA_FUNCTION_DISPLAY_SCREEN");
	    model.addAttribute("maindatainputnav", "html/templates/dataFunctionDisplayNav");
	    return new ModelAndView("html/metaldataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('LIQUIDITY_DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/liquiditydatafunctiondisplay")
    public ModelAndView liquidityDataFunctionDisplay(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
	    model.addAttribute("datainputmenu", "LIQUIDITY_DATA_FUNCTION_DISPLAY_SCREEN");
	    model.addAttribute("maindatainputnav", "html/templates/dataFunctionDisplayNav");
	    return new ModelAndView("html/liquidityDataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('VOLUME_DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/volumedatafunctiondisplay")
    public ModelAndView volumeDataFunctionDisplay(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
	    model.addAttribute("datainputmenu", "VOLUME_DATA_FUNCTION_DISPLAY_SCREEN");
	    model.addAttribute("maindatainputnav", "html/templates/dataFunctionDisplayNav");
		return new ModelAndView("html/volumeDataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('FXCDS_DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/fxcdsdatafunctiondisplay")
    public ModelAndView fxCdsDataFunctionDisplay(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
	    model.addAttribute("datainputmenu", "FXCDS_DATA_FUNCTION_DISPLAY_SCREEN");
	    model.addAttribute("maindatainputnav", "html/templates/dataFunctionDisplayNav");
		return new ModelAndView("html/fxCdsDataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('SKEWS_DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/skewsdatafunctiondisplay")
    public ModelAndView skewsDataFunctionDisplay(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
	    model.addAttribute("datainputmenu", "SKEWS_DATA_FUNCTION_DISPLAY_SCREEN");
	    model.addAttribute("maindatainputnav", "html/templates/dataFunctionDisplayNav");
		return new ModelAndView("html/skews/skewsDataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('STI_DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/stidatafunctiondisplay")
    public ModelAndView stiDataFunctionDisplay(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
	    model.addAttribute("datainputmenu", "STI_DATA_FUNCTION_DISPLAY_SCREEN");
	    model.addAttribute("maindatainputnav", "html/templates/dataFunctionDisplayNav");
	    return new ModelAndView("html/sti/stiDataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('MACRO_DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/macrodatafunctiondisplay")
    public ModelAndView macroDataFunctionDisplay(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		model.addAttribute("datainputmenu", "MACRO_DATA_FUNCTION_DISPLAY_SCREEN");
	    model.addAttribute("maindatainputnav", "html/templates/dataFunctionDisplayNav");
	    return new ModelAndView("html/macro/macroDataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('RATES_DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/ratesdatafunctiondisplay")
    public ModelAndView ratesDataFunctionDisplay(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
	    model.addAttribute("datainputmenu", "RATES_DATA_FUNCTION_DISPLAY_SCREEN");
	    model.addAttribute("maindatainputnav", "html/templates/dataFunctionDisplayNav");
	    return new ModelAndView("html/rates/ratesDataFunctionDisplay");
    }
    @PreAuthorize("hasAuthority('LONGENDS_DATA_FUNCTION_DISPLAY_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/longendsdatafunctiondisplay")
    public ModelAndView longEndsDataFunctionDisplay(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
	    model.addAttribute("datainputmenu", "LONGENDS_DATA_FUNCTION_DISPLAY_SCREEN");
	    model.addAttribute("maindatainputnav", "html/templates/dataFunctionDisplayNav");

		return new ModelAndView("html/longEnds/longEndsDataFunctionDisplay");
    }
	@PreAuthorize("hasAuthority('RATES_CENTRAL_BANKS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/centralbanks")
    public ModelAndView centralBanksGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/rates/centralBanks");
    }
	@PreAuthorize("hasAuthority('RATES_FIXINGS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/fixings")
    public ModelAndView fixingsRatesGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/rates/fixings");
    }
	@PreAuthorize("hasAuthority('RATES_MORTGAGE_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/mortgage")
    public ModelAndView mortgageRatesGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/rates/mortgage");
    }
	@PreAuthorize("hasAuthority('RATES_INFLATION_SWAP_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/inflation-swap")
    public ModelAndView inflationSwapRatesGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/rates/inflation");
    }
	@PreAuthorize("hasAuthority('LONGENDS_BUNDS_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/bunds")
    public ModelAndView bundLongEndsGraphPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/longEnds/bunds");
    }
	@PreAuthorize("hasAuthority('CORPORATE_LIQUIDITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/corporateliquidity")
    public ModelAndView corporateLiquidityPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/corporateLiquidity");
    }
	@PreAuthorize("hasAuthority('ECBEXCESS_LIQUIDITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/ecbexcessliquidity")
    public ModelAndView ecbExcessLiquidityPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/ecbExcessLiquidity");
    }
	@PreAuthorize("hasAuthority('ECBQE_LIQUIDITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/ecbqeliquidity")
    public ModelAndView ecbQeLiquidityPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/ecbQeLiquidity");
    }
	@PreAuthorize("hasAuthority('ECB_IMPACT_LIQUIDITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/ecbimpactliquidity")
    public ModelAndView ecbImpactLiquidityPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/ecbImpactLiquidity");
    }
	@PreAuthorize("hasAuthority('EZMM_LIQUIDITY_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/ezmmliquidity")
    public ModelAndView ezmmLiquidityPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/ezmmLiquidity");
    }
	@PreAuthorize("hasAuthority('USERS_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/users")
    public ModelAndView userPage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "USERS_SCREEN"));
    	return new ModelAndView("html/userPage");
    }
	@PreAuthorize("hasAuthority('ROLE_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/roles")
    public ModelAndView rolePage(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "USERS_SCREEN"));
    	return new ModelAndView("html/rolePage");
    }
	@RequestMapping(value =  "/readexcelwritedb")
    public ModelAndView dataReadRxcelWritedb(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "SETTINGS_SCREEN"));
		return new ModelAndView("html/readExcelWriteDB");
    }
	
	@PreAuthorize("hasAnyAuthority('MACRO_DISPLAY_SETTINGS', 'LONGENDS_DISPLAY_SETTINGS') and principal.tacAccepted == true")
	@RequestMapping(value =  "/displaysettings")
    public ModelAndView displaySettings(@RequestParam("assetId") String assetId , ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("assetId", Integer.valueOf(assetId));
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "SETTINGS_SCREEN"));
		return new ModelAndView("html/macro/macroDisplaySettings");
    }
	@PreAuthorize("hasAuthority('ONE_SERIE') and principal.tacAccepted == true")
	@GetMapping("/oneserie")
	public ModelAndView oneSeriesPage(@RequestParam("serie") String serie, Model model, Authentication authentication)
    {
	   		    String fragmentName=dynamicTemplateService.getDynamicTemplateBySerie(serie);
	   		    model.addAttribute("mainmenu", "html/templates/mainMenu");
	 	        model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
 		        model.addAttribute("fragment", fragmentName);
		        model.addAttribute("serie", Integer.valueOf(serie));
		        ModelAndView modelAndView = new ModelAndView("html/oneSerie");
		        modelAndView.addObject("fragment", fragmentName);
			        
			        return modelAndView;
	    }
	@PreAuthorize("hasAuthority('TWO_SERIES') and principal.tacAccepted == true")
	@RequestMapping( value =  "/twoserie")
    public ModelAndView twoSeriesPage(@RequestParam("serie") String serie, ModelMap model, Authentication authentication)
    {
		    model.addAttribute("mainmenu", "html/templates/mainMenu");
	        model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		    model.addAttribute("submenu", "html/templates/twoseries");
		    model.addAttribute("yields", "html/templates/yields");
		    model.addAttribute("commodities", "html/templates/commodities");
		    model.addAttribute("liquidity", "html/templates/liquidity");
		    model.addAttribute("volume", "html/templates/volume");
		    model.addAttribute("fxcds", "html/templates/fxcds");
		    model.addAttribute("skews", "html/templates/skews");
		    model.addAttribute("sti", "html/templates/sti");
		    model.addAttribute("macro", "html/templates/macro");
		    model.addAttribute("rates", "html/templates/rates");
		    model.addAttribute("longends", "html/templates/longends");
		    model.addAttribute("serie", Integer.valueOf(serie));
		    ModelAndView modelAndView = new ModelAndView("html/twoSeries");
		    
		    return modelAndView;
    }
	@PreAuthorize("hasAuthority('DAILY_VOLUME_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/dailyvolume")
    public ModelAndView dailyVolumeGraphScreen(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("fragment", "html/templates/volume");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/dailyVolume");
    }
	@PreAuthorize("hasAuthority('WMQY_VOLUME_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/wmqyvolume")
    public ModelAndView wmqyVolumeGraphScreen(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("fragment", "html/templates/volume");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/wmqyVolume");
    }
	@PreAuthorize("hasAuthority('MARKET_SHARE_VOLUME_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/marketshare")
    public ModelAndView marketShareVolumeGraphScreen(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/marketShareVolume");
    }
	@PreAuthorize("hasAuthority('RACE_VOLUME_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/racechart")
    public ModelAndView raceVolumeGraphScreen(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("fragment", "html/templates/volume");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/raceChartVolume");
    }
	@PreAuthorize("hasAuthority('MACRO_GRAPH_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/macrograph")
    public ModelAndView macroGraphScreen(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("fragment", "html/templates/macro");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/macro/macroGraph");
    }
	@PreAuthorize("hasAuthority('MACRO_PMI_VS_SURVEY') and principal.tacAccepted == true")
	@RequestMapping( value =  "/pmivssurvey")
    public ModelAndView macroGraphPmivsSurveyScreen(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("fragment", "html/templates/macro");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/macro/macroPmiVsSurvey");
    }
	@PreAuthorize("hasAuthority('MACRO_BAR_SCREEN') and principal.tacAccepted == true")
	@RequestMapping( value =  "/countrypmibar")
    public ModelAndView countryPMIBarScreen(ModelMap model, Authentication authentication)
    {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    model.addAttribute("fragment", "html/templates/macro");
	    model.addAttribute("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		return new ModelAndView("html/macro/countryPMIBar");
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
	     sovereignYieldsService.doCalculation(sovereignDataList.get(0).getReferDate());
		return new ResponseEntity<>(HttpStatus.OK);
    }
	@PostMapping(value = "savesovereigndata")
    public List<SovereignData>  saveSovereignData(@RequestBody List<SovereignData> sovereignDataList){
	    List<SovereignData> sovereignDataLst= sovereignYieldsService.SaveSovereignDatas(sovereignDataList);
	    sovereignYieldsService.doCalculation(sovereignDataLst.get(0).getReferDate());
	  return sovereignDataLst;
    }
	@PostMapping(value = "savecorporatedata")
    public List<CorporateYieldsData>  saveCorporateData(@RequestBody List<CorporateYieldsData> CorporateDataList){
	    List<CorporateYieldsData> corporateDataLst= corporatesYieldsService.SaveCorporateDatas(CorporateDataList);
	    corporatesYieldsService.doCalculation(corporateDataLst.get(0).getReferDate());
	  return corporateDataLst;
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
	@GetMapping(value = "getlatestcorporatesyields", produces = "application/json;charset=UTF-8")
    public ResponseEntity <String> getLatestCorporatesYields(){
		return new ResponseEntity<>(corporatesYieldsService.findLatestCorporateData(), HttpStatus.OK);
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
	public ResponseEntity<HttpStatus>  deleteSovereignByReferDate(@PathVariable("referDate") String referDate) {
	 sovereignYieldsService.deleteSovereignByReferDate(referDate);
	 return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping(value = "deletecorporatebyreferdate/{referDate}")
	public ResponseEntity<HttpStatus> deleteCorporateByReferDate(@PathVariable("referDate") String referDate) {
	 corporatesYieldsService.deleteCorporateByReferDate(referDate);
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
		AtomicBoolean isDependent = new AtomicBoolean(false);
		sovereignYieldsService.updateAuditData(updateDataDTOlst);
		sovereignYieldsService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		updateDataDTOlst.forEach(
		            (updateDataDTO) -> {
		            	if((updateDataDTO.getFactor().equalsIgnoreCase("10yr")&&updateDataDTO.getSubgroupId().equalsIgnoreCase("1"))||
		            			(updateDataDTO.getFactor().equalsIgnoreCase("10yr")&&updateDataDTO.getSubgroupId().equalsIgnoreCase("3")));
		            	isDependent.set(true);
		            });
		if (isDependent.get())
			corporatesYieldsService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		
		return new ResponseEntity<>(true,HttpStatus.OK);
	}

	@PostMapping(value = "updatecorporateauditdata")
	public ResponseEntity<Boolean> updateCoprporateAuditData(@RequestBody List<UpdateDataDTO> updateDataDTOlst) 
	{
	
		corporatesYieldsService.updateAuditData(updateDataDTOlst);
		corporatesYieldsService.doCalculation(updateDataDTOlst.get(0).getReferdate());
		return new ResponseEntity<>(true,HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansave/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSave(@PathVariable String referDate) 
	{
	
		boolean checkifcanSave= sovereignYieldsService.CheckIfCanSave(referDate);
		return new ResponseEntity<>(checkifcanSave,HttpStatus.OK);
	}
	@GetMapping(value = "checkifcansavecorporate/{referDate}")
	public ResponseEntity<Boolean> CheckIfCanSaveCorporate (@PathVariable String referDate) 
	{
		boolean checkifcanSave= corporatesYieldsService.CheckIfCanSave(referDate);
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
	@GetMapping(value = "getcorporateauditdata/{referDate}")
	public ResponseEntity<List<TmpAuditCorporateYields>> getCorporateAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(corporatesYieldsService.getCorporateAuditData(referDate),HttpStatus.OK);
	} 
	@GetMapping(value = "getcreaditspreadauditdata/{referDate}")
	public ResponseEntity<List<TmpAuditCreditSpreads>> getCreditSpreadAuditData(@PathVariable("referDate") String referDate) {
	return new ResponseEntity<>(corporatesYieldsService.findTmpAuditCreditSpreadsByReferDate(referDate),HttpStatus.OK);
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
	@PostMapping(value = "getgraphseriesdata")
	public ResponseEntity<List<GraphResponseColConfigDTO>> getSerieGraphData(@RequestBody  GraphRequestDTO graphReqDTO) {
		return new ResponseEntity<>(graphService.getGraphDataByType(graphReqDTO),HttpStatus.OK);
	}
	@PostMapping(value = "savegraphhistory")
    public GraphHistory saveGraphHistory(@RequestBody GraphHistoryDTO graphHistorydto){
	  return  graphHistoryService.SaveGraphHistory(graphHistorydto);
    }
	@GetMapping(value = "findgraphhistorybyscreenname/{screenName}")
	public  GraphHistory findGraphHistoryByScreenName(@PathVariable("screenName") String screenName) {
	return graphHistoryService.findGraphHistoryByScreenName(screenName);
	} 

	@PostMapping(value = "findselectedgraphnews")
	public Page<AllNewsView> findSelectedGraphNews(@RequestBody GraphNewsDTO graphNewsDTO) {
		return graphNewsService.findSelectedGraphNews(graphNewsDTO.getSelectedGraphs(),graphNewsDTO.getPageNo(),graphNewsDTO.getPageSize());
	}
	@PostMapping(value = "getgriddata")
	public ResponseEntity<HashMap<String,List>> getGridData(@RequestBody SearchFilterDTO searchFilterDTO) {
		return new ResponseEntity<>(sovereignYieldsService.getGridData(searchFilterDTO),HttpStatus.OK);
	}
	@PostMapping(value = "getgriddatafunction")
	public ResponseEntity<GridDataDTO> getGridDataFunction(@RequestBody DataFunctionReqDTO dataFunctionReqDTO) {
		
		return new ResponseEntity<>(dataFunctionService.getGridDataDTOFunction(dataFunctionReqDTO),HttpStatus.OK);
	}
	
}
