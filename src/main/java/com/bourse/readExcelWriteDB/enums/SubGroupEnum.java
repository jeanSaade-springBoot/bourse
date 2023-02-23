package com.bourse.readExcelWriteDB.enums;

public enum SubGroupEnum {
	
	GOLD(6,1,"1"), 
	ALUMINUM(6,3,"2"),
	SILVER(6,2,"3"), 
	COPPER(7,1,"1"), 
	PLATINUM(7,2,"2"),
	STEEL(7,3,"3"), 
	LUMBER(7,4,"4"), 
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
		            case 2:
		                return PLATINUM.index;
		            case 3:
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
        return OTHER.index;
    }
}


