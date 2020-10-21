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
	private String fromDate;
	private String toDate;
}


/*
{
"sovereignYiledCurveSearchDTOlst":[{"groupId":1,
                                  "yieldLst":["2yr","5yr"],
								   "curveList":["2/5"]}],


"sovereignCrossSearchDTOlst":[{"crossGroupId":1,
                             "crossGroupValue":["2"]}],
"fromDate":"2020-10-05",
"toDate":"2020-10-05"
}
*/