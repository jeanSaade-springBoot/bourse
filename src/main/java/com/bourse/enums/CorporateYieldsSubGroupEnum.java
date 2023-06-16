package com.bourse.enums;

public enum CorporateYieldsSubGroupEnum {
	
	ATOAAA(1,"usatoaaa"), 
	BTOBBB(2,"usbtobbb"), 
	CTOCCC(3,"usctoccc"),
	EUROZONEATOAAA(4,"eurozoneatoaaa"),
	EUROZONEBTOBBB(5,"eurozonebtobbb"), 
	OTHER(0,"OTHER");
	
	public int id;
	public String description;
	
	CorporateYieldsSubGroupEnum(int id, String description) {
		this.id            = id ;
	    this.description          = description ;
	  }
	
	public static String getCountryByCode(String description) {
        switch (description) {
            case "usatoaaa":
                return ATOAAA.description;
            case "usbtobbb":
                return BTOBBB.description;
            case "usctoccc":
                return CTOCCC.description;
            case "eurozoneatoaaa":
                return EUROZONEATOAAA.description;
            case "eurozonebtobbb":
            	return EUROZONEBTOBBB.description;
        }
        return OTHER.description;
    }
	public static String getCountryByID(int id) {
        switch (id) {
            case 1:
                return ATOAAA.description;
            case 2:
                return BTOBBB.description;
            case 3:
                return CTOCCC.description;
            case 4:
                return EUROZONEATOAAA.description;
            case 5:
            	return EUROZONEBTOBBB.description;
        }
        return OTHER.description;
    }
}


