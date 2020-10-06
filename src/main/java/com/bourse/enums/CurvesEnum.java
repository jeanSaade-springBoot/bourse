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

}
