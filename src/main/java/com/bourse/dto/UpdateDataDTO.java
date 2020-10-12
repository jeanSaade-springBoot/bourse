package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class UpdateDataDTO {
    private String fatcor;
    private String referdate;
    private String subgroupId;
    private String value;
}
