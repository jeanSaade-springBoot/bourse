package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.AssetNewsOrder;

public interface AssetNewsOrderRepository  extends JpaRepository<AssetNewsOrder, Long> {

	List<AssetNewsOrder> findAllByOrderByOrderIdAsc();
	

}
