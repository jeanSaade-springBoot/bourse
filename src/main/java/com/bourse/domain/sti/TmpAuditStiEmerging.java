package com.bourse.domain.sti;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "tmp_audit_sti_emerging")
public class TmpAuditStiEmerging {
	@Id
	@GeneratedValue(generator = "audit_sti_emerging_sequence")
	   @GenericGenerator(
	      name = "audit_sti_emerging_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_sti_emerging_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String TADAWUL;
	private String TADAWUL_USDSAR;
	private String EGX;
	private String EGX_USDEGP;
	private String BIST;
	private String BIST_USDTRY;
	private String MOEX;
	private String MOEX_USDRUB;
	private String JSTTOP;
	private String JSTTOP_USDZAR;
	private String BOVESPA;
	private String BOVESPA_USDBRL;
	private String MEXBOL;
	private String MEXBOL_USDMXN;
	private String referDate;
}
