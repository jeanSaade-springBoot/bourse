package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.TmpAuditBundOptionsVolume;


public interface TmpAuditBundOptionsVolumeRepository extends JpaRepository<TmpAuditBundOptionsVolume, Long> {

	List<TmpAuditBundOptionsVolume> findByReferDate(String referDate);

}
