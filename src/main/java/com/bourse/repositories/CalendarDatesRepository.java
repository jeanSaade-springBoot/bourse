package com.bourse.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bourse.domain.CalendarDates;
public interface CalendarDatesRepository extends JpaRepository<CalendarDates, Long> {
	
  public List<CalendarDates> findByIsvacation(String isvacation);
}
