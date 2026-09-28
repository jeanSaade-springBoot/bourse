package com.bourse.repositories.longEndImpliedVol;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.longEndImpliedVol.TmpAuditLeivBunds3Cm;

public interface TmpAuditLeivBunds3CmRepository extends JpaRepository<TmpAuditLeivBunds3Cm, Long> {
    List<TmpAuditLeivBunds3Cm> findByReferDate(String referDate);
    Optional<TmpAuditLeivBunds3Cm> findFirstByReferDate(String referDate);
    void deleteByReferDate(String referDate);
}
