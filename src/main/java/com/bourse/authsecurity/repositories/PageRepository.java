package com.bourse.authsecurity.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.authsecurity.domain.Page;

public interface PageRepository extends JpaRepository<Page, Long> {

}
