package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.bourse.domain.NewsOrder;

public interface NewsOrderRepository extends JpaRepository<NewsOrder, Long> {

	@Query("select new com.bourse.domain.NewsOrder(nc.id, nc.robotCode, nc.orderId, nc.state) \r\n"
			+ "  from NewsOrder nc\r\n"
			+ " where nc.robotCode in"
			+ "(SELECT CONCAT(ac.assetCode,gc.groupCode,sc.subgroupCode,cc.columnCode,'LAST',rc.robotCode)"
	 		+ " FROM ColumnConfiguration cc,  RobotsConfiguration rc,  AssetClass ac, Groups gc, SubGroup sc"
			+ " WHERE  rc.columnDescription = cc.description\r\n"
		 		+ "   and sc.groupId = cc.groupId\r\n"
		 		+ "   and sc.idSubGroup=cc.subgroupId\r\n"
		 		+ "   and gc.id = cc.groupId\r\n"
		 		+ "   and gc.assetId=ac.id\r\n"
		 		+ "   and rc.isactive=1) "
		 		+ "order by nc.orderId asc ")
	  List<NewsOrder> getActiveNewsOrder();
	
	  @Transactional
	  @Modifying
	  @Query("delete from NewsOrder \r\n"
			+ " where id in (:listid)")
	  void deleteByListOfId(@Param("listid") Long[] listid);
}
