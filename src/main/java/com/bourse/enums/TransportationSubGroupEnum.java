package com.bourse.enums;

public enum TransportationSubGroupEnum {
	
	BALTIC(1,"BALTIC","BALTIC","BALTIC DRY INDEX"), 
	CONATINER(2,"CONATINER","CONATINER","40ft Container"),
	OTHER(0,"OTHER","OTHER","OTHER");
	
	public int id;
	public String code;
	public String name;
	public String description;
	
	TransportationSubGroupEnum(int id, String code, String name, String description) {
		this.id            = id ;
	    this.code          = code ;
	    this.name          = name ;
	    this.description   =description;
	  }
	
	public static String getCountryBySubGroupID(int id) {
        switch (id) {
            case 1:
                return BALTIC.description;
            case 2:
                return CONATINER.description;
        }
        return OTHER.description;
    }
}


