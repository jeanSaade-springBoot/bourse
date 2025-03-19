package com.bourse.dto.cryptos;

public class OrderBookByActionObjectImpl implements OrderBookByActionObjectProjection {
    private String price;
    private String volume;

    public OrderBookByActionObjectImpl() {}

    @Override
    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @Override
    public String getVolume() {
        return volume;
    }

    public void setVolume(String volume) {
        this.volume = volume;
    }
}