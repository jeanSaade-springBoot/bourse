package com.bourse.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "all_news_view")
public class AllNewsView {
	@Id
    private Long id;
    private String template;
    private String columnDescription;
    private String robots;
    private String isBold;
    private String generationDateDate;
    private String isPublished;
    private String isFunctionNews;
    private String groupId;
    private String subgroupId;
    private String description;
    private String assetId;
}
