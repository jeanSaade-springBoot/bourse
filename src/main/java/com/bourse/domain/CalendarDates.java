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
@Table(name = "calendar_dates")
public class CalendarDates {
	@Id
    @GeneratedValue
    private Long id;
	private String weeknbr;
	private String date;
	private String daydesc;
	private String vacationdesc;
	private String isvacation;
	private String vacationdate;
}
