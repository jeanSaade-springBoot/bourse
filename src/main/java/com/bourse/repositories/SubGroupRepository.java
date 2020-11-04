package com.bourse.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
 
import com.bourse.domain.Groups;
import com.bourse.domain.SubGroup;

public interface SubGroupRepository extends JpaRepository<SubGroup, Long> {

}
