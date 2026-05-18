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
	        + "from function_configuration fc \r\n"
	        + "join groups_table g \r\n"
	        + "    on fc.group_id = g.id \r\n"
	        + "join asset_class ac \r\n"
	        + "    on ac.id = g.asset_id \r\n"
	        + "join function_asset fa \r\n"
	        + "    on fa.asset_class_id = ac.id \r\n"
	        + "   and fa.function_id = fc.function_id \r\n"
	        + "join functions fnc \r\n"
	        + "    on fnc.id = fc.function_id \r\n"
	        + "join subgroup sb \r\n"
	        + "    on sb.group_id = fc.group_id \r\n"
	        + "   and fc.subgroup_id = sb.id_sub_group \r\n"
	        + "join column_configuration cl \r\n"
	        + "    on cl.id = fc.config_id \r\n"
	        + "where fc.config_id = :configId \r\n"
	        + "and fa.is_hidden = false \r\n"
	        + "and ( \r\n"
	        + "      (fa.group_id is null and fa.subgroup_id is null) \r\n"
	        + "      or \r\n"
	        + "      (fa.group_id = fc.group_id \r\n"
	        + "       and fa.subgroup_id = fc.subgroup_id) \r\n"
	        + "    )",
	        nativeQuery = true)
	List<FunctionConfiguration> findByConfigId(@Param("configId") String configId);

}
