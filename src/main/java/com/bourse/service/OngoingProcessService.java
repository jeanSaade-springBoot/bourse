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

	public OngoingProcess checkIfExist(boolean value) {
		return ongoingProcessRepository.findTopByStatus(value);
	}

	public OngoingProcess checkIfMustBeTriggeredByAssetId(boolean value, int assetId) {
		return ongoingProcessRepository.findTopByMustBeTriggerAndAssetId(value,assetId);
	}
}
