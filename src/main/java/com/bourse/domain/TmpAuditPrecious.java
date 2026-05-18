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
@Table(name = "TmpAuditPrecious")
public class TmpAuditPrecious {
	@Id
	@GeneratedValue(generator = "audit_precious_sequence")
	   @GenericGenerator(
	      name = "audit_precious_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_precious_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	@Column(name = "open_gold")
	private String openGold;
	@Column(name = "high_gold")
	private String highGold;
	@Column(name = "low_gold")
	private String lowGold;
	@Column(name = "close_gold")
	private String closeGold; 
	@Column(name = "open_silver")
	private String openSilver;
	@Column(name = "high_silver")
	private String highSilver;
	@Column(name = "low_silver")
	private String lowSilver;
	@Column(name = "close_silver")
	private String closeSilver; 
	private String PLATINUM;
	private String PLATINUM_GOLD;
	private String GOLD_SILVER;
	private String referDate;
}
