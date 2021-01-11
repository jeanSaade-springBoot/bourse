package com.bourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.DataEntryFilterHistory;
public interface DataEntryFilterHistoryRepository extends JpaRepository<DataEntryFilterHistory, Long> {
	
}
