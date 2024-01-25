package com.bourse.domain.skews;

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
@Table(name = "tmp_audit_skews_bobl_3_maturity")
public class TmpAuditSkewsBobl3Maturity {
	@Id
	@GeneratedValue(generator = "audit_skews_bobl_3_maturity_sequence")
	   @GenericGenerator(
	      name = "audit_skews_bobl_3_maturity_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_skews_bobl_3_maturity_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String DP15;
	private String DP25;
	private String ATM;
	private String DC25;
	private String DC15;
	private String DP15_ATM;
	private String DP25_ATM;
	private String DC25_ATM;
	private String DC15_ATM;
	private String DP25_DC25;
	private String DP15_DC15;
	private String factor;
	private String referDate;
}
