package com.bourse.authsecurity.repositories;


import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.authsecurity.domain.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

	Set<Role> findByName(String name);

    @Override
    void delete(Role role);

}
