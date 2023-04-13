package com.bourse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.OngoingProcess;
import com.bourse.repositories.OngoingProcessRepository;

@Service
public class OngoingProcessService {
	@Autowired
	OngoingProcessRepository ongoingProcessRepository;
	
	public void updateOngoingProcessSetMustBeTriggeredTrue()
	{
		ongoingProcessRepository.updateOngoingProcess();
	}

	public OngoingProcess checkIfExistByAssetId(boolean value, int assetId) {
		return ongoingProcessRepository.findTopByStatusAndAssetId(value,assetId);
	}
	public OngoingProcess checkIfExistByAssetIdAndGroupId(boolean value, int assetId, int groupId) {
		return ongoingProcessRepository.findTopByStatusAndAssetIdAndGroupId(value,assetId,groupId);
	}

	public OngoingProcess checkIfMustBeTriggeredByAssetId(boolean value, int assetId) {
		return ongoingProcessRepository.findTopByMustBeTriggerAndAssetId(value,assetId);
	}

	public OngoingProcess checkIfMustBeTriggeredByAssetIdAndGroupId(boolean value, int assetId, int groupId) {
		return ongoingProcessRepository.findTopByMustBeTriggerAndAssetIdAndGroupId(value,assetId,groupId);
	}

}
