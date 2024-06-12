package com.bourse.dto.macro;

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
public class MacroLatestDateResponseDTO {
	
	@Id
	private String id;
	private String referDate;
}

