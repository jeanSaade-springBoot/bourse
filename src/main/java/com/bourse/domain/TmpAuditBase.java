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
@Table(name = "TmpAuditBase")
public class TmpAuditBase {
	@Id
	private Long id;
	private String COPPER;
	private String ALUMINUM;
	private String STEEL;
	private String LUMBER;
	private String referDate;
}
