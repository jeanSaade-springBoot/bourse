package com.bourse.dto;


import java.util.HashMap;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class QueryColumnsDTO {
	
	private String query;
	private HashMap<Integer,String>  colHash= new HashMap<Integer, String>();

}
