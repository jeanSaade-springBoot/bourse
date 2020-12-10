package com.bourse.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.CalendarDates;
public interface CalendarDatesRepository extends JpaRepository<CalendarDates, Long> {

}
