package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class AssetNewsOrderDTO {
	private Long id;
    private String assetCode;
    private String assetId;
	private String assetName;
	private String orderId;
}
