package com.bourse.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.bourse.dto.DataFunctionReqDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.SelectedSearchDTO;
public class CryptosUtil {
	

	public static QueryColumnsDTO buildDynamicDataFunctionGridQuery(DataFunctionReqDTO dataFunctionReqDTO)
	{
		return null;
		
	}
	
	public static QueryColumnsDTO buildDynamicGridQuery(MainSearchFilterDTO mainSearchFilterDTO)
	{
		 String tableSchema = "bourse.";
		 List<SelectedSearchDTO> selectedSearchDTOLst =mainSearchFilterDTO.getSelectedSearchDTOlst();
		  
		 String fromDate = mainSearchFilterDTO.getFromDate();
		 String toDate = mainSearchFilterDTO.getToDate();
		 String forUsetables = "",forUseWhere = "",forUseSelect = "",forUseAnd = "";
		 String query ="",columName = "";
		 int counter=1;
		 int columnsId=1;
		 HashMap<Integer,String>  colHash= new HashMap<Integer, String>();
		 if(selectedSearchDTOLst!=null)
		 for( SelectedSearchDTO selectedSearchDTO :selectedSearchDTOLst)
		 {
				
				if(selectedSearchDTO.getGroupId() == 71) 
				{
				if(counter == 1)
				 {
					 forUseSelect = "select DATE_FORMAT(STR_TO_DATE(s"+counter+".refer_date, '%d-%m-%Y'), '%m-%d-%Y') as refer_date";
					 colHash.put(columnsId, "refer_date");
					 columnsId++;
					 
					 forUsetables = " From ";
				 }
				 
				 if(selectedSearchDTO.getSelectedValues()!=null)
				 for(String value : selectedSearchDTO.getSelectedValues())
				 {     
					 
						 if(counter == 1)
						 {
							 forUseWhere = "    where (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
							 		+ "\n            and '"+toDate+"')\n ";
							 
						 }
						 else
						 { forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
						 		    + "\n          and '"+toDate+"')\n";
						 
						 }
						 forUsetables = forUsetables + tableSchema+"tmp_audit_cry_bitcoin";
	    				 forUsetables = forUsetables + " s"+counter+" ,";
					 	 forUseSelect = forUseSelect+", \n"+ 
						                         "IFNULL(s"+counter+"."+value.split("-")[0]+", '')"+
						                         " as '"+value+"'";
					 	 colHash.put(columnsId, value);
					 	 columnsId++;
						 
						 counter = counter+1;	 
				 }
				 
				}
		else if(selectedSearchDTO.getGroupId() == 72) 
				{
				if(counter == 1)
				 {
					 forUseSelect = "select DATE_FORMAT(STR_TO_DATE(s"+counter+".refer_date, '%d-%m-%Y'), '%m-%d-%Y') as refer_date";
					 colHash.put(columnsId, "refer_date");
					 columnsId++;
					 
					 forUsetables = " From ";
				 }
				 
				 if(selectedSearchDTO.getSelectedValues()!=null)
				 for(String value : selectedSearchDTO.getSelectedValues())
				 {     
					 
						 if(counter == 1)
						 {
							 forUseWhere = "    where (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
							 		+ "\n            and '"+toDate+"')\n ";
							 
						 }
						 else
						 { forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
						 		    + "\n          and '"+toDate+"')\n";
						 
						 }
						 forUsetables = forUsetables + tableSchema+"tmp_audit_cry_ethereum";
	    				 forUsetables = forUsetables + " s"+counter+" ,";
					 	 forUseSelect = forUseSelect+", \n"+ 
						                         "IFNULL(s"+counter+"."+value.split("-")[0]+", '')"+
						                         " as '"+value+"'";
					 	 colHash.put(columnsId, value);
					 	 columnsId++;
						 
						 counter = counter+1;	 
				 }
				 
				}
				else if(selectedSearchDTO.getGroupId() == 73) 
				{
				if(counter == 1)
				 {
					 forUseSelect = "select DATE_FORMAT(STR_TO_DATE(s"+counter+".refer_date, '%d-%m-%Y'), '%m-%d-%Y') as refer_date";
					 colHash.put(columnsId, "refer_date");
					 columnsId++;
					 
					 forUsetables = " From ";
				 }
				 
				 if(selectedSearchDTO.getSelectedValues()!=null)
				 for(String value : selectedSearchDTO.getSelectedValues())
				 {     
					 
						 if(counter == 1)
						 {
							 forUseWhere = "    where (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
							 		+ "\n            and '"+toDate+"')\n ";
							 
						 }
						 else
						 { forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
						 		    + "\n          and '"+toDate+"')\n";
						 
						 }
						 forUsetables = forUsetables + tableSchema+"tmp_audit_cry_solana";
	    				 forUsetables = forUsetables + " s"+counter+" ,";
					 	 forUseSelect = forUseSelect+", \n"+ 
						                         "IFNULL(s"+counter+"."+value.split("-")[0]+", '')"+
						                         " as '"+value+"'";
					 	 colHash.put(columnsId, value);
					 	 columnsId++;
						 
						 counter = counter+1;	 
				 }
				 
				}					
						else if(selectedSearchDTO.getGroupId() == 74) 
				{
				if(counter == 1)
				 {
					 forUseSelect = "select DATE_FORMAT(STR_TO_DATE(s"+counter+".refer_date, '%d-%m-%Y'), '%m-%d-%Y') as refer_date";
					 colHash.put(columnsId, "refer_date");
					 columnsId++;
					 
					 forUsetables = " From ";
				 }
				 
				 if(selectedSearchDTO.getSelectedValues()!=null)
				 for(String value : selectedSearchDTO.getSelectedValues())
				 {     
					 
						 if(counter == 1)
						 {
							 forUseWhere = "    where (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
							 		+ "\n            and '"+toDate+"')\n ";
							 
						 }
						 else
						 { forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
						 		    + "\n          and '"+toDate+"')\n";
						 
						 }
						 forUsetables = forUsetables + tableSchema+"tmp_audit_cry_shiba";
	    				 forUsetables = forUsetables + " s"+counter+" ,";
					 	 forUseSelect = forUseSelect+", \n"+ 
						                         "IFNULL(s"+counter+"."+value.split("-")[0]+", '')"+
						                         " as '"+value+"'";
					 	 colHash.put(columnsId, value);
					 	 columnsId++;
						 
						 counter = counter+1;	 
				 }
				 
				}		
					else if(selectedSearchDTO.getGroupId() == 75) 
				{
				if(counter == 1)
				 {
					 forUseSelect = "select DATE_FORMAT(STR_TO_DATE(s"+counter+".refer_date, '%d-%m-%Y'), '%m-%d-%Y') as refer_date";
					 colHash.put(columnsId, "refer_date");
					 columnsId++;
					 
					 forUsetables = " From ";
				 }
				 
				 if(selectedSearchDTO.getSelectedValues()!=null)
				 for(String value : selectedSearchDTO.getSelectedValues())
				 {     
					 
						 if(counter == 1)
						 {
							 forUseWhere = "    where (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
							 		+ "\n            and '"+toDate+"')\n ";
							 
						 }
						 else
						 { forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
						 		    + "\n          and '"+toDate+"')\n";
						 
						 }
						 forUsetables = forUsetables + tableSchema+"tmp_audit_cry_binance";
	    				 forUsetables = forUsetables + " s"+counter+" ,";
					 	 forUseSelect = forUseSelect+", \n"+ 
						                         "IFNULL(s"+counter+"."+value.split("-")[0]+", '')"+
						                         " as '"+value+"'";
					 	 colHash.put(columnsId, value);
					 	 columnsId++;
						 
						 counter = counter+1;	 
				 }
				 
				}		
				else if(selectedSearchDTO.getGroupId() == 76) 
				{
				if(counter == 1)
				 {
					 forUseSelect = "select DATE_FORMAT(STR_TO_DATE(s"+counter+".refer_date, '%d-%m-%Y'), '%m-%d-%Y') as refer_date";
					 colHash.put(columnsId, "refer_date");
					 columnsId++;
					 
					 forUsetables = " From ";
				 }
				 
				 if(selectedSearchDTO.getSelectedValues()!=null)
				 for(String value : selectedSearchDTO.getSelectedValues())
				 {     
					 
						 if(counter == 1)
						 {
							 forUseWhere = "    where (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
							 		+ "\n            and '"+toDate+"')\n ";
							 
						 }
						 else
						 { forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
						 		    + "\n          and '"+toDate+"')\n";
						 
						 }
						 forUsetables = forUsetables + tableSchema+"tmp_audit_cry_xrp";
	    				 forUsetables = forUsetables + " s"+counter+" ,";
					 	 forUseSelect = forUseSelect+", \n"+ 
						                         "IFNULL(s"+counter+"."+value.split("-")[0]+", '')"+
						                         " as '"+value+"'";
					 	 colHash.put(columnsId, value);
					 	 columnsId++;
						 
						 counter = counter+1;	 
				 }
				 
				}								
					
				
	 }
		
		 for(int i=1; i<counter;i++)
		 {
			 if(i<counter-1)
				 forUseWhere = forUseWhere+" and s"+i+".refer_date =  s"+(i+1)+".refer_date \n";
		 }
		 if(forUsetables.substring(forUsetables.length() - 1).equalsIgnoreCase(","))
			 forUsetables = forUsetables.substring(0, forUsetables.length() - 1);
		 
		 colHash.put(columnsId,"id");
		 query = forUseSelect+",(@row_number:=@row_number + 1) AS id \n"
				 +forUsetables+", (SELECT @row_number:=0) AS t  \n"
				 +forUseWhere
				 + forUseAnd
				 +" order by STR_TO_DATE(s1.refer_date,'%d-%m-%Y') desc";
		 
		 QueryColumnsDTO queryColumnsDTO = QueryColumnsDTO.builder()
				 .colHash(colHash)
				 .query(query)
				 .build();
		return queryColumnsDTO;
	}
	public static QueryColumnsDTO buildDynamicGridQueryFourHoursData(MainSearchFilterDTO mainSearchFilterDTO)
	{
		 String tableSchema = "bourse.";
		 List<SelectedSearchDTO> selectedSearchDTOLst =mainSearchFilterDTO.getSelectedSearchDTOlst();
		  
		 String fromDate = mainSearchFilterDTO.getFromDate();
		 String toDate = mainSearchFilterDTO.getToDate();
		 String forUsetables = "",forUseWhere = "",forUseSelect = "",forUseAnd = "";
		 String query ="",columName = "";
		 int counter=1;
		 int columnsId=1;
		 HashMap<Integer,String>  colHash= new HashMap<Integer, String>();
		 if(selectedSearchDTOLst!=null)
		 for( SelectedSearchDTO selectedSearchDTO :selectedSearchDTOLst)
		 {
				
				if(selectedSearchDTO.getGroupId() == 71) 
				{
				if(counter == 1)
				 {
					 forUseSelect = "select s1.start_time as start_time";
					 colHash.put(columnsId, "start_time");
					 columnsId++;
					 
				 }
				 
				 if(selectedSearchDTO.getSelectedValues()!=null)
				 for(String value : selectedSearchDTO.getSelectedValues())
				 {     
					 
						 forUsetables = "cr_btc_high_low";
					 	 forUseSelect = forUseSelect+", \n"+ 
						                         "IFNULL(s1."+value.split("-")[0]+", '')"+
						                         " as '"+value+"'";
					 	 colHash.put(columnsId, value);
					 	 columnsId++;
						 
						 counter = counter+1;	 
				 }
				 
				}
		else if(selectedSearchDTO.getGroupId() == 72) 
				{
			if(counter == 1)
			 {
				 forUseSelect = "select s1.start_time as start_time";
				 colHash.put(columnsId, "start_time");
				 columnsId++;
				 
			 }
			 
			 if(selectedSearchDTO.getSelectedValues()!=null)
			 for(String value : selectedSearchDTO.getSelectedValues())
			 {     
				 
					 forUsetables = "cr_ethereum_high_low";
				 	 forUseSelect = forUseSelect+", \n"+ 
					                         "IFNULL(s1."+value.split("-")[0]+", '')"+
					                         " as '"+value+"'";
				 	 colHash.put(columnsId, value);
				 	 columnsId++;
					 
					 counter = counter+1;	 
			 }
			 
			}
				else if(selectedSearchDTO.getGroupId() == 73) 
				{
					if(counter == 1)
					 {
						 forUseSelect = "select s1.start_time as start_time";
						 colHash.put(columnsId, "start_time");
						 columnsId++;
						 
					 }
					 
					 if(selectedSearchDTO.getSelectedValues()!=null)
					 for(String value : selectedSearchDTO.getSelectedValues())
					 {     
						 
							 forUsetables = "cr_solana_high_low";
						 	 forUseSelect = forUseSelect+", \n"+ 
							                         "IFNULL(s1."+value.split("-")[0]+", '')"+
							                         " as '"+value+"'";
						 	 colHash.put(columnsId, value);
						 	 columnsId++;
							 
							 counter = counter+1;	 
					 }
					 
					}					
						else if(selectedSearchDTO.getGroupId() == 74) 
				{
							if(counter == 1)
							 {
								 forUseSelect = "select s1.start_time as start_time";
								 colHash.put(columnsId, "start_time");
								 columnsId++;
								 
							 }
							 
							 if(selectedSearchDTO.getSelectedValues()!=null)
							 for(String value : selectedSearchDTO.getSelectedValues())
							 {     
								 
									 forUsetables = "cr_shiba_high_low";
								 	 forUseSelect = forUseSelect+", \n"+ 
									                         "IFNULL(s1."+value.split("-")[0]+", '')"+
									                         " as '"+value+"'";
								 	 colHash.put(columnsId, value);
								 	 columnsId++;
									 
									 counter = counter+1;	 
							 }
							 
							}		
					else if(selectedSearchDTO.getGroupId() == 75) 
				{
						if(counter == 1)
						 {
							 forUseSelect = "select s1.start_time as start_time";
							 colHash.put(columnsId, "start_time");
							 columnsId++;
							 
						 }
						 
						 if(selectedSearchDTO.getSelectedValues()!=null)
						 for(String value : selectedSearchDTO.getSelectedValues())
						 {     
							 
								 forUsetables = "cr_binance_high_low";
							 	 forUseSelect = forUseSelect+", \n"+ 
								                         "IFNULL(s1."+value.split("-")[0]+", '')"+
								                         " as '"+value+"'";
							 	 colHash.put(columnsId, value);
							 	 columnsId++;
								 
								 counter = counter+1;	 
						 }
						 
						}		
				else if(selectedSearchDTO.getGroupId() == 76) 
				{
					if(counter == 1)
					 {
						 forUseSelect = "select s1.start_time as start_time";
						 colHash.put(columnsId, "start_time");
						 columnsId++;
						 
					 }
					 
					 if(selectedSearchDTO.getSelectedValues()!=null)
					 for(String value : selectedSearchDTO.getSelectedValues())
					 {     
						 
							 forUsetables = "cr_xrp_high_low";
						 	 forUseSelect = forUseSelect+", \n"+ 
							                         "IFNULL(s1."+value.split("-")[0]+", '')"+
							                         " as '"+value+"'";
						 	 colHash.put(columnsId, value);
						 	 columnsId++;
							 
							 counter = counter+1;	 
					 }
					 
					}								
					
				
	 }
		
		 for(int i=1; i<counter;i++)
		 {
			 if(i<counter-1)
				 forUseWhere = forUseWhere+" and s"+i+".start_time =  s"+(i+1)+".start_time \n";
		 }
		 if(forUsetables.substring(forUsetables.length() - 1).equalsIgnoreCase(","))
			 forUsetables = forUsetables.substring(0, forUsetables.length() - 1);
		 
		 colHash.put(columnsId,"id");
	
		 
			/*
			 * query = forUseSelect
			 * 
			 * + "        from (\r\n" + "			SELECT \r\n" +
			 * "			  DATE(start_time) AS trade_date,\r\n" +
			 * "			  -- This expression computes the period start hour (0, 4, 8, …)\r\n"
			 * +
			 * "			  CONCAT(LPAD(FLOOR(HOUR(start_time)/4)*4, 2, '0'), ':00:00') AS period,\r\n"
			 * + "			  MIN(start_time) AS start_time,\r\n" +
			 * "			  MAX(end_time) AS end_time,\r\n" + "			  \r\n" +
			 * "			  -- Get the open value from the first record of the group\r\n"
			 * + "			  (SELECT open \r\n" +
			 * "			   FROM `"+forUsetables+"` t2 \r\n" +
			 * "			   WHERE t2.start_time = MIN(t1.start_time)\r\n" +
			 * "			   LIMIT 1) AS openint,\r\n" + "			  \r\n" +
			 * "			  -- Get the close value from the last record of the group\r\n"
			 * + "			  (SELECT close \r\n" +
			 * "			   FROM  `"+forUsetables+"`  t3 \r\n" +
			 * "			   WHERE t3.end_time = MAX(t1.end_time)\r\n" +
			 * "			   LIMIT 1) AS closeint,\r\n" + "			  \r\n" +
			 * "			  MAX(high) AS high,\r\n" + "			  MIN(low) AS low,\r\n"
			 * + "			  SUM(volume) AS volume,\r\n" +
			 * "			  (SELECT marketcap\r\n" +
			 * "			FROM  `"+forUsetables+"`  t\r\n" +
			 * "			WHERE t.end_time <= MAX(t1.end_time)\r\n" +
			 * "			  AND marketcap <> 0\r\n" +
			 * "			ORDER BY t.end_time DESC\r\n" +
			 * "			LIMIT 1) AS marketcap\r\n" +
			 * "			FROM  `"+forUsetables+"`  t1\r\n" +
			 * "			GROUP BY trade_date, period\r\n" +
			 * "			ORDER BY trade_date, period)s1  \r\n" +
			 * "					WHERE  (start_time between '"+fromDate+"' " +
			 * "							 		          and '"+toDate+"')" +
			 * "					ORDER BY  start_time  DESC";
			 */
		 query = "  WITH grouped_data AS ( SELECT \r\n"
		 + "		   CONCAT( DATE(start_time), ' ',  LPAD(FLOOR(HOUR(start_time)/4)*4, 2, '0'), ':00:00' ) AS time_interval,\r\n"
				 + "				MIN(low) AS min_low,\r\n"
				 + "				MAX(high) AS max_high,\r\n"
				 + "				MIN(start_time) AS first_start_time,  -- Used for Open price\r\n"
				 + "				MAX(start_time) AS last_start_time,   -- Used for Close price\r\n"
				 + "				sum(volume) as volume\r\n"
				 + "			FROM `"+forUsetables+"`\r\n"
				 + "					WHERE  (start_time between '"+fromDate+"' "
			 	 + "							 		          and '"+toDate+"')"
				 + "			GROUP BY time_interval\r\n"
				 + "		)\r\n"
				 +  forUseSelect 
				 + "\r\n"
				 + "		   from( \r\n"
				 + "     select time_interval AS start_time,  \r\n"
				 + "			o.open as openint, \r\n"
				 + "			g.max_high as high, \r\n"
				 + "			g.min_low as low, \r\n"
				 + "			c.close as closeint,\r\n"
				 + "			mc.marketcap AS marketcap,  -- Fetch last market cap value\r\n"
				 + "			g.volume	"
				 + "		FROM grouped_data g\r\n"
				 + "		LEFT JOIN `"+forUsetables+"` o ON g.first_start_time = o.start_time  -- Fetch Open price\r\n"
				 + "		LEFT JOIN `"+forUsetables+"` c ON g.last_start_time = c.start_time   -- Fetch Close price\r\n"
				 + "		LEFT JOIN `"+forUsetables+"` mc ON g.last_start_time = mc.start_time -- Fetch last Market Cap\r\n"
				 + "		ORDER BY g.time_interval DESC) s1  ; ";
		 
		 QueryColumnsDTO queryColumnsDTO = QueryColumnsDTO.builder()
				 .colHash(colHash)
				 .query(query)
				 .build();
		return queryColumnsDTO;
	}
	
	public static List<GraphResponseDTO> removeEmptyY(List<GraphResponseDTO> graphResponseDTO) {
		  List<GraphResponseDTO> updatedGraphResponseDTO = new ArrayList<>();
		  for (GraphResponseDTO graphResponse : graphResponseDTO) {
		    String y = graphResponse.getY();
		    if (y != null && !y.isEmpty()) {
		    	updatedGraphResponseDTO.add(graphResponse);
		    }
		  }
		  return updatedGraphResponseDTO;
		}

	public static List<GraphResponseDTO> removeEmptyCryptosY(List<GraphResponseDTO> graphResponseDTO) {
		  List<GraphResponseDTO> updatedGraphResponseDTO = new ArrayList<>();
		  for (GraphResponseDTO graphResponse : graphResponseDTO) {
		    String y = graphResponse.getY();
		    if (y != null && !y.isEmpty()) {
		    	updatedGraphResponseDTO.add(graphResponse);
		    }
		  }
		  return updatedGraphResponseDTO;
		}
	public static List<GraphResponseDTO> removeReplaceEmptyValueWithNull(List<GraphResponseDTO> graphResponseDTO) {
		  List<GraphResponseDTO> updatedGraphResponseDTO = new ArrayList<>();
		  for (GraphResponseDTO graphResponse : graphResponseDTO) {
		    String y = graphResponse.getY();
		    if ( y != null && y.isEmpty()) {
		    		graphResponse.setY(null);
		    	updatedGraphResponseDTO.add(graphResponse);
		    }else
		    {
		    	updatedGraphResponseDTO.add(graphResponse);
		    }
		  }
		  return updatedGraphResponseDTO;
		}
	public static List<GraphResponseDTO> removeReplaceEmptyValueCryptosWithNull(List<GraphResponseDTO> graphResponseDTO) {
		  List<GraphResponseDTO> updatedGraphResponseDTO = new ArrayList<>();
		  for (GraphResponseDTO graphResponseCryptosDTO : graphResponseDTO) {
		    String y = graphResponseCryptosDTO.getY();
		    if ( y != null && y.isEmpty()) {
		    	graphResponseCryptosDTO.setY(null);
		    	updatedGraphResponseDTO.add(graphResponseCryptosDTO);
		    }else
		    {
		    	updatedGraphResponseDTO.add(graphResponseCryptosDTO);
		    }
		  }
		  return updatedGraphResponseDTO;
		}
}


