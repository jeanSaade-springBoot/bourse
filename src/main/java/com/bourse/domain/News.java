package com.bourse.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
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
@Table(name = "News")
public class News {
	@Id
    @GeneratedValue
    private Long id;
    private String template;
    private String columnDescription;
    private String robots;
    private String isBold;
    private String generationDateDate;
    private String isPublished;
    }
