package com.bourse.domain.graph;

import javax.persistence.Column;
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
@Table(name = "technical_analysis_retracement_history")
public class TechnicalAnalysisRetracementHistory {
	@Id
	@GeneratedValue(generator = "technical_analysis_retracement_history_sequence")
	   @GenericGenerator(
	      name = "technical_analysis_retracement_history_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "technical_analysis_retracement_history_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
    private String userName;
    private String graphId;
    private String startDate;
    private String startPrice;
    private String endDate;
    private String endPrice;
    private String percentage10;
    private String percentage25;
    private String percentage33;
    private String percenetage38;
    private String percentage50;
    private String percentage62;
    private String percentage66;
    private String percentage75;
    @Builder.Default
    @Column(name = "hide_percentage10", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean hidePercentage10 = true; 
    @Builder.Default
    @Column(name = "hide_percentage25", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean hidePercentage25 = true; 
    @Builder.Default
    @Column(name = "hide_percentage33", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean hidePercentage33 = true; 
    @Builder.Default
    @Column(name = "hide_percenetage38", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean hidePercenetage38 = true; 
    @Builder.Default
    @Column(name = "hide_percentage50", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean hidePercentage50 = true; 
    @Builder.Default
    @Column(name = "hide_percentage62", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean hidePercentage62 = true; 
    @Builder.Default
    @Column(name = "hide_percentage66", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean hidePercentage66 = true; 
    @Builder.Default
    @Column(name = "hide_percentage75", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean hidePercentage75 = true; 
    @Builder.Default
    @Column(name = "hide_all", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean hideAll = true; 
    private String screenName;
    
    @Builder.Default
    @Column(name = "is_shared", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean isShared = false;
}
