package com.bourse.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
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

}
