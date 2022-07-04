package com.bourse.enums;

public enum FunctionEnum {
	
	DAILY_CHANGE_IN_PERCENTAGE(1,"DCP","Daily Change In %"), 
	DAILY_CHANGE_INCREMENT(2,"DCI","Daily Change Increment"), 
	WEEKLY_CHANGE_IN_PERCENTAGE(3,"WCP","Weekly Change In %"), 
	WEEKLY_CHANGE_INCREMENT(4,"WCI","Weekly Change Increment"), 
	TEN_YR_PERCENTILE(5,"10YP","10 Yr Percentile"),
	TWENTY_YR_PERCENTILE(6,"20YP","20 Yr Percentile"),
	CENTURY_PERCENTILE(7,"CP","Century Percentile"),
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
                return DAILY_CHANGE_IN_PERCENTAGE.function;
            case 2:
                return DAILY_CHANGE_INCREMENT.function;
            case 3:
                return WEEKLY_CHANGE_IN_PERCENTAGE.function;
            case 4:
                return WEEKLY_CHANGE_INCREMENT.function;
            case 5:
                return TEN_YR_PERCENTILE.function;
            case 6:
                return TWENTY_YR_PERCENTILE.function;
            case 7:
                return CENTURY_PERCENTILE.function;
        }
        return OTHER.function;
    }
	public static String getFunctionDescriptionByID(int id) {
        switch (id) {
            case 1:
                return DAILY_CHANGE_IN_PERCENTAGE.description;
            case 2:
                return DAILY_CHANGE_INCREMENT.description;
            case 3:
                return WEEKLY_CHANGE_IN_PERCENTAGE.description;
            case 4:
                return WEEKLY_CHANGE_INCREMENT.description;
            case 5:
                return TEN_YR_PERCENTILE.description;
            case 6:
                return TWENTY_YR_PERCENTILE.description;
            case 7:
                return CENTURY_PERCENTILE.description;
        }
        return OTHER.description;
    }
}
