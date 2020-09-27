package com.bourse.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.SovereignData;
public interface SovereignYieldsRepository extends JpaRepository<SovereignData, Long> {
	
	public SovereignData findById(long id);

}
