package com.bourse.domain.sti;

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
@Table(name = "tmp_audit_sti_asia")
public class TmpAuditStiAsia {
	@Id
	@GeneratedValue(generator = "audit_sti_asia_sequence")
	   @GenericGenerator(
	      name = "audit_sti_asia_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "audit_sti_asia_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
	private String NIKKEI;
	private String NIKKEI_USDJPY;
	private String CSI;
	private String CSI_USDCNY;
	private String NIFTY;
	private String NIFTY_USDINR;
	private String KOSPI;
	private String KOSPI_USDKRW;
	private String HANGSENG;
	private String HANGSENG_USDHKD;
	private String HISMBI;
	private String HISMBI_USDHKD;
	private String HISMPI;
	private String HISMPI_USDHKD;
	private String referDate;
}
