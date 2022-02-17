package com.bourse.dto;
import java.util.List;

import com.bourse.domain.NewsOrder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class NewsOrderDTO {
	private Long[] listid;
	private List<NewsOrder> newsOrderList;
}


