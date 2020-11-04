package com.bourse.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
 
import com.bourse.domain.Groups;

public interface GroupsRepository extends JpaRepository<Groups, Long> {

}
