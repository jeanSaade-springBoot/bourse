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
import com.bourse.domain.LowHighRobotsConfiguration;
import com.bourse.domain.News;
import com.bourse.domain.SovereignData;
import com.bourse.domain.SubGroup;
import com.bourse.dto.CrossAuditProcedureDTO;
import com.bourse.dto.LowHighRobotsConfigDTO;
import com.bourse.repositories.CalendarDatesRepository;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.ConfigurationRepository;
import com.bourse.repositories.LowHighRobotsConfigRepository;
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
	LowHighRobotsConfigRepository lowHighRobotsConfigRepository;
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
				                         .yAxisFormat(columnConfiguration.getYAxisFormat())
				                         .build();
        return columnConfigurationRepository.save(colInstance);
	}
	
	public ColumnConfiguration getColumnsconfigurationByGroupAndSubgroupDescription(String groupId,String subgroupId,String description) {
		 return columnConfigurationRepository.findByGroupIdAndSubgroupIdAndDescription(groupId, subgroupId,description);
	}
	public LowHighRobotsConfiguration UpdateLowHighRobotsByConfigId(LowHighRobotsConfigDTO lowHighRobotsConfigDTO) {
		// TODO Auto-generated method stub
		long id ;
		Optional<LowHighRobotsConfiguration> robotConfig = lowHighRobotsConfigRepository.findByColumnDescription(lowHighRobotsConfigDTO.getColumnDescription());
	    if (robotConfig.isPresent())
	    {
	    	LowHighRobotsConfiguration entity = robotConfig.get();
	    	id = entity.getId();
	    	entity = LowHighRobotsConfiguration.builder()
	    		 .id(id)
				.columnDescription(lowHighRobotsConfigDTO.getColumnDescription())
				.displayDescription(lowHighRobotsConfigDTO.getDisplayDescription())
				.lastData(lowHighRobotsConfigDTO.getLastData())
				.rule(lowHighRobotsConfigDTO.getRule())
				.template(lowHighRobotsConfigDTO.getTemplate())
				.threshHoldNotification(lowHighRobotsConfigDTO.getThreshHoldNotification())
				.threshholdTrigger(lowHighRobotsConfigDTO.getThreshholdTrigger())
				.isactive(lowHighRobotsConfigDTO.isIsactive())
				.build();
		return lowHighRobotsConfigRepository.save(entity);
	    }else {
	    	LowHighRobotsConfiguration lowHighRobotsConfiguration = LowHighRobotsConfiguration.builder()
					.columnDescription(lowHighRobotsConfigDTO.getColumnDescription())
					.displayDescription(lowHighRobotsConfigDTO.getDisplayDescription())
					.lastData(lowHighRobotsConfigDTO.getLastData())
					.rule(lowHighRobotsConfigDTO.getRule())
					.template(lowHighRobotsConfigDTO.getTemplate())
					.threshHoldNotification(lowHighRobotsConfigDTO.getThreshHoldNotification())
					.threshholdTrigger(lowHighRobotsConfigDTO.getThreshholdTrigger())
					.isactive(lowHighRobotsConfigDTO.isIsactive())
					.build();
			return lowHighRobotsConfigRepository.save(lowHighRobotsConfiguration);
	    }
	}
	public LowHighRobotsConfiguration SaveLowHighRobots(LowHighRobotsConfigDTO lowHighRobotsConfigDTO)
	{
		LowHighRobotsConfiguration lowHighRobotsConfiguration = LowHighRobotsConfiguration.builder()
				.columnDescription(lowHighRobotsConfigDTO.getColumnDescription())
				.displayDescription(lowHighRobotsConfigDTO.getDisplayDescription())
				.lastData(lowHighRobotsConfigDTO.getLastData())
				.rule(lowHighRobotsConfigDTO.getRule())
				.template(lowHighRobotsConfigDTO.getTemplate())
				.threshHoldNotification(lowHighRobotsConfigDTO.getThreshHoldNotification())
				.threshholdTrigger(lowHighRobotsConfigDTO.getThreshholdTrigger())
				.build();
		return lowHighRobotsConfigRepository.save(lowHighRobotsConfiguration);
		
	}
	public LowHighRobotsConfiguration getLowHighRobotsConfigurationByConfigId(String configId)
	{      
		LowHighRobotsConfiguration resp = LowHighRobotsConfiguration.builder().build();
		Optional<LowHighRobotsConfiguration> respOpt = lowHighRobotsConfigRepository.findByColumnDescriptionOrderById(configId);
		if(respOpt.isPresent())
			resp = respOpt.get();
        return resp;
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
