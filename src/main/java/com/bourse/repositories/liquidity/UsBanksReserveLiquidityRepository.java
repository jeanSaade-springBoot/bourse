package com.bourse.repositories.liquidity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.liquidity.UsBanksReserveLiquidity;


public interface UsBanksReserveLiquidityRepository extends JpaRepository<UsBanksReserveLiquidity, Long> {

    public long countByReferDate(String referDate);

    public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

    public List<UsBanksReserveLiquidity> findByReferDate(String referDate);

    public UsBanksReserveLiquidity findUsBanksReserveLiquidityByReferDateAndSubgroupId(
            String referDate,
            Long subgroupId);

    @Query(value =
            "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) " +
            "from us_banks_reserve_liquidity",
            nativeQuery = true)
    public String findLatestUsBanksReserveLiquidity();
}