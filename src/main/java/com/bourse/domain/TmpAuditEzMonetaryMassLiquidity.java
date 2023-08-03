package com.bourse.domain;

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
@Table(name = "TmpAuditEzMonetaryMassLiquidity")
public class TmpAuditEzMonetaryMassLiquidity {
	@Id
	@GeneratedValue(generator = "audit_ez_monetary_mass_liquidity_sequence")
	   @GenericGenerator(
	      name = "audit_ez_monetary_mass_liquidity_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_ez_monetary_mass_liquidity_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String m0;
	private String m1;
	private String m2;
	private String m3;
	private String referDate;
}
