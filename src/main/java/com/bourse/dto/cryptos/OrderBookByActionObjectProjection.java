package com.bourse.dto.cryptos;

public interface OrderBookByActionObjectProjection {
	// If you don't actually need an id from the query, you can omit it here
    String getPrice();  // price
    String getVolume();  // percentage
}
