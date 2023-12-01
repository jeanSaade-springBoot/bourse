package com.bourse.dto.skews;

import java.util.List;

import com.bourse.domain.News;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class SkewsDTO {
   private Long id;
   private String referDate;
   private String value;
   private String factorId;
   private String subGroupId;
}
