package com.bourse.dto.cryptos;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class OrderBookPercentageResponseDTO {
	
	private List<GraphResponseProjectionImpl> orderBookPercentage;

}
