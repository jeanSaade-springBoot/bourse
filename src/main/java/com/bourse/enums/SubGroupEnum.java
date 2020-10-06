package com.bourse.enums;

public enum SubGroupEnum {
	
	USA(1,"USA"), 
	GERMANY(3,"GERMANY"), 
	FRANCE(2,"FRANCE"),
	UK(4,"UK"), 
	ITALY(5,"ITALY"), 
	SPAIN(6,"SPAIN"), 
	OTHER(0,"OTHER");
	
	public int id;
	public String name;
	
	SubGroupEnum(int id, String name) {
	    this.id            = id ;
	    this.name          = name ;
	  }
	
	public static String getCountryBySubGroupID(Integer id) {
        switch (id) {
            case 1:
                return USA.name;
            case 2:
                return GERMANY.name;
            case 3:
                return FRANCE.name;
            case 4:
                return UK.name;
            case 5:
            	return ITALY.name;
            case 6:
            	return SPAIN.name;
        }
        return OTHER.name;
    }
	

}


