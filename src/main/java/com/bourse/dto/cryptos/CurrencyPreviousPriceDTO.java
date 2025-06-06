package com.bourse.dto.cryptos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class CurrencyPreviousPriceDTO {
    private String currentPrice;
    private String previousPrice;
}