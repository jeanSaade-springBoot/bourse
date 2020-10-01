package com.bourse.util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.bourse.domain.SovereignData;

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

}
