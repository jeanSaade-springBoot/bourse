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
@Table(name = "Subgroup")
public class SubGroup {
	@Id
    @GeneratedValue
    private Long id;
	 private String idSubGroup;
    private String description ;
	private String groupId ;
    private String subgroupCode ;
}
