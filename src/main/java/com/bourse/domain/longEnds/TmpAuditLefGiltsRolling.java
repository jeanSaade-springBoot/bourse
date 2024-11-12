package com.bourse.domain.longEnds;

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
@Table(name = "tmp_audit_lef_gilts_rolling")
public class TmpAuditLefGiltsRolling {
	@Id
	@GeneratedValue(generator = "audit_lef_gilts_rolling_sequence")
	   @GenericGenerator(
	      name = "audit_lef_gilts_rolling_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_lef_gilts_rolling_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String maturity_name;
	private String open;
	private String settle;
    private String close;
    private String high;
    private String low;
	private String referDate;
}