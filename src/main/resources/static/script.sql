
drop table IF EXISTS bourse.asset_class;
CREATE TABLE bourse.asset_class (
  id bigint(20) NOT NULL,
  description varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO bourse.asset_class (id,description) VALUES (1,'YIELDS & RATES');

drop table IF EXISTS bourse.groups;
CREATE TABLE bourse.groups (
  id bigint(20) NOT NULL,
  asset_id bigint(20) DEFAULT NULL,
  description varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO bourse.groups (id,asset_id,description) VALUES (1,1,'SOVEREIGN YIELDS');
INSERT INTO bourse.groups (id,asset_id,description) VALUES (2,1,'YIELD CURVES (C)');
INSERT INTO bourse.groups (id,asset_id,description) VALUES (3,1,'SOVEREIGN YIELD CROSSES (C)');
INSERT INTO bourse.groups (id,asset_id,description) VALUES (4,1,'LIBOR RATES');
INSERT INTO bourse.groups (id,asset_id,description) VALUES (5,1,'CENTRAL BANK RATES');

drop table IF EXISTS bourse.subgroup;
CREATE TABLE bourse.subgroup (
  id bigint(20) NOT NULL,
  description varchar(255) DEFAULT NULL,
  group_id bigint(20) DEFAULT NULL,
  id_sub_group varchar(255) DEFAULT NULL,
  group_desc varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
alter table bourse.subgroup  add group_desc varchar(255);
insert into  bourse.subgroup              
select 1,'USA',          1,               1,         'SOVEREIGN YIELDS' from dual union
select 2,'FRANCE',       1,               2,         'SOVEREIGN YIELDS' from dual union
select 3,'GERMANY',      1,               3,         'SOVEREIGN YIELDS' from dual union
select 4,'UK',           1,               4,         'SOVEREIGN YIELDS' from dual union 
select 5,'ITALY',        1,               5,         'SOVEREIGN YIELDS' from dual union
select 6,'SPAIN',        1,               6,         'SOVEREIGN YIELDS' from dual union
select 7,'USA',          2,               1,         'YIELD CURVES (C)' from dual union
select 8,'FRANCE',       2,               2,         'YIELD CURVES (C)' from dual union
select 9,'GERMANY',      2,               3,         'YIELD CURVES (C)' from dual union
select 10,'UK',           2,               4,         'YIELD CURVES (C)' from dual union 
select 11,'ITALY',        2,               5,         'YIELD CURVES (C)' from dual union
select 12,'SPAIN',        2,               6,         'YIELD CURVES (C)' from dual union
select 13,'FRA_GER',      3,               1,         'SOVEREIGN YIELD CROSSES (C)' from dual union
select 14,'ITA-GER',      3,               2,         'SOVEREIGN YIELD CROSSES (C)' from dual union
select 15,'SPN-GER',      3,               3,         'SOVEREIGN YIELD CROSSES (C)' from dual union
select 16,'UK-GER',       3,               4,         'SOVEREIGN YIELD CROSSES (C)' from dual union
select 17,'USA-GER',      3,               5,         'SOVEREIGN YIELD CROSSES (C)' from dual union
select 18,'USA-UK',       3,               5,         'SOVEREIGN YIELD CROSSES (C)' from dual union
select 19,'ITA-FRA',      3,               6,         'SOVEREIGN YIELD CROSSES (C)' from dual union
select 20,'ITA-SPN',      3,               8,         'SOVEREIGN YIELD CROSSES (C)';


drop table IF EXISTS bourse.factor;

CREATE TABLE bourse.factor (
  id int(3) NOT NULL DEFAULT '0',
  description varchar(255) CHARACTER SET utf8mb4 NOT NULL DEFAULT '',
  group_id varchar(1) CHARACTER SET utf8mb4 NOT NULL DEFAULT '',
  group_desc varchar(255) CHARACTER SET utf8mb4 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
alter table bourse.factor  add group_desc varchar(255)
insert into bourse.factor
select 1,2      ,1,'SOVEREIGN YIELD CROSSES (C)' from dual union
select 2,5      ,1,'SOVEREIGN YIELD CROSSES (C)' from dual union
select 3,10     ,1,'SOVEREIGN YIELD CROSSES (C)' from dual union
select 4,30     ,1,'SOVEREIGN YIELD CROSSES (C)' from dual union
select 5,'2/5'  ,2,'YIELD CURVES (C)' from dual union
select 6,'2/10' ,2,'YIELD CURVES (C)' from dual union
select 7,'5/10' ,2,'YIELD CURVES (C)' from dual union
select 8,'5/30' ,2,'YIELD CURVES (C)' from dual union
select 9,'10/30',2,'YIELD CURVES (C)' from dual union
select 10,'2'   ,3, 'SOVEREIGN YIELD CROSSES (C)'  from dual union 
select 11,'5'   ,3, 'SOVEREIGN YIELD CROSSES (C)'  from dual union
select 12,'10'  ,3, 'SOVEREIGN YIELD CROSSES (C)'  from dual union
select 13,'30'  ,3, 'SOVEREIGN YIELD CROSSES (C)';

alter table bourse.factor CHANGE  subgroup_id  group_id varchar(255);

drop table IF EXISTS bourse.column_configuration;
CREATE TABLE bourse.column_configuration (
  id bigint(20) NOT NULL,
  calculation_type varchar(255) DEFAULT NULL,
  can_be_negative bit(1) DEFAULT NULL,
  currency varchar(255) DEFAULT NULL,
  data_format varchar(255) DEFAULT NULL,
  description varchar(255) DEFAULT NULL,
  display_description varchar(255) DEFAULT NULL,
  graph_scale varchar(255) DEFAULT NULL,
  group_id varchar(255) DEFAULT NULL,
  start_date varchar(255) DEFAULT NULL,
  subgroup_id varchar(255) DEFAULT NULL,
  tick_value varchar(255) DEFAULT NULL,
  chart_type varchar(255) DEFAULT NULL,
  y_axis_format varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

insert into bourse.column_configuration(id,description,group_id,subgroup_id)
select (@row_number:=@row_number + 1) AS  id,
       concat(p1.description,'-',p2.description),
       p1.group_id,
       p1.id_sub_group
  from bourse.subgroup p1,
       bourse.factor p2,
       (SELECT @row_number:=0) AS t
where p1.group_id = p2.group_id;

