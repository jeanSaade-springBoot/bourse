package com.bourse.enums;

public enum EnergySubGroupEnum {
	
	OIL(1,"OIL","OIL","OIL"), 
	GASOLINEGALL(2,"GASOLINEGALL","GASOLINE_GALL","GASOLINE-GALL"),
	DIESELGALL(3,"DIESELGALL","DIESEL_GALL","DIESEL-GALL"), 
	NATGASUSD(4,"NATGASUSD","NATGAS_USD","NATGAS-USD"), 
	NATGASEUR(5,"NATGASEUR","NATGAS_EUR","NATGAS-EUR"), 
	GASOLINELITRE(6,"GASOLINELITRE","GASOLINE_LITRE","GASOLINE-LITRE"), 
	DIESELTON(7,"DIESELTON","DIESEL_TON","DIESEL-TON"), 
	OTHER(0,"OTHER","OTHER","OTHER");
	
	public int id;
	public String code;
	public String name;
	public String description;
	
	EnergySubGroupEnum(int id, String code, String name, String description) {
		this.id            = id ;
	    this.code          = code ;
	    this.name          = name ;
	    this.description   =description;
	  }
	
	public static String getCountryBySubGroupID(int id) {
        switch (id) {
            case 1:
                return OIL.description;
            case 2:
                return GASOLINEGALL.description;
            case 3:
                return DIESELGALL.description;
            case 4:
                return NATGASUSD.description;
            case 5:
            	return NATGASEUR.description;
            case 6:
                return GASOLINELITRE.description;
            case 7:
            	return DIESELTON.description;
        }
        return OTHER.description;
    }
}


