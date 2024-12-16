package com.bourse.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "GraphHistory")
public class GraphHistory {
	@Id
    @GeneratedValue
    private Long id;
    private String screenName ;
	private String parameter;

    // New column for isCandle with default false
    @Column(name = "is_candle", nullable = false, columnDefinition = "BOOLEAN DEFAULT false")
    private boolean isCandle;

    // New column for candleOptionIndex
    @Column(name = "candle_option_index", nullable = true)
    private Integer candleOptionIndex;
}
