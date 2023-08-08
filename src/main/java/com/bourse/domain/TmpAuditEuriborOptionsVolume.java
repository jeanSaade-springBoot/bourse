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
@Table(name = "TmpAuditEuriborOptionsVolume")
public class TmpAuditEuriborOptionsVolume {
	@Id
	@GeneratedValue(generator = "audit_euribor_options_volume_sequence")
	   @GenericGenerator(
	      name = "audit_euribor_options_volume_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_euribor_options_volume_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String euribor1;
	private String euribor2;
	private String euribor3;
	private String euribor4;
	private String euribor5;
	@Column(name = "euribor1_euribor2_euribor3_euribor4_euribor5")
	private String euribor1euribor2euribor3euribor4euribor5;
	private String referDate;
}
