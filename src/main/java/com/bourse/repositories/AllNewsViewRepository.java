package com.bourse.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bourse.domain.AllNewsView;

public interface AllNewsViewRepository extends JpaRepository<AllNewsView, Long> {

	List<AllNewsView> findByIsPublished(String isPublished, Pageable pageable);

	List<AllNewsView> findByIsPublishedAndIsBold(String isPublished, String isBold, Pageable pageable);

	Page<AllNewsView> findByIsPublishedAndGroupIdAndSubgroupId(String isPublished, String groupId, String subGroupId, Pageable pageable);
	
	@Query("select a from AllNewsView a where a.isPublished='1' and a.description in (:selectedGraphNews)")
	Page<AllNewsView> findByIsPublishedAndDescription(@Param("selectedGraphNews") List<String> selectedGraphNews, Pageable pageable);
	
	
	 @Query("select a from AllNewsView a where a.isPublished='1' and a.description LIKE CONCAT('%',:subGroupIdDescription,'%')") 
	 List<AllNewsView> findAllNewsByDescription(@Param("subGroupIdDescription") String subGroupIdDescription);
	 

	@Query("SELECT a FROM AllNewsView a WHERE a.isPublished='1' AND a.description LIKE CONCAT('%', :subGroupIdDescription, '%')")
	Page<AllNewsView> findAllNewsByDescription(@Param("subGroupIdDescription") String subGroupIdDescription, Pageable pageable);
	
	@Query("SELECT a FROM AllNewsView a WHERE a.assetId = :assetId " +
	        "AND (:robots IS NULL OR a.robots LIKE %:robots%) " +
	        "AND (:generationDate IS NULL OR a.generationDateDate = :generationDate) " +
	        "AND (:template IS NULL OR a.template LIKE %:template%)")
	Page<AllNewsView> findAllNewsByFilters(@Param("assetId") String assetId, @Param("robots") String robots, @Param("generationDate") String generationDate, @Param("template") String template,Pageable pageable);
	
	Page<AllNewsView> findByAssetId(String assetId, Pageable pageable);
	
	List<AllNewsView> findByIsPublishedAndAssetId(String isPublished, String assetId);

	List<AllNewsView> findByIsPublishedAndAssetId(String isPublished, String assetId, Pageable pageable);
	
	List<AllNewsView> findByIsPublishedAndIsBoldAndAssetId(String isPublished, String isBold, String assetId, Pageable pageable);
	
	Page<AllNewsView> findAllByIsPublished(String isPublished, Pageable pageable);

	Page<AllNewsView> findAllByIsPublishedAndIsBold(String isPublished, Pageable pageable, String isBold);
	
	Page<AllNewsView> findAllByIsPublishedAndAssetId(String isPublished, String assetId, Pageable pageable);
	
	Page<AllNewsView> findAllByIsPublishedAndAssetIdAndIsBold(String isPublished, String assetId, Pageable pageable, String isBold);
}
