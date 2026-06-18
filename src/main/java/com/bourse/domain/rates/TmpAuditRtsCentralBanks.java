package com.bourse.domain.rates;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tmp_audit_rts_central_banks")
public class TmpAuditRtsCentralBanks {

    @Id
    @GeneratedValue(generator = "audit_rts_central_banks_sequence")
    @GenericGenerator(
        name = "audit_rts_central_banks_sequence",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
        parameters = {
            @Parameter(name = "sequence_name", value = "audit_rts_central_banks_sequence"),
            @Parameter(name = "initial_value", value = "1"),
            @Parameter(name = "increment_size", value = "1")
        }
    )
    private Long id;

    private String referDate;

    private String fedLowerRate;
    private String fedUpperRate;
    private String fedLowerMove;
    private String fedUpperMove;

    private String ecbDepoRate;
    private String ecbRefiRate;
    private String ecbLendingRate;
    private String ecbDepoMove;
    private String ecbRefiMove;
    private String ecbLendingMove;

    private String boeRefiMove;
    private String boeMonthlyBaseRate;
}