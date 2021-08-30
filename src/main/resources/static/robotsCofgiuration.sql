alter table low_high_robots_configuration add column jump_value_tick VARCHAR(255);
alter table low_high_robots_configuration add column jump_percentage VARCHAR(255);
alter table low_high_robots_configuration add column robot_name VARCHAR(255);
ALTER TABLE low_high_robots_configuration RENAME TO robots_configuration;
