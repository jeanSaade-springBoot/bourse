package com.bourse.domain.liquidity;

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
@Table(name = "TmpAuditEcbBalanceSheetLiquidity")
public class TmpAuditEcbBalanceSheetLiquidity {
	@Id
	@GeneratedValue(generator = "audit_ecb_balance_sheet_sequence")
	   @GenericGenerator(
	      name = "audit_ecb_balance_sheet_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_ecb_balance_sheet_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String ecbBalanceSheet;
	private String referDate;
}
