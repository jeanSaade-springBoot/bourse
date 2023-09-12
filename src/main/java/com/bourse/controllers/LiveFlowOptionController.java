package com.bourse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bourse.config.MyConfig;
import com.bourse.service.LiveFlowOptionService;

@RestController
@RequestMapping(value = "flow")
public class LiveFlowOptionController {
	   private final MyConfig myConfig;

		@Autowired
		private final LiveFlowOptionService liveFlowOptionService;
		
	    @Autowired
	    public LiveFlowOptionController(MyConfig myConfig,
	    		LiveFlowOptionService liveFlowOptionService) {
	        this.myConfig = myConfig;
	        this.liveFlowOptionService =liveFlowOptionService;
	    }
	   
	    @GetMapping("/liveoptionflow")
	    public ModelAndView liveOptionFlow(Model model) {
	        String template = null;
			try {
				template = liveFlowOptionService.getTemplateFromMainService(myConfig.getApiLiveFlowUrl());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 ModelAndView modelAndView = new ModelAndView();
			 modelAndView.addObject("liveFlow", myConfig);
		     modelAndView.addObject("template", template);
		     modelAndView.setViewName("html/liveOptionFlow");
	        return modelAndView;
	    }
	 @GetMapping("/historicalflow")
	    public ModelAndView historicalFlow(Model model) {
	        String template = null;
			try {
				template = liveFlowOptionService.getHistoricalTemplateFromMainService(myConfig.getApiLiveFlowUrl());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 ModelAndView modelAndView = new ModelAndView();
			 modelAndView.addObject("liveFlow", myConfig);
		     modelAndView.addObject("template", template);
		     modelAndView.setViewName("html/historicalFlow");
	        return modelAndView;
	    }
	 @GetMapping("/flowsearchengine")
	    public ModelAndView flowSearchEngine(Model model) {
	        String template = null;
			try {
				template = liveFlowOptionService.getflowSearchTemplateFromMainService(myConfig.getApiLiveFlowUrl());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 ModelAndView modelAndView = new ModelAndView();
			 modelAndView.addObject("liveFlow", myConfig);
		     modelAndView.addObject("template", template);
		     modelAndView.setViewName("html/flowSearchEngine");
	        return modelAndView;
	    }
}
