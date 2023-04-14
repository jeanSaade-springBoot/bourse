package com.bourse.enums;

public enum FoodStuffSubGroupEnum {
	
	CORN(1,"CORN"), 
	SUGAR(2,"SUGAR"),
	WHEAT(3,"WHEAT"),  
	OTHER(0,"OTHER");
	
	public int id;
	public String name;
	
	FoodStuffSubGroupEnum(int id, String name) {
	    this.id            = id ;
	    this.name          = name ;
	  }
	
	public static String getCountryBySubGroupID(int id) {
        switch (id) {
            case 1:
                return CORN.name;
            case 2:
                return SUGAR.name;
            case 3:
                return WHEAT.name;
        }
        return OTHER.name;
    }
}


