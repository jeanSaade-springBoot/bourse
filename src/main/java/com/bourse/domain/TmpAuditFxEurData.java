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
@Table(name = "TmpAuditFxEurData")
public class TmpAuditFxEurData {
	@Id
	@GeneratedValue(generator = "audit_fx_eur_data_sequence")
	   @GenericGenerator(
	      name = "audit_fx_eur_data_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_fx_eur_data_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String eurusd;
    private String gbpeur;
    private String eurchf;
    private String eurjpy;
    private String eurcad;
    private String eurcny;
    private String eursek;
    private String euraud;
    private String eurrub;
    private String eurtry;
    private String eurinr;
    private String eurhkd;
    private String eurkrw;
    private String eurbrl;
    private String eurmxn;
    private String eursar;
    private String eurzar;
    private String euregp;
	private String referDate;
}
