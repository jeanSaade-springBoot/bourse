package com.bourse.dto.macro;

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
public class MacroGraphResponseColConfigDTO {
	
	@Id
    private List<MacroGraphResponseDTO>  graphResponseDTOLst;
	private ColumnConfiguration config;

}
