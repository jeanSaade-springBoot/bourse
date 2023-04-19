package com.bourse.readExcelWriteDB.enums;

public enum SubGroupEnum {
	
	GOLD(6,1,"1"), 
	PLATINUM(6,3,"2"),
	SILVER(6,2,"3"), 
	COPPER(7,1,"1"),
	ALUMINUM(7,2,"2"),
	STEEL(7,3,"3"), 
	LUMBER(7,4,"4"),
	CORN(8,1,"1"),
	SUGAR(8,2,"2"),
	WHEAT(8,3,"3"), 
	OIL(9,1,"1"),
	GASOLINEGALL(9,2,"2"),
	DIESELGALL(9,3,"3"), 
	NATGASUSD(9,4,"4"),
	NATGASEUR(9,5,"5"), 
	OTHER(0,0,"OTHER");
	
	public int groupId;
	public int subGroupId;
	public String index;
	
	SubGroupEnum(int groupId,int subGroupId, String index) {
	    this.groupId       = groupId ;
	    this.subGroupId    = subGroupId;
	    this.index         = index ;
	  }
	
	public static String getIndexByGroupAndSubGroupgroupId(int groupId,int subGroupId) {
		
		if(groupId==6)
				switch (subGroupId) {
		            case 1:
		                return GOLD.index;
		            case 3:
		                return PLATINUM.index;
		            case 2:
		                return SILVER.index;
		        }
		else if(groupId==7)
		switch (subGroupId) {
            case 1:
                return COPPER.index;
            case 2:
                return ALUMINUM.index;
            case 3:
                return STEEL.index;
            case 4:
                return LUMBER.index;
        }
		else if(groupId==8)
			switch (subGroupId) {
	            case 1:
	                return CORN.index;
	            case 2:
	                return SUGAR.index;
	            case 3:
	                return WHEAT.index;
	        }else if(groupId==9)
			switch (subGroupId) {
	            case 1:
	                return OIL.index;
	            case 2:
	                return GASOLINEGALL.index;
	            case 3:
	                return DIESELGALL.index;
	            case 4:
	                return NATGASUSD.index;
	            case 5:
	                return NATGASEUR.index;
	        }
        return OTHER.index;
    }
}


