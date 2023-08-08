package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditBuxlOptionsVolume;


public interface TmpAuditBuxlOptionsVolumeRepository extends JpaRepository<TmpAuditBuxlOptionsVolume, Long> {

	List<TmpAuditBuxlOptionsVolume> findByReferDate(String referDate);

}
