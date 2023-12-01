package com.bourse.domain.skews;

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
@Table(name = "long_skews_data")
public class LongSkewsData {
	@Id
    @GeneratedValue
    private Long id;
    private String value ;
    private String referDate ;
    private Long subgroupId;
    private String factorId;
}
