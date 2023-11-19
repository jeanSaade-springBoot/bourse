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
@Table(name = "TmpAuditCdsData")
public class TmpAuditCdsData {
	@Id
	@GeneratedValue(generator = "audit_cds_data_sequence")
	   @GenericGenerator(
	      name = "audit_cds_data_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_cds_data_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String germany;
    private String france;
    private String italy;
    private String spain;
    private String uk;
    private String swiss;
    private String sweden;
    private String usa;
    private String canada;
    private String australia;
    private String japan;
    private String china;
    private String hongkong;
    private String southkorea;
    private String india;
    private String brazil;
    private String mexico;
    private String saudi;
    private String turkey;
    private String southafrica;
	private String referDate;
}
