package com.bourse.dto;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.bourse.domain.ColumnConfiguration;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class GraphResponseColConfigListDTO {
	
	@Id
    private List<GraphResponseDTO>  graphResponseDTOLst;
	private List<ColumnConfiguration> config;

}
