package com.bourse.domain.liquidity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Column;
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
@Table(name = "us_banks_reserve_threshold")
public class UsBanksReserveThresholdEntity {

    @Id
    private Long id;

    @Column(name = "abundant")
    private BigDecimal abundant;

    @Column(name = "ample")
    private BigDecimal ample;

    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;

    @Column(name = "updated_by")
    private String updatedBy;

}