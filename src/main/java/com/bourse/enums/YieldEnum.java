package com.bourse.enums;

public enum YieldEnum {

	TWO_YIELD(2,"two"), 
	FIVE_YIELD(5,"five"),
	TEN_YIELD(10,"ten"), 
	THIRTEE_YIELD(30,"thirtee");
	
	public int id;
	public String description;
	
	YieldEnum(int id, String description) {
	    this.id            = id ;
	    this.description   = description ;
	  }

}
