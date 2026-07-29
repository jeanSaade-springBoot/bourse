package com.bourse.repositories.liquidity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bourse.domain.liquidity.UsBanksReserveThresholdEntity;

@Repository
public interface UsBanksReserveThresholdRepository
        extends JpaRepository<UsBanksReserveThresholdEntity, Long> {
}