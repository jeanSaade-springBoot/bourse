package com.bourse.domain.sti;

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
@Table(name = "tmp_audit_sti_wall_street")
public class TmpAuditStiWallStreet {
	@Id
	@GeneratedValue(generator = "audit_sti_wall_street_sequence")
	   @GenericGenerator(
	      name = "audit_sti_wall_street_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_sti_wall_street_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String DOWJONES;
	private String SANDP;
	private String NASDAQ;
	private String RUSSELL;
	private String FANG;
	private String DJMAJORBANKS;
	private String DJREGIONALBANKS;
	private String referDate;
}
