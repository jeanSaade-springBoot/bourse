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
public class MainSearchFilterDTO {
	private List<SelectedSearchDTO> selectedSearchDTOlst;
	private String fromDate;
	private String toDate;
	private String interval;
}
