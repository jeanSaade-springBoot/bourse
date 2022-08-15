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
	
	// List<DataFunctionRespDTO> 
	public List<DataFunctionRespDTO> getGridDataFunction(DataFunctionReqDTO dataFunctionReqDTO) {
		
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
		List<DataFunctionRespDTO> data = getListDataFunctionFromProcedure(buildDyamicQuery(tableNames,dataFunctionReqDTO),dataFunctionReqDTO);
		return data;
	    
	}
	public String buildDyamicQuery(List<String> tableNames,DataFunctionReqDTO dataFunctionReqDTO)
	{
		String query="select t.refer_date,";
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
	public List<DataFunctionRespDTO> getListDataFunctionFromProcedure(String queryStr,DataFunctionReqDTO dataFunctionReqDTO)
	{
		javax.persistence.Query query = entityManager.createNativeQuery(queryStr);
		List<Object> lstdata = query.getResultList();   
		List<String> data1=getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"0");
		List<List<String>> functionData = new ArrayList<List<String>>();
		
		for (int i = 0; i < dataFunctionReqDTO.getFunctions().length; i++) {
			if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("100D"))
			{
				functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"1"));
			}else 
				if(dataFunctionReqDTO.getFunctions()[i].equalsIgnoreCase("200D"))
				{
					functionData.add(getDataFormatValues(String.valueOf(GroupEnum.getGroupIdByName(dataFunctionReqDTO.getYieldCurveCross())),dataFunctionReqDTO.getCountry(),dataFunctionReqDTO.getFactor().replace("yr", ""),"2"));
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
						                 .value1(participantJsonList.size()>=3?(functionData.get(0).get(0).contains("%")?String.format("%."+functionData.get(0).get(1)+"f",Double.valueOf(participantJsonList.get(2)))+"%":String.format("%."+functionData.get(0).get(1)+"f",Double.valueOf(participantJsonList.get(2)))):null)
						                 .value2(participantJsonList.size()>=4?participantJsonList.get(3):null)
						                 .value3(participantJsonList.size()>=5?participantJsonList.get(4):null)
							             .build();
				lst.add(data);
			}
		}
		
	
		catch(Exception ex) {
			ex.printStackTrace();
		}
		
          return lst; 
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
		values.add(String.valueOf(dataFormat.split("%")[0].split("\\.")[1].length()));
		}
		else 
			{
			String dataFormat = functionConfigurationRepository.findByGroupIdAndSubgroupIdAndFactorAndFunctionId(yieldCurveCross,country,factor.replace("yr", ""),function).getDataFormat();
			values.add(dataFormat!=null?dataFormat:"");
			values.add(dataFormat!=null?String.valueOf(dataFormat.split("%")[0].split("\\.")[1].length()):"3");
			}
		return values;
	}
}
