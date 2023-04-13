


select CONCAT(`a`.`asset_code`, `g`.`group_code`, `s`.`subgroup_code`, `c`.`column_code`, 'LAST', 'HILO') from    `column_configuration` `c`
        JOIN `asset_class` `a`
        JOIN `groups_table` `g`
        JOIN `subgroup` `s`
        WHERE (`s`.`group_id` = `c`.`group_id`)
                AND (`s`.`id_sub_group` = `c`.`subgroup_id`)
                AND (`g`.`id` = `c`.`group_id`)
                AND (`g`.`asset_id` = `a`.`id`)
                and c.group_id=8 
                
                union 
                select CONCAT(`a`.`asset_code`, `g`.`group_code`, `s`.`subgroup_code`, `c`.`column_code`, 'LAST', 'JUMP') from    `column_configuration` `c`
        JOIN `asset_class` `a`
        JOIN `groups_table` `g`
        JOIN `subgroup` `s`
        WHERE (`s`.`group_id` = `c`.`group_id`)
                AND (`s`.`id_sub_group` = `c`.`subgroup_id`)
                AND (`g`.`id` = `c`.`group_id`)
                AND (`g`.`asset_id` = `a`.`id`)
                and c.group_id=8 
            union 
                select CONCAT(`a`.`asset_code`, `g`.`group_code`, `s`.`subgroup_code`, `c`.`column_code`, 'LAST', 'TRND') from    `column_configuration` `c`
        JOIN `asset_class` `a`
        JOIN `groups_table` `g`
        JOIN `subgroup` `s`
        WHERE (`s`.`group_id` = `c`.`group_id`)
                AND (`s`.`id_sub_group` = `c`.`subgroup_id`)
                AND (`g`.`id` = `c`.`group_id`)
                AND (`g`.`asset_id` = `a`.`id`)
                and c.group_id=8 
                  union           
               select CONCAT(`a`.`asset_code`, `g`.`group_code`, `s`.`subgroup_code`, `c`.`column_code`, 'LAST', 'HILO', f.function_CODE) from    `column_configuration` `c`
        JOIN `asset_class` `a`
        JOIN `groups_table` `g`
        JOIN `subgroup` `s`
        JOIN functions f
        WHERE (`s`.`group_id` = `c`.`group_id`)
                AND (`s`.`id_sub_group` = `c`.`subgroup_id`)
                AND (`g`.`id` = `c`.`group_id`)
                AND (`g`.`asset_id` = `a`.`id`)
                and c.group_id=8 
                  union           
               select CONCAT(`a`.`asset_code`, `g`.`group_code`, `s`.`subgroup_code`, `c`.`column_code`, 'LAST', 'JUMP', f.function_CODE) from    `column_configuration` `c`
        JOIN `asset_class` `a`
        JOIN `groups_table` `g`
        JOIN `subgroup` `s`
        JOIN functions f
        WHERE (`s`.`group_id` = `c`.`group_id`)
                AND (`s`.`id_sub_group` = `c`.`subgroup_id`)
                AND (`g`.`id` = `c`.`group_id`)
                AND (`g`.`asset_id` = `a`.`id`)
                and c.group_id=8 
               union           
               select CONCAT(`a`.`asset_code`, `g`.`group_code`, `s`.`subgroup_code`, `c`.`column_code`, 'LAST', 'TRND', f.function_CODE) from    `column_configuration` `c`
        JOIN `asset_class` `a`
        JOIN `groups_table` `g`
        JOIN `subgroup` `s`
        JOIN functions f
        WHERE (`s`.`group_id` = `c`.`group_id`)
                AND (`s`.`id_sub_group` = `c`.`subgroup_id`)
                AND (`g`.`id` = `c`.`group_id`)
                AND (`g`.`asset_id` = `a`.`id`)
                and c.group_id=8 