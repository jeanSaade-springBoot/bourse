package com.bourse.dto;

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
public class GraphNewsDTO {
   private List<String> selectedGraphs;
   private String pageNo;
   private String pageSize;
}
