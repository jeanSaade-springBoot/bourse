package com.bourse.dto;

import java.util.HashMap;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class DynamicGridResultClassDTO {

	HashMap<String,List> hashData = new HashMap<String, List>();
	HashMap<String,List> colsConfig = new HashMap<String, List>();
}
