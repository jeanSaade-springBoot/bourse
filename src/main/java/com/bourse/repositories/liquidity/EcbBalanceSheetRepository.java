package com.bourse.repositories.liquidity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bourse.domain.liquidity.EcbBalanceSheetLiquidity;

public interface EcbBalanceSheetRepository extends JpaRepository<EcbBalanceSheetLiquidity, Long> {

    public long countByReferDate(String referDate);

    public boolean existsByReferDateAndSubgroupId(String referDate, Long subgroupId);

    public List<EcbBalanceSheetLiquidity> findByReferDate(String referDate);

    public EcbBalanceSheetLiquidity findEcbBalanceSheetByReferDateAndSubgroupId(
            String referDate,
            Long subgroupId);

    @Query(value =
            "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) " +
            "from ecb_balance_sheet_liquidity",
            nativeQuery = true)
    public String findLatestEcbBalanceSheet();
}