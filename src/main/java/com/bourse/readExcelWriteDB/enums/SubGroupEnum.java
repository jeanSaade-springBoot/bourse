package com.bourse.readExcelWriteDB.enums;

public enum SubGroupEnum {
	
	USA(1,1,"1","USA","USA"), 
	FRANCE(1,2,"2","FRANCE","FRANCE"),
	GERMANY(1,3,"3","GERMANY","GERMANY"), 
	UK(1,4,"4","UK","UK"), 
	ITALY(1,5,"5","ITALY","ITALY"), 
	SPAIN(1,6,"6","SPAIN","SPAIN"), 
	GOLD(6,1,"1","GOLD","GOLD"), 
	PLATINUM(6,3,"2","PLATINUM","PLATINUM"), 
	SILVER(6,2,"3","SILVER","SILVER"),
	PLATGOLD(6,4,"4","PLATINUM_GOLD","PLATINUM-GOLD"), 
	GOLDSILV(6,5,"5","GOLD_SILVER","GOLD-SILVER"), 
	COPPER(7,1,"1","COPPER","COPPER"),
	ALUMINUM(7,2,"2","ALUMINUM","ALUMINUM"),
	STEEL(7,3,"3","STEEL","STEEL"), 
	LUMBER(7,4,"4","LUMBER","LUMBER"),
	CORN(8,1,"1","CORN","CORN"),
	SUGAR(8,2,"2","SUGAR","SUGAR"),
	WHEAT(8,3,"3","WHEAT","WHEAT"), 
	OIL(9,1,"1","OIL","OIL"),
	GASOLINEGALL(9,2,"2","GASOLINE_GALL","GASOLINE-GALL"),
	DIESELGALL(9,3,"3","DIESEL_GALL","DIESEL-GALL"), 
	NATGASUSD(9,4,"4","NATGAS_USD","NATGAS-USD"),
	NATGASEUR(9,5,"5","NATGAS_EUR","NATGAS-EUR"), 
	GASOLINELITRE(9,6,"6","GASOLINE_LITRE","GASOLINE-LITRE"), 
	DIESELTON(9,7,"7","DIESEL_TON","DIESEL-TON"), 
	BALTIC(10,1,"1","BALTIC","BALTIC DRY INDEX"),
	CONTAINER(10,2,"2","CONATINER","40ft Container"),
	USATOAAA(11,1,"1","usatoaaa","usatoaaa"),
	USBTOBBB(11,2,"2","usbtobbb","usbtobbb"),
	USCTOCCC(11,3,"3","usctoccc","usctoccc"),
	EUROZONEATOAAA(11,4,"4","eurozoneatoaaa","eurozoneatoaaa"),
	EUROZONEBTOBBB(11,5,"5","eurozonebtobbb","eurozonebtobbb"),
	EXCESS1 (14,1,"1","excess1","excess1"),
	EXCESS2 (14,2,"2","excess2","excess2"),
	EXCESS3 (14,3,"3","excess3","excess3"),
	EXCESS4 (14,4,"4","excess4","excess4"),
	EXCESS1_EXCESS2_EXCESS3_EXCESS4 (14,5,"5","excess1_excess2_excess3_excess4","excess1_excess2_excess3_excess4"),
	QE1 (15,1,"1","qe1","qe1"),
	QE2 (15,2,"2","qe2","qe2"),
	QE1_QE2 (15,3,"3","qe1_qe2","qe1_qe2"), 
	CUM_QE1 (15,4,"4","cum_qe1","cum_qe1"), 
	CUM_QE2 (15,5,"5","cum_qe2","cum_qe2"), 
	CUM_QE1_QE2 (15,6,"6","cum_qe1_qe2","cum_qe1_qe2"), 
	M0 (16,1,"1","m0","m0"),
	M1 (16,2,"2","m1","m1"),
	M2 (16,3,"3","m2","m2"),
	M3 (16,4,"4","m3","m3"),
	BUND1(17,1,"1","bund1","bund1"),
	BUND2(17,2,"2","bund2","bund2"),
	BUND1_BUND2(17,3,"3","bund1_bund2","bund1_bund2"),
	BUND1_BUND2_CP(17,4,"4","bund1_bund2_cp","bund1_bund2_cp"),
	BOBL1(18,1,"1","bobl1","bobl1"),
	BOBL2(18,2,"2","bobl2","bobl2"),
	BOBL1_BOBL2(18,3,"3","bobl1_bobl2","bobl1_bobl2"),
	BUXL1(19,1,"1","buxl1","buxl1"),
	BUXL2(19,2,"2","buxl2","buxl2"),
	BUXL1_BUXL2(19,3,"3","buxl1_buxl2","buxl1_buxl2"),
	SHATZ1(20,1,"1","shatz1","shatz1"),
	SHATZ2(20,2,"2","shatz2","shatz2"),
	SHATZ1_SHATZ2(20,3,"3","shatz1_shatz2","shatz1_shatz2"),
	EURIBOR1 (21,1,"1","euribor1","euribor1"),
	EURIBOR2 (21,2,"2","euribor2","euribor2"),
	EURIBOR3 (21,3,"3","euribor3","euribor3"),
	EURIBOR4 (21,4,"4","euribor4","euribor4"),
	EURIBOR5 (21,5,"5","euribor5","euribor5"),
	EURIBOR1_EURIBOR2_EURIBOR3_EURIBOR4_EURIBOR5 (21,6,"6","euribor1_euribor2_euribor3_euribor4_euribor5","euribor1_euribor2_euribor3_euribor4_euribor5"),
	OTHER(0,0,"OTHER","OTHER","OTHER");
	
	public int groupId;
	public int subGroupId;
	public String index;
	public String name;
	public String description;
	
	SubGroupEnum(int groupId,int subGroupId, String index, String name, String description) {
	    this.groupId       = groupId ;
	    this.subGroupId    = subGroupId;
	    this.index         = index ;
	    this.name   	   = name;
	    this.description   = description;
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
		        }else if(groupId==17)
					switch (subGroupId) {
					   case 1:
			                return BUND1.index;
			            case 2:
			                return BUND2.index;
			        }else if(groupId==18)
						switch (subGroupId) {
						   case 1:
				                return BOBL1.index;
				            case 2:
				                return BOBL2.index;
				        }else if(groupId==19)
							switch (subGroupId) {
							   case 1:
					                return BUXL1.index;
					            case 2:
					                return BUXL2.index;
					        }else if(groupId==20)
								switch (subGroupId) {
								   case 1:
						                return SHATZ1.index;
						            case 2:
						                return SHATZ2.index;
						        }else if(groupId==21)
									switch (subGroupId) {
									   case 1:
							                return EURIBOR1.index;
							            case 2:
							                return EURIBOR2.index;
							            case 3:
							                return EURIBOR3.index;
							            case 4:
							                return EURIBOR4.index;
							            case 5:
							                return EURIBOR5.index;
							        }
        return OTHER.index;
    }
	public static String getDescriptionByName(String name) {
	    switch (name) {
	        case "GOLD":
	            return SubGroupEnum.GOLD.description;
	        case "PLATINUM":
	            return SubGroupEnum.PLATINUM.description;
	        case "SILVER":
	            return SubGroupEnum.SILVER.description;
	        case "PLATINUM_GOLD":
	            return SubGroupEnum.PLATGOLD.description;
	        case "GOLD_SILVER":
	            return SubGroupEnum.GOLDSILV.description;
	        case "COPPER":
	            return SubGroupEnum.COPPER.description;
	        case "ALUMINUM":
	            return SubGroupEnum.ALUMINUM.description;
	        case "STEEL":
	            return SubGroupEnum.STEEL.description;
	        case "LUMBER":
	            return SubGroupEnum.LUMBER.description;
	        case "CORN":
	            return SubGroupEnum.CORN.description;
	        case "SUGAR":
	            return SubGroupEnum.SUGAR.description;
	        case "WHEAT":
	            return SubGroupEnum.WHEAT.description;
	        case "OIL":
	            return SubGroupEnum.OIL.description;
	        case "GASOLINE_GALL":
	            return SubGroupEnum.GASOLINEGALL.description;
	        case "DIESEL_GALL":
	            return SubGroupEnum.DIESELGALL.description;
	        case "NATGAS_USD":
	            return SubGroupEnum.NATGASUSD.description;
	        case "NATGAS_EUR":
	            return SubGroupEnum.NATGASEUR.description;
	        case "GASOLINE_LITRE":
	            return SubGroupEnum.GASOLINELITRE.description;
	        case "DIESEL_TON":
	            return SubGroupEnum.DIESELTON.description;
	        case "BALTIC":
	            return SubGroupEnum.BALTIC.description;
	        case "CONTAINER":
	            return SubGroupEnum.CONTAINER.description;
	        case "usatoaaa":
	            return SubGroupEnum.USATOAAA.description;
	        case "usbtobbb":
	            return SubGroupEnum.USBTOBBB.description;
	        case "usctoccc":
	            return SubGroupEnum.USCTOCCC.description;
	        case "eurozoneatoaaa":
	            return SubGroupEnum.EUROZONEATOAAA.description;
	        case "eurozonebtobbb":
	            return SubGroupEnum.EUROZONEBTOBBB.description;
	        case "excess1":
	            return SubGroupEnum.EXCESS1.description;
	        case "excess2":
	            return SubGroupEnum.EXCESS2.description;
	        case "excess3":
	            return SubGroupEnum.EXCESS3.description;
	        case "excess4":
	            return SubGroupEnum.EXCESS4.description;
	        case "excess1_excess2_excess3_excess4":
	            return SubGroupEnum.EXCESS1_EXCESS2_EXCESS3_EXCESS4.description;
	        case "qe1":
	            return SubGroupEnum.QE1.description;
	        case "qe2":
	            return SubGroupEnum.QE2.description;
	        case "qe1_qe2":
	            return SubGroupEnum.QE1_QE2.description;
	        case "cum_qe1":
	            return SubGroupEnum.CUM_QE1.description;
	        case "cum_qe2":
	            return SubGroupEnum.CUM_QE2.description;
	        case "cum_qe1_qe2":
	            return SubGroupEnum.CUM_QE1_QE2.description;
	        case "m0":
	            return SubGroupEnum.M0.description;
	        case "m1":
	            return SubGroupEnum.M1.description;
	        case "m2":
	            return SubGroupEnum.M2.description;
	        case "m3":
	            return SubGroupEnum.M3.description;
	        case "bund1":
	            return SubGroupEnum.BUND1.description;
	        case "bund2":
	            return SubGroupEnum.BUND2.description;
	        case "bund1_bund2":
	            return SubGroupEnum.BUND1_BUND2.description;
	        case "bund1_bund2_cp":
	            return SubGroupEnum.BUND1_BUND2_CP.description;
	        case "bobl1":
	            return SubGroupEnum.BOBL1.description;
	        case "bobl2":
	            return SubGroupEnum.BOBL2.description;
	        case "bobl1_bobl2":
	            return SubGroupEnum.BOBL1_BOBL2.description;
	        case "buxl1":
	            return SubGroupEnum.BUXL1.description;
	        case "buxl2":
	            return SubGroupEnum.BUXL2.description;
	        case "buxl1_buxl2":
	            return SubGroupEnum.BUXL1_BUXL2.description;
	        case "shatz1":
	            return SubGroupEnum.SHATZ1.description;
	        case "shatz2":
	            return SubGroupEnum.SHATZ2.description;
	        case "shatz1_shatz2":
	            return SubGroupEnum.SHATZ1_SHATZ2.description;
	        case "euribor1":
	            return SubGroupEnum.EURIBOR1.description;
	        case "euribor2":
	            return SubGroupEnum.EURIBOR2.description;
	        case "euribor3":
	            return SubGroupEnum.EURIBOR3.description;
	        case "euribor4":
	            return SubGroupEnum.EURIBOR4.description;
	        case "euribor5":
	            return SubGroupEnum.EURIBOR5.description;
	        case "euribor1_euribor2_euribor3_euribor4_euribor5":
	            return SubGroupEnum.EURIBOR1_EURIBOR2_EURIBOR3_EURIBOR4_EURIBOR5.description;
	        default:
	            return SubGroupEnum.OTHER.description;
	    }
	}
	public static String getDescriptionByGroupAndSubGroupgroupId(int groupId,int subGroupId) {
		if(groupId==1)
			switch (subGroupId) {
			 case 1:
	                return USA.name;
	            case 2:
	                return FRANCE.name;
	            case 3:
	                return GERMANY.name;
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


