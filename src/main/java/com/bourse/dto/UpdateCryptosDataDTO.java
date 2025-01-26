package com.bourse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class UpdateCryptosDataDTO {

    private String startTime;
    private String openeur;
    private String closeeur;
    private String high;
    private String low;
    private String volume;
    private String marketcap;
    private String openint;
    private String closeint;
}
