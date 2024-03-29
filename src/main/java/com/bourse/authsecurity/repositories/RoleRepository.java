package com.bourse.authsecurity.repositories;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.authsecurity.domain.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

	Collection<Role> findByName(String name);

    @Override
    void delete(Role role);

    List<Role> findAll();

	boolean existsByName(String roleName);

	
}
