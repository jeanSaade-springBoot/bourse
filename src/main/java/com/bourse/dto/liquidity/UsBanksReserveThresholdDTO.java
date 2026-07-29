package com.bourse.dto.liquidity;

import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class UsBanksReserveThresholdDTO {
    private BigDecimal abundant;
    private BigDecimal ample;
    private String lastUpdated;
    private String updatedBy;
}