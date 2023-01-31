package com.bourse.enums;

public enum BaseSubGroupEnum {
	
	COPPER(1,"COPPER"), 
	ALUMINUM(2,"ALUMINUM"),
	STEEL(3,"STEEL"), 
	LUMBER(4,"LUMBER"), 
	OTHER(0,"OTHER");
	
	public int id;
	public String name;
	
	BaseSubGroupEnum(int id, String name) {
	    this.id            = id ;
	    this.name          = name ;
	  }
	
	public static String getCountryBySubGroupID(int id) {
        switch (id) {
            case 1:
                return COPPER.name;
            case 2:
                return ALUMINUM.name;
            case 3:
                return STEEL.name;
            case 4:
                return LUMBER.name;
        }
        return OTHER.name;
    }
}


