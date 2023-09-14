package com.bourse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.OngoingProcess;
import com.bourse.dto.OngoingProcessDTO;
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
	
	public List<OngoingProcessDTO> findByAssetIdAndGroupIdOrParentGroupId( int assetId, int groupId) {
		return ongoingProcessRepository.findByAssetIdAndGroupIdOrParentGroupId(assetId,groupId);
	}
	public Boolean checkIfRobotIsRunning(int assetId, int groupId)
	{
		 List<OngoingProcessDTO> ongoingProcessList = findByAssetIdAndGroupIdOrParentGroupId(assetId,groupId);
		    Boolean isRunnig =false;
			for(OngoingProcessDTO ongoingProcessData:ongoingProcessList) {
				try {
					 OngoingProcess ongoingProcess= checkIfExistByAssetIdAndGroupId(true,ongoingProcessData.getAssetId(),ongoingProcessData.getGroupId());
					 isRunnig =false;
					if(ongoingProcess!=null)
						isRunnig = true;

				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			return isRunnig;
	}

}
