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
@Table(name = "tmp_audit_sti_cryptos")
public class TmpAuditStiCryptos {
	@Id
	@GeneratedValue(generator = "audit_sti_cryptos_sequence")
	   @GenericGenerator(
	      name = "audit_sti_cryptos_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_sti_cryptos_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String BITCOIN;
	private String ETHERIUM;
	private String SOLANA;
	private String CARDANO;
	private String SHIBA;
	private String referDate;
}
