package com.bourse.repositories.longEndImpliedVol;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.longEndImpliedVol.LongEndImpliedVolData;

public interface LongEndImpliedVolDataRepository extends JpaRepository<LongEndImpliedVolData, Long> {

    boolean existsByReferDateAndGroupId(String referDate, Long groupId);

    LongEndImpliedVolData findByReferDateAndGroupIdAndSubgroupId(String referDate, Long groupId, Long subgroupId);

    List<LongEndImpliedVolData> findByReferDateAndGroupId(String referDate, Long groupId);

    @Query(value = "select max(STR_TO_DATE(refer_date,'%d-%m-%Y')) from long_end_implied_vol_data where group_id=:groupId", nativeQuery = true)
    String findLatest(@Param("groupId") String groupId);

    @Modifying
    @Transactional
    void deleteByGroupIdAndReferDate(Long groupId, String referDate);
}
