package com.bourse.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.Person;
public interface PersonRepository extends JpaRepository<Person, Long> {

}
