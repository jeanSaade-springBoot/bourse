package com.bourse.enums;

public enum CreditSpreadSubGroupEnum {
	
	USATOAAA_USA(1,"usatoaaa_usa"), 
	USBTOBBB_USATOAAA(2,"usbtobbb_usatoaaa"), 
	USCTOCCC_USBTOBBB(3,"usctoccc_usbtobbb"),
	EUROZONEATOAAA_GERMANY(4,"eurozoneatoaaa_germany"),
	EUROZONEBTOBBB_EUROZONEATOAAA(5,"eurozonebtobbb_eurozoneatoaaa"), 
	OTHER(0,"OTHER");
	
	public int id;
	public String description;
	
	CreditSpreadSubGroupEnum(int id, String description) {
		this.id            = id ;
	    this.description          = description ;
	  }
	
	public static String getCountryByCode(String description) {
        switch (description) {
            case "usatoaaa_usa":
                return USATOAAA_USA.description;
            case "usbtobbb_usatoaaa":
                return USBTOBBB_USATOAAA.description;
            case "usctoccc_usbtobbb":
                return USCTOCCC_USBTOBBB.description;
            case "eurozoneatoaaa_germany":
                return EUROZONEATOAAA_GERMANY.description;
            case "eurozonebtobbb_eurozoneatoaaa":
            	return EUROZONEBTOBBB_EUROZONEATOAAA.description;
        }
        return OTHER.description;
    }
	public static String getCountryByID(int id) {
        switch (id) {
            case 1:
                return USATOAAA_USA.description;
            case 2:
                return USBTOBBB_USATOAAA.description;
            case 3:
                return USCTOCCC_USBTOBBB.description;
            case 4:
                return EUROZONEATOAAA_GERMANY.description;
            case 5:
            	return EUROZONEBTOBBB_EUROZONEATOAAA.description;
        }
        return OTHER.description;
    }
}


