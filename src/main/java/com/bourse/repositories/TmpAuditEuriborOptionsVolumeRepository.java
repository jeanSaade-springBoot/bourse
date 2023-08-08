package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditEuriborOptionsVolume;


public interface TmpAuditEuriborOptionsVolumeRepository extends JpaRepository<TmpAuditEuriborOptionsVolume, Long> {

	List<TmpAuditEuriborOptionsVolume> findByReferDate(String referDate);

}
