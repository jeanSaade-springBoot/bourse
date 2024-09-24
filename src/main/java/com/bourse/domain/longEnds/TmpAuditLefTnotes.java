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
@Table(name = "tmp_audit_lef_tnotes")
public class TmpAuditLefTnotes {
	@Id
	@GeneratedValue(generator = "audit_lef_tnotes_sequence")
	   @GenericGenerator(
	      name = "audit_lef_tnotes_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_lef_tnotes_sequence"),
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
    private String futureExpiryDate;
    private String issuer;
    private String coupon;
    private String ctdMaturity;
    private String priceAtIssue;
    private String frequency;
    private String convergenceFactor;
	private String referDate;
	private String spreadName;
	private String spreadValue;
}
