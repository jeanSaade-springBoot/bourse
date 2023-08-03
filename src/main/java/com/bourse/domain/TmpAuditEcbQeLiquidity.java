package com.bourse.domain;

import javax.persistence.Column;
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
@Table(name = "TmpAuditEcbQeLiquidity")
public class TmpAuditEcbQeLiquidity {
	@Id
	@GeneratedValue(generator = "audit_ecb_qe_liquidity_sequence")
	   @GenericGenerator(
	      name = "audit_ecb_qe_liquidity_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_ecb_qe_liquidity_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String qe1;
	private String qe2;
	@Column(name = "qe1_qe2")
	private String qe1Qe2;
	private String cumQe1;
	private String cumQe2;
	@Column(name = "cum_qe1_qe2")
	private String cumQe1Qe2;
	private String referDate;
}
