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
@Table(name = "TmpAuditEcbExcessLiquidity")
public class TmpAuditEcbExcessLiquidity {
	@Id
	@GeneratedValue(generator = "audit_ecb_excess_liquidity_sequence")
	   @GenericGenerator(
	      name = "audit_ecb_excess_liquidity_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_ecb_excess_liquidity_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String excess1;
	private String excess2;
	private String excess3;
	private String excess4;
	@Column(name = "excess1_excess2_excess3_excess4")
	private String excess1Excess2Excess3Excess4;
	private String referDate;
}
