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
@Table(name = "TmpAuditEnergy")
public class TmpAuditEnergy {
	@Id
	private Long id;
	private String oil;
	private String gasolineGall;
	private String dieselGall;
	private String natgasUsd;
	private String natgasEur;
	private String gasolineLitre;
	private String dieselTon;
	private String referDate;
}
