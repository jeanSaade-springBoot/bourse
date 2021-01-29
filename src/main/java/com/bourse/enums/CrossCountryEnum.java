package com.bourse.enums;

public enum CrossCountryEnum {
	
	FRA_GER(1,"FRA-GER"), 
	ITA_GER(2,"ITA-GER"), 
	SPN_GER(3,"SPN-GER"),
	UK_GER(4,"UK-GER"),
	USA_GER(5,"USA-GER"), 
	USA_UK(6,"USA-UK"), 
	ITA_FRA(7,"ITA-FRA"),
	ITA_SPN(8,"ITA-SPN"),
	OTHER(0,"OTHER");
	
	public int id;
	public String crossDesc;
	
	CrossCountryEnum(int id, String crossDesc) {
	    this.id              = id ;
	    this.crossDesc          = crossDesc ;
	  }
	
	public static String getCrossByID(int id) {
        switch (id) {
            case 1:
                return FRA_GER.crossDesc;
            case 2:
                return ITA_GER.crossDesc;
            case 3:
                return SPN_GER.crossDesc;
            case 4:
                return UK_GER.crossDesc;
            case 5:
            	return USA_GER.crossDesc;
            case 6:
            	return USA_UK.crossDesc;
            case 7:
            	return ITA_FRA.crossDesc;
            case 8:
            	return ITA_SPN.crossDesc;
        }
        return OTHER.crossDesc;
    }

}
