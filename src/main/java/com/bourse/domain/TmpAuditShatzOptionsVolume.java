
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
@Table(name = "TmpAuditShatzOptionsVolume")
public class TmpAuditShatzOptionsVolume {
	@Id
	@GeneratedValue(generator = "audit_shatz_options_volume_sequence")
	   @GenericGenerator(
	      name = "audit_shatz_options_volume_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_shatz_options_volume_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String shatz1;
	private String shatz2;
	@Column(name = "shatz1_shatz2")
	private String shatz1shatz2;
	private String referDate;
}
