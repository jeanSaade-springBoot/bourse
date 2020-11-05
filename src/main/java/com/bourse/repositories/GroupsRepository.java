package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
 
import com.bourse.domain.Groups;

public interface GroupsRepository extends JpaRepository<Groups, Long> {
	List<Groups> findByAssetId(String familyId);
}
