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
public class SovereignYiledCurveSearchDTO {
	private int groupId;
	private List<String> yieldLst;
	private List<String> curveLst;

}
