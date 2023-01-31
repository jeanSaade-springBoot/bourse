package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.bourse.domain.OngoingProcess;

public interface OngoingProcessRepository  extends JpaRepository<OngoingProcess, Long> {
	 @Modifying
	 @Transactional
	 @Query(value = "update ongoing_process set must_be_trigger = true",
             nativeQuery = true)
     public void updateOngoingProcess();

	public OngoingProcess findTopByMustBeTrigger(boolean value);

	public OngoingProcess findTopByStatus(boolean value);

	public OngoingProcess findTopByMustBeTriggerAndAssetId(boolean value, int assetId);
}
