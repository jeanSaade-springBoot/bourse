package com.bourse.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
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
@Table(name = "ColumnConfiguration")
public class ColumnConfiguration {
	@Id
    @GeneratedValue
    private Long id;
    private String description ;
	private String displayDescription;
	private String groupId;
	private String subgroupId;
	private String dataFormat;
	private boolean canBeNegative;
	private String graphScale;
	private String startDate;
	private String calculationType;
	private String tickValue;
	private String currency;
}
