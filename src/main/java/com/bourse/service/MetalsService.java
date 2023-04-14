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
import com.bourse.dto.GraphReqDTO;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.SelectedSearchDTO;
import com.bourse.enums.BaseSubGroupEnum;
import com.bourse.enums.CrossCountryEnum;
import com.bourse.enums.FoodStuffSubGroupEnum;
import com.bourse.enums.FunctionEnum;
import com.bourse.enums.PreciousSubGroupEnum;
import com.bourse.enums.SubGroupEnum;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.util.MetalsUtil;

@Service
public class MetalsService {

	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	@Autowired
	AdminService adminService;
	@Autowired
	FunctionConfigurationService functionConfigurationService;
	
	public HashMap<String,List> getGridData( MainSearchFilterDTO mainSearchFilterDTO)
	{
		QueryColumnsDTO queryColumnsDTO = MetalsUtil.buildDynamicGridQuery(mainSearchFilterDTO);
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
				// System.out.println("i: "+i+" colHash.get(i): "+colHash.get(i)+" dataIter.toString(): "+dataIter.toString());
				
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
		 String columnWidth="7%";
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

	public List<GraphResponseColConfigDTO>  getGraphData(GraphRequestDTO graphReqDTO) {
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;

		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_graph_main",GraphResponseDTO.class);
		StoredProcedureQuery query1 = this.entityManager.createStoredProcedureQuery("dynamic_calculation_graph_main",GraphResponseDTO.class);
		
		List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
		ColumnConfiguration config = null;
		if(graphReqDTO.getGroupId1()!=null)
		{
			if(graphReqDTO.getGroupId1().equals("6"))
			{
				String groupId = graphReqDTO.getGroupId1();
				String subGroupId = graphReqDTO.getSubGroupId1(); 
				String description = PreciousSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId1()));
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			else if(graphReqDTO.getGroupId1().equals("7"))
			{
				String groupId =graphReqDTO.getGroupId1();
				String subGroupId =  graphReqDTO.getSubGroupId1(); 
				String description = BaseSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId1()));
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
			query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
			query.setParameter("groupId",graphReqDTO.getGroupId1() );
			
			query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query.setParameter("toDate",graphReqDTO.getTodate() );
			
			query.registerStoredProcedureParameter("subgroupId", String.class, ParameterMode.IN);
			query.setParameter("subgroupId",graphReqDTO.getSubGroupId1() );
			
			query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
			query.setParameter("isFunction","false");
			
			query.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
			query.setParameter("functionCode", "");
			
			query.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query.setParameter("type","d");
			
			query.execute();
			
			
			List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
					                  .graphResponseDTOLst(graphResponseDTOlst1)
					                  .config(config)
					                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		if(graphReqDTO.getGroupId2()!=null)
		{
			
			if(graphReqDTO.getGroupId2().equals("6"))
			{
				String groupId = graphReqDTO.getGroupId2();
				String subGroupId = graphReqDTO.getSubGroupId2(); 
				String description = PreciousSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId2()));
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			else if(graphReqDTO.getGroupId2().equals("7"))
			{
				String groupId = graphReqDTO.getGroupId2();
				String subGroupId =  graphReqDTO.getSubGroupId2(); 
				String description = BaseSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId2()));
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
				
			query1.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
			query1.setParameter("groupId",graphReqDTO.getGroupId2() );
			
			query1.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query1.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query1.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query1.setParameter("toDate",graphReqDTO.getTodate() );
			
			query1.registerStoredProcedureParameter("subgroupId", String.class, ParameterMode.IN);
			query1.setParameter("subgroupId",graphReqDTO.getSubGroupId2() );
			
			query1.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query1.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query1.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
			query1.setParameter("isFunction","false");
			
			query1.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
			query1.setParameter("functionCode", "");
			
			query1.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query1.setParameter("type","d");
			
			query1.execute();
			List<GraphResponseDTO> graphResponseDTOlst2 = (List<GraphResponseDTO>) query1.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst2)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		
		return l1; 
	}

		public List<GraphResponseColConfigDTO> getGraphDataByType(GraphRequestDTO graphReqDTO)
	{
		boolean hasData= adminService.getData();
	    if(!hasData)
			return null;
		//yield:1
		//curve:2
		//cross:3

		StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dynamic_calculation_graph_main",GraphResponseDTO.class);
		StoredProcedureQuery query1 = this.entityManager.createStoredProcedureQuery("dynamic_calculation_graph_main",GraphResponseDTO.class);
		StoredProcedureQuery functionQuery = this.entityManager.createStoredProcedureQuery("dynamic_calculation_graph_main",GraphResponseDTO.class);

		List<GraphResponseColConfigDTO> l1 = new ArrayList<>();
		ColumnConfiguration config = null;
		FunctionConfiguration fConfig=null;
		if(graphReqDTO.getGroupId1()!=null)
		{
					
			if(graphReqDTO.getGroupId1().equals("6"))
			{  
				String groupId = graphReqDTO.getGroupId1();
				String subGroupId = graphReqDTO.getSubGroupId1(); 
				String description = PreciousSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId1()));
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				    
				    System.out.println("goupid: "+groupId);
				    System.out.println("subGroupId: "+subGroupId);
				    System.out.println("description: "+description);
					  
			}
			if(graphReqDTO.getGroupId1().equals("7"))
			{
				String groupId = graphReqDTO.getGroupId1();
				String subGroupId =  graphReqDTO.getSubGroupId1(); 
				String description = BaseSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId1()));
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
				
			}
			if(graphReqDTO.getGroupId1().equals("8"))
			{
				String groupId = graphReqDTO.getGroupId1();
				String subGroupId =  graphReqDTO.getSubGroupId1(); 
				String description = FoodStuffSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId1()));
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
				
			}
			
			String functionId=FunctionEnum.getFunctionByID(graphReqDTO.getFunctionId()!=null?(graphReqDTO.getFunctionId().isEmpty()?0:Integer.valueOf(graphReqDTO.getFunctionId())):0);
			
			query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
			query.setParameter("groupId",graphReqDTO.getGroupId1() );
			
			query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query.setParameter("toDate",graphReqDTO.getTodate() );
			
			query.registerStoredProcedureParameter("subgroupId", String.class, ParameterMode.IN);
			query.setParameter("subgroupId",graphReqDTO.getSubGroupId1() );
			
			query.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
			query.setParameter("isFunction","false");
			
			query.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
			query.setParameter("functionCode", functionId);
			
			query.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query.setParameter("type",graphReqDTO.getType());
			
			query.execute();
			
			List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) query.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
					                  .graphResponseDTOLst(graphResponseDTOlst1)
					                  .config(config)
					                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		if(graphReqDTO.getIsFunctionGraph()!=null?graphReqDTO.getIsFunctionGraph().equals("true"):false)
		{   
			String groupId = "",subGroupId = "";
			if(graphReqDTO.getGroupId1()!=null)
			{  
					groupId = graphReqDTO.getGroupId1();
					subGroupId = graphReqDTO.getSubGroupId1();
					String description = null;
					if (groupId.equals("6"))
					 description = PreciousSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId1()));
					else if (groupId.equals("7"))
					 description = BaseSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId1()));
					else if (groupId.equals("8"))
						description = FoodStuffSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId1()));
					
					config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
					fConfig = functionConfigurationService.findFunctionConfigurationByConfigIdAndFonctionId(String.valueOf(config.getId()), graphReqDTO.getFunctionId());
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
						System.out.println("goupid: "+groupId);    
						System.out.println("moving average : "+graphReqDTO.getMovingTwoHundereOrOneHundred());
					    System.out.println("subGroupId: "+subGroupId);
					    System.out.println("description: "+description);
					
			}
		
			
			functionQuery.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
			functionQuery.setParameter("groupId",groupId );
			
			functionQuery.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			functionQuery.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			functionQuery.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			functionQuery.setParameter("toDate",graphReqDTO.getTodate() );
			
			functionQuery.registerStoredProcedureParameter("subgroupId", String.class, ParameterMode.IN);
			functionQuery.setParameter("subgroupId",subGroupId );
			
			functionQuery.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			functionQuery.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			functionQuery.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
			functionQuery.setParameter("isFunction",graphReqDTO.getIsFunctionGraph() );
			
			functionQuery.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
			functionQuery.setParameter("functionCode",FunctionEnum.getFunctionByID(graphReqDTO.getFunctionId().isEmpty()?0:Integer.valueOf(graphReqDTO.getFunctionId())));
			
			functionQuery.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			functionQuery.setParameter("type",graphReqDTO.getType());
			
			System.out.println(graphReqDTO.getGroupId1()+" "+graphReqDTO.getFromdate()+" "+graphReqDTO.getTodate()+" "+graphReqDTO.getSubGroupId1()+" "+graphReqDTO.getPeriod() +" "+graphReqDTO.getIsFunctionGraph() +" "+FunctionEnum.getFunctionByID(graphReqDTO.getFunctionId().isEmpty()?0:Integer.valueOf(graphReqDTO.getFunctionId())) +" "+graphReqDTO.getType() );
			
			functionQuery.execute();
			
			List<GraphResponseDTO> graphResponseDTOlst1 = (List<GraphResponseDTO>) functionQuery.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
					                  .graphResponseDTOLst(graphResponseDTOlst1)
					                  .config(config)
					                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
		if(graphReqDTO.getGroupId2()!=null)
		{
			
			if(graphReqDTO.getGroupId2().equals("6"))
			{
				String groupId = graphReqDTO.getGroupId2();
				String subGroupId = graphReqDTO.getSubGroupId2(); 
				String description = PreciousSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId2()));
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
			    System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			if(graphReqDTO.getGroupId2().equals("7"))
			{
				String groupId = graphReqDTO.getGroupId2();
				String subGroupId =  graphReqDTO.getSubGroupId2(); 
				String description = BaseSubGroupEnum.getCountryBySubGroupID(Integer.valueOf(graphReqDTO.getSubGroupId2()));
				config = adminService.getColumnsconfigurationByGroupAndSubgroupDescription(groupId, subGroupId, description);
				System.out.println("goupid: "+groupId);
			    System.out.println("subGroupId: "+subGroupId);
			    System.out.println("description: "+description);
			}
			
			String functionId=FunctionEnum.getFunctionByID(graphReqDTO.getFunctionId()!=null?(graphReqDTO.getFunctionId().isEmpty()?0:Integer.valueOf(graphReqDTO.getFunctionId())):0);
			
			query1.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
			query1.setParameter("groupId",graphReqDTO.getGroupId2() );
			
			query1.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
			query1.setParameter("fromDate",graphReqDTO.getFromdate() );
			
			query1.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
			query1.setParameter("toDate",graphReqDTO.getTodate() );
			
			query1.registerStoredProcedureParameter("subgroupId", String.class, ParameterMode.IN);
			query1.setParameter("subgroupId",graphReqDTO.getSubGroupId2() );
			
			query1.registerStoredProcedureParameter("dayOrweek", String.class, ParameterMode.IN);
			query1.setParameter("dayOrweek",graphReqDTO.getPeriod() );
			
			query1.registerStoredProcedureParameter("isFunction", String.class, ParameterMode.IN);
			query1.setParameter("isFunction","false");
			
			query1.registerStoredProcedureParameter("functionCode", String.class, ParameterMode.IN);
			query1.setParameter("functionCode", functionId);
			
			query1.registerStoredProcedureParameter("type", String.class, ParameterMode.IN);
			query1.setParameter("type",graphReqDTO.getType());
			
			query1.execute();
			List<GraphResponseDTO> graphResponseDTOlst2 = (List<GraphResponseDTO>) query1.getResultList();
			GraphResponseColConfigDTO graphResponseColConfigDTO = GraphResponseColConfigDTO.builder()
	                  .graphResponseDTOLst(graphResponseDTOlst2)
	                  .config(config)
	                  .build();
			l1.add(graphResponseColConfigDTO);
			entityManager.clear();
			entityManager.close();
		}
			
		return l1; 
	}
	
}
