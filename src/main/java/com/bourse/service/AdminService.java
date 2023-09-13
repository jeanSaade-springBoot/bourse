package com.bourse.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import javax.persistence.PersistenceContext;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bourse.domain.AllNewsView;
import com.bourse.domain.CalendarDates;
import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.RobotsConfiguration;
import com.bourse.domain.News;
import com.bourse.domain.NewsFunction;
import com.bourse.domain.NewsOrder;
import com.bourse.domain.SubGroup;
import com.bourse.dto.ColumnConfigurationDTO;
import com.bourse.dto.NewsOrderDTO;
import com.bourse.dto.RobotsConfigDTO;
import com.bourse.repositories.AllNewsViewRepository;
import com.bourse.repositories.CalendarDatesRepository;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.ConfigurationRepository;
import com.bourse.repositories.NewsFunctionRepository;
import com.bourse.repositories.RobotsConfigRepository;
import com.bourse.repositories.NewsOrderRepository;
import com.bourse.repositories.NewsRepository;
import com.bourse.repositories.SubGroupRepository;

@Service
public class AdminService 
{
	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	SubGroupRepository subGroupRepository;
	@Autowired
	ConfigurationRepository configurationRepository;
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	@Autowired
	RobotsConfigRepository robotsConfigRepository;
	@Autowired
	NewsOrderRepository newsOrderRepository;
	@Autowired
	CalendarDatesRepository calendarDatesRepository;
	@Autowired
	NewsRepository newsRepository;
	@Autowired
	AllNewsViewRepository allNewsViewRepository;
	@Autowired
	ManualNewsService manualNewsService;
	@Autowired
	NewsFunctionRepository newsFunctionRepository;
	@Autowired
	AllNewsViewService allNewsViewService;
	
	private String encDecKey="secretKey";
	
	public List<SubGroup> getAllSubGroups()
	{      
        return subGroupRepository.findAll(Sort.by("id").descending());
	}
	public List<SubGroup> getSubGroupsByGroupId(String groupId)
	{      
        return subGroupRepository.findByGroupId(groupId);
	}
	
	public List<ColumnConfiguration> getColumnsConfiguration()
	{      
        return columnConfigurationRepository.findAll();
	}
	
	public List<ColumnConfiguration> getColumnsConfigurationByGroupAndSubgroup(String groupId,String subgroupId)
	{      
        return columnConfigurationRepository.findByGroupIdAndSubgroupId(groupId, subgroupId);
	}

	public ColumnConfiguration UpdateColumnConfigurationById(ColumnConfiguration columnConfiguration) {
		// TODO Auto-generated method stub
		Optional<ColumnConfiguration> col = columnConfigurationRepository.findById(columnConfiguration.getId());
		ColumnConfiguration colInstance = col.get();
		colInstance = ColumnConfiguration.builder()
				                         .id(columnConfiguration.getId())
				                         .groupId(columnConfiguration.getGroupId())
				                         .subgroupId(columnConfiguration.getSubgroupId())
				                         .description(columnConfiguration.getDescription())
				                         .factor(columnConfiguration.getFactor())
				                         .calculationType(columnConfiguration.getCalculationType())
				                         .canBeNegative(columnConfiguration.isCanBeNegative())
				                         .currency(columnConfiguration.getCurrency())
				                         .columnName(columnConfiguration.getColumnName())
				                         .dataFormat(columnConfiguration.getDataFormat())
				                         .displayDescription(columnConfiguration.getDisplayDescription())
				                         .startDate(columnConfiguration.getStartDate())
				                         .dataMinIncrement(columnConfiguration.getDataMinIncrement())
				                         .tickValue(columnConfiguration.getTickValue())
				                         .chartType(columnConfiguration.getChartType())
				                         .chartColor(columnConfiguration.getChartColor())
				                         .chartShowgrid(columnConfiguration.getChartShowgrid())
				                         .exchangeLink(columnConfiguration.getExchangeLink())
				                         .chartshowMarkes(columnConfiguration.getChartshowMarkes())
				                         .chartSize(columnConfiguration.getChartSize())
				                         .chartTransparency(columnConfiguration.getChartTransparency())
				                         .yAxisFormat(columnConfiguration.getYAxisFormat())
				                         .showInDatabase(columnConfiguration.isShowInDatabase())
				                         .showInNewsGraph(columnConfiguration.isShowInNewsGraph())
				                         .columnCode(columnConfiguration.getColumnCode())
				                         .status(columnConfiguration.getStatus())
				                         .build();
        return columnConfigurationRepository.save(colInstance);
	}
	
	public ColumnConfiguration getColumnsconfigurationByGroupAndSubgroupDescription(String groupId,String subgroupId,String description) {
		 return columnConfigurationRepository.findByGroupIdAndSubgroupIdAndDescription(groupId, subgroupId,description);
	}
	
	public List<ColumnConfigurationDTO> findNativeByGroupIdAndSubgroupId(String groupId,String subgroupId) {
		boolean hasData= getData();
		if(!hasData)
			return null; 
		return columnConfigurationRepository.findNativeByGroupIdAndSubgroupId(groupId, subgroupId);
	}
	
   
	public void UpdateRobotsByConfigId(List<RobotsConfigDTO> robotsConfigDTOLst) {
		// TODO Auto-generated method stub
		long id ;
		for(RobotsConfigDTO robotsConfigDTO :robotsConfigDTOLst) {
		Optional<RobotsConfiguration> robotConfig = robotsConfigRepository.findByColumnDescriptionAndRobotName(robotsConfigDTO.getColumnDescription(),robotsConfigDTO.getRobotName());
	    if (robotConfig.isPresent())
	    {
	    	RobotsConfiguration entity = robotConfig.get();
	    	id = entity.getId();
	    	entity = RobotsConfiguration.builder()
	    		 .id(id)
				.columnDescription(robotsConfigDTO.getColumnDescription())
				.displayDescription(robotsConfigDTO.getDisplayDescription())
				.description(robotsConfigDTO.getDescription())
				.lastData(robotsConfigDTO.getLastData())
				.rule(robotsConfigDTO.getRule())
				.template(robotsConfigDTO.getTemplate())
				.threshHoldNotification(robotsConfigDTO.getThreshHoldNotification())
				.threshholdTrigger(robotsConfigDTO.getThreshholdTrigger())
				.isactive(robotsConfigDTO.isIsactive())
				.JumpPercentage(robotsConfigDTO.getJumpPercentage())
				.JumpValueTick(robotsConfigDTO.getJumpValueTick())
				.robotName(robotsConfigDTO.getRobotName())
				.groupId(robotsConfigDTO.getGroupId())
				.subgroupId(robotsConfigDTO.getSubgroupId())
				.configId(robotsConfigDTO.getConfigId())
				.robotCode(robotsConfigDTO.getRobotCode())
				.build();
	           robotsConfigRepository.save(entity);
	    }else {
	    	RobotsConfiguration robotsConfiguration = RobotsConfiguration.builder()
					.columnDescription(robotsConfigDTO.getColumnDescription())
					.displayDescription(robotsConfigDTO.getDisplayDescription())
					.description(robotsConfigDTO.getDescription())
					.lastData(robotsConfigDTO.getLastData())
					.rule(robotsConfigDTO.getRule())
					.template(robotsConfigDTO.getTemplate())
					.threshHoldNotification(robotsConfigDTO.getThreshHoldNotification())
					.threshholdTrigger(robotsConfigDTO.getThreshholdTrigger())
					.isactive(robotsConfigDTO.isIsactive())
					.JumpPercentage(robotsConfigDTO.getJumpPercentage())
					.JumpValueTick(robotsConfigDTO.getJumpValueTick())
					.robotName(robotsConfigDTO.getRobotName())
					.groupId(robotsConfigDTO.getGroupId())
					.subgroupId(robotsConfigDTO.getSubgroupId())
					.configId(robotsConfigDTO.getConfigId())
					.robotCode(robotsConfigDTO.getRobotCode())
					.build();
			robotsConfigRepository.save(robotsConfiguration);
	    }
	    //return robotsConfigRepository.findByColumnDescription(robotsConfigRepository.findByColumnDescription);
		}
	}
	public RobotsConfiguration SaveRobots(RobotsConfigDTO RobotsConfigDTO)
	{
		RobotsConfiguration robotsConfiguration = RobotsConfiguration.builder()
				.columnDescription(RobotsConfigDTO.getColumnDescription())
				.displayDescription(RobotsConfigDTO.getDisplayDescription())
				.lastData(RobotsConfigDTO.getLastData())
				.rule(RobotsConfigDTO.getRule())
				.template(RobotsConfigDTO.getTemplate())
				.threshHoldNotification(RobotsConfigDTO.getThreshHoldNotification())
				.threshholdTrigger(RobotsConfigDTO.getThreshholdTrigger())
				.JumpPercentage(RobotsConfigDTO.getJumpPercentage())
				.JumpValueTick(RobotsConfigDTO.getJumpValueTick())
				.robotName(RobotsConfigDTO.getRobotName())
				.groupId(RobotsConfigDTO.getGroupId())
				.subgroupId(RobotsConfigDTO.getSubgroupId())
				.configId(RobotsConfigDTO.getConfigId())
				.build();
		return robotsConfigRepository.save(robotsConfiguration);
		
	}
	public List<RobotsConfiguration> getRobotsConfigurationByConfigId(String configId)
	{      
		RobotsConfiguration resp = RobotsConfiguration.builder().build();
		List<RobotsConfiguration> respOpt = robotsConfigRepository.findByColumnDescriptionOrderById(configId);
        return respOpt;
	}
	public List<RobotsConfiguration> getRobotsByColumnConfigId(String configId) {
		// TODO Auto-generated method stub
		  return robotsConfigRepository.getColumnRobotsByConfigId(configId);
	}
	
	public List<CalendarDates> getCalendar()
	{
		return calendarDatesRepository.findAll();
		
	}
	public List<CalendarDates> getVacations()
	{
		return calendarDatesRepository.findByIsvacation("true");
		
	}
	public List<News> getNews(){
		boolean hasData= getData();
		if(!hasData)
			return null;
		
	    String isPublished = "1";
		//return newsRepository.findByIsPublished(isPublished,Sort.by("generationDateDate").descending());
	    Pageable pageable = PageRequest.of(Integer.valueOf("0") , Integer.valueOf("100"));
		return newsRepository.findByIsPublishedOrderByGenerationDateDateDesc(isPublished,pageable);
		}
	public List<AllNewsView> getNewsByImportance(String isBold, String assetId, String pageNo, String pageSize){
		return allNewsViewService.findByIsPublishedAndIsBold(isBold,assetId,pageNo,pageSize);
		
	}
	public Page<AllNewsView> findNewsByGroupIdAndSubgroupId(String groupId, String subGroupId,String pageNo, String pageSize) {
		
		return allNewsViewService.findNewsByIsPublishedAndGroupIdAndSubgroupId(groupId,subGroupId,pageNo,pageSize);
	}
	public Page<AllNewsView> findAllNewsByGroupIdAndSubgroupId(String subGroupIdDescription,String pageNo, String pageSize) {
		return allNewsViewService.findAllNewsBySubGroupIdDescription(subGroupIdDescription.substring(0, 2),pageNo,pageSize);
	}
	public List<AllNewsView> findByIsPublishedFormatedDate(String pageNo, String pageSize){
		return allNewsViewService.findByIsPublishedFormatedDate(pageNo,pageSize);
	}
	public List<AllNewsView> findByIsPublishedFormatedDate(String assetId){
		return allNewsViewService.findByIsPublishedFormatedDate(assetId);
	}
	public List<AllNewsView> findByIsPublishedFormatedDate(String assetId,String pageNo, String pageSize){
		return allNewsViewService.findByIsPublishedFormatedDate(assetId,pageNo,pageSize);
	}
	public int getPages(String pageNo, String pageSize, String assetId, String isbold){
		return allNewsViewService.getPages(pageNo,pageSize, assetId , isbold);
	}
	public Page<AllNewsView> getAllNews(String assetId,String pageNo, String pageSize){
		boolean hasData= getData();
		if(!hasData)
			return null;
		return allNewsViewService.getAllNews(assetId,pageNo,pageSize);
	}
	public Page<AllNewsView> getfilteredNews(String assetId,String robots,String generationDate,String template,String pageNo, String pageSize){
		boolean hasData= getData();
		if(!hasData)
			return null;
		return allNewsViewService.findAllNewsByFilters(assetId, robots, generationDate, template, pageNo, pageSize);
	}
	public void deleteNews(long id, String isFunctionNews)
	{  if (isFunctionNews.equalsIgnoreCase("0"))
		 newsRepository.deleteById(id);
	  else 
		 newsFunctionRepository.deleteById(id);
		
	}
	public News findNewsById(long id) 
	{      
        return newsRepository.findById(id);
	}
	public News updateNewsById(News news) 
	{   
	  if (news.getIsFunctionNews().equalsIgnoreCase("0"))
	  {
		Optional<News> col = newsRepository.findById(news.getId());
		News newsInstance = col.get();
		newsInstance = News.builder()
				          .id(news.getId())
				          .isBold(news.getIsBold())     
				          .template(news.getTemplate())
				          .robots(news.getRobots())
				          .generationDateDate(news.getGenerationDateDate())
				          .columnDescription(news.getColumnDescription())
				          .isPublished(news.getIsPublished())
				          .isVisible(news.getIsVisible())
				          .assetId(news.getAssetId())
				          .build();
		
        return newsRepository.save(newsInstance);
        }else 
        {

			NewsFunction newsFunction = newsFunctionRepository.findById(news.getId()).get();
			newsFunction.setTemplate(news.getTemplate());
			newsFunction.setIsPublished(news.getIsPublished());
			NewsFunction savedFunctionNews = newsFunctionRepository.save(newsFunction);
			News updatedNews = News.builder().id(savedFunctionNews.getId())
									  .columnDescription(savedFunctionNews.getColumnDescription())
									  .generationDateDate(savedFunctionNews.getGenerationDateDate())
									  .isBold(savedFunctionNews.getIsBold())
									  .isPublished(savedFunctionNews.getIsPublished())
									  .isFunctionNews("1")
									  .template(savedFunctionNews.getTemplate())
									  .robots(savedFunctionNews.getRobots())
									  .isVisible(savedFunctionNews.getIsVisible())
									  .assetId(news.getAssetId())
									  .build();
			 return updatedNews;
        }
	}

	public News saveNews(News news) {
		  News savedNews = newsRepository.save(news);
		  manualNewsService.saveManualNews(String. valueOf(savedNews.getId()));
		  return savedNews;
	}
	 public List<NewsOrder> getActiveNewsOrder(String assetId){
	    	
	    	return newsOrderRepository.getActiveNewsOrder(assetId);
	    }

	public void UpdateNewsOrder(NewsOrderDTO newsOrderDTOLst) {
	    deleteByListOfId(newsOrderDTOLst.getListid());
		//newsOrderRepository.deleteAllByAssetId(Integer.valueOf(newsOrderDTOLst.getAssetId()));
		newsOrderRepository.saveAll(newsOrderDTOLst.getNewsOrderList());
	}
    private void deleteByListOfId(Long[] listid) {
		for (Long id: listid)
		{
			newsOrderRepository.deleteById(id);
		}
	}
	
	public boolean getData()
	{   boolean hasData = true;
	    String value = columnConfigurationRepository.findById((long) 1).get().getStatus();
		try {
		    StandardPBEStringEncryptor decryptor = new StandardPBEStringEncryptor();
		    decryptor.setPassword(encDecKey);
			Date isValid=new SimpleDateFormat("dd/MM/yyyy").parse(decryptor.decrypt(value));
			hasData = (isValid.compareTo(new Date())==-1)?false:true;
			 return hasData;
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return hasData;
	}

	
}
