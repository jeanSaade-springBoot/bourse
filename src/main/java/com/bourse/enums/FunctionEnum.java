package com.bourse.enums;

public enum FunctionEnum {
	
	ONE_HUNDRED_DAY_MOVING_AVERAGE(1,"100D","100D moving average"),
	TWO_HUNDRED_DAY_MOVING_AVERAGE(2,"200D","100D moving average"),
	DAILY_CHANGE_IN_PERCENTAGE(3,"DCP","Daily Change In %"), 
	DAILY_CHANGE_INCREMENT(4,"DCI","Daily Change Increment"), 
	WEEKLY_CHANGE_IN_PERCENTAGE(5,"WCP","Weekly Change In %"), 
	WEEKLY_CHANGE_INCREMENT(6,"WCI","Weekly Change Increment"), 
	TEN_YR_PERCENTILE(7,"10YP","10 Yr Percentile"),
	TWENTY_YR_PERCENTILE(8,"20YP","20 Yr Percentile"),
	CENTURY_PERCENTILE(9,"CP","Century Percentile"),
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
        }
        return OTHER.description;
    }
}
