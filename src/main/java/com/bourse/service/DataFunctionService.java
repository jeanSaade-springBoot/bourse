package com.bourse.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.TableManagement;
import com.bourse.dto.DataFunctionReqDTO;
import com.bourse.dto.DataFunctionRespDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.GridDataDTO;
import com.bourse.dto.GenericDataFunctionReqDTO;
import com.bourse.enums.FunctionEnum;
import com.bourse.enums.GroupEnum;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.DataFunctionRepository;
import com.bourse.repositories.FunctionConfigurationRepository;
import com.bourse.repositories.TableManagementRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

@Service
public class DataFunctionService {
	
	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	DataFunctionRepository dataFunctionRepository;
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	@Autowired
	FunctionConfigurationRepository functionConfigurationRepository;
	@Autowired
	TableManagementRepository tableManagementRepository;
	@Autowired
	AdminService adminService;
	
	// List<DataFunctionRespDTO> 
	public GridDataDTO getGridDataDTOFunction(DataFunctionReqDTO dataFunctionReqDTO) {
		List<DataFunctionRespDTO> dataFunctionRespDTO = getGridDataFunction(dataFunctionReqDTO);
		String title =null;	
		
		if(dataFunctionReqDTO.getYieldCurveCross().equalsIgnoreCase("11")||dataFunctionReqDTO.getYieldCurveCross().equalsIgnoreCase("12"))
			title = columnConfigurationRepository.findByGroupIdAndSubgroupIdAndFactor(dataFunctionReqDTO.getYieldCurveCross(),dataFunctionReqDTO.getCountry(),"0").getColumnName();		
				
		GridDataDTO gridDataDTO = GridDataDTO.builder().dataFunctionRespDTO(dataFunctionRespDTO).gridTitle(title).build();
		return gridDataDTO;
	}
	
	public GridDataDTO getDynamicGridDataDTOFunction(GenericDataFunctionReqDTO dataFunctionReqDTO) {
		List<DataFunctionRespDTO> dataFunctionRespDTO = getDynamicGridDataFunction(dataFunctionReqDTO);
		String title = columnConfigurationRepository.findByGroupIdAndSubgroupIdAndFactor(dataFunctionReqDTO.getGroupId(),dataFunctionReqDTO.getSubgroupId(),"0").getColumnName();		
				
		GridDataDTO gridDataDTO = GridDataDTO.builder().dataFunctionRespDTO(dataFunctionRespDTO).gridTitle(title).build();
		return gridDataDTO;
	}
	public List<DataFunctionRespDTO> getGridDataFunction(DataFunctionReqDTO dataFunctionReqDTO) {
		boolean hasData= adminService.getData();
	      if(!hasData)
			return null;   
		  List<String> tableNames = new ArrayList<String>();
		  List<DataFunctionRespDTO> data = null;
		  for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
			if (dataFunctionReqDTO.getFactor().isEmpty())
			{
				String generatedTableName="";
				StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dyncamic_table_function_generator",GraphResponseDTO.class);
				query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
				query.setParameter("groupId",dataFunctionReqDTO.getYieldCurveCross() );
		
				query.registerStoredProcedureParameter("subGroupId", String.class, ParameterMode.IN);
				query.setParameter("subGroupId",dataFunctionReqDTO.getCountry());
				
				query.registerStoredProcedureParameter("factorInput", String.class, ParameterMode.IN);
				query.setParameter("factorInput","");
				
				query.registerStoredProcedureParameter("functionId", String.class, ParameterMode.IN);
				query.setParameter("functionId",String.valueOf(FunctionEnum.getFunctionIdByDesc(dataFunctionReqDTO.getFunctions()[i])));
				
				query.registerStoredProcedureParameter("generatedTableName", String.class, ParameterMode.INOUT);
				query.setParameter("generatedTableName",generatedTableName);
				
				generatedTableName = query.getOutputParameterValue("generatedTableName").toString();
				System.out.println("generatedTableName = "+generatedTableName);
				// tableNames.add(getMetalTableName(dataFunctionReqDTO.getGroupId(),dataFunctionReqDTO.getSubgroupId(),dataFunctionReqDTO.getFunctions()[i]));
				 tableNames.add(generatedTableName);
			}else 
			{
				StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("function_grid_main",GraphResponseDTO.class);
				query.registerStoredProcedureParameter("YieldCurveCross", String.class, ParameterMode.IN);
				query.setParameter("YieldCurveCross",dataFunctionReqDTO.getYieldCurveCross() );
		
				query.registerStoredProcedureParameter("factor", String.class, ParameterMode.IN);
				query.setParameter("factor",dataFunctionReqDTO.getFactor());
				
				query.registerStoredProcedureParameter("country", String.class, ParameterMode.IN);
				query.setParameter("country",dataFunctionReqDTO.getCountry());
				
				query.registerStoredProcedureParameter("functionId", String.class, ParameterMode.IN);
				query.setParameter("functionId",String.valueOf(FunctionEnum.getFunctionIdByDesc(dataFunctionReqDTO.getFunctions()[i])));
				query.execute();
				tableNames.add(getTableName(dataFunctionReqDTO.getYieldCurveCross(),dataFunctionReqDTO.getFactor(),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFunctions()[i]));
			}
		}
		  if (dataFunctionReqDTO.getFactor().isEmpty())
			  {
			  GenericDataFunctionReqDTO genericDataFunctionReqDTO =GenericDataFunctionReqDTO.builder()
					  																		.subgroupId(dataFunctionReqDTO.getCountry())
					  																		.groupId(dataFunctionReqDTO.getYieldCurveCross())
					  																		.fromdate(dataFunctionReqDTO.getFromdate())
					  																		.todate(dataFunctionReqDTO.getTodate())
					  																		.functions(dataFunctionReqDTO.getFunctions())
					  																		.build();
			   String assetId = (dataFunctionReqDTO.getYieldCurveCross().equalsIgnoreCase("11")||dataFunctionReqDTO.getYieldCurveCross().equalsIgnoreCase("12"))?"1":"3";
			   data = getListDataFunctionFromProcedure(buildDyamicQueryFromDB(tableNames,genericDataFunctionReqDTO,assetId),1,dataFunctionReqDTO,null);
			  }
           else
			  data = getListDataFunctionFromProcedure(buildDyamicQuery(tableNames,dataFunctionReqDTO),1,dataFunctionReqDTO,null);
		return data;
	    
	}
	public List<DataFunctionRespDTO> getDynamicGridDataFunction(GenericDataFunctionReqDTO dataFunctionReqDTO) {
		boolean hasData= adminService.getData();
	      if(!hasData)
			return null;   
		List<String> tableNames = new ArrayList<String>();
		for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
		
			String generatedTableName="";
			StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("dyncamic_table_function_generator",GraphResponseDTO.class);
			query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
			query.setParameter("groupId",dataFunctionReqDTO.getGroupId());
	
			query.registerStoredProcedureParameter("subGroupId", String.class, ParameterMode.IN);
			query.setParameter("subGroupId",dataFunctionReqDTO.getSubgroupId());
			
			query.registerStoredProcedureParameter("factorInput", String.class, ParameterMode.IN);
			query.setParameter("factorInput","");
			
			query.registerStoredProcedureParameter("functionId", String.class, ParameterMode.IN);
			query.setParameter("functionId",String.valueOf(FunctionEnum.getFunctionIdByDesc(dataFunctionReqDTO.getFunctions()[i])));
			
			query.registerStoredProcedureParameter("generatedTableName", String.class, ParameterMode.INOUT);
			query.setParameter("generatedTableName",generatedTableName);
			
			generatedTableName = query.getOutputParameterValue("generatedTableName").toString();
			System.out.println("generatedTableName = "+generatedTableName);
			// tableNames.add(getMetalTableName(dataFunctionReqDTO.getGroupId(),dataFunctionReqDTO.getSubgroupId(),dataFunctionReqDTO.getFunctions()[i]));
			 tableNames.add(generatedTableName);
		}
		List<DataFunctionRespDTO> data = getListDataFunctionFromProcedure(buildDyamicQueryFromDB(tableNames,dataFunctionReqDTO,"2"),2,null,dataFunctionReqDTO);
		return data;
	}
	
	public String buildDyamicQuery(List<String> tableNames,DataFunctionReqDTO dataFunctionReqDTO)
	{
		String query="select DATE_FORMAT(STR_TO_DATE(t.refer_date,'%d-%m-%Y'), '%d-%b-%Y') as refer_date,";
		String queryValues="", queryTables="",  queryAnd="";
		if (dataFunctionReqDTO.getYieldCurveCross().equalsIgnoreCase("yield"))
		{
			for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
				queryValues=queryValues+",t"+i+".value as "+dataFunctionReqDTO.getFunctions()[i];
				queryTables=queryTables+" ,"+tableNames.get(i)+" t"+i;
				queryAnd = queryAnd + " and t.refer_date =t"+i+".refer_date";
			}
			query=query+" REPLACE(CASE\r\n"
					+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 1 THEN t.USA\r\n"
					+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 2 THEN t.FRANCE\r\n"
					+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 3 THEN t.GERMANY\r\n"
					+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 4 THEN t.UK\r\n"
					+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 5 THEN t.ITALY\r\n"
					+ "				ELSE t.SPAIN END ,'%','') as daily_input ";
			
			
			query=query + queryValues+" from tmp_audit_yields t ";
			
			query=query+ queryTables+ "  where t.factor ='"+dataFunctionReqDTO.getFactor()+"'";
			query=query + queryAnd +" and (STR_TO_DATE( t.refer_date,'%d-%m-%Y') between '"+dataFunctionReqDTO.getFromdate()+"' and '"+dataFunctionReqDTO.getTodate()+"')";
			query=query+"  order by STR_TO_DATE(t.refer_date,'%d-%m-%Y') desc";
		}else
			if (dataFunctionReqDTO.getYieldCurveCross().equalsIgnoreCase("curve"))
			{
				for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
					queryValues=queryValues+",t"+i+".value as "+dataFunctionReqDTO.getFunctions()[i];
					queryTables=queryTables+" ,"+tableNames.get(i)+" t"+i;
					queryAnd = queryAnd + " and t.refer_date =t"+i+".refer_date";
				}
				query=query+" REPLACE(CASE\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 1 THEN t.USA\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 2 THEN t.FRANCE\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 3 THEN t.GERMANY\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 4 THEN t.UK\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 5 THEN t.ITALY\r\n"
						+ "				ELSE t.SPAIN END ,'%','') as daily_input ";
				
				query=query + queryValues+" from tmp_audit_curve t ";
				
				query=query+ queryTables+ "  where t.factor ='"+dataFunctionReqDTO.getFactor()+"'";
				query=query + queryAnd +" and (STR_TO_DATE( t.refer_date,'%d-%m-%Y') between '"+dataFunctionReqDTO.getFromdate()+"' and '"+dataFunctionReqDTO.getTodate()+"')";
				query=query+"  order by STR_TO_DATE(t.refer_date,'%d-%m-%Y') desc";
			}else
			   {	for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
						queryValues=queryValues+",t"+i+".value as "+dataFunctionReqDTO.getFunctions()[i];
						queryTables=queryTables+" ,"+tableNames.get(i)+" t"+i;
						queryAnd = queryAnd + " and t.refer_date =t"+i+".refer_date";
					}
				query=query+" REPLACE(CASE\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 1 THEN `FRA-GER` \r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 2 THEN `ITA-GER`\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 3 THEN `SPN-GER`\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 4 THEN `UK-GER`\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 5 THEN `USA-GER`\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 6 THEN `USA-UK`\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getCountry()+" = 7 THEN `ITA-FRA`\r\n"
						+ "				ELSE `ITA-SPN` END ,'%','') as daily_input ";
					
					
					query=query + queryValues+" from tmp_audit_cross t ";
					
					query=query+ queryTables+ "  where t.factor ='"+dataFunctionReqDTO.getFactor()+"'";
					query=query + queryAnd +" and (STR_TO_DATE( t.refer_date,'%d-%m-%Y') between '"+dataFunctionReqDTO.getFromdate()+"' and '"+dataFunctionReqDTO.getTodate()+"')";
					query=query+"  order by STR_TO_DATE(t.refer_date,'%d-%m-%Y') desc";
			   }
		return query;
	}
	
	public String buildDyamicQueryFromDB(List<String> tableNames,GenericDataFunctionReqDTO dataFunctionReqDTO, String assetId)
	{
		String query="select DATE_FORMAT(STR_TO_DATE(t.refer_date,'%d-%m-%Y'), '%d-%b-%Y') as refer_date,";
		String queryValues="", queryTables="",  queryAnd="";
		TableManagement tableManagement = tableManagementRepository.findByGroupIdAndSubgroupId(dataFunctionReqDTO.getGroupId(),dataFunctionReqDTO.getSubgroupId());
		
		for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
			queryValues=queryValues+",t"+i+".value as "+dataFunctionReqDTO.getFunctions()[i];
			queryTables=queryTables+" ,"+tableNames.get(i)+" t"+i;
			queryAnd = queryAnd + " and t.refer_date =t"+i+".refer_date";
		}
		query=query+" REPLACE(`"+tableManagement.getColumnName()+"`,'%','') as daily_input ";
		
		query=query + queryValues+" from "+tableManagement.getTableName()+" t ";
		
		query=query+ queryTables+ "  where (STR_TO_DATE( t.refer_date,'%d-%m-%Y') between '"+dataFunctionReqDTO.getFromdate()+"' and '"+dataFunctionReqDTO.getTodate()+"') " + queryAnd;
		query=query+"  order by STR_TO_DATE(t.refer_date,'%d-%m-%Y') desc";
		
		
		/*if (dataFunctionReqDTO.getGroupId().equalsIgnoreCase("6"))
		{
			for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
				queryValues=queryValues+",t"+i+".value as "+dataFunctionReqDTO.getFunctions()[i];
				queryTables=queryTables+" ,"+tableNames.get(i)+" t"+i;
				queryAnd = queryAnd + " and t.refer_date =t"+i+".refer_date";
			}
			query=query+" REPLACE(CASE\r\n"
					+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 1 THEN t.GOLD\r\n"
					+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 2 THEN t.SILVER\r\n"
					+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 3 THEN t.PLATINUM\r\n"
					+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 4 THEN t.PLATINUM_GOLD\r\n"
					+ "				ELSE t.GOLD_SILVER END ,'%','') as daily_input ";
			
			
			query=query + queryValues+" from tmp_audit_precious t ";
			
			query=query+ queryTables+ "  where (STR_TO_DATE( t.refer_date,'%d-%m-%Y') between '"+dataFunctionReqDTO.getFromdate()+"' and '"+dataFunctionReqDTO.getTodate()+"') " + queryAnd;
			query=query+"  order by STR_TO_DATE(t.refer_date,'%d-%m-%Y') desc";
		}else
			if (dataFunctionReqDTO.getGroupId().equalsIgnoreCase("7"))
			{
				for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
					queryValues=queryValues+",t"+i+".value as "+dataFunctionReqDTO.getFunctions()[i];
					queryTables=queryTables+" ,"+tableNames.get(i)+" t"+i;
					queryAnd = queryAnd + " and t.refer_date =t"+i+".refer_date";
				}
				query=query+" REPLACE(CASE\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 1 THEN t.COPPER\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 2 THEN t.ALUMINUM\r\n"
						+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 3 THEN t.STEEL\r\n"
						+ "				ELSE t.LUMBER END ,'%','') as daily_input ";
				
				query=query + queryValues+" from tmp_audit_base t ";
				
				query=query+ queryTables+ "  where  (STR_TO_DATE( t.refer_date,'%d-%m-%Y') between '"+dataFunctionReqDTO.getFromdate()+"' and '"+dataFunctionReqDTO.getTodate()+"') "+ queryAnd;
				query=query+"  order by STR_TO_DATE(t.refer_date,'%d-%m-%Y') desc";
			}else
				if (dataFunctionReqDTO.getGroupId().equalsIgnoreCase("8"))
				{
					for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
						queryValues=queryValues+",t"+i+".value as "+dataFunctionReqDTO.getFunctions()[i];
						queryTables=queryTables+" ,"+tableNames.get(i)+" t"+i;
						queryAnd = queryAnd + " and t.refer_date =t"+i+".refer_date";
					}
					query=query+" REPLACE(CASE\r\n"
							+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 1 THEN t.CORN\r\n"
							+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 2 THEN t.SUGAR\r\n"
							+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 3 THEN t.WHEAT END ,'%','')  as daily_input ";
					
					query=query + queryValues+" from tmp_audit_foodstuff t ";
					
					query=query+ queryTables+ "  where  (STR_TO_DATE( t.refer_date,'%d-%m-%Y') between '"+dataFunctionReqDTO.getFromdate()+"' and '"+dataFunctionReqDTO.getTodate()+"') "+ queryAnd;
					query=query+"  order by STR_TO_DATE(t.refer_date,'%d-%m-%Y') desc";
				}else
					if (dataFunctionReqDTO.getGroupId().equalsIgnoreCase("8"))
					{
						for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
							queryValues=queryValues+",t"+i+".value as "+dataFunctionReqDTO.getFunctions()[i];
							queryTables=queryTables+" ,"+tableNames.get(i)+" t"+i;
							queryAnd = queryAnd + " and t.refer_date =t"+i+".refer_date";
						}
						query=query+" REPLACE(CASE\r\n"
								+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 1 THEN t.CORN\r\n"
								+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 2 THEN t.SUGAR\r\n"
								+ "							 WHEN "+dataFunctionReqDTO.getSubgroupId()+" = 3 THEN t.WHEAT END ,'%','')  as daily_input ";
						
						query=query + queryValues+" from tmp_audit_energy t ";
						
						query=query+ queryTables+ "  where  (STR_TO_DATE( t.refer_date,'%d-%m-%Y') between '"+dataFunctionReqDTO.getFromdate()+"' and '"+dataFunctionReqDTO.getTodate()+"') "+ queryAnd;
						query=query+"  order by STR_TO_DATE(t.refer_date,'%d-%m-%Y') desc";
					}*/
		return query;
	}
	
	public List<DataFunctionRespDTO> getListDataFunctionFromProcedure(String queryStr,int assetId, DataFunctionReqDTO dataFunctionReqDTO, GenericDataFunctionReqDTO GenericDataFunctionReqDTO)
	{
		javax.persistence.Query query = entityManager.createNativeQuery(queryStr);
		List<Object> lstdata = query.getResultList();   
		List<String> data1=null;
		List<List<String>> functionData = new ArrayList<List<String>>();
		  
		if (assetId==1)
		{   
			assetId = (dataFunctionReqDTO.getYieldCurveCross().equalsIgnoreCase("11")||dataFunctionReqDTO.getYieldCurveCross().equalsIgnoreCase("12"))?1:3;
			String groupId = null, subgroupId = null, factor = null; 
			if (dataFunctionReqDTO.getFactor().isEmpty())
				{
				   groupId = dataFunctionReqDTO.getYieldCurveCross();
				   subgroupId = dataFunctionReqDTO.getCountry();
				   factor= "0";
				 
				}
		    else
			    {
		    	   groupId = String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross()));
				   subgroupId = dataFunctionReqDTO.getCountry();
				   factor = dataFunctionReqDTO.getFactor().replace("yr", "");
			    }
		    	
			     data1=getDataFormatValues(groupId,subgroupId,factor,"0");
		    
		for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
			if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("100D"))
			{
				functionData.add(getDataFormatValues(groupId,subgroupId,factor,"1"));
			}else 
				if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("200D"))
				{
					functionData.add(getDataFormatValues(groupId,subgroupId,factor,"2"));
				}else 
					if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("DCP"))
					{
						functionData.add(getDataFormatValues(groupId,subgroupId,factor,"3"));
					}else 
						if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("DCI"))
						{
							functionData.add(getDataFormatValues(groupId,subgroupId,factor,"4"));
						}else 
							if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("WCP"))
							{
								functionData.add(getDataFormatValues(groupId,subgroupId,factor,"5"));
							}else 
								if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("WCI"))
								{
									functionData.add(getDataFormatValues(groupId,subgroupId,factor,"6"));
								}else 
									if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("10YP"))
									{
										functionData.add(getDataFormatValues(groupId,subgroupId,factor,"7"));
									}else 
										if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("20YP"))
										{
											functionData.add(getDataFormatValues(groupId,subgroupId,factor,"8"));
										}else 
											if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("CP"))
											{
												functionData.add(getDataFormatValues(groupId,subgroupId,factor,"9"));
											}
			}
		}
		else if (assetId==2)
		{
			data1=getDataFormatValues(GenericDataFunctionReqDTO.getGroupId(),GenericDataFunctionReqDTO.getSubgroupId(),"0","0");
			
				for (int i = 0; i < GenericDataFunctionReqDTO.getFunctions().length; i++) {
					if(GenericDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("100D"))
					{
						functionData.add(getDataFormatValues(GenericDataFunctionReqDTO.getGroupId(),GenericDataFunctionReqDTO.getSubgroupId(),"0","1"));
					}else 
						if(GenericDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("200D"))
						{
							functionData.add(getDataFormatValues(GenericDataFunctionReqDTO.getGroupId(),GenericDataFunctionReqDTO.getSubgroupId(),"0","2"));
						}else 
							if(GenericDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("DCP"))
							{
								functionData.add(getDataFormatValues(GenericDataFunctionReqDTO.getGroupId(),GenericDataFunctionReqDTO.getSubgroupId(),"0","3"));
							}else 
								if(GenericDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("DCI"))
								{
									functionData.add(getDataFormatValues(GenericDataFunctionReqDTO.getGroupId(),GenericDataFunctionReqDTO.getSubgroupId(),"0","4"));
								}else 
									if(GenericDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("WCP"))
									{
										functionData.add(getDataFormatValues(GenericDataFunctionReqDTO.getGroupId(),GenericDataFunctionReqDTO.getSubgroupId(),"0","5"));
									}else 
										if(GenericDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("WCI"))
										{
											functionData.add(getDataFormatValues(GenericDataFunctionReqDTO.getGroupId(),GenericDataFunctionReqDTO.getSubgroupId(),"0","6"));
										}else 
											if(GenericDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("10YP"))
											{
												functionData.add(getDataFormatValues(GenericDataFunctionReqDTO.getGroupId(),GenericDataFunctionReqDTO.getSubgroupId(),"0","7"));
											}else 
												if(GenericDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("20YP"))
												{
													functionData.add(getDataFormatValues(GenericDataFunctionReqDTO.getGroupId(),GenericDataFunctionReqDTO.getSubgroupId(),"0","8"));
												}else 
													if(GenericDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("CP"))
													{
														functionData.add(getDataFormatValues(GenericDataFunctionReqDTO.getGroupId(),GenericDataFunctionReqDTO.getSubgroupId(),"0","9"));
													}
				}
		}
		List<DataFunctionRespDTO> lst = new ArrayList<DataFunctionRespDTO>();
	   try {
			
			for(Object inst : lstdata) {
				new Gson().toJson(inst);
				ObjectMapper mapper = new ObjectMapper();
				List<String> participantJsonList = mapper.readValue(new Gson().toJson(inst), new TypeReference<List<String>>(){});
				DataFunctionRespDTO data = DataFunctionRespDTO.builder()
						                 .referDate(participantJsonList.get(0))
						                 .dailyInput(participantJsonList.get(1)!=null?(!participantJsonList.get(1).equalsIgnoreCase("")?(data1.get(0).contains("%")?String.format("%."+data1.get(1)+"f",Double.valueOf(participantJsonList.get(1)))+"%":String.format("%."+data1.get(1)+"f",Double.valueOf(participantJsonList.get(1)))):""):"")
						                 .value1(participantJsonList.size()>=3?(participantJsonList.get(2)!=null?(!participantJsonList.get(2).isEmpty()?(functionData.get(0).get(0).contains("%")?String.format("%."+functionData.get(0).get(1)+"f",Double.valueOf(participantJsonList.get(2)))+"%":String.format("%."+functionData.get(0).get(1)+"f",Double.valueOf(participantJsonList.get(2)))):null):""):"")
						                 .value2(participantJsonList.size()>=4?(participantJsonList.get(3)!=null?(!participantJsonList.get(3).isEmpty()?(functionData.get(1).get(0).contains("%")?String.format("%."+functionData.get(1).get(1)+"f",Double.valueOf(participantJsonList.get(3)))+"%":String.format("%."+functionData.get(1).get(1)+"f",Double.valueOf(participantJsonList.get(3)))):null):""):"")
						                 .value3(participantJsonList.size()>=5?(participantJsonList.get(4)!=null?(!participantJsonList.get(4).isEmpty()?(functionData.get(2).get(0).contains("%")?String.format("%."+functionData.get(2).get(1)+"f",Double.valueOf(participantJsonList.get(4)))+"%":String.format("%."+functionData.get(2).get(1)+"f",Double.valueOf(participantJsonList.get(4)))):null):""):"")
							             .build();
				lst.add(data);
			}
		}
		
	
		catch(Exception ex) {
			ex.printStackTrace();
		}
		
          return lst; 
	}
	public String getMetalTableName(String yieldCurveCross, String country, String function)
	{
		return "tmp_"+yieldCurveCross+"_"+country+"_"+function;
	}
	public String getTableName(String yieldCurveCross,String factor, String country, String function)
	{
		return "tmp_"+yieldCurveCross+"_"+factor.replace("/", "")+"_"+country+"_"+function;
	}
	public List<String> getDataFormatValues(String yieldCurveCross, String country,String factor, String function)
	{
		List<String> values = new ArrayList<String>();
		if(function.equalsIgnoreCase("0"))
		{
		String dataFormat = columnConfigurationRepository.findByGroupIdAndSubgroupIdAndFactor(yieldCurveCross,country,factor.replace("yr", "")).getDataFormat();
		
		values.add(dataFormat);
		values.add(String.valueOf(dataFormat.split("%")[0].split("\\.").length>1?dataFormat.split("%")[0].split("\\.")[1].length():dataFormat.split("%")[0].split("\\.")[0].length()));
		}
		else 
			{
			String dataFormat = functionConfigurationRepository.findByGroupIdAndSubgroupIdAndFactorAndFunctionId(yieldCurveCross,country,factor.replace("yr", ""),function).getDataFormat();
			
			values.add(dataFormat!=null?dataFormat:"");
			values.add(dataFormat!=null?String.valueOf(dataFormat.split("%")[0].split("\\.").length>1?dataFormat.split("%")[0].split("\\.")[1].length():dataFormat.split("%")[0].split("\\.")[0].length()):"3");
			}
		return values;
	}
}
