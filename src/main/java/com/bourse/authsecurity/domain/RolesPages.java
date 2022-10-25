package com.bourse.authsecurity.domain;

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
@Table(name = "roles_pages")
public class RolesPages {
	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private long id;
	    private long role_id;
	    private long page_id;
}
