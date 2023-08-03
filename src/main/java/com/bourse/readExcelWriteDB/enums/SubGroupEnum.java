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
	BALTIC(10,1,"1"),
	CONTAINER(10,2,"2"),
	USATOAAA(11,1,"1"),
	USBTOBBB(11,2,"2"),
	USCTOCCC(11,3,"3"),
	EUROZONEATOAAA(11,4,"4"),
	EUROZONEBTOBBB(11,5,"5"),
	EXCESS1 (14,1,"1"),
	EXCESS2 (14,2,"2"),
	EXCESS3 (14,3,"3"),
	EXCESS4 (14,4,"4"),
	QE1 (15,1,"1"),
	QE2 (15,2,"2"),
	M0 (16,1,"1"),
	M1 (16,2,"2"),
	M2 (16,3,"3"),
	M3 (16,4,"4"),
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
	        else if(groupId==10)
				switch (subGroupId) {
		            case 1:
		                return BALTIC.index;
		            case 2:
		                return CONTAINER.index;
		        }
	        else if(groupId==11)
				switch (subGroupId) {
		            case 1:
		                return USATOAAA.index;
		            case 2:
		                return USBTOBBB.index;
		            case 3:
		                return USCTOCCC.index;
		            case 4:
		                return EUROZONEATOAAA.index;
		            case 5:
		                return EUROZONEBTOBBB.index;
		        }
	        else if(groupId==14)
				switch (subGroupId) {
		            case 1:
		                return EXCESS1.index;
		            case 2:
		                return EXCESS2.index;
		            case 3:
		                return EXCESS3.index;
		            case 4:
		                return EXCESS4.index;
		        }
	        else if(groupId==15)
				switch (subGroupId) {
		            case 1:
		                return QE1.index;
		            case 2:
		                return QE2.index;
		        }else if(groupId==16)
				switch (subGroupId) {
				   case 1:
		                return M0.index;
		            case 2:
		                return M1.index;
		            case 3:
		                return M2.index;
		            case 4:
		                return M3.index;
		        }
        return OTHER.index;
    }
}


