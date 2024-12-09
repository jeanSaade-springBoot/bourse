package com.bourse.dto.cryptos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class CryptosAuditCommonDTO {
	   private String id;
	   private String openeur;
	   private String closeeur;
	   private String high;
	   private String low;
	   private String volume;
	   private String marketcap;
	   private String openint;
	   private String closeint;
	   private String referDate;
}
