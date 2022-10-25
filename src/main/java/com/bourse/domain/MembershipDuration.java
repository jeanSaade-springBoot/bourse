package com.bourse.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@Table(name = "membership_duration")
public class MembershipDuration {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	private String value;
	private String description;
}
