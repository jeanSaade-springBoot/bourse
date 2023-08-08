package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditBoblOptionsVolume;


public interface TmpAuditBoblOptionsVolumeRepository extends JpaRepository<TmpAuditBoblOptionsVolume, Long> {

	List<TmpAuditBoblOptionsVolume> findByReferDate(String referDate);

}
