package com.bourse.repositories.longEndImpliedVol;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.longEndImpliedVol.TmpAuditLeivBunds2Cm;

public interface TmpAuditLeivBunds2CmRepository extends JpaRepository<TmpAuditLeivBunds2Cm, Long> {
    List<TmpAuditLeivBunds2Cm> findByReferDate(String referDate);
    Optional<TmpAuditLeivBunds2Cm> findFirstByReferDate(String referDate);
    void deleteByReferDate(String referDate);
}
