package com.bourse.domain;

import java.time.LocalDate;

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
@Table(name = "SovereignDataCorrected")
public class SovereignDataCorrected {
	@Id
    @GeneratedValue
    private Long id;
    private String yieldFactor;
    private LocalDate referDate;
    private String yieldValueUSA;
    private String yieldValueGERMANY;
    private String yieldValueUK;
    private String yieldValueITALY;
    private String yieldValueSPAIN;
    private String yieldValueFRANCE;
}
