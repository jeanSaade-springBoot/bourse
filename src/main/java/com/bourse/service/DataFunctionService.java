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
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.bourse.dto.DataFunctionReqDTO;
import com.bourse.dto.DataFunctionRespDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.MetalsDataFunctionReqDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.enums.FunctionEnum;
import com.bourse.enums.GroupEnum;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.DataFunctionRepository;
import com.bourse.repositories.FunctionConfigurationRepository;
import com.bourse.util.SovereignUtil;
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
	AdminService adminService;
	
	// List<DataFunctionRespDTO> 
	public List<DataFunctionRespDTO> getGridDataFunction(DataFunctionReqDTO dataFunctionReqDTO) {
		boolean hasData= adminService.getData();
	      if(!hasData)
			return null;   
		List<String> tableNames = new ArrayList<String>();
		for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
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
		List<DataFunctionRespDTO> data = getListDataFunctionFromProcedure(buildDyamicQuery(tableNames,dataFunctionReqDTO),1,dataFunctionReqDTO,null);
		return data;
	    
	}
	public List<DataFunctionRespDTO> getGridMetalsDataFunction(MetalsDataFunctionReqDTO dataFunctionReqDTO) {
		boolean hasData= adminService.getData();
	      if(!hasData)
			return null;   
		List<String> tableNames = new ArrayList<String>();
		for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
			StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("metals_function_grid_main",GraphResponseDTO.class);
			query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
			query.setParameter("groupId",dataFunctionReqDTO.getGroupId() );
	
			query.registerStoredProcedureParameter("subGroupId", String.class, ParameterMode.IN);
			query.setParameter("subGroupId",dataFunctionReqDTO.getSubgroupId());
			
			query.registerStoredProcedureParameter("functionId", String.class, ParameterMode.IN);
			query.setParameter("functionId",String.valueOf(FunctionEnum.getFunctionIdByDesc(dataFunctionReqDTO.getFunctions()[i])));
			query.execute();
			tableNames.add(getMetalTableName(dataFunctionReqDTO.getGroupId(),dataFunctionReqDTO.getSubgroupId(),dataFunctionReqDTO.getFunctions()[i]));
		}
		List<DataFunctionRespDTO> data = getListDataFunctionFromProcedure(buildDyamicQueryForMetals(tableNames,dataFunctionReqDTO),2,null,dataFunctionReqDTO);
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
	
	public String buildDyamicQueryForMetals(List<String> tableNames,MetalsDataFunctionReqDTO dataFunctionReqDTO)
	{
		String query="select DATE_FORMAT(STR_TO_DATE(t.refer_date,'%d-%m-%Y'), '%d-%b-%Y') as refer_date,";
		String queryValues="", queryTables="",  queryAnd="";
		if (dataFunctionReqDTO.getGroupId().equalsIgnoreCase("6"))
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
				}
		return query;
	}
	
	public List<DataFunctionRespDTO> getListDataFunctionFromProcedure(String queryStr,int assetId, DataFunctionReqDTO dataFunctionReqDTO, MetalsDataFunctionReqDTO metalsDataFunctionReqDTO)
	{
		javax.persistence.Query query = entityManager.createNativeQuery(queryStr);
		List<Object> lstdata = query.getResultList();   
		List<String> data1=null;
		List<List<String>> functionData = new ArrayList<List<String>>();
		if (assetId==1)
		{
			data1=getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"0");
		
		for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
			if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("100D"))
			{
				functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"1"));
			}else 
				if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("200D"))
				{
					functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"2"));
				}else 
					if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("DCP"))
					{
						functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"3"));
					}else 
						if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("DCI"))
						{
							functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"4"));
						}else 
							if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("WCP"))
							{
								functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"5"));
							}else 
								if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("WCI"))
								{
									functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"6"));
								}else 
									if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("10YP"))
									{
										functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"7"));
									}else 
										if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("20YP"))
										{
											functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"8"));
										}else 
											if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("CP"))
											{
												functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"9"));
											}
			}
		}
		else if (assetId==2)
		{
			data1=getDataFormatValues(metalsDataFunctionReqDTO.getGroupId(),metalsDataFunctionReqDTO.getSubgroupId(),"0","0");
			
				for (int i = 0; i < metalsDataFunctionReqDTO.getFunctions().length; i++) {
					if(metalsDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("100D"))
					{
						functionData.add(getDataFormatValues(metalsDataFunctionReqDTO.getGroupId(),metalsDataFunctionReqDTO.getSubgroupId(),"0","1"));
					}else 
						if(metalsDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("200D"))
						{
							functionData.add(getDataFormatValues(metalsDataFunctionReqDTO.getGroupId(),metalsDataFunctionReqDTO.getSubgroupId(),"0","2"));
						}else 
							if(metalsDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("DCP"))
							{
								functionData.add(getDataFormatValues(metalsDataFunctionReqDTO.getGroupId(),metalsDataFunctionReqDTO.getSubgroupId(),"0","3"));
							}else 
								if(metalsDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("DCI"))
								{
									functionData.add(getDataFormatValues(metalsDataFunctionReqDTO.getGroupId(),metalsDataFunctionReqDTO.getSubgroupId(),"0","4"));
								}else 
									if(metalsDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("WCP"))
									{
										functionData.add(getDataFormatValues(metalsDataFunctionReqDTO.getGroupId(),metalsDataFunctionReqDTO.getSubgroupId(),"0","5"));
									}else 
										if(metalsDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("WCI"))
										{
											functionData.add(getDataFormatValues(metalsDataFunctionReqDTO.getGroupId(),metalsDataFunctionReqDTO.getSubgroupId(),"0","6"));
										}else 
											if(metalsDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("10YP"))
											{
												functionData.add(getDataFormatValues(metalsDataFunctionReqDTO.getGroupId(),metalsDataFunctionReqDTO.getSubgroupId(),"0","7"));
											}else 
												if(metalsDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("20YP"))
												{
													functionData.add(getDataFormatValues(metalsDataFunctionReqDTO.getGroupId(),metalsDataFunctionReqDTO.getSubgroupId(),"0","8"));
												}else 
													if(metalsDataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("CP"))
													{
														functionData.add(getDataFormatValues(metalsDataFunctionReqDTO.getGroupId(),metalsDataFunctionReqDTO.getSubgroupId(),"0","9"));
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
						                 .dailyInput(data1.get(0).contains("%")?String.format("%."+data1.get(1)+"f",Double.valueOf(participantJsonList.get(1)))+"%":String.format("%."+data1.get(1)+"f",Double.valueOf(participantJsonList.get(1))))
						                 .value1(participantJsonList.size()>=3?(!participantJsonList.get(2).isEmpty()?(functionData.get(0).get(0).contains("%")?String.format("%."+functionData.get(0).get(1)+"f",Double.valueOf(participantJsonList.get(2)))+"%":String.format("%."+functionData.get(0).get(1)+"f",Double.valueOf(participantJsonList.get(2)))):null):"")
						                 .value2(participantJsonList.size()>=4?(!participantJsonList.get(3).isEmpty()?(functionData.get(1).get(0).contains("%")?String.format("%."+functionData.get(1).get(1)+"f",Double.valueOf(participantJsonList.get(3)))+"%":String.format("%."+functionData.get(1).get(1)+"f",Double.valueOf(participantJsonList.get(3)))):null):"")
						                 .value3(participantJsonList.size()>=5?(!participantJsonList.get(4).isEmpty()?(functionData.get(2).get(0).contains("%")?String.format("%."+functionData.get(2).get(1)+"f",Double.valueOf(participantJsonList.get(4)))+"%":String.format("%."+functionData.get(2).get(1)+"f",Double.valueOf(participantJsonList.get(4)))):null):"")
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
