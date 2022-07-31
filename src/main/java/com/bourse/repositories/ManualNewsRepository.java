package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.ManualNews;

public interface ManualNewsRepository extends JpaRepository<ManualNews, Long> {
 
}
