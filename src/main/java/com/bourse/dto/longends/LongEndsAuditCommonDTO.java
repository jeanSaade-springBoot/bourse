package com.bourse.dto.longends;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class LongEndsAuditCommonDTO {
	   private String id;
	   private String maturityName;
	   private String open;
	   private String settle;
	   private String close;
	   private String high;
	   private String low;
	   private String futureExpiryDate;
	   private String issuer;
	   private String coupon;
	   private String ctdMaturity;
	   private String priceAtIssue;
	   private String frequency;
	   private String convergenceFactor;
	   private String referDate;
}
