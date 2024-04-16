package com.bourse.dto.macro;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class MacroAuditCommonDTO {
	   private String id;
	   private String referDate;
	   private String manuf;
	   private String services;
	   private String manuf2;
	   private String services2;
	   private String factorId;
}
