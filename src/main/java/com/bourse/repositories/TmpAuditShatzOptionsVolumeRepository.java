package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
 
import com.bourse.domain.TmpAuditShatzOptionsVolume;


public interface TmpAuditShatzOptionsVolumeRepository extends JpaRepository<TmpAuditShatzOptionsVolume, Long> {

	List<TmpAuditShatzOptionsVolume> findByReferDate(String referDate);

}
