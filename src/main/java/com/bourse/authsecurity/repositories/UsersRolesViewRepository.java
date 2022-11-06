package com.bourse.authsecurity.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.authsecurity.domain.UsersRolesView;

public interface UsersRolesViewRepository  extends JpaRepository<UsersRolesView, Long> {

}
