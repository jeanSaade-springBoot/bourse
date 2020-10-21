package com.bourse.enums;

public enum CurvesEnum {
	
	TWO_OVER_FIVE(1,"2/5"), 
	TWO_OVER_TEN(2,"2/10"), 
	FIVE_OVER_TEN(3,"5/10"),
	TEN_OVER_THIRTEE(4,"10/30"),
	OTHER(0,"OTHER");
	
	public int id;
	public String factor;
	
	CurvesEnum(int id, String factor) {
	    this.id              = id ;
	    this.factor          = factor ;
	  }
	
	public static String getCrossByID(int id) {
        switch (id) {
            case 1:
                return TWO_OVER_FIVE.factor;
            case 2:
                return TWO_OVER_TEN.factor;
            case 3:
                return FIVE_OVER_TEN.factor;
            case 4:
                return TEN_OVER_THIRTEE.factor;
        }
        return OTHER.factor;
    }

}
