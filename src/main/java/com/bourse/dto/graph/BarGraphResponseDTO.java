package com.bourse.dto.graph;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class BarGraphResponseDTO {
	
	@Id
    private Long id;
	private String value;
	private String name;
}

