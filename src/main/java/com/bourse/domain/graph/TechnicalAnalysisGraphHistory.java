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
@Table(name = "technical_analysis_graph_history")
public class TechnicalAnalysisGraphHistory {
	@Id
	@GeneratedValue(generator = "technical_analysis_graph_history_sequence")
	   @GenericGenerator(
	      name = "technical_analysis_graph_history_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "technical_analysis_graph_history_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
    private String userName;
    private String graphId;
    private String trendlines;
    private String chartOptions;
    @Builder.Default
    @Column(name = "is_visible_trendline", columnDefinition = "BOOLEAN DEFAULT TRUE")
    private Boolean isVisibleTrendline = true; 
    private String channel;
    @Builder.Default
    @Column(name = "is_visible_channel", columnDefinition = "BOOLEAN DEFAULT TRUE")
    private Boolean isVisibleChannel = true; 
    private String screenName;

}
