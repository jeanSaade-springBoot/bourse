package com.bourse.domain.rates;

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
@Table(name = "tmp_audit_rts_fixings")
public class TmpAuditRtsFixings {
	@Id
	@GeneratedValue(generator = "audit_rts_fixings_sequence")
	   @GenericGenerator(
	      name = "audit_rts_fixings_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_rts_fixings_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	@Column(name = "euribor_1")
	private String euribor1;
	@Column(name = "sonia_1")
	private String sonia1;
	@Column(name = "libor_1")
	private String libor1;
	@Column(name = "euribor_3")
	private String euribor3;
	@Column(name = "sonia_3")
	private String sonia3;
	@Column(name = "libor_3")
	private String libor3;
	private String referDate;
}
