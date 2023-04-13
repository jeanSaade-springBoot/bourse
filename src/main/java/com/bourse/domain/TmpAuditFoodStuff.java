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
@Table(name = "TmpAuditFoodstuff")
public class TmpAuditFoodStuff {
	@Id
	private Long id;
	private String CORN;
	private String SUGAR;
	private String WHEAT;
	private String referDate;
}
