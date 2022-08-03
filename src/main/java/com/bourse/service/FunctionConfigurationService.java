package com.bourse.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.FunctionConfiguration;
import com.bourse.dto.FunctionConfigurationDTO;
import com.bourse.repositories.FunctionConfigurationRepository;

@Service
public class FunctionConfigurationService {
	@Autowired
	FunctionConfigurationRepository functionConfigurationRepository;
	
	public FunctionConfiguration findFunctionConfigurationByConfigIdAndFonctionId(String configId, String functionId) {
		
		return functionConfigurationRepository.findByConfigIdAndFunctionId(configId,functionId);
	}
	public FunctionConfiguration UpdateFunctionConfiguration(FunctionConfigurationDTO functionConfigurationDTO) {
		
		Optional<FunctionConfiguration> col = functionConfigurationRepository.findById(functionConfigurationDTO.getId());
		FunctionConfiguration funcInstance = col.get();
		funcInstance = FunctionConfiguration.builder()
				                         .id(functionConfigurationDTO.getId())
				                         .configId(functionConfigurationDTO.getConfigId())
				                         .functionId(functionConfigurationDTO.getFunctionId())
				                         .groupId(functionConfigurationDTO.getGroupId())
				                         .subgroupId(functionConfigurationDTO.getSubgroupId())
				                         .description(functionConfigurationDTO.getDescription())
				                         .calculationType(functionConfigurationDTO.getCalculationType())
				                         .currency(functionConfigurationDTO.getCurrency())
				                         .columnName(functionConfigurationDTO.getColumnName())
				                         .dataFormat(functionConfigurationDTO.getDataFormat())
				                         .startDate(functionConfigurationDTO.getStartDate())
				                         .dataMinIncrement(functionConfigurationDTO.getDataMinIncrement())
				                         .tickValue(functionConfigurationDTO.getTickValue())
				                         .exchangeLink(functionConfigurationDTO.getExchangeLink())
				                         .showInDatabase(functionConfigurationDTO.isShowInDatabase())
				                         .showInNewsGraph(functionConfigurationDTO.isShowInNewsGraph())
				                         .displayDescription(functionConfigurationDTO.getDisplayDescription())
				                         .chartType(functionConfigurationDTO.getChartType())
				                         .chartColor(functionConfigurationDTO.getChartColor())
				                         .chartshowMarkes(functionConfigurationDTO.getChartshowMarkes())
				                         .chartSize(functionConfigurationDTO.getChartSize())
				                         .chartTransparency(functionConfigurationDTO.getChartTransparency())
				                         .chartShowgrid(functionConfigurationDTO.getChartShowgrid())
				                         .yAxisFormat(functionConfigurationDTO.getYAxisFormat())
				                         .columnCode(functionConfigurationDTO.getColumnCode())
				                         .build();
        return functionConfigurationRepository.save(funcInstance);
	}
	

}
