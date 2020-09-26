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
@Table(name = "SkewsData")
public class SkewsData {
	@Id
    @GeneratedValue
    private Long id;
    private String fifteenPercentPFactor;
    private String twentyfivePercentPFactor;
    private String ATMFactor;
    private String twentyfivePercentCFactor;
    private String fifteenPercentCFactor;
    private String referDate;
    private Long subgroupId;
}
