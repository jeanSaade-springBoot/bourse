package com.bourse.domain;

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
@Table(name = "DataEntryFilterHistory")
public class DataEntryFilterHistory {
	@Id
    @GeneratedValue
    private Long id;
	private String FilterHistory;
	private String screenName;
}
