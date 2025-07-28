package com.bourse.service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.bourse.domain.graph.TechnicalAnalysisGraphHistory;
import com.bourse.domain.graph.TechnicalAnalysisRelevantHistory;
import com.bourse.domain.graph.TechnicalAnalysisRetracementHistory;
import com.bourse.domain.graph.TechnicalAnalysisTrendFollowingHistory;
import com.bourse.dto.graph.TechnicalAnalysisGraphHistoryDTO;
import com.bourse.dto.graph.TechnicalAnalysisRelevantHistoryDTO;
import com.bourse.dto.graph.TechnicalAnalysisRetracementHistoryDTO;
import com.bourse.repositories.graph.TechnicalAnalysisGraphHistoryRepository;
import com.bourse.repositories.graph.TechnicalAnalysisRelevantHistoryRepository;
import com.bourse.repositories.graph.TechnicalAnalysisRetracementHistoryRepository;
import com.bourse.repositories.graph.TechnicalAnalysisTrendFollowingHistoryRepository;

@Service
public class TechnicalAnalysisGraphHistoryService 
{

	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	TechnicalAnalysisGraphHistoryRepository technicalAnalysisGraphHistoryRepository;
	@Autowired
	TechnicalAnalysisRetracementHistoryRepository technicalAnalysisRetracementHistoryRepository;
	@Autowired
	TechnicalAnalysisRelevantHistoryRepository technicalAnalysisRelevantHistoryRepository;
	@Autowired
	TechnicalAnalysisTrendFollowingHistoryRepository technicalAnalysisTrendFollowingHistoryRepository;
	
	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserIdAndScreenName(String screenName, Authentication authentication) 
	{      
        return technicalAnalysisGraphHistoryRepository.findGraphHistoryByUserNameAndScreenName(authentication.getName(),screenName);
	}
	public List<TechnicalAnalysisGraphHistory> findGraphHistoryByUserIdAndScreenNameAndIsShared(String screenName, Boolean isShared, Authentication authentication) 
	{      
        return technicalAnalysisGraphHistoryRepository.findGraphHistoryByUserNameAndScreenNameAndIsShared(authentication.getName(),screenName,isShared);
	}
	public List<TechnicalAnalysisRetracementHistory> findRetracementHistoryByUserIdAndScreenName(String screenName, Authentication authentication) 
	{      
        return technicalAnalysisRetracementHistoryRepository.findRetracementHistoryByUserNameAndScreenName(authentication.getName(),screenName);
	}
	public List<TechnicalAnalysisRelevantHistory> findRelevantHistoryByUserIdAndScreenName( String screenName, Authentication authentication) 
	{      
        return technicalAnalysisRelevantHistoryRepository.findRelevantHistoryByUserNameAndScreenName(authentication.getName(), screenName);
	}
	public List<TechnicalAnalysisTrendFollowingHistory> findGraphHistoryByGroupIdAndUserNameAndIsShared( String groupId, Boolean isShared, Authentication authentication) 
	{      
        return technicalAnalysisTrendFollowingHistoryRepository.findGraphHistoryByGroupIdAndUserNameAndIsShared(groupId ,authentication.getName(), isShared);
	}
	public TechnicalAnalysisGraphHistory SaveGraphHistory(TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication) 
	{  
		long id;
		Long dbId=(graphHistorydto.getDbId()!=null)?Long.valueOf(graphHistorydto.getDbId()):null;
		Optional<TechnicalAnalysisGraphHistory> graphHistory = technicalAnalysisGraphHistoryRepository.findGraphHistoryById(dbId);
	    if (graphHistory.isPresent())
	    {
	    	TechnicalAnalysisGraphHistory entity = graphHistory.get();
	    	id = entity.getId();
	    	entity = TechnicalAnalysisGraphHistory.builder()
	    		 .id(id)
	    		 .trendlines(graphHistorydto.getTrendlines())
		    	 .graphId(graphHistorydto.getGraphId())
				 .userName(authentication.getName())
				 .chartOptions(graphHistorydto.getChartOptions())
				 .isVisibleTrendline(graphHistorydto.getIsVisibleTrendline())
				 .channel(graphHistorydto.getChannel())
				 .isVisibleChannel(graphHistorydto.getIsVisibleChannel())
				 .screenName(graphHistorydto.getScreenName())
				.build();
	    	return technicalAnalysisGraphHistoryRepository.save(entity);
	    }else {
	    	TechnicalAnalysisGraphHistory entity = TechnicalAnalysisGraphHistory.builder()
	    	 .trendlines(graphHistorydto.getTrendlines())
	    	 .graphId(graphHistorydto.getGraphId())
			 .userName(authentication.getName())
			 .chartOptions(graphHistorydto.getChartOptions())
			 .isVisibleTrendline(graphHistorydto.getIsVisibleTrendline())
			 .channel(graphHistorydto.getChannel())
			 .isVisibleChannel(graphHistorydto.getIsVisibleChannel())
			 .screenName(graphHistorydto.getScreenName())
			.build();
			return technicalAnalysisGraphHistoryRepository.save(entity);
		}
		}
	public boolean SaveGraphListHistory(List<TechnicalAnalysisGraphHistoryDTO> graphHistorydto, Authentication authentication) 
	{  
		 for (TechnicalAnalysisGraphHistoryDTO history : graphHistorydto) {
				long id;
				Long dbId=(history.getDbId()!=null)?Long.valueOf(history.getDbId()):null;
				Optional<TechnicalAnalysisGraphHistory> graphHistory = technicalAnalysisGraphHistoryRepository.findGraphHistoryById(dbId);
			    if (graphHistory.isPresent())
			    {
			    	TechnicalAnalysisGraphHistory entity = graphHistory.get();
			    	id = entity.getId();
			    	entity = TechnicalAnalysisGraphHistory.builder()
			    		 .id(id)
			    		 .trendlines(history.getTrendlines())
				    	 .graphId(history.getGraphId())
						 .userName(authentication.getName())
						 .chartOptions(history.getChartOptions())
						 .isVisibleTrendline(history.getIsVisibleTrendline())
						 .channel(history.getChannel())
						 .isVisibleChannel(history.getIsVisibleChannel())
						 .screenName(history.getScreenName())
						.build();
			    	 technicalAnalysisGraphHistoryRepository.save(entity);
			    }
	        }
	      return true;
		}
	public List<TechnicalAnalysisRetracementHistory> SaveRetracementListHistory(List<TechnicalAnalysisRetracementHistoryDTO> graphRetracementdto, Authentication authentication) 
	{  
	     List<TechnicalAnalysisRetracementHistory> dataList = new ArrayList();

		 for (TechnicalAnalysisRetracementHistoryDTO retacement : graphRetracementdto) {
				long id;
				Long dbId=(retacement.getDbId()!=null)?Long.valueOf(retacement.getDbId()):null;
				Optional<TechnicalAnalysisRetracementHistory> retracementHistory = technicalAnalysisRetracementHistoryRepository.findRetracementHistoryById(dbId);
			    if (retracementHistory.isPresent())
			    {
			    	TechnicalAnalysisRetracementHistory entity = retracementHistory.get();
			    	id = entity.getId();
			    	  entity = TechnicalAnalysisRetracementHistory.builder()
			                  .id(entity.getId())
			                  .userName(authentication.getName())
			                  .graphId(retacement.getGraphId())
			                  .startDate(retacement.getStartDate())
			                  .startPrice(retacement.getStartPrice())
			                  .endDate(retacement.getEndDate())
			                  .endPrice(retacement.getEndPrice())
			                  .percentage10(retacement.getPercentage10())
			                  .percentage25(retacement.getPercentage25())
			                  .percentage33(retacement.getPercentage33())
			                  .percenetage38(retacement.getPercenetage38())
			                  .percentage50(retacement.getPercentage50())
			                  .percentage62(retacement.getPercentage62())
			                  .percentage66(retacement.getPercentage66())
			                  .percentage75(retacement.getPercentage75())
			                  .hidePercentage10(retacement.getHidePercentage10())
			                  .hidePercentage25(retacement.getHidePercentage25())
			                  .hidePercentage33(retacement.getHidePercentage33())
			                  .hidePercenetage38(retacement.getHidePercenetage38())
			                  .hidePercentage50(retacement.getHidePercentage50())
			                  .hidePercentage62(retacement.getHidePercentage62())
			                  .hidePercentage66(retacement.getHidePercentage66())
			                  .hidePercentage75(retacement.getHidePercentage75())
			                  .hideAll(retacement.getHideAll())
							  .screenName(retacement.getScreenName())
			                  .build();
			    	  dataList.add(entity);
			    	  technicalAnalysisRetracementHistoryRepository.save(entity);
			    }else {
			    	TechnicalAnalysisRetracementHistory entity = TechnicalAnalysisRetracementHistory.builder()
			    			  .userName(authentication.getName())
			                  .graphId(retacement.getGraphId())
			                  .startDate(retacement.getStartDate())
			                  .startPrice(retacement.getStartPrice())
			                  .endDate(retacement.getEndDate())
			                  .endPrice(retacement.getEndPrice())
			                  .percentage10(retacement.getPercentage10())
			                  .percentage25(retacement.getPercentage25())
			                  .percentage33(retacement.getPercentage33())
			                  .percenetage38(retacement.getPercenetage38())
			                  .percentage50(retacement.getPercentage50())
			                  .percentage62(retacement.getPercentage62())
			                  .percentage66(retacement.getPercentage66())
			                  .percentage75(retacement.getPercentage75())
			                  .hidePercentage10(retacement.getHidePercentage10())
			                  .hidePercentage25(retacement.getHidePercentage25())
			                  .hidePercentage33(retacement.getHidePercentage33())
			                  .hidePercenetage38(retacement.getHidePercenetage38())
			                  .hidePercentage50(retacement.getHidePercentage50())
			                  .hidePercentage62(retacement.getHidePercentage62())
			                  .hidePercentage66(retacement.getHidePercentage66())
			                  .hidePercentage75(retacement.getHidePercentage75())
			                  .hideAll(retacement.getHideAll())
			                  .screenName(retacement.getScreenName())
			   			.build();
			    	     dataList.add(entity);
			   			 technicalAnalysisRetracementHistoryRepository.save(entity);
			   		}
	        }
	      return dataList;
		}
	public List<TechnicalAnalysisRelevantHistory> SaveRelevantListHistory(List<TechnicalAnalysisRelevantHistoryDTO> graphRelevantdto, Authentication authentication) 
	{  
	     List<TechnicalAnalysisRelevantHistory> dataList = new ArrayList();

		 for (TechnicalAnalysisRelevantHistoryDTO relevant : graphRelevantdto) {
				long id;
				Long dbId=(relevant.getDbId()!=null)?Long.valueOf(relevant.getDbId()):null;
				Optional<TechnicalAnalysisRelevantHistory> RelevantHistory = technicalAnalysisRelevantHistoryRepository.findRelevantHistoryById(dbId);
			    if (RelevantHistory.isPresent())
			    {
			    	TechnicalAnalysisRelevantHistory entity = RelevantHistory.get();
			    	id = entity.getId();
			    	  entity = TechnicalAnalysisRelevantHistory.builder()
			                  .id(entity.getId())
			                  .userName(authentication.getName())
			                  .graphId(relevant.getGraphId())
			                  .startDate(relevant.getStartDate())
			                  .startPrice(relevant.getStartPrice())
			                  .endDate(relevant.getEndDate())
			                  .endPrice(relevant.getEndPrice())
			                  .isHidden(relevant.getIsHidden())
			                  .screenName(relevant.getScreenName())
			                  .color(relevant.getColor())
			                  .build();
			    	  dataList.add(entity);
			    	  technicalAnalysisRelevantHistoryRepository.save(entity);
			    }else {
			    	TechnicalAnalysisRelevantHistory entity = TechnicalAnalysisRelevantHistory.builder()
			    			  .userName(authentication.getName())
			                  .graphId(relevant.getGraphId())
			                  .startDate(relevant.getStartDate())
			                  .startPrice(relevant.getStartPrice())
			                  .endDate(relevant.getEndDate())
			                  .endPrice(relevant.getEndPrice())
			                  .isHidden(relevant.getIsHidden())
			                  .screenName(relevant.getScreenName())
			                  .color(relevant.getColor())
			   			.build();
			    	     dataList.add(entity);
			   			 technicalAnalysisRelevantHistoryRepository.save(entity);
			   		}
	        }
	      return dataList;
		}
	public TechnicalAnalysisGraphHistory saveVisibiltyOfChannel(TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication) 
	{  
		Long dbId=(graphHistorydto.getDbId()!=null)?Long.valueOf(graphHistorydto.getDbId()):null;
		Optional<TechnicalAnalysisGraphHistory> graphHistory = technicalAnalysisGraphHistoryRepository.findGraphHistoryById(dbId);
	  
	    	TechnicalAnalysisGraphHistory entity = graphHistory.get();
	    	   entity.setIsVisibleChannel(graphHistorydto.getIsVisibleChannel());
	    	return technicalAnalysisGraphHistoryRepository.save(entity);
	    
		}
	public TechnicalAnalysisGraphHistory saveVisibiltyOfTrendline(TechnicalAnalysisGraphHistoryDTO graphHistorydto, Authentication authentication) 
	{  
		Long dbId=(graphHistorydto.getDbId()!=null)?Long.valueOf(graphHistorydto.getDbId()):null;
		Optional<TechnicalAnalysisGraphHistory> graphHistory = technicalAnalysisGraphHistoryRepository.findGraphHistoryById(dbId);
	  
	    	TechnicalAnalysisGraphHistory entity = graphHistory.get();
	    	   entity.setIsVisibleTrendline(graphHistorydto.getIsVisibleTrendline());
	    	return technicalAnalysisGraphHistoryRepository.save(entity);
	    
		}
	public void deleteTrendlineById(String id)
	{
		technicalAnalysisGraphHistoryRepository.deleteById(Long.valueOf(id));
	}
	
	public void deleteRetracementById(String id)
	{
		technicalAnalysisRetracementHistoryRepository.deleteById(Long.valueOf(id));
	}
	
	public void deleteRelevantById(String id)
	{
		technicalAnalysisRelevantHistoryRepository.deleteById(Long.valueOf(id));
	}
	public void deleteGraphHistoryByGraphId(String graphid, Authentication authentication) {
		List<TechnicalAnalysisGraphHistory> list = technicalAnalysisGraphHistoryRepository.findGraphHistoryByGraphIdAndUserName(graphid,authentication.getName());		
		list.forEach(
	            (data) -> {
	            	technicalAnalysisGraphHistoryRepository.deleteById(data.getId());
	            });
	}
	public void deleteRetracementHistoryByGraphId(String graphid, Authentication authentication) {
		List<TechnicalAnalysisRetracementHistory> list = technicalAnalysisRetracementHistoryRepository.findRetracementHistoryByGraphIdAndUserName(graphid,authentication.getName());		
		list.forEach(
	            (data) -> {
	            	technicalAnalysisRetracementHistoryRepository.deleteById(data.getId());
	            });
	}
	public void deleteRelevantHistoryByGraphId(String graphid, Authentication authentication) {
		List<TechnicalAnalysisRelevantHistory> list = technicalAnalysisRelevantHistoryRepository.findRelevantHistoryByGraphIdAndUserName(graphid,authentication.getName());		
		list.forEach(
	            (data) -> {
	            	technicalAnalysisRelevantHistoryRepository.deleteById(data.getId());
	            });
	}
	public TechnicalAnalysisTrendFollowingHistory saveTrendFollowingHistory(TechnicalAnalysisTrendFollowingHistory dto, Authentication authentication) {
	   System.out.println("---------- groupId"+dto.getGroupId());
		if (dto.getId() != null) {
	        Optional<TechnicalAnalysisTrendFollowingHistory> graphHistory =
	                technicalAnalysisTrendFollowingHistoryRepository.findById(dto.getId());

	        if (graphHistory.isPresent()) {
	            TechnicalAnalysisTrendFollowingHistory existing = graphHistory.get();
	            TechnicalAnalysisTrendFollowingHistory updated = TechnicalAnalysisTrendFollowingHistory.builder()
	                    .id(existing.getId())
	                    .functionId(dto.getFunctionId())
	                    .isCandleStick(dto.getIsCandleStick())
	                    .isShared(dto.getIsShared())
	                    .userName(authentication.getName())
	                    .groupId(dto.getGroupId())
	                    .build();
	            return technicalAnalysisTrendFollowingHistoryRepository.save(updated);
	        }
	    }

	    // If no ID or not found → new insert
	    TechnicalAnalysisTrendFollowingHistory entity = TechnicalAnalysisTrendFollowingHistory.builder()
	            .functionId(dto.getFunctionId())
	            .isCandleStick(dto.getIsCandleStick())
	            .isShared(dto.getIsShared())
	            .userName(authentication.getName())
	            .groupId(dto.getGroupId())
	            .build();

	    return technicalAnalysisTrendFollowingHistoryRepository.save(entity);
	}

}
