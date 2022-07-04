package com.bourse.util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import com.bourse.domain.SovereignData;
import com.bourse.domain.SovereignDataCorrected;
import com.bourse.dto.DataFunctionReqDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.SearchFilterDTO;
import com.bourse.dto.SovereignYiledCurveSearchDTO;
import com.bourse.dto.SoveriegnCrossSearchDTO;
import com.bourse.enums.CrossCountryEnum;
import com.bourse.enums.CurvesEnum;
import com.bourse.enums.SubGroupEnum;

public class SovereignUtil {
	
	public static List<SovereignData> buildExcelData(String excelLines)
	{
		 List<SovereignData> sovereignDataList = new ArrayList();
		 
		 String[] lines = excelLines.split("\n");
		    
	     ArrayList<String> usaValues = new ArrayList<String>();
	     ArrayList<String> gerValues = new ArrayList<String>();
	     ArrayList<String> fraValues = new ArrayList<String>();
	     ArrayList<String> ukkValues = new ArrayList<String>();
	     ArrayList<String> itaValues = new ArrayList<String>();
	     ArrayList<String> spnValues = new ArrayList<String>();
	     
	     for(String st : lines)
	     {
	    	 String[] strColumn =  st.split("\t");
	    	 usaValues.add(strColumn[0]);
	    	 gerValues.add(strColumn[1]);
	    	 fraValues.add(strColumn[2]);
	    	 ukkValues.add(strColumn[3]);
	    	 itaValues.add(strColumn[4]);
	    	 spnValues.add(strColumn[5]);
	     }

    	 SovereignData sovereignUSAData = SovereignData.builder().thirteeYrFactor(usaValues.get(0))
									 				.tenYrFactor(usaValues.get(1))
									 				.fiveYrFactor(usaValues.get(2))
									 				.twoYrFactor(usaValues.get(3))
									 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
									 				.subgroupId((long) 1)
									 				.build();
    	 
    	 SovereignData sovereignGERData = SovereignData.builder().thirteeYrFactor(gerValues.get(0))
	 				.tenYrFactor(gerValues.get(1))
	 				.fiveYrFactor(gerValues.get(2))
	 				.twoYrFactor(gerValues.get(3))
	 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
	 				.subgroupId((long) 2)
	 				.build();
    	 
    	 SovereignData sovereignFRAData = SovereignData.builder().thirteeYrFactor(fraValues.get(0))
	 				.tenYrFactor(fraValues.get(1))
	 				.fiveYrFactor(fraValues.get(2))
	 				.twoYrFactor(fraValues.get(3))
	 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
	 				.subgroupId((long) 3)
	 				.build();
    	 
    	 SovereignData sovereignUKKData = SovereignData.builder().thirteeYrFactor(ukkValues.get(0))
	 				.tenYrFactor(ukkValues.get(1))
	 				.fiveYrFactor(ukkValues.get(2))
	 				.twoYrFactor(ukkValues.get(3))
	 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
	 				.subgroupId((long) 4)
	 				.build();
    	 
    	 SovereignData sovereignITAData = SovereignData.builder().thirteeYrFactor(itaValues.get(0))
	 				.tenYrFactor(itaValues.get(1))
	 				.fiveYrFactor(itaValues.get(2))
	 				.twoYrFactor(itaValues.get(3))
	 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
	 				.subgroupId((long) 5)
	 				.build();
    	 
    	 SovereignData sovereignSPNData = SovereignData.builder().thirteeYrFactor(spnValues.get(0))
	 				.tenYrFactor(spnValues.get(1))
	 				.fiveYrFactor(spnValues.get(2))
	 				.twoYrFactor(spnValues.get(3))
	 				.referDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()))
	 				.subgroupId((long) 6)
	 				.build();
    	 
    	 sovereignDataList.add(sovereignUSAData);
    	 sovereignDataList.add(sovereignGERData);
    	 sovereignDataList.add(sovereignFRAData);
    	 sovereignDataList.add(sovereignUKKData);
    	 sovereignDataList.add(sovereignITAData);
    	 sovereignDataList.add(sovereignSPNData);
		 
		 return sovereignDataList;
	}
	
	public static SovereignData buildUpdateObject(SovereignData originalObject,SovereignData sovereignData)
	{
		originalObject.setReferDate(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()));
		originalObject.setFiveYrFactor(sovereignData.getFiveYrFactor());
		originalObject.setTenYrFactor(sovereignData.getTenYrFactor());
		originalObject.setThirteeYrFactor(sovereignData.getThirteeYrFactor());
		originalObject.setTwoYrFactor(sovereignData.getTwoYrFactor());
		originalObject.setSubgroupId(sovereignData.getSubgroupId());
		return originalObject;
	}
	
	public static SovereignDataCorrected buildUpdateObjectCorrected(SovereignDataCorrected originalObject,SovereignDataCorrected sovereignData)
	{
		originalObject.setReferDate(sovereignData.getReferDate());
		originalObject.setYieldFactor(sovereignData.getYieldFactor());
		originalObject.setYieldValueFRANCE(sovereignData.getYieldValueFRANCE());
		originalObject.setYieldValueGERMANY(sovereignData.getYieldValueGERMANY());
		originalObject.setYieldValueITALY(sovereignData.getYieldValueITALY());
		originalObject.setYieldValueSPAIN(sovereignData.getYieldValueSPAIN());
		originalObject.setYieldValueUK(sovereignData.getYieldValueUK());
		originalObject.setYieldValueUSA(sovereignData.getYieldValueUSA());
		return originalObject;
	}
	
	
	public static QueryColumnsDTO buildDynamicDataFunctionGridQuery(DataFunctionReqDTO dataFunctionReqDTO)
	{
		return null;
		
	}
	
	public static QueryColumnsDTO buildDynamicGridQuery(SearchFilterDTO searchFilterDTO,boolean onServer)
	{
		 String tableSchema = onServer==true?"":"bourse.";
		 List<SovereignYiledCurveSearchDTO> sovereignYiledCurveSearchDTOlst =searchFilterDTO.getSovereignYiledCurveSearchDTOlst();
		 List<SoveriegnCrossSearchDTO> soveriegnCrossSearchDTOlst =searchFilterDTO.getSovereignCrossSearchDTOlst();
		 
		 String fromDate = searchFilterDTO.getFromDate();
		 String toDate = searchFilterDTO.getToDate();
		 String forUsetables = "",forUseWhere = "",forUseSelect = "";
		 String query ="",columName = "";
		 int counter=1;
		 int columnsId=1;
		 HashMap<Integer,String>  colHash= new HashMap<Integer, String>();
		 if(sovereignYiledCurveSearchDTOlst!=null)
		 for( SovereignYiledCurveSearchDTO curveYieldInst :sovereignYiledCurveSearchDTOlst)
		 {
			 if(counter == 1)
			 {
				 forUseSelect = "select DATE_FORMAT(STR_TO_DATE(s"+counter+".refer_date, '%d-%m-%Y'), '%m-%d-%Y') as refer_date";
				 colHash.put(columnsId, "refer_date");
				 columnsId++;
				 
				 forUsetables = " From ";
			 }
			 
			 if(curveYieldInst.getYieldLst()!=null)
			 for(String yield : curveYieldInst.getYieldLst())
			 {
					 if(counter == 1)
					 {
						 forUseWhere = "    where (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
						 		+ "\n            and '"+toDate+"' and s"+counter+".factor = '"+yield+"')\n";
					 }
					 else
						 forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
					 		+ "\n          and '"+toDate+"' and s"+counter+".factor = '"+yield+"')\n";
					 
					 
					 forUsetables = forUsetables + tableSchema+"tmp_audit_yields ";
    				 forUsetables = forUsetables + " s"+counter+" ,";
				 	 forUseSelect = forUseSelect+", \n"+ 
					                         " s"+counter+"."+SubGroupEnum.getCountryBySubGroupID(curveYieldInst.getGroupId()) +
							         " as '"+SubGroupEnum.getCountryBySubGroupID(curveYieldInst.getGroupId())+"_"+yield+"'";
				 	colHash.put(columnsId, SubGroupEnum.getCountryBySubGroupID(curveYieldInst.getGroupId())+"_"+yield);
				 	 columnsId++;
					 
					 counter = counter+1;	 
			 }
			 
			 if(curveYieldInst.getCurveLst()!=null)
			 for(String curv : curveYieldInst.getCurveLst())
			 {
					 if(counter == 1)
					 {
						 forUseWhere = "    where (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
						 		+ "\n            and '"+toDate+"' and s"+counter+".factor = '"+curv+"')\n";
					 }
					 else
						 forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
					 		+ "\n          and '"+toDate+"' and s"+counter+".factor = '"+curv+"')\n";
					 
					 
					 forUsetables = forUsetables + tableSchema+"tmp_audit_curve ";
					 forUsetables = forUsetables + " s"+counter+" ,";
					 forUseSelect = forUseSelect+", \n"+ " s"+counter+"."+SubGroupEnum.getCountryBySubGroupID(curveYieldInst.getGroupId()) +
							         " as '"+SubGroupEnum.getCountryBySubGroupID(curveYieldInst.getGroupId())+"_"+curv+"'";
					 colHash.put(columnsId, SubGroupEnum.getCountryBySubGroupID(curveYieldInst.getGroupId())+"_"+curv);
					 columnsId++;
					 counter = counter+1;	 
			 }
			 

		 }
		 
		 if(soveriegnCrossSearchDTOlst!=null)
		 for( SoveriegnCrossSearchDTO crossInst :soveriegnCrossSearchDTOlst)
		 {
			 if(counter == 1)
			 {
				 forUseSelect = "select  s"+counter+".refer_date ";
				 colHash.put(columnsId, "refer_date");
				 columnsId++;
				 forUsetables = " From ";
			 }
			 if(crossInst.getCrossGroupValue()!=null)
			 for(String yield : crossInst.getCrossGroupValue())
			 {
					 if(counter == 1)
					 {
						 forUseWhere = "    where (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
						 		+ "\n            and '"+toDate+"' and s"+counter+".factor = '"+yield+"') \n";
					 }
					 else
						 forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
					 		+ "\n          and '"+toDate+"' and s"+counter+".factor = '"+yield+"') \n";
					 
					 
					 forUsetables = forUsetables + tableSchema+"tmp_audit_cross ";
					 forUsetables = forUsetables + " s"+counter+" ,";
					 forUseSelect = forUseSelect+", \n"+ " s"+counter+".`"+CrossCountryEnum.getCrossByID(crossInst.getCrossGroupId()) +
							         "` as '"+CrossCountryEnum.getCrossByID(crossInst.getCrossGroupId())+"_"+yield+"'";
					 colHash.put(columnsId, CrossCountryEnum.getCrossByID(crossInst.getCrossGroupId())+"_"+yield);
					 columnsId++;
					 counter = counter+1;	 
			 }
			 
			 

		 }
		 
		 for(int i=1; i<counter;i++)
		 {
			 if(i<counter-1)
				 forUseWhere = forUseWhere+"            and s"+i+".refer_date =  s"+(i+1)+".refer_date \n";
		 }
		 if(forUsetables.substring(forUsetables.length() - 1).equalsIgnoreCase(","))
			 forUsetables = forUsetables.substring(0, forUsetables.length() - 1);
		 
		 colHash.put(columnsId,"id");
		 query = forUseSelect+",(@row_number:=@row_number + 1) AS id \n"
				 +forUsetables+", (SELECT @row_number:=0) AS t  \n"
				 +forUseWhere
				 +" order by STR_TO_DATE(s1.refer_date,'%d-%m-%Y') desc";
		 
		 QueryColumnsDTO queryColumnsDTO = QueryColumnsDTO.builder()
				 .colHash(colHash)
				 .query(query)
				 .build();
		return queryColumnsDTO;
	}

}
