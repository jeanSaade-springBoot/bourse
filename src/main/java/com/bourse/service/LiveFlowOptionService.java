package com.bourse.service;

import org.springframework.stereotype.Service;

import com.bourse.util.LiveFlowOptionUtils;

@Service
public class LiveFlowOptionService {
	
	    public static String getTemplateFromMainService(String apiLiveFlowUrl) {
	    	return LiveFlowOptionUtils.getTemplate(apiLiveFlowUrl+"/flow/liveoptionflow");
	    }
	    public static String getHistoricalTemplateFromMainService(String apiLiveFlowUrl) {
	    	return LiveFlowOptionUtils.getTemplate(apiLiveFlowUrl+"/flow/historicalflow");
	    }
	    
	    public static String getflowSearchTemplateFromMainService(String apiLiveFlowUrl) {
	    	return LiveFlowOptionUtils.getTemplate(apiLiveFlowUrl+"/flow/flowsearchengine");
	    }
}
