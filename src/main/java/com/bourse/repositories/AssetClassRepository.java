package com.bourse.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bourse.domain.AssetClass;

public interface AssetClassRepository extends JpaRepository<AssetClass, Long> {

}
