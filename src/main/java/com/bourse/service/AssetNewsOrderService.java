package com.bourse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.AssetNewsOrder;
import com.bourse.dto.AssetNewsOrderDTO;
import com.bourse.repositories.AssetNewsOrderRepository;

@Service
public class AssetNewsOrderService {
	
   @Autowired
   AssetNewsOrderRepository assetNewsOrderRepository;
	
   public List<AssetNewsOrder> getAssetNewsOrder(){
	 return  assetNewsOrderRepository.findAllByOrderByOrderIdAsc();
   }

public boolean updateAssetNewsOrder(List<AssetNewsOrderDTO> assetNewsOrderDTOlst) {
	boolean success = false;
	for (AssetNewsOrderDTO assetNewsOrderDTO : assetNewsOrderDTOlst) {
			 AssetNewsOrder assetNewsOrder = AssetNewsOrder.builder().id(assetNewsOrderDTO.getId())
					 												 .assetCode(assetNewsOrderDTO.getAssetCode())
					 												 .assetId(assetNewsOrderDTO.getAssetId())
					 												 .assetName(assetNewsOrderDTO.getAssetName())
					 												 .orderId(assetNewsOrderDTO.getOrderId())
					 												 .build();
			 assetNewsOrderRepository.save(assetNewsOrder);
			 success=true;
		}
		return success;
	}
   
}
