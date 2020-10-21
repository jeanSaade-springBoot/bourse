package com.bourse.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class SoveriegnCrossSearchDTO {
	private int crossGroupId;
	private List<String> crossGroupValue;
}
