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
@Table(name = "TmpAuditCorporateYields")
public class TmpAuditCorporateYields {
	@Id
	private Long id;
	private String usatoaaa;
	private String usbtobbb;
	private String usctoccc;
	private String eurozoneatoaaa;
	private String eurozonebtobbb;
	private String referDate;
}
