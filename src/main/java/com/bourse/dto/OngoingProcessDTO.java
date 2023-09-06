package com.bourse.dto;

public class OngoingProcessDTO {
    private int assetId;
    private int groupId;

    public OngoingProcessDTO() {
        // Default constructor
    }

    public OngoingProcessDTO(int assetId, int groupId) {
        this.assetId = assetId;
        this.groupId = groupId;
    }

    public int getAssetId() {
        return assetId;
    }

    public void setAssetId(int assetId) {
        this.assetId = assetId;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    @Override
    public String toString() {
        return "OngoingProcessDTO{" +
                "assetId=" + assetId +
                ", groupId=" + groupId +
                '}';
    }
}