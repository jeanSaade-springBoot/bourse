package com.bourse.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import javax.persistence.PersistenceContext;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.bourse.domain.CalendarDates;
import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.RobotsConfiguration;
import com.bourse.domain.News;
import com.bourse.domain.SovereignData;
import com.bourse.domain.SubGroup;
import com.bourse.dto.CrossAuditProcedureDTO;
import com.bourse.dto.RobotsConfigDTO;
import com.bourse.repositories.CalendarDatesRepository;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.ConfigurationRepository;
import com.bourse.repositories.RobotsConfigRepository;
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
	CalendarDatesRepository calendarDatesRepository;
	@Autowired
	NewsRepository newsRepository;
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
				                         .build();
        return columnConfigurationRepository.save(colInstance);
	}
	
	public ColumnConfiguration getColumnsconfigurationByGroupAndSubgroupDescription(String groupId,String subgroupId,String description) {
		 return columnConfigurationRepository.findByGroupIdAndSubgroupIdAndDescription(groupId, subgroupId,description);
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
				.build();
		return robotsConfigRepository.save(robotsConfiguration);
		
	}
	public List<RobotsConfiguration> getRobotsConfigurationByConfigId(String configId)
	{      
		RobotsConfiguration resp = RobotsConfiguration.builder().build();
		List<RobotsConfiguration> respOpt = robotsConfigRepository.findByColumnDescriptionOrderById(configId);
        return respOpt;
	}
	
	public List<CalendarDates> getCalendar()
	{
		return calendarDatesRepository.findAll();
		
	}
	public List<CalendarDates> getVacations()
	{
		return calendarDatesRepository.findByIsvacation("true");
		
	}
	public List<News> getNews()
	{
		return newsRepository.findAll();
		
	}
	
	
}
