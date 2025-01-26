package com.bourse.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.FunctionConfiguration;
import com.bourse.dto.GraphReqDTO;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.graph.BarGraphResponseDTO;
import com.bourse.enums.CrossCountryEnum;
import com.bourse.enums.FunctionEnum;
// import com.bourse.enums.SubGroupEnum;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.util.VolumeUtil;
import com.bourse.readExcelWriteDB.enums.SubGroupEnum;
@Service
public class GraphService {
	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	AdminService adminService;
	@Autowired
	TableManagementRepository tableManagementRepository;
	@Autowired
	FunctionConfigurationService functionConfigurationService;
	
	
	public List<GraphResponseColConfigDTO> getGraphDataByType(GraphRequestDTO graphReqDTO)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
	    List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
	   
		if(graphReqDTO.getGroupId1()!=null)
		{
			 if(graphReqDTO.getGroupId1().equalsIgnoreCase("yield") || 
					 graphReqDTO.getGroupId1().equalsIgnoreCase("curve") || 
					 graphReqDTO.getGroupId1().equalsIgnoreCase("cross"))
			 {
				 GraphReqDTO graphRequestDTO = GraphReqDTO.builder().yieldCurveCross1(graphReqDTO.getGroupId1())
						   .country1(graphReqDTO.getSubGroupId1())
						   .factor1(graphReqDTO.getFactor1())
						   .period(graphReqDTO.getPeriod())
						   .type(graphReqDTO.getType())
						   .fromdate(graphReqDTO.getFromdate())
						   .todate(graphReqDTO.getTodate())
						   .functionId(graphReqDTO.getFunctionId())
						   .isFunctionGraph(graphReqDTO.getIsFunctionGraph())
						   .build();
				l1.add(getGraphYieldsDataResult(graphRequestDTO,false));
			 }
			 else 
			 l1.add(getGraphDataResult(graphReqDTO,false));
		}
		if(graphReqDTO.getGroupId2()!=null)
		{ if(graphReqDTO.getGroupId2().equalsIgnoreCase("yield") || 
				 graphReqDTO.getGroupId2().equalsIgnoreCase("curve") || 
				 graphReqDTO.getGroupId2().equalsIgnoreCase("cross"))
		 {
			 GraphReqDTO graphRequestDTO = GraphReqDTO.builder().yieldCurveCross1(graphReqDTO.getGroupId2())
					   .country1(graphReqDTO.getSubGroupId2())
					   .factor1(graphReqDTO.getFactor2())
					   .period(graphReqDTO.getPeriod())
					   .type(graphReqDTO.getType())
					   .fromdate(graphReqDTO.getFromdate())
					   .todate(graphReqDTO.getTodate())
					   .functionId(graphReqDTO.getFunctionId())
					   .isFunctionGraph(graphReqDTO.getIsFunctionGraph())
					   .build();
			l1.add(getGraphYieldsDataResult(graphRequestDTO,false));
		 }
		 else 
		 {	GraphRequestDTO graphRequestDTO = GraphRequestDTO.builder().groupId1(graphReqDTO.getGroupId2())
					   .subGroupId1(graphReqDTO.getSubGroupId2())
					   .period(graphReqDTO.getPeriod())
					   .type(graphReqDTO.getType())
					   .factor1(graphReqDTO.getFactor2())
					   .fromdate(graphReqDTO.getFromdate())
					   .todate(graphReqDTO.getTodate())
					   .functionId(graphReqDTO.getFunctionId())
					   .isFunctionGraph(graphReqDTO.getIsFunctionGraph())
					   .removeEmpty1(graphReqDTO.getRemoveEmpty2())
					   .build();
			l1.add(getGraphDataResult(graphRequestDTO,false));
		 }
		}
			
		return l1; 
	
	}
	public GraphResponseColConfigDTO getGraphDataResult(GraphRequestDTO graphReqDTO, Boolean isFunction) {
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;

		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_graph_main",GraphResponseDTO.class);
		
		ColumnConfiguration config = null;
		GraphResponseColConfigDTO graphResponseColConfigDTO = null;
		
		String groupId = graphReqDTO.getGroupId1();
		String subGroupId = graphReqDTO.getSubGroupId1(); 
		String factor = graphReqDTO.getFactor1(); 
		String description = null;
		description = tableManagementRepository.findByGroupIdAndSubgroupId(groupId,subGroupId).getColumnName();
			
		    System.out.println("goupid: "+groupId);
		    System.out.println("subGroupId: "+subGroupId);
		    System.out.println("description: "+description);
		    
		    if(factor!=null)
		    config = adminService.getColumnsConfigurationByGroupAndFactor(groupId, subGroupId, factor);
		    else 
		    	{
		    	config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
		    	if (config==null)
		    		config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, SubGroupEnum.getDescriptionByName(description));
			    	if (config==null)
			    		config = adminService.getColumnsconfigurationByGroupAndSubgroup(groupId, subGroupId);
			    	
		    	}
		    if (isFunction)
		    {
		    	FunctionConfiguration fConfig = functionConfigurationService.findFunctionConfigurationByConfigIdAndFonctionId(String.valueOf(config.getId()), graphReqDTO.getFunctionId());
				config = ColumnConfiguration.builder()
						.chartColor(fConfig.getChartColor()==null?"#F0AB2E":fConfig.getChartColor())
						.chartShowgrid(fConfig.getChartShowgrid())
						.chartSize(fConfig.getChartSize())
						.chartTransparency(fConfig.getChartTransparency()==null?"0.50":fConfig.getChartTransparency())
						.chartType(fConfig.getChartType())
						.chartshowMarkes(fConfig.getChartshowMarkes())
						.displayDescription(fConfig.getDisplayDescription())
						.yAxisFormat(fConfig.getYAxisFormat())
						.startDate(fConfig.getStartDate())
						.dataFormat(fConfig.getDataFormat())
						.build();
				
		    }
			query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
			query.setParameter("groupId",graphReqDTO.getGroupId1() );
			
			query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query.setParameter("toDate",graphReqDTO.getTodate() );
			
			query.registerStoredProcedureParameter("subgroupId", String.class, ParameterMode.IN);
			query.setParameter("subgroupId",graphReqDTO.getSubGroupId1() );
			
			query.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query.setParameter("factor",graphReqDTO.getFactor1());
			
			query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query.setParameter("dayOrweek",(isFunction)?"d":graphReqDTO.getPeriod()  );
			
			if(isFunction)
			{query.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
			 query.setParameter("isFunction",graphReqDTO.getIsFunctionGraph() );
			
			 query.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
			 query.setParameter("functionCode",FunctionEnum.getFunctionByID(graphReqDTO.getFunctionId().isEmpty()?0:Integer.valueOf(graphReqDTO.getFunctionId())));

			 query.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			 query.setParameter("type","0");
			}
			else {
			query.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
			query.setParameter("isFunction","false");
			
			query.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
			query.setParameter("functionCode", "");
			
			query.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query.setParameter("type",(graphReqDTO.getType()==null)?"0":graphReqDTO.getType());
			}
			
			query.execute();
			
			List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
			List<GraphResponseDTO> graphResponseDTOlstEmpty= VolumeUtil.removeReplaceEmptyValueWithNull(graphResponseDTOlst1);
			graphResponseDTOlst1.clear();
			graphResponseDTOlst1=graphResponseDTOlstEmpty;
			
			if (graphReqDTO.getRemoveEmpty1()!=null)
				if (graphReqDTO.getRemoveEmpty1().equalsIgnoreCase("true"))
				{	
					List<GraphResponseDTO> graphResponseDTOlst= VolumeUtil.removeEmptyY(graphResponseDTOlst1);
					graphResponseDTOlst1.clear();
					graphResponseDTOlst1=graphResponseDTOlst;
				}
				
		  graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
					                  .graphResponseDTOLst(graphResponseDTOlst1)
					                  .config(config)
					                  .build();
			entityManager.clear();
			entityManager.close();
		
		return graphResponseColConfigDTO; 
	    
	}
public GraphResponseColConfigDTO getGraphYieldsDataResult(GraphReqDTO graphReqDTO, Boolean isFunction) {
	boolean hasData= adminService.getData();
    if(!hasData)
		return null;

	StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("calculation_graph",GraphResponseDTO.class);
	
	ColumnConfiguration config = null;
	GraphResponseColConfigDTO graphResponseColConfigDTO = null;
		 
	   if(graphReqDTO.getYieldCurveCross1().equals("yield"))
		{
			String groupId ="1";
			String subGroupId = graphReqDTO.getCountry1(); 
			String description = SubGroupEnum.getDescriptionByGroupAndSubGroupgroupId(Integer.valueOf(groupId),Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
			config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
		    System.out.println("goupid: "+groupId);
		    System.out.println("subGroupId: "+subGroupId);
		    System.out.println("description: "+description);
		}
		if(graphReqDTO.getYieldCurveCross1().equals("curve"))
		{
			String groupId ="2";
			String subGroupId =  graphReqDTO.getCountry1(); 
			String description = SubGroupEnum.getDescriptionByGroupAndSubGroupgroupId(Integer.valueOf("1"),Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
			config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			System.out.println("goupid: "+groupId);
		    System.out.println("subGroupId: "+subGroupId);
		    System.out.println("description: "+description);
		}
			
		if(graphReqDTO.getYieldCurveCross1().equals("cross"))
		{
			String groupId ="3";
			String subGroupId =  graphReqDTO.getCountry1(); 
			String description = CrossCountryEnum.getCrossByID(Integer.valueOf(graphReqDTO.getCountry1()))+"-"+graphReqDTO.getFactor1().replace("yr", "");
			config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			System.out.println("goupid: "+groupId);
		    System.out.println("subGroupId: "+subGroupId);
		    System.out.println("description: "+description);
		}
				
		System.out.println(graphReqDTO.getYieldCurveCross1() +"\n"+
				graphReqDTO.getFactor1()+"\n"+
				graphReqDTO.getCountry1());
		query.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
		query.setParameter("YieldCurveCross",graphReqDTO.getYieldCurveCross1() );
		
		query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
		query.setParameter("fromDate",graphReqDTO.getFromdate() );
		
		query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
		query.setParameter("toDate",graphReqDTO.getTodate() );
		
		query.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
		query.setParameter("factor",graphReqDTO.getFactor1() );
		
		query.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
		query.setParameter("country",graphReqDTO.getCountry1() );
		
		query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
		query.setParameter("dayOrweek",graphReqDTO.getPeriod() );
		
		query.registerStoredProcedureParameter("movingAverage", String.class, ParameterMode.IN);
		query.setParameter("movingAverage",graphReqDTO.getPeriod() );
		
		query.registerStoredProcedureParameter("movingTwoHundereOrOneHundred", String.class, ParameterMode.IN);
		query.setParameter("movingTwoHundereOrOneHundred",graphReqDTO.getPeriod() );
		
		query.registerStoredProcedureParameter("minusfactor", String.class, ParameterMode.IN);
		query.setParameter("minusfactor",graphReqDTO.getFactor1());
		
		query.registerStoredProcedureParameter("minuscountry", String.class, ParameterMode.IN);
		query.setParameter("minuscountry",graphReqDTO.getFactor1());
		query.execute();
		
		List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
		
	    graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
				                  .graphResponseDTOLst(graphResponseDTOlst1)
				                  .config(config)
				                  .build();
		entityManager.clear();
		entityManager.close();
	
	return graphResponseColConfigDTO; 
    
}
public List<Map<String, List<?>>> getPerformanceGraphBarDataResults(List<GraphRequestDTO> graphReqDTOList) {
    boolean hasData = adminService.getData();
    if (!hasData)
        return Collections.emptyList();

    List<Map<String, List<?>>> resultList = new ArrayList<>();

    for (GraphRequestDTO graphReqDTO : graphReqDTOList) {
        StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("CalculatePerformance", BarGraphResponseDTO.class);

        String selectedDate = graphReqDTO.getFromdate();
        String selectedPeriod = graphReqDTO.getPeriod();
        
        query.registerStoredProcedureParameter("selected_period", String.class, ParameterMode.IN);
        query.setParameter("selected_period", selectedPeriod);
        
        query.registerStoredProcedureParameter("selectedDate", String.class, ParameterMode.IN);
        query.setParameter("selectedDate", selectedDate);

        query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
        query.setParameter("groupId", graphReqDTO.getGroupId1());
        
        query.registerStoredProcedureParameter("fulldates", Boolean.class, ParameterMode.IN);
        query.setParameter("fulldates", graphReqDTO.getFulldates());
      
        query.execute();

        List<BarGraphResponseDTO> graphResponseDTOlst1 = (List<BarGraphResponseDTO>) query.getResultList();

        List<String> labels = graphResponseDTOlst1.stream()
                .map(BarGraphResponseDTO::getName)
                .collect(Collectors.toList());

        List<Double> values = graphResponseDTOlst1.stream()
                .map(BarGraphResponseDTO::getValue)
                .map(Double::parseDouble)
                .collect(Collectors.toList());

        Map<String, List<?>> dataMap = getDataMap(labels, values);
        resultList.add(dataMap);

        entityManager.clear();
        entityManager.close();
    }

    return resultList;
}
public Map<String, List<?>> getDataMap(List<?> labels, List<?> values) {
    Map<String, List<?>> dataMap = new HashMap<>();
    dataMap.put("labels", labels);
    dataMap.put("values", values);
    return Collections.unmodifiableMap(dataMap);
}
}