package com.bourse.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.FunctionConfiguration;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseColConfigVolumeDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.GraphResponseVolumeDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.enums.FunctionEnum;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.util.VolumeUtil;

@Service
public class VolumeService {
	
	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	AdminService adminService;
	@Autowired
	FunctionConfigurationService functionConfigurationService;
	@Autowired
	TableManagementRepository tableManagementRepository;
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	
	public HashMap<String,List> getGridData( MainSearchFilterDTO mainSearchFilterDTO)
	{
		QueryColumnsDTO queryColumnsDTO = VolumeUtil.buildDynamicGridQuery(mainSearchFilterDTO);
		String queryStr = queryColumnsDTO.getQuery();
		System.out.println("queryStr:--------------: \n\n"+queryStr+"\n--------------------------");
		HashMap<Integer,String>  colHash= new HashMap<Integer, String>(); 
		colHash = queryColumnsDTO.getColHash();

		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("GetDynnamicGridData");
		query.registerStoredProcedureParameter("sqlQuery", String.class, ParameterMode.IN);
		query.setParameter("sqlQuery",queryStr );
		List<Object[]> lstdata = query.getResultList();
          
		int i=1;
		HashMap<String,List> hashData = new HashMap<String, List>();
		HashMap<String,String> hashRows = new HashMap<String, String>();
		List lstRowsDt = new ArrayList<String>();
		List lstRowsConfig = new ArrayList<String>();
		int id=1;
		for(Object[] obj : lstdata)
		{ 
			for(Object dataIter :obj)
			{
				if(colHash.get(i).equals("id"))
					hashRows.put(colHash.get(i), String.valueOf(id));
				else
					hashRows.put(colHash.get(i), String.valueOf(dataIter));
				i++;
			}
			lstRowsDt.add(hashRows);
			hashRows = new HashMap<String, String>();
			i=1;
			id = id+1;
		}
		hashData.put("rows", lstRowsDt);
		lstRowsConfig = buildColumns(colHash);
		hashData.put("columns", lstRowsConfig);
		return hashData;
	}
	
	public List buildColumns(HashMap<Integer,String>  colHash)
	{
		Iterator it = colHash.entrySet().iterator();
		HashMap<String,String> configColumns = new HashMap<String, String>(); 
		List lstRowsDt = new ArrayList<String>();
		HashMap<String,List> hashData = new HashMap<String, List>();
		 double count = colHash.size();
		 String columnWidth="110";
		 if(count <= 16)
		 {
			 columnWidth=String.valueOf(100/(count-1))+"%"; // 1 to remove the id column size it will not be presented i the grid
		 }
		 
		 String columnDisplayDesc = "";
		 String dataFormat = "";
		 while (it.hasNext()) {
			    
			    HashMap.Entry pair = (HashMap.Entry)it.next();
			    String colsName = pair.getValue().toString();
			    columnDisplayDesc = columnConfigurationRepository.findColumnDispayDescription(colsName.replace("yr", ""));
			    dataFormat = columnConfigurationRepository.findColumnDataFormat(colsName.replace("yr", ""));
			    
		        System.out.println(pair.getKey() + " = " + colsName);
		        it.remove(); // avoids a ConcurrentModificationException
		        if(!colsName.equalsIgnoreCase("id"))
		        {
		        	if (!StringUtils.isNotBlank(columnDisplayDesc))
		        		columnDisplayDesc = colsName; 
			        configColumns.put("text",columnDisplayDesc.equalsIgnoreCase("refer_date")?"Date":columnDisplayDesc);
			        configColumns.put("datafield",colsName);
			        configColumns.put("width",columnWidth);
			        configColumns.put("cellsalign","center");
			        configColumns.put("align","center");
			        
			        	String[] values = null; int val;
			         	if (dataFormat!=null)
			         	{
							if (dataFormat.contains("%"))
							{
							 values = dataFormat.split("%")[0].split("\\.");
								if (values.length>1)
									val = values[1].length();
								else val = 0;
							
				        	configColumns.put("cellsformat","P"+val);
							}
							else 
							 { 
								values = dataFormat.split("\\.");
									if (values.length>1)
										val = values[1].length();
									else val = 0;
								configColumns.put("cellsformat","F"+val);
							 }
			        	}
			        
			        lstRowsDt.add(configColumns);
		        }
		        colsName = null;
		        configColumns = new HashMap<String, String>(); 
		    }
		 hashData.put("columns", lstRowsDt);
		return lstRowsDt;
	}
	public GraphResponseColConfigDTO getGraphDataResult(GraphRequestDTO graphReqDTO, Boolean isFunction) {
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;

		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_graph_main",GraphResponseDTO.class);
		
		List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
		ColumnConfiguration config = null;
		GraphResponseColConfigDTO graphResponseColConfigDTO = null;
		
		String groupId = graphReqDTO.getGroupId1();
		String subGroupId = graphReqDTO.getSubGroupId1(); 
		String description = null;
		description = tableManagementRepository.findByGroupIdAndSubgroupId(groupId,subGroupId).getColumnName();
			
		    System.out.println("goupid: "+groupId);
		    System.out.println("subGroupId: "+subGroupId);
		    System.out.println("description: "+description);
		    
		    config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
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
	public GraphResponseColConfigVolumeDTO getGraphDataVolumeResult(GraphRequestDTO graphReqDTO, Boolean isFunction) {
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;

		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_graph_main",GraphResponseVolumeDTO.class);
		
		List<GraphResponseColConfigVolumeDTO> l1 = new ArrayList<>();
		ColumnConfiguration config = null;
		GraphResponseColConfigVolumeDTO graphResponseColConfigDTO = null;
		
		String groupId = graphReqDTO.getGroupId1();
		String subGroupId = graphReqDTO.getSubGroupId1(); 
		String description = null;
		description = tableManagementRepository.findByGroupIdAndSubgroupId(groupId,subGroupId).getColumnName();
			
		    System.out.println("goupid: "+groupId);
		    System.out.println("subGroupId: "+subGroupId);
		    System.out.println("description: "+description);
		    
		    config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
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
			
			List<GraphResponseVolumeDTO> graphResponseDTOlst1 = (List<GraphResponseVolumeDTO>) query.getResultList();
			List<GraphResponseVolumeDTO> graphResponseDTOlstEmpty= VolumeUtil.removeReplaceEmptyValueVolumeWithNull(graphResponseDTOlst1);
			graphResponseDTOlst1.clear();
			graphResponseDTOlst1=graphResponseDTOlstEmpty;
			
			if (graphReqDTO.getRemoveEmpty1()!=null)
				if (graphReqDTO.getRemoveEmpty1().equalsIgnoreCase("true"))
				{	
					List<GraphResponseVolumeDTO> graphResponseDTOlst= VolumeUtil.removeEmptyVolumeY(graphResponseDTOlst1);
					graphResponseDTOlst1.clear();
					graphResponseDTOlst1=graphResponseDTOlst;
				}
				
		   graphResponseColConfigDTO = GraphResponseColConfigVolumeDTO.builder()
					                  .graphResponseDTOLst(graphResponseDTOlst1)
					                  .config(config)
					                  .build();
			entityManager.clear();
			entityManager.close();
		
		return graphResponseColConfigDTO; 
	    
	}
	public List<GraphResponseColConfigDTO> getGraphDataByPeriodValue(GraphRequestDTO graphReqDTO) {
	    boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		
		List<GraphResponseColConfigDTO> l1 = new ArrayList<>();

		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_graph_main",GraphResponseDTO.class);
		
		ColumnConfiguration config = null;
		GraphResponseColConfigDTO graphResponseColConfigDTO = null;
		
			query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
			query.setParameter("groupId",graphReqDTO.getYear() );
			
			query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query.setParameter("fromDate",graphReqDTO.getDataType() );
			
			query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query.setParameter("toDate",  "" );
			
			query.registerStoredProcedureParameter("subgroupId", String.class, ParameterMode.IN);
			query.setParameter("subgroupId",graphReqDTO.getValue() );
			
			query.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
			query.setParameter("factor",null);
			
			query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query.setParameter("dayOrweek",graphReqDTO.getPeriod());
			
			query.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
			query.setParameter("isFunction","false");
			
			query.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
			query.setParameter("functionCode", "");
			
			query.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query.setParameter("type", graphReqDTO.getType());
			
			query.execute();
			
			List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
			
		    graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
					                  .graphResponseDTOLst(graphResponseDTOlst1)
					                  .config(config)
					                  .build();
			entityManager.clear();
			entityManager.close();
		
		l1.add(graphResponseColConfigDTO);
	return l1;
	}
	public List<GraphResponseColConfigDTO> getGraphDataByType(GraphRequestDTO graphReqDTO) {

		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
	
		List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
		
		if(graphReqDTO.getGroupId1()!=null)
		{
			l1.add(getGraphDataResult(graphReqDTO,false));
		}
		if(graphReqDTO.getIsFunctionGraph()!=null?graphReqDTO.getIsFunctionGraph().equals("true"):false)
		{   
		   l1.add(getGraphDataResult(graphReqDTO,true));
		}
		if(graphReqDTO.getGroupId2()!=null)
		{
			GraphRequestDTO graphRequestDTO = GraphRequestDTO.builder().groupId1(graphReqDTO.getGroupId2())
					   .subGroupId1(graphReqDTO.getSubGroupId2())
					   .period(graphReqDTO.getPeriod())
					   .type(graphReqDTO.getType())
					   .fromdate(graphReqDTO.getFromdate())
					   .todate(graphReqDTO.getTodate())
					   .functionId(graphReqDTO.getFunctionId())
					   .isFunctionGraph(graphReqDTO.getIsFunctionGraph())
					   .removeEmpty1(graphReqDTO.getRemoveEmpty2())
					   .build();
			l1.add(getGraphDataResult(graphRequestDTO,false));
		}
		if(graphReqDTO.getGroupId3()!=null)
		{
			GraphRequestDTO graphRequestDTO = GraphRequestDTO.builder().groupId1(graphReqDTO.getGroupId3())
					   .subGroupId1(graphReqDTO.getSubGroupId3())
					   .period(graphReqDTO.getPeriod())
					   .type(graphReqDTO.getType())
					   .fromdate(graphReqDTO.getFromdate())
					   .todate(graphReqDTO.getTodate())
					   .functionId(graphReqDTO.getFunctionId())
					   .isFunctionGraph(graphReqDTO.getIsFunctionGraph())
					   .removeEmpty1(graphReqDTO.getRemoveEmpty3())
					   .build();
			l1.add(getGraphDataResult(graphRequestDTO,false));
		}
			
		return l1; 
	
	}
   
	public List<GraphResponseColConfigVolumeDTO> getGraphDataByTypeSum(GraphRequestDTO graphReqDTO) {

		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
	
		List<GraphResponseColConfigVolumeDTO> l1 = new ArrayList<>();
		
		if(graphReqDTO.getGroupId1()!=null)
		{
			l1.add(getGraphDataVolumeResult(graphReqDTO,false));
		}
		if(graphReqDTO.getIsFunctionGraph()!=null?graphReqDTO.getIsFunctionGraph().equals("true"):false)
		{   
		   l1.add(getGraphDataVolumeResult(graphReqDTO,true));
		}
		if(graphReqDTO.getGroupId2()!=null)
		{
			GraphRequestDTO graphRequestDTO = GraphRequestDTO.builder().groupId1(graphReqDTO.getGroupId2())
					   .subGroupId1(graphReqDTO.getSubGroupId2())
					   .period(graphReqDTO.getPeriod())
					   .type(graphReqDTO.getType())
					   .fromdate(graphReqDTO.getFromdate())
					   .todate(graphReqDTO.getTodate())
					   .functionId(graphReqDTO.getFunctionId())
					   .isFunctionGraph(graphReqDTO.getIsFunctionGraph())
					   .removeEmpty1(graphReqDTO.getRemoveEmpty2())
					   .build();
			l1.add(getGraphDataVolumeResult(graphRequestDTO,false));
		}
		if(graphReqDTO.getGroupId3()!=null)
		{
			GraphRequestDTO graphRequestDTO = GraphRequestDTO.builder().groupId1(graphReqDTO.getGroupId3())
					   .subGroupId1(graphReqDTO.getSubGroupId3())
					   .period(graphReqDTO.getPeriod())
					   .type(graphReqDTO.getType())
					   .fromdate(graphReqDTO.getFromdate())
					   .todate(graphReqDTO.getTodate())
					   .functionId(graphReqDTO.getFunctionId())
					   .isFunctionGraph(graphReqDTO.getIsFunctionGraph())
					   .removeEmpty1(graphReqDTO.getRemoveEmpty3())
					   .build();
			l1.add(getGraphDataVolumeResult(graphRequestDTO,false));
		}
			
		return l1; 
	
	}
}
