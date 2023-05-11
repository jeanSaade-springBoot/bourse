package com.bourse.domain;

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
@Table(name = "TransportationData")
public class TransportationData {
	@Id
	@GeneratedValue(generator = "transportation_data_sequence")
	   @GenericGenerator(
	      name = "transportation_data_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "transportation_data_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
	private Long id;
    private String value;
    @Column(unique = true)
    private String referDate;
    private Long subgroupId;
}
