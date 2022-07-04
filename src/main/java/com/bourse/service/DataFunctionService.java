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

import com.bourse.dto.DataFunctionReqDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.repositories.ColumnConfigurationRepository;
import com.bourse.repositories.DataFunctionRepository;
import com.bourse.util.SovereignUtil;

@Service
public class DataFunctionService {
	
	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	DataFunctionRepository dataFunctionRepository;
	@Autowired
	ColumnConfigurationRepository columnConfigurationRepository;
	
	
	public HashMap<String,List> getGridDataFunction(DataFunctionReqDTO dataFunctionReqDTO) {
	      QueryColumnsDTO queryColumnsDTO = SovereignUtil.buildDynamicDataFunctionGridQuery(dataFunctionReqDTO);
		  String queryStr = queryColumnsDTO.getQuery();
		  System.out.println("queryStr:--------------: \n\n"+queryStr+
		  "\n--------------------------"); HashMap<Integer,String> colHash= new
		  HashMap<Integer, String>(); colHash = queryColumnsDTO.getColHash();
		  
		  
		  StoredProcedureQuery query = this.entityManager.createStoredProcedureQuery("GetDynnamicGridData");
		  query.registerStoredProcedureParameter("sqlQuery", String.class,
		  ParameterMode.IN); query.setParameter("sqlQuery",queryStr );
		  
		  List<Object[]> lstdata = query.getResultList();
		  
		  
		  int i=1;
		  HashMap<String,List> hashData = new HashMap<String, List>();
		  HashMap<String,String> hashRows = new HashMap<String, String>();
		  List lstRowsDt = new ArrayList<String>(); 
		  List lstRowsConfig = new ArrayList<String>(); 
		  int id=1; 
		  for(Object[] obj : lstdata) { 
			  for(Object dataIter :obj) { //
		  System.out.println("i: "+i+" colHash.get(i): "+colHash.get(i)
		  +" dataIter.toString(): "+dataIter.toString());
		  
		  if(colHash.get(i).equals("id")) hashRows.put(colHash.get(i),
		  String.valueOf(id)); else hashRows.put(colHash.get(i),
		  String.valueOf(dataIter)); i++; } 
			  lstRowsDt.add(hashRows); hashRows = new HashMap<String, String>();
			  i=1; id = id+1; 
			  } 
		  hashData.put("rows", lstRowsDt);// lstRowsDt
		 
		  hashData.put("columns", lstRowsConfig); 
		  return hashData;
	}

}
