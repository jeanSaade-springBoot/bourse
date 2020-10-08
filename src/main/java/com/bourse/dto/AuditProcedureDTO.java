package com.bourse.dto;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class AuditProcedureDTO {
	
	@Id
    private Long id;
	private String factor;
	private String USA;
	private String GERMANY;
	private String FRANCE;
	private String UK;
	private String ITALY;
	private String SPAIN;
	
	private String FRA_GER;
	private String ITA_GER;
	private String SPN_GER;
	private String UK_GER;
	private String USA_GER;
	private String USA_UK;
	private String ITA_FRA;
	private String ITA_SPN;

}
