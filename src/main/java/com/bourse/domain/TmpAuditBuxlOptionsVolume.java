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
@Table(name = "TmpAuditBuxlOptionsVolume")
public class TmpAuditBuxlOptionsVolume {
	@Id
	@GeneratedValue(generator = "audit_buxl_options_volume_sequence")
	   @GenericGenerator(
	      name = "audit_buxl_options_volume_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_buxl_options_volume_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String buxl1;
	private String buxl2;
	@Column(name = "buxl1_buxl2")
	private String buxl1buxl2;
	private String referDate;
}
