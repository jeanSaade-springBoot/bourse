package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.SovereignData;
public interface SovereignYieldsRepository extends JpaRepository<SovereignData, Long> {
	
	public SovereignData findById(long id);
	public List<SovereignData> findSovereignBysubgroupId(long subGroupId);

}
