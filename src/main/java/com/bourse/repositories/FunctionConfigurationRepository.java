package com.bourse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bourse.domain.FunctionConfiguration;

public interface FunctionConfigurationRepository extends JpaRepository<FunctionConfiguration, Long> {
	
	FunctionConfiguration findByConfigIdAndFunctionId(String configId,String functionId) ;

	FunctionConfiguration findByGroupIdAndSubgroupIdAndFactorAndFunctionId(String yieldCurveCross, String country,
			String factor, String function);
	
	@Query(value = ""
					+ "select fc.* \r\n"
					+ "  from function_configuration fc, \r\n"
					+ "       groups_table g,  \r\n"
					+ "       asset_class ac ,\r\n"
					+ "       function_asset fa,\r\n"
					+ "       functions fnc,\r\n"
					+ "       subgroup sb,\r\n"
					+ "       column_configuration cl\r\n"
					+ " where fc.group_id=g.id \r\n"
					+ "   and ac.id = g.asset_id  \r\n"
					+ "   and fa.asset_class_id = ac.id \r\n"
					+ "   and fc.function_id    = fa.function_id\r\n"
					+ "   and fnc.id            = fc.function_id\r\n"
					+ "   and sb.group_id       = fc.group_id\r\n"
					+ "   and fc.subgroup_id    = sb.id_sub_group\r\n"
					+ "   and cl.id             = fc.config_id\r\n"
					+ "   and fc.config_id      = :configId \r\n"
					+ "   and fa.is_hidden      = false\r\n "
					+ " ;",
				      nativeQuery = true)
	public List<FunctionConfiguration> findByConfigId(@Param("configId") String configId);
		 

}
