package com.bourse.repositories;
import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.News;

public interface NewsRepository extends JpaRepository<News, Long> {
	public News findById(long id);
	public List<News> findByIsPublished(String isPublished, Sort sort);
	 @Query("SELECT new com.bourse.domain.News(t.id,t.template,t.columnDescription,t.robots,t.isBold,function('date_format', t.generationDateDate, '%Y-%m-%d 00:00:00'),t.isPublished) FROM News t "
	 		+ "WHERE t.isPublished=1 order by t.generationDateDate desc")
	List<News> findByIsPublishedFormatedDate();
	 
	 @Query("SELECT new com.bourse.domain.News(t.id,t.template,t.columnDescription,t.robots,t.isBold,function('date_format', t.generationDateDate, '%Y-%m-%d 00:00:00'),t.isPublished) FROM News t "
	 		+ "where t.isBold = :isBold and t.isPublished=1 order by t.generationDateDate desc")
	    List<News> findByImportance(@Param("isBold") String isBold);
	 
	 @Query("SELECT new com.bourse.domain.News(t.id,t.template,t.columnDescription,t.robots,t.isBold,function('date_format', t.generationDateDate, '%Y-%m-%d 00:00:00'),t.isPublished) FROM News t, ColumnConfiguration c "
		 		+ "WHERE t.columnDescription=c.description and c.groupId=:groupId and c.subgroupId=:subGroupId and t.isPublished=1 order by t.generationDateDate desc")
		List<News> findNewsByGroupIdAndSubgroupId(@Param("groupId") String groupId ,@Param("subGroupId") String subGroupId);
}
