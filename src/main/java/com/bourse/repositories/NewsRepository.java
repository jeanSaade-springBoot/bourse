package com.bourse.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.News;
public interface NewsRepository extends JpaRepository<News, Long> {

}
