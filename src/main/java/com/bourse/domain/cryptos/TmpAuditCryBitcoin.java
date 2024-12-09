package com.bourse.domain.cryptos;

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
@Table(name = "tmp_audit_cry_bitcoin")
public class TmpAuditCryBitcoin {
	@Id
	@GeneratedValue(generator = "audit_cry_bitcoin_sequence")
	   @GenericGenerator(
	      name = "audit_cry_bitcoin_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_cry_bitcoin_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String openeur;
	private String closeeur;
    private String high;
    private String low;
    private String volume;
    private String marketcap;
    private String openint;
    private String closeint;
	private String referDate;
}
