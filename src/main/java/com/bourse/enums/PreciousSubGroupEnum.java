package com.bourse.enums;

public enum PreciousSubGroupEnum {
	
	GOLD(1,"GOLD","GOLD","GOLD"), 
	SILVER(2,"SILVER","SILVER","SILVER"),
	PLATINUM(3,"PLATINUM","PLATINUM","PLATINUM"), 
	PLATGOLD(4,"PLATGOLD","PLATINUM_GOLD","PLATINUM-GOLD"), 
	GOLDSILV(5,"GOLDSILV","GOLD_SILVER","GOLD-SILVER"), 
	OTHER(0,"OTHER","OTHER","OTHER");
	
	public int id;
	public String code;
	public String name;
	public String description;
	
	PreciousSubGroupEnum(int id, String code, String name, String description) {
		this.id            = id ;
	    this.code          = code ;
	    this.name          = name ;
	    this.description   =description;
	  }
	
	public static String getCountryByCode(String code) {
        switch (code) {
            case "GOLD":
                return GOLD.name;
            case "SILVER":
                return SILVER.name;
            case "PLATINUM":
                return PLATINUM.name;
            case "PLATGOLD":
                return PLATGOLD.name;
            case "GOLDSILV":
            	return GOLDSILV.name;
        }
        return OTHER.name;
    }
	public static String getCountryBySubGroupID(int id) {
        switch (id) {
            case 1:
                return GOLD.description;
            case 2:
                return SILVER.description;
            case 3:
                return PLATINUM.description;
            case 4:
                return PLATGOLD.description;
            case 5:
            	return GOLDSILV.description;
        }
        return OTHER.description;
    }
}


