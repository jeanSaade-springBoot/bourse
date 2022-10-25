package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.MembershipDuration;

public interface MembershipDurationRepository  extends JpaRepository<MembershipDuration, Long> {

}
