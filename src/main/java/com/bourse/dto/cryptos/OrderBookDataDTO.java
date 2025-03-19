package com.bourse.dto.cryptos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class OrderBookDataDTO {
	
	private OrderBookBidAskListDTO orderBookDataBidAsk;
	private OrderBookPercentageResponseDTO orderBookPercentage;
	private CurrencyPreviousPriceDTO currencyPreviousPriceDTO;

}
