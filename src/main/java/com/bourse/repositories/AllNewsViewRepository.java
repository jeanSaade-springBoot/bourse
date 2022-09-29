package com.bourse.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.AllNewsView;

public interface AllNewsViewRepository extends JpaRepository<AllNewsView, Long> {

	
}
