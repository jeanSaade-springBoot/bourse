package com.bourse.domain;

import java.sql.Timestamp;

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
@Table(name = "user_membership")
public class UserMembership {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	private Long mdId;
	private Long userId;
	private boolean isActive;
    private Timestamp createdOn;
}
