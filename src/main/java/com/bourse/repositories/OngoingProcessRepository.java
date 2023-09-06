package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.bourse.domain.OngoingProcess;
import com.bourse.dto.OngoingProcessDTO;

public interface OngoingProcessRepository  extends JpaRepository<OngoingProcess, Long> {
	 @Modifying
	 @Transactional
	 @Query(value = "update ongoing_process set must_be_trigger = true",
             nativeQuery = true)
     public void updateOngoingProcess();

	public OngoingProcess findTopByMustBeTrigger(boolean value);

	public OngoingProcess findTopByStatus(boolean value);

	public OngoingProcess findTopByMustBeTriggerAndAssetId(boolean value, int assetId);

	public OngoingProcess findTopByMustBeTriggerAndAssetIdAndGroupId(boolean value, int assetId, int groupId);

	public OngoingProcess findTopByStatusAndAssetIdAndGroupId(boolean value, int assetId, int groupId);

	public OngoingProcess findTopByStatusAndAssetId(boolean value, int assetId);
   
	@Query("SELECT DISTINCT NEW com.bourse.dto.OngoingProcessDTO(e.assetId, e.groupId) FROM OngoingProcess e WHERE e.assetId = :assetId AND e.groupId = :groupId OR e.parentGroupId = :groupId")
    public List<OngoingProcessDTO> findByAssetIdAndGroupIdOrParentGroupId(@Param("assetId") int assetId ,@Param("groupId") int groupId);
}
