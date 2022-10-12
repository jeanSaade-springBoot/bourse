package com.bourse.authsecurity.domain;

import java.sql.Timestamp;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "UserRequested", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username"}),
})
public class UserRequested {
	@Id
	@GeneratedValue(generator = "user_requested_sequence")
	   @GenericGenerator(
	      name = "user_requested_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "user_requested_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
    private Long id;
	private String userName;
    private String password;
    private String passwordHint;
    private String title;
	private String firstName;
    private String surName;
    private String phone;
    private String mobile;
    private String company;
    private String address1;
    private String address2;
    private String postCode;
    private String Country;
    private String email;
    private String status;
	private Long userId;
    private Timestamp createdOn;
    private Timestamp updatedOn;
    private Timestamp lastLogin;

}
