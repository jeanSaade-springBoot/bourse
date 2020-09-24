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
@Table(name = "SovereignData")
public class SovereignData {
	@Id
    @GeneratedValue
    private Long id;
    private String thirteeYrFactor;
    private String tenYrFactor;
    private String fiveYrFactor;
    private String twoYrFactor;
    private String referDate;
    private Long subgroupId;
}
