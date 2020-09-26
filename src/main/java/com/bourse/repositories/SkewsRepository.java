package com.bourse.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.SkewsData;

public interface SkewsRepository extends JpaRepository<SkewsData, Long> {

}
