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
public class SearchFilterDTO {
	private List<SovereignYiledCurveSearchDTO> sovereignYiledCurveSearchDTOlst;
	private List<SoveriegnCrossSearchDTO> sovereignCrossSearchDTOlst;
	private List<SelectedSearchDTO> selectedSearchDTOlst;
	private String fromDate;
	private String toDate;
}

