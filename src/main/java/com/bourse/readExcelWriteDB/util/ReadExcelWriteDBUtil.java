package com.bourse.readExcelWriteDB.util;

import java.io.IOException;
import java.io.InputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

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
   private static SimpleDateFormat inputDateFormat = new SimpleDateFormat("dd-MMM-yy");

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
	           String date = null,value = null, columnType=null;
	           for (Cell cell : row) {
	        	   if(!cell.getCellType().name().equalsIgnoreCase("BLANK"))
	        	   { 
	        		 if(cell.getCellType().name().equalsIgnoreCase("NUMERIC"))
	        		   {   
	        			   if(String.valueOf(cell.getColumnIndex()).equalsIgnoreCase(dateIndex))
	        				{
	        				 date=String.valueOf(transformNumericDate(cell.getNumericCellValue()));
	        				}
	        			 else if (String.valueOf(cell.getColumnIndex()).equalsIgnoreCase(valueIndex))
	        			   {   String cellValue = dataFormatter.formatCellValue(cell);
		        		        if (cellValue.endsWith("%")) 
		        		        	value= String.valueOf(cell.getNumericCellValue()*100);
		        		        else
		        		        	value= String.valueOf(cell.getNumericCellValue());
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

   public static Object[][] readExcel(MultipartFile file) throws IOException {
       try (InputStream fileStream = file.getInputStream();
            Workbook workbook = WorkbookFactory.create(fileStream)) {

           Sheet sheet = workbook.getSheetAt(0);
           int rowCount = sheet.getPhysicalNumberOfRows();
           int columnCount = sheet.getRow(1).getPhysicalNumberOfCells();

           Object[][] data = new Object[rowCount][columnCount];

           for (int i = 0; i < rowCount; i++) {
        	   		Row row = sheet.getRow(i);
	                for (int j = 0; j < columnCount; j++) {
	                    Cell cell = row.getCell(j);
	                    data[i][j] = getCellValueAsString(cell);
                }  
              
           }

           return data;
       }
   }

   private static String getCellValueAsString(Cell cell) {
       if (cell == null) {
           return "";
       }

       DataFormatter dataFormatter = new DataFormatter();
       return dataFormatter.formatCellValue(cell);
   }
   public static String transformNumericDate(double numericDate) {
     Date date = org.apache.poi.ss.usermodel.DateUtil.getJavaDate(numericDate);
     return dateFormat.format(date);
   }

public static String getSubgroupCellIndex(String groupId, String subGroupId) {
	 
		return null;
	}
public static Object[][] splitArray(Object[] dataArray, int elementsInSubarray) {
	  Object[][] result = null;
	try {
	    int numberOfSubarrays = dataArray.length / elementsInSubarray;
	
	    result = new Object[numberOfSubarrays][elementsInSubarray + 1];
	    for (int i = 0; i < numberOfSubarrays; i++) {
	    	
	        String referDate = dataArray[0].toString();
	        Date inputDate = inputDateFormat.parse(referDate);
	        String outputDateStr = dateFormat.format(inputDate);
	        
	        for (int j = 0; j <= elementsInSubarray; j++) {
	        	if(j==0)
	        	{
	        		result[i][j] = outputDateStr;
	        	}else 
	            result[i][j] = dataArray[i * elementsInSubarray + j];
	        }
	    }
	} catch (ParseException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
    return result;
}
public static Object[][] splitArrayMacro(Object[] dataArray, int elementsInSubarray) {
	  Object[][] result = null;
	try {
	    int numberOfSubarrays = dataArray.length / elementsInSubarray;
	
		result = new Object[numberOfSubarrays][elementsInSubarray + 1];
		for (int i = 0; i < numberOfSubarrays; i++) {

			String referDate = "01-" + dataArray[0].toString();
			
			 DateTimeFormatter inputFormatter = new DateTimeFormatterBuilder()
		                .parseCaseInsensitive()
		                .appendPattern("dd-MMM-uu")
		                .toFormatter(Locale.ENGLISH);
		            
		            // Parse the date using the custom formatter
		            LocalDate parsedDate = LocalDate.parse(referDate, inputFormatter);
		            
			DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
			String formattedDate = parsedDate.format(outputFormatter);

			String outputDateStr = formattedDate;
			for (int j = 0; j <= elementsInSubarray; j++) {
				if (j == 0) {
					result[i][j] = outputDateStr;
				} else
					result[i][j] = dataArray[i * elementsInSubarray + j];
			}
	    }
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
  return result;
}
public static int[] getLongSkewsGroupId(int number) {
    if (number == 0 ) 
        return new int[]{25, 10};
      else if (number == 1) 
        return  new int[]{25, 11};
      else if (number == 2 ) 
        return new int[]{26, 10};
      else if (number == 3) 
        return  new int[]{26, 11};    
      else if (number == 4 ) 
          return new int[]{27, 10};
        else if (number == 5) 
          return  new int[]{27, 11};  
        else if (number == 6 ) 
            return new int[]{28, 10};
          else if (number == 7) 
            return  new int[]{28, 11};  
          else if (number == 8 ) 
              return new int[]{29, 10};
            else if (number == 9) 
              return  new int[]{29, 11};  
        else   
          return  new int[]{0, 0};  
}
public static int[] getShortSkewsGroupId(int number) {
	    if (number == 0 ) 
	        return new int[]{30, 12};
	      else if (number == 1) 
	        return  new int[]{30, 10};
	      else if (number == 2 ) 
	        return new int[]{30, 13};
	      else if (number == 3) 
	        return  new int[]{31, 12};    
	      else if (number == 4 ) 
	          return new int[]{31, 10};
	        else if (number == 5) 
	          return  new int[]{31, 13}; 
	        else   
	          return  new int[]{0, 0};  
	}
public static int getMacroFactorId(int number) {
	if (number == 1)
		return 14 ;
	else if (number == 2)
		return 15;
	else if (number == 3)
		return 16;
	else
          return 0;  
}
public static <T> String[] findMinMaxDatesAsString(List<T> dataList, String dateFieldName) {
    DateFormat inputDateFormat = new SimpleDateFormat("dd-MM-yyyy"); 
    DateFormat outputDateFormat = new SimpleDateFormat("yyyy-MM-dd"); 

    Date minDate = null;
    Date maxDate = null;

    try {
        T firstObject = dataList.get(0);

        java.lang.reflect.Field dateField = firstObject.getClass().getDeclaredField(dateFieldName);
        dateField.setAccessible(true);
        minDate = inputDateFormat.parse((String) dateField.get(firstObject));
        maxDate = inputDateFormat.parse((String) dateField.get(firstObject));

    } catch (ParseException | IllegalAccessException | NoSuchFieldException e) {
        e.printStackTrace();
    }

    for (T data : dataList) {
        try {
            java.lang.reflect.Field dateField = data.getClass().getDeclaredField(dateFieldName);
            dateField.setAccessible(true);
            Date currentDate = inputDateFormat.parse((String) dateField.get(data));
            if (currentDate.before(minDate)) {
                minDate = currentDate;
            }
            if (currentDate.after(maxDate)) {
                maxDate = currentDate;
            }
        } catch (ParseException | IllegalAccessException | NoSuchFieldException e) {
            e.printStackTrace();
        }
    }

    String minDateString = outputDateFormat.format(minDate);
    String maxDateString = outputDateFormat.format(maxDate);

    return new String[]{minDateString, maxDateString};
}
}
