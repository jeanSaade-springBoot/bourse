package com.bourse.enums;

public enum FunctionEnum {
	
	ONE_HUNDRED_DAY_MOVING_AVERAGE(1,"100D","100D moving average"),
	TWO_HUNDRED_DAY_MOVING_AVERAGE(2,"200D","200D moving average"),
	DAILY_CHANGE_IN_PERCENTAGE(3,"DCP","Daily Change In %"), 
	DAILY_CHANGE_INCREMENT(4,"DCI","Daily Change Increment"), 
	WEEKLY_CHANGE_IN_PERCENTAGE(5,"WCP","Weekly Change In %"), 
	WEEKLY_CHANGE_INCREMENT(6,"WCI","Weekly Change Increment"), 
	MONTHLY_CHANGE_IN_PERCENTAGE(10,"MCP","Monthly Change In %"), 
	MONTHLY_CHANGE_INCREMENT(11,"MCI","Monthly Change Increment"), 
	QUARTERLY_CHANGE_IN_PERCENTAGE(12,"QCP","Quarterly Change In %"), 
	QUARTERLY_CHANGE_INCREMENT(13,"QCI","Quarterly Change Increment"), 
	YEARLY_CHANGE_IN_PERCENTAGE(14,"YCP","Yearly Change In %"), 
	YEARLY_CHANGE_INCREMENT(15,"YCI","Yearly Change Increment"), 
	SIXTH_MONTH_MOVING_AVERAGE(16,"6MA","6M moving average"), 
	EIGHTEEN_MONTH_MOVING_AVERAGE(17,"18MA","18M moving average"), 
	ONE_YEAR_MOVING_AVERAGE(18,"12MA","1yr moving average"), 
	TWO_YEAR_MOVING_AVERAGE(19,"24MA","2yr moving average"), 
	TEN_YR_PERCENTILE(7,"10YP","10 Yr Percentile"),
	TWENTY_YR_PERCENTILE(8,"20YP","20 Yr Percentile"),
	CENTURY_PERCENTILE(9,"CP","Century Percentile"),
	FIVE_DAY_WEIGHTED_MOVING_AVERAGE(20,"5DWM","5-days weighted MovAvg"),
	SIX_DAY_WEIGHTED_MOVING_AVERAGE(21,"6DWM","6-days weighted MovAvg"),
	SEVEN_DAY_WEIGHTED_MOVING_AVERAGE(22,"7DWM","7-days weighted MovAvg"),
	NINE_DAY_WEIGHTED_MOVING_AVERAGE(23,"9DWM","9-days weighted MovAvg"),
	EIGHTEEN_DAY_WEIGHTED_MOVING_AVERAGE(24,"18DWM","18-days weighted MovAvg"),
	TWENTYONE_DAY_WEIGHTED_MOVING_AVERAGE(25,"21DWM","21-days weighted MovAvg"),
	TWENTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE(26,"25DWM","25-days weighted MovAvg"),
	THIRTY_DAY_WEIGHTED_MOVING_AVERAGE(27,"30DWM","30-days weighted MovAvg"),
	FOURTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE(28,"45DWM","45-days weighted MovAvg"),
	SIXTYTHREE_DAY_WEIGHTED_MOVING_AVERAGE(29,"63DWM","63-days weighted MovAvg"),
	
	DIFF_FIVE_SIX_DAY_WEIGHTED_MOVING_AVERAGE(30,"5DWM6DWM","5-days weighted MovAvg - 6-days weighted MovAvg"),
	DIFF_FIVE_SEVEN_DAY_WEIGHTED_MOVING_AVERAGE(31,"5DWM7DWM","5-days weighted MovAvg - 7-days weighted MovAvg"),
	DIFF_FIVE_NINE_DAY_WEIGHTED_MOVING_AVERAGE(32,"5DWM9DWM","5-days weighted MovAvg - 9-days weighted MovAvg"),
	DIFF_EIGHTEEN_TWENTYONE_DAY_WEIGHTED_MOVING_AVERAGE(33,"18DWM21DWM","18-days weighted MovAvg - 21-days weighted MovAvg"),
	DIFF_EIGHTEEN_TWENTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE(34,"18DWM25DWM","18-days weighted MovAvg - 25-days weighted MovAvg"),
	DIFF_EIGHTEEN_THIRTY_DAY_WEIGHTED_MOVING_AVERAGE(35,"18DWM30DWM","18-days weighted MovAvg - 30-days weighted MovAvg"),
	DIFF_FOURTYFIVE_SIXTYTHREE_DAY_WEIGHTED_MOVING_AVERAGE(36,"45DWM63DWM","45-days weighted MovAvg - 63-days weighted MovAvg"),
	
	OTHER(0,"OTHER","");
	
	public int id;
	public String function;
	private String description;
	
	FunctionEnum(int id, String function,String description) {
	    this.id              = id ;
	    this.function          = function ;
	    this.description          = description ;
	  }
	
	public static String getFunctionByID(int id) {
        switch (id) {
	        case 1:
	            return ONE_HUNDRED_DAY_MOVING_AVERAGE.function;
	        case 2:
	            return TWO_HUNDRED_DAY_MOVING_AVERAGE.function;
            case 3:
                return DAILY_CHANGE_IN_PERCENTAGE.function;
            case 4:
                return DAILY_CHANGE_INCREMENT.function;
            case 5:
                return WEEKLY_CHANGE_IN_PERCENTAGE.function;
            case 6:
                return WEEKLY_CHANGE_INCREMENT.function;
            case 7:
                return TEN_YR_PERCENTILE.function;
            case 8:
                return TWENTY_YR_PERCENTILE.function;
            case 9:
                return CENTURY_PERCENTILE.function;
            case 10:
                return MONTHLY_CHANGE_IN_PERCENTAGE.function;
            case 11:
                return MONTHLY_CHANGE_INCREMENT.function;
            case 12:
                return QUARTERLY_CHANGE_IN_PERCENTAGE.function;
            case 13:
                return QUARTERLY_CHANGE_INCREMENT.function;
            case 14:
                return YEARLY_CHANGE_IN_PERCENTAGE.function;
            case 15:
                return YEARLY_CHANGE_INCREMENT.function;
            case 16:
                return SIXTH_MONTH_MOVING_AVERAGE.function;
            case 17:
                return EIGHTEEN_MONTH_MOVING_AVERAGE.function;  
            case 18:
                   return ONE_YEAR_MOVING_AVERAGE.function; 
            case 19:
                return TWO_YEAR_MOVING_AVERAGE.function;  
            case 20:
                return FIVE_DAY_WEIGHTED_MOVING_AVERAGE.function;
            case 21:
                return SIX_DAY_WEIGHTED_MOVING_AVERAGE.function;
            case 22:
                return SEVEN_DAY_WEIGHTED_MOVING_AVERAGE.function;
            case 23:
                return NINE_DAY_WEIGHTED_MOVING_AVERAGE.function;
            case 24:
                return EIGHTEEN_DAY_WEIGHTED_MOVING_AVERAGE.function;
            case 25:
                return TWENTYONE_DAY_WEIGHTED_MOVING_AVERAGE.function;
            case 26:
                return TWENTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE.function;
            case 27:
                return THIRTY_DAY_WEIGHTED_MOVING_AVERAGE.function;  
            case 28:
                 return FOURTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE.function; 
            case 29:
                return SIXTYTHREE_DAY_WEIGHTED_MOVING_AVERAGE.function;  
                
            case 30:
                return DIFF_FIVE_SIX_DAY_WEIGHTED_MOVING_AVERAGE.function;       
            case 31:
                return DIFF_FIVE_SEVEN_DAY_WEIGHTED_MOVING_AVERAGE.function;       
            case 32:
                return DIFF_FIVE_NINE_DAY_WEIGHTED_MOVING_AVERAGE.function;       
            case 33:
                return DIFF_EIGHTEEN_TWENTYONE_DAY_WEIGHTED_MOVING_AVERAGE.function;       
            case 34:
                return DIFF_EIGHTEEN_TWENTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE.function; 
            case 35:
                return DIFF_EIGHTEEN_THIRTY_DAY_WEIGHTED_MOVING_AVERAGE.function;       
            case 36:
                return DIFF_FOURTYFIVE_SIXTYTHREE_DAY_WEIGHTED_MOVING_AVERAGE.function;     
        }
        return OTHER.function;
    }
	public static int getFunctionIdByDesc(String function) {
        switch (function) {
	        case "100D":
	            return ONE_HUNDRED_DAY_MOVING_AVERAGE.id;
	        case "200D":
	            return TWO_HUNDRED_DAY_MOVING_AVERAGE.id;
            case "DCP":
                return DAILY_CHANGE_IN_PERCENTAGE.id;
            case "DCI":
                return DAILY_CHANGE_INCREMENT.id;
            case "WCP":
                return WEEKLY_CHANGE_IN_PERCENTAGE.id;
            case "WCI":
                return WEEKLY_CHANGE_INCREMENT.id;
            case "10YP":
                return TEN_YR_PERCENTILE.id;
            case "20YP":
                return TWENTY_YR_PERCENTILE.id;
            case "CP":
                return CENTURY_PERCENTILE.id;
            case "MCP":
                return MONTHLY_CHANGE_IN_PERCENTAGE.id;
            case "MCI":
                return MONTHLY_CHANGE_INCREMENT.id;
            case "QCP":
                return QUARTERLY_CHANGE_IN_PERCENTAGE.id;
            case "QCI":
                return QUARTERLY_CHANGE_INCREMENT.id;
            case "YCP":
                return YEARLY_CHANGE_IN_PERCENTAGE.id;
            case "YCI":
                return YEARLY_CHANGE_INCREMENT.id;
                
            case "5DWM":
                return FIVE_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "6DWM":
                return SIX_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "7DWM":
                return SEVEN_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "9DWM":
                return NINE_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "18DWM":
                return EIGHTEEN_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "20DWM":
                return TWENTYONE_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "25DWM":
                return TWENTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "30DWM":
                return THIRTY_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "45DWM":
                return FOURTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "63DWM":
                return SIXTYTHREE_DAY_WEIGHTED_MOVING_AVERAGE.id;
                
            case "5DWM6DWM":
                return DIFF_FIVE_SIX_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "5DWM7DWM":
                return DIFF_FIVE_SEVEN_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "5DWM9DWM":
                return DIFF_FIVE_NINE_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "18DWM21DWM":
                return DIFF_EIGHTEEN_TWENTYONE_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "18DWM25DWM":
                return DIFF_EIGHTEEN_TWENTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "18DWM30DWM":
                return DIFF_EIGHTEEN_THIRTY_DAY_WEIGHTED_MOVING_AVERAGE.id;
            case "45DWM63DWM":
                return DIFF_FOURTYFIVE_SIXTYTHREE_DAY_WEIGHTED_MOVING_AVERAGE.id;
        }
        return OTHER.id;
    }
	public static String getFunctionDescriptionByID(int id) {
        switch (id) {
	        case 1:
	            return ONE_HUNDRED_DAY_MOVING_AVERAGE.description;
	        case 2:
	            return TWO_HUNDRED_DAY_MOVING_AVERAGE.description;
            case 3:
                return DAILY_CHANGE_IN_PERCENTAGE.description;
            case 4:
                return DAILY_CHANGE_INCREMENT.description;
            case 5:
                return WEEKLY_CHANGE_IN_PERCENTAGE.description;
            case 6:
                return WEEKLY_CHANGE_INCREMENT.description;
            case 7:
                return TEN_YR_PERCENTILE.description;
            case 8:
                return TWENTY_YR_PERCENTILE.description;
            case 9:
                return CENTURY_PERCENTILE.description;
            case 10:
                return MONTHLY_CHANGE_IN_PERCENTAGE.description;
            case 11:
                return MONTHLY_CHANGE_INCREMENT.description;
            case 12:
                return QUARTERLY_CHANGE_IN_PERCENTAGE.description;
            case 13:
                return QUARTERLY_CHANGE_INCREMENT.description;
            case 14:
                return YEARLY_CHANGE_IN_PERCENTAGE.description;
            case 15:
                return YEARLY_CHANGE_INCREMENT.description;
                
            case 20:
                return FIVE_DAY_WEIGHTED_MOVING_AVERAGE.description;
            case 21:
                return SIX_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 22:
                return SEVEN_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 23:
                return NINE_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 24:
                return EIGHTEEN_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 25:
                return TWENTYONE_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 26:
                return TWENTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 27:
                return THIRTY_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 28:
                return FOURTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 29:
                return SIXTYTHREE_DAY_WEIGHTED_MOVING_AVERAGE.description;
                
             case 30:
                 return DIFF_FIVE_SIX_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 31:
                 return DIFF_FIVE_SEVEN_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 32:
                 return DIFF_FIVE_NINE_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 33:
                 return DIFF_EIGHTEEN_TWENTYONE_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 34:
                 return DIFF_EIGHTEEN_TWENTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 35:
                 return DIFF_EIGHTEEN_THIRTY_DAY_WEIGHTED_MOVING_AVERAGE.description;
             case 36:
                 return DIFF_FOURTYFIVE_SIXTYTHREE_DAY_WEIGHTED_MOVING_AVERAGE.description;
        }
        return OTHER.description;
    }
}
