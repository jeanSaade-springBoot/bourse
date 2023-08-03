package com.bourse.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.bourse.dto.DataFunctionReqDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.MainSearchFilterDTO;
import com.bourse.dto.QueryColumnsDTO;
import com.bourse.dto.SelectedSearchDTO;
import com.bourse.enums.PreciousSubGroupEnum;
public class LiquidityUtil {
	

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
		 String forUsetables = "",forUseWhere = "",forUseSelect = "";
		 String query ="",columName = "";
		 int counter=1;
		 int columnsId=1;
		 HashMap<Integer,String>  colHash= new HashMap<Integer, String>();
		 if(selectedSearchDTOLst!=null)
		 for( SelectedSearchDTO selectedSearchDTO :selectedSearchDTOLst)
		 {
			if(selectedSearchDTO.getGroupId() == 1) 
			{if(counter == 1)
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
						 		+ "\n            and '"+toDate+"')\n";
					 }
					 else
						 forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
					 		    + "\n          and '"+toDate+"')\n";
					 
					 
					 forUsetables = forUsetables + tableSchema+"tmp_audit_ecb_excess_liquidity ";
    				 forUsetables = forUsetables + " s"+counter+" ,";
				 	 forUseSelect = forUseSelect+", \n"+ 
					                         " s"+counter+"."+value +
							         " as '"+value+"'";
				 	 colHash.put(columnsId, value);
				 	 columnsId++;
					 
					 counter = counter+1;	 
			 }
			 
			}else
				if(selectedSearchDTO.getGroupId() == 2) 
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
							 		+ "\n            and '"+toDate+"')\n";
						 }
						 else
							 forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
						 		    + "\n          and '"+toDate+"')\n";
						 
						 
						 forUsetables = forUsetables + tableSchema+"tmp_audit_ecb_qe_liquidity";
	    				 forUsetables = forUsetables + " s"+counter+" ,";
					 	 forUseSelect = forUseSelect+", \n"+ 
						                         " s"+counter+"."+value+
								         " as '"+value+"'";
					 	 colHash.put(columnsId, value);
					 	 columnsId++;
						 
						 counter = counter+1;	 
				 }
				 
				}else
					if(selectedSearchDTO.getGroupId() == 3) 
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
								 		+ "\n            and '"+toDate+"')\n";
							 }
							 else
								 forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
							 		    + "\n          and '"+toDate+"')\n";
							 
							 
							 forUsetables = forUsetables + tableSchema+"tmp_audit_ez_monetary_mass_liquidity";
		    				 forUsetables = forUsetables + " s"+counter+" ,";
						 	 forUseSelect = forUseSelect+", \n"+ 
							                         " s"+counter+"."+value+
									         " as '"+value+"'";
						 	 colHash.put(columnsId, value);
						 	 columnsId++;
							 
							 counter = counter+1;	 
					 }
					 
					}
					else
						if(selectedSearchDTO.getGroupId() == 4) 
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
									 		+ "\n            and '"+toDate+"')\n";
								 }
								 else
									 forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
								 		    + "\n          and '"+toDate+"')\n";
								 
								 
								 forUsetables = forUsetables + tableSchema+"tmp_audit_corporate_liquidity_premia";
			    				 forUsetables = forUsetables + " s"+counter+" ,";
							 	 forUseSelect = forUseSelect+", \n"+ 
								                         " s"+counter+"."+value+
										         " as '"+value+"'";
							 	 colHash.put(columnsId, value);
							 	 columnsId++;
								 
								 counter = counter+1;	 
						 }
						 
						}else
							if(selectedSearchDTO.getGroupId() == 5) 
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
										 		+ "\n            and '"+toDate+"')\n";
									 }
									 else
										 forUseWhere = forUseWhere+"      and (STR_TO_DATE("+" s"+counter+".refer_date,'%d-%m-%Y') between '"+fromDate+"'"
									 		    + "\n          and '"+toDate+"')\n";
									 
									 
									 forUsetables = forUsetables + tableSchema+"tmp_audit_transportation";
				    				 forUsetables = forUsetables + " s"+counter+" ,";
								 	 forUseSelect = forUseSelect+", \n"+ 
									                         " s"+counter+"."+value+
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
				 +" order by STR_TO_DATE(s1.refer_date,'%d-%m-%Y') desc";
		 
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
	
}


