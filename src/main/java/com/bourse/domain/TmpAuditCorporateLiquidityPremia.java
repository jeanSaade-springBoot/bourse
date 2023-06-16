package com.bourse.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "TmpAuditCorporateLiquidityPremia")
public class TmpAuditCorporateLiquidityPremia {
	@Id
	private Long id;
	private String usatoaaaUsa;
	private String usbtobbbUsatoaaa;
	private String usctocccUsbtobbb;
	private String eurozoneatoaaaGermany;
	private String eurozonebtobbbEurozoneatoaaa;
	private String referDate;
}
