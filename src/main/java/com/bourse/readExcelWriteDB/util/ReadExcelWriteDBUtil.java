package com.bourse.readExcelWriteDB.util;

import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.web.multipart.MultipartFile;

import com.bourse.authsecurity.enums.FailureEnum;
import com.bourse.authsecurity.exception.BadRequestException;
import com.bourse.readExcelWriteDB.dto.DataDTO;

public class ReadExcelWriteDBUtil {

   private static SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
   
   public static List<DataDTO> readExcelFile(MultipartFile file, String dateIndex, String valueIndex) {
	   
       List<DataDTO> rowData = new ArrayList<>();
	   
	    try { 
		   InputStream fileStream = file.getInputStream();
	       Workbook workbook = WorkbookFactory.create(fileStream);
	
	       Sheet sheet = workbook.getSheetAt(0);
	       DataFormatter dataFormatter = new DataFormatter();
	       int i = 1;
	       for (Row row : sheet) {

	    	   i++;
	           // list to store data from each row
	           String date = null,value = null, columnType=null;
	           // iterate over the columns
	           for (Cell cell : row) {
	        	   if(!cell.getCellType().name().equalsIgnoreCase("BLANK"))
	        	   { 
	        		   System.out.println("cell Type: "+cell.getCellType().name()+" --- cell Index :"+cell.getColumnIndex()+" --- cell address : "+cell.getAddress()+" --- cell row index : "+cell.getRowIndex());
	        		   
	        		   if(cell.getCellType().name().equalsIgnoreCase("NUMERIC"))
	        		   {   
	        			   if(String.valueOf(cell.getColumnIndex()).equalsIgnoreCase(dateIndex))
	        				{
	        				 date=String.valueOf(transformNumericDate(cell.getNumericCellValue()));
	        				 System.out.println("---Date:"+date);
	        				}
	        			 else if (String.valueOf(cell.getColumnIndex()).equalsIgnoreCase(valueIndex))
	        			   {   String cellValue = dataFormatter.formatCellValue(cell);
		        		        if (cellValue.endsWith("%")) 
		        		        	value= String.valueOf(cell.getNumericCellValue()*100);
		        		        else
		        		        	value= String.valueOf(cell.getNumericCellValue());
		        		        System.out.println("---value:"+value);
	        			   }
	        			 
	        		   }
		        	  
	    	    	   if(i>251) {
	    	    		   throw new BadRequestException("EXCEL DATA ROW OVER 250", FailureEnum.EXCEL_DATA_ROW_OVER_250, "ReadExcelWriteDBUtil");
	    	    	   }
	        		   
	        	   }
	        	   
	           }
	           if (date!=null)
	           {
	        	 DataDTO dataDto = DataDTO.builder().date(date).value(value).build();
	        	 rowData.add(dataDto); 
	           }       

	    	   
	    	   
       }
		fileStream.close();
	  } catch (IOException e) {
		e.printStackTrace();
	}

       return rowData;
   }

   public static String transformNumericDate(double numericDate) {
     Date date = org.apache.poi.ss.usermodel.DateUtil.getJavaDate(numericDate);
     return dateFormat.format(date);
   }

public static String getSubgroupCellIndex(String groupId, String subGroupId) {
	 
		return null;
	}
}
