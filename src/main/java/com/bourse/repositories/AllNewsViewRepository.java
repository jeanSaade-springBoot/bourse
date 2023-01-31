package com.bourse.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.AllNewsView;

public interface AllNewsViewRepository extends JpaRepository<AllNewsView, Long> {

	List<AllNewsView> findByIsPublished(String isPublished);

	List<AllNewsView> findByIsPublishedAndIsBold(String isPublished, String isBold);

	List<AllNewsView> findByIsPublishedAndGroupIdAndSubgroupId(String isPublished, String groupId, String subGroupId);
	
	@Query("select a from AllNewsView a where a.isPublished='1' and a.description in (:selectedGraphNews)")
	List<AllNewsView> findByIsPublishedAndDescription(@Param("selectedGraphNews") List<String> selectedGraphNews);
	
	@Query("select a from AllNewsView a where a.isPublished='1' and a.description LIKE CONCAT('%',:subGroupIdDescription,'%')")
	List<AllNewsView> findAllNewsByDescription(@Param("subGroupIdDescription") String subGroupIdDescription);

	List<AllNewsView> findByAssetId(String assetId);

	List<AllNewsView> findByIsPublishedAndAssetId(String string, String assetId);

	List<AllNewsView> findByIsPublishedAndIsBoldAndAssetId(String string, String isBold, String assetId);
}
