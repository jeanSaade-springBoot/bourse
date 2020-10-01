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
@Table(name = "SovereignDataCalculated")
public class SovereignDataCalculated {
	@Id
    @GeneratedValue
    private Long id;
    private String twoOverFivefactor;
    private String twoOverTenFactor;
    private String fiveOverTenFactor;
    private String fiveOverThirteeFactor;
    private String tenOverThirteeFactor;
    private String referDate;
    private Long subgroupId;
}
