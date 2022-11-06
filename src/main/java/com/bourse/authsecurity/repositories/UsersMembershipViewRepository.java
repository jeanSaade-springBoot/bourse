package com.bourse.authsecurity.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.authsecurity.domain.UsersMembershipView;


public interface UsersMembershipViewRepository  extends JpaRepository<UsersMembershipView, Long> {

	List<UsersMembershipView> findAllByStatus(String status);
}
