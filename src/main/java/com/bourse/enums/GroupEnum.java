package com.bourse.enums;

public enum GroupEnum {
	
	YIELD(1,"yield"), 
	CURVE(2,"curve"),
	CROSS(3,"cross"),
	OTHER(0,"OTHER");
	
	public int id;
	public String name;
	
	GroupEnum(int id, String name) {
	    this.id            = id ;
	    this.name          = name ;
	  }
	
	public static int getGroupIdByName(String name) {
        switch (name) {
            case "yield":
                return YIELD.id;
            case "curve":
                return CURVE.id;
            case "cross":
                return CROSS.id;
        }
        return OTHER.id;
    }
	

}


