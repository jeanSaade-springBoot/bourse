package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TableManagement;

public interface TableManagementRepository extends JpaRepository<TableManagement, Long> {
	TableManagement findByAssetIdAndGroupIdAndSubgroupId(String assetId,String groupId,  String subgroupId);
}
