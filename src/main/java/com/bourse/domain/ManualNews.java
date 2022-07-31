package com.bourse.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
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
@SequenceGenerator(initialValue = 1, name = "idManualNews", sequenceName = "ManualNewsSequence")
@Table(name = "manual_news")
public class ManualNews {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "idManualNews")
    private Long id;
	@Column(length=10)
    private String newsId;
}
