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
@Table(name = "TableManagement")
public class TableManagement {
	@Id
    @GeneratedValue
    private Long id;
	private String assetId;
	private String groupId;
	private String subgroupId;
	private String columnName;
	private String tableName;
}
