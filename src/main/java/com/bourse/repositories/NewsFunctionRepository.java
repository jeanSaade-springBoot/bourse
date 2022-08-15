package com.bourse.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.NewsFunction;

public interface NewsFunctionRepository extends JpaRepository<NewsFunction, Long> {

	public Optional<NewsFunction> findById(Long id);

}
