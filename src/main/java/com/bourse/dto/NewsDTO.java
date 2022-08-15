package com.bourse.dto;

import com.bourse.domain.News;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class NewsDTO {
    private Long id;
    private String template;
    private String columnDescription;
    private String robots;
    private String isBold;
    private String generationDateDate; 
    private String isPublished;
    private String isFunctionNews;
    
    public News fromDToToObject(NewsDTO dto){
    	
    	News news = new News();
    	news.setId(dto.getId());
    	news.setTemplate(dto.getTemplate());
    	news.setColumnDescription(dto.getColumnDescription());
    	news.setRobots(dto.getRobots());
    	news.setIsBold(dto.getIsBold());
        news.setGenerationDateDate(dto.getGenerationDateDate());
    	news.setIsPublished(dto.getIsPublished());
    	return  news;
    }
}
