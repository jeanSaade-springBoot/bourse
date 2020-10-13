package com.bourse.enums;

public enum CrossCountryEnum {
	
	FRA_GER(1,"FRA_GER"), 
	ITA_GER(2,"ITA_GER"), 
	SPN_GER(3,"SPN_GER"),
	UK_GER(4,"UK_GER"),
	USA_GER(5,"USA_GER"), 
	USA_UK(6,"USA_UK"), 
	ITA_FRA(7,"ITA_FRA"),
	ITA_SPN(8,"ITA_SPN"),
	OTHER(0,"OTHER");
	
	public int id;
	public String crossDesc;
	
	CrossCountryEnum(int id, String crossDesc) {
	    this.id              = id ;
	    this.crossDesc          = crossDesc ;
	  }

}
