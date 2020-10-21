package com.bourse.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class DynamicGridColumns {
	private String text;
	private String datafield;
	private String width;

}
