package com.bourse.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.News;
import com.bourse.domain.SovereignData;
public interface NewsRepository extends JpaRepository<News, Long> {
	public News findById(long id);
}
