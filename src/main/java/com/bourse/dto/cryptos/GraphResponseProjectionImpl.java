package com.bourse.dto.cryptos;

public class GraphResponseProjectionImpl implements GraphResponseProjection {
    private String action;
    private String price;
    private String percentage;

    public GraphResponseProjectionImpl() {}

    @Override
    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    @Override
    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @Override
    public String getPercentage() {
        return percentage;
    }

    public void setPercentage(String percentage) {
        this.percentage = percentage;
    }
}