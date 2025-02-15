package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.AssetNewsOrder;

public interface AssetNewsOrderRepository  extends JpaRepository<AssetNewsOrder, Long> {

	@Query(value = "SELECT * FROM asset_news_order ORDER BY CAST(order_id AS UNSIGNED) ASC", nativeQuery = true)
	List<AssetNewsOrder> findAllByOrderByOrderIdAsc();

}
