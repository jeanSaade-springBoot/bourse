alter table low_high_robots_configuration add column JumpValueTick VARCHAR(255);
alter table low_high_robots_configuration add column JumpPercentage VARCHAR(255);
ALTER TABLE low_high_robots_configuration RENAME TO robots_configuration;
alter table robots_configuration add column robotName VARCHAR(255);