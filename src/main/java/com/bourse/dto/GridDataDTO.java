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
public class GridDataDTO {
	private List<DataFunctionRespDTO> dataFunctionRespDTO;
	private String gridTitle;
}

