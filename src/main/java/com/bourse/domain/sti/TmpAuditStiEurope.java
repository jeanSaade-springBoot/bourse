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
@Table(name = "tmp_audit_sti_europe")
public class TmpAuditStiEurope {
	@Id
	@GeneratedValue(generator = "audit_sti_europe_sequence")
	   @GenericGenerator(
	      name = "audit_sti_europe_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_sti_europe_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String DAX;
	private String DAX_EURUSD;
	private String CAC;
	private String CAC_EURUSD;
	private String MIB;
	private String MIB_EURUSD;
	private String FTSE;
	private String FTSE_GBPUSD;
	private String STOXX50;
	private String STOXX50_EURUSD;
	private String STOXX600;
	private String STOXX600_EURUSD;
	private String EUBANKS;
	private String EUBANKS_EURUSD;
	private String referDate;
}
