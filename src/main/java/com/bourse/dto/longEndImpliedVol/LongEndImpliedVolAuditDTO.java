package com.bourse.dto.longEndImpliedVol;

public class LongEndImpliedVolAuditDTO {

    private String id;
    private String maturityName;
    private String bsVol;
    private String deliveredTickVol;
    private String strike;
    private String straddlePrice;
    private String referDate;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getMaturityName() { return maturityName; }
    public void setMaturityName(String maturityName) { this.maturityName = maturityName; }

    public String getBsVol() { return bsVol; }
    public void setBsVol(String bsVol) { this.bsVol = bsVol; }

    public String getDeliveredTickVol() { return deliveredTickVol; }
    public void setDeliveredTickVol(String deliveredTickVol) { this.deliveredTickVol = deliveredTickVol; }

    public String getStrike() { return strike; }
    public void setStrike(String strike) { this.strike = strike; }

    public String getStraddlePrice() { return straddlePrice; }
    public void setStraddlePrice(String straddlePrice) { this.straddlePrice = straddlePrice; }

    public String getReferDate() { return referDate; }
    public void setReferDate(String referDate) { this.referDate = referDate; }
}
