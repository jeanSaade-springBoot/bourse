package com.bourse.enums;

public enum YieldEnum {

	TWO_YIELD(2,"two"), 
	FIVE_YIELD(5,"five"),
	TEN_YIELD(10,"ten"), 
	THIRTEE_YIELD(30,"thirtee"),
	OTHER(111,"OTHER");
	
	public int id;
	public String description;
	
	YieldEnum(int id, String description) {
	    this.id            = id ;
	    this.description   = description ;
	  }
	
	public static String getYieldById(int id) {
        switch (id) {
            case 2:
                return TWO_YIELD.description;
            case 5:
                return FIVE_YIELD.description;
            case 10:
                return TEN_YIELD.description;
            case 30:
                return THIRTEE_YIELD.description;
        }
        return OTHER.description;
    }

}
