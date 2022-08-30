package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.Status;

public interface StatusRepository  extends JpaRepository<Status, Long> {

}
