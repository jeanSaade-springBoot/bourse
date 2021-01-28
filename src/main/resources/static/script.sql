
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
select 13,'FRA-GER',      3,               1,         'SOVEREIGN YIELD CROSSES (C)' from dual union
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
alter table bourse.column_configuration add factor varchar(255);
alter table bourse.column_configuration add descwitoutfactor varchar(255);
insert into bourse.column_configuration(id,description,group_id,subgroup_id)
select (@row_number:=@row_number + 1) AS  id,
       concat(p1.description,'-',p2.description),
       p1.group_id,
       p1.id_sub_group
  from bourse.subgroup p1,
       bourse.factor p2,
       (SELECT @row_number:=0) AS t
where p1.group_id = p2.group_id;

update bourse.column_configuration 
   set factor = SUBSTRING_INDEX(SUBSTRING_INDEX(description, '-', 2), '-', -1)
 where group_id = 1 ;
 
update bourse.column_configuration
   set factor = SUBSTRING_INDEX(SUBSTRING_INDEX(description, '-', 2), '-', -1)
 where group_id = 2 ;
 
 update bourse.column_configuration
   set factor = SUBSTRING_INDEX(SUBSTRING_INDEX(description, '-', 3), '-', -1)
 where group_id = 3 ;
 
 /*must be done for other groups*/
   
update bourse.column_configuration 
set descwitoutfactor = replace(description,concat('-',factor),'');




create table bourse.updateDisplay as select tab.*
 from(
select 'USA-2' as description, 'USA 2-yr Benchmark YIELDs'   as display                      from dual union
select 'USA-5', 'USA 5-yr Benchmark YIELD'                          from dual union
select 'USA-10', 'USA 10-yr Benchmark YIELD'                        from dual union
select 'USA-30', 'USA 30-yr Benchmark YIELD'                        from dual union
select 'FRANCE-2', 'France 2-yr Benchmark YIELD'                    from dual union
select 'FRANCE-5', 'France 5-yr Benchmark YIELD'                    from dual union
select 'FRANCE-10', 'France 10-yr Benchmark YIELD'                  from dual union
select 'FRANCE-30', 'France 30-yr Benchmark YIELD'                  from dual union
select 'GERMANY-2', 'Germany 2-yr Benchmark YIELDs'                 from dual union
select 'GERMANY-5', 'Germany 5-yr Benchmark YIELD'                  from dual union
select 'GERMANY-10', 'Germany 10-yr Benchmark YIELD'                from dual union
select 'GERMANY-30', 'Germany 30-yr Benchmark YIELD'                from dual union
select 'UK-2', 'Uk 2-yr Benchmark YIELD'                            from dual union
select 'UK-5', 'Uk 5-yr Benchmark YIELD'                            from dual union
select 'UK-10', 'Uk 10-yr Benchmark YIELD'                          from dual union
select 'UK-30', 'Uk 30-yr Benchmark YIELD'                          from dual union
select 'ITALY-2', 'Italy 2-yr Benchmark YIELD'                      from dual union
select 'ITALY-5', 'Italy 5-yr Benchmark YIELD'                      from dual union
select 'ITALY-10', 'Italy 10-yr Benchmark YIELD'                    from dual union
select 'ITALY-30', 'Italy 30-yr Benchmark YIELD'                    from dual union
select 'SPAIN-2', 'Spain 2-yr Benchmark YIELD'                      from dual union
select 'SPAIN-5', 'Spain 5-yr Benchmark YIELD'                      from dual union
select 'SPAIN-10', 'Spain 10-yr Benchmark YIELD'                    from dual union
select 'SPAIN-30', 'Spain 30-yr Benchmark YIELD'                    from dual union
select 'USA-2/5', 'USA 2\'s/5\'s yield CURVE'                       from dual union
select 'USA-2/10', 'USA 2\'s/10\'s yield CURVE'                     from dual union
select 'USA-5/10', 'USA 5\'s/10\'s yield CURVE'                     from dual union
select 'USA-5/30', 'USA 5\'s/30\'s yield CURVE'                     from dual union
select 'USA-10/30', 'USA 10\'s/30\'s yield CURVE'                   from dual union
select 'FRANCE-2/5', 'France 2\'s/5\'s yield CURVE'                 from dual union
select 'FRANCE-2/10', 'France 2\'s/10\'s yield CURVE'               from dual union
select 'FRANCE-5/10', 'France 5\'s/10\'s yield CURVE'               from dual union
select 'FRANCE-5/30', 'France 5\'s/30\'s yield CURVE'               from dual union
select 'FRANCE-10/30', 'France 10\'s/30\'s yield CURVE'             from dual union
select 'GERMANY-2/5', 'Germany 2\'s/5\'s yield CURVE'               from dual union
select 'GERMANY-2/10', 'Germany 2\'s/10\'s yield CURVE'             from dual union
select 'GERMANY-5/10', 'Germany 5\'s/10\'s yield CURVE'             from dual union
select 'GERMANY-5/30', 'Germany 5\'s/30\'s yield CURVE'             from dual union
select 'GERMANY-10/30', 'Germany 10\'s/30\'s yield CURVE'           from dual union
select 'UK-2/5', 'Uk 2\'s/5\'s yield CURVE'                         from dual union
select 'UK-2/10', 'Uk 2\'s/10\'s yield CURVE'                       from dual union
select 'UK-5/10', 'Uk 5\'s/10\'s yield CURVE'                       from dual union
select 'UK-5/30', 'Uk 5\'s/30\'s yield CURVE'                       from dual union
select 'UK-10/30', 'Uk 10\'s/30\'s yield CURVE'                     from dual union
select 'ITALY-2/5', 'Italy 2\'s/5\'s yield CURVE'                   from dual union
select 'ITALY-2/10', 'Italy 2\'s/10\'s yield CURVE'                 from dual union
select 'ITALY-5/10', 'Italy 5\'s/10\'s yield CURVE'                 from dual union
select 'ITALY-5/30', 'Italy 5\'s/30\'s yield CURVE'                 from dual union
select 'ITALY-10/30', 'Italy 10\'s/30\'s yield CURVE'               from dual union
select 'SPAIN-2/5', 'Spain 2\'s/5\'s yield CURVE'                   from dual union
select 'SPAIN-2/10', 'Spain 2\'s/10\'s yield CURVE'                 from dual union
select 'SPAIN-5/10', 'Spain 5\'s/110\'s yield CURVE'                from dual union
select 'SPAIN-5/30', 'Spain 5\'s/30\'s yield CURVE'                 from dual union
select 'SPAIN-10/30', 'Spain 10\'s/30\'s yield CURVE'               from dual union
select 'FRA_GER-2', 'FRA-GER 2-yr yield CROSS'                      from dual union
select 'FRA_GER-5', 'FRA-GER 5-yr yield CROSS'                      from dual union
select 'FRA_GER-10', 'FRA-GER 10-yr yield CROSS'                    from dual union
select 'FRA_GER-30', 'FRA-GER 30-yr yield CROSS'                    from dual union
select 'ITA-GER-2', 'ITA-GER 2-yr yield CROSS'                      from dual union
select 'ITA-GER-5', 'ITA-GER 5-yr yield CROSS'                      from dual union
select 'ITA-GER-10', 'ITA-GER 10-yr yield CROSS'                    from dual union
select 'ITA-GER-30', 'ITA-GER 30-yr yield CROSS'                    from dual union
select 'SPN-GER-2', 'SPN-GER 2-yr yield CROSS'                      from dual union
select 'SPN-GER-5', 'SPN-GER 5-yr yield CROSS'                      from dual union
select 'SPN-GER-10', 'SPN-GER 10-yr yield CROSS'                    from dual union
select 'SPN-GER-30', 'SPN-GER 30-yr yield CROSS'                    from dual union
select 'UK-GER-2', 'UK-GER 2-yr yield CROSS'                        from dual union
select 'UK-GER-5', 'UK-GER 5-yr yield CROSS'                        from dual union
select 'UK-GER-10', 'UK-GER 10-yr yield CROSS'                      from dual union
select 'UK-GER-30', 'UK-GER 30-yr yield CROSS'                      from dual union
select 'USA-GER-2', 'USA-GER 2-yr yield CROSS'                      from dual union
select 'USA-GER-5', 'USA-GER 5-yr yield CROSS'                      from dual union
select 'USA-GER-10', 'USA-GER 10-yr yield CROSS'                    from dual union
select 'USA-GER-30', 'USA-GER 30-yr yield CROSS'                    from dual union
select 'USA-UK-2', 'USA-UK 2-yr yield CROSS'                        from dual union
select 'USA-UK-5', 'USA-UK 5-yr yield CROSS'                        from dual union
select 'USA-UK-10', 'USA-UK 10-yr yield CROSS'                      from dual union
select 'USA-UK-30', 'USA-UK 30-yr yield CROSS'                      from dual union
select 'ITA-FRA-2', 'ITA-FRA 2-yr yield CROSS'                      from dual union
select 'ITA-FRA-5', 'ITA-FRA 5-yr yield CROSS'                      from dual union
select 'ITA-FRA-10', 'ITA-FRA 10-yr yield CROSS'                    from dual union
select 'ITA-FRA-30', 'ITA-FRA 30-yr yield CROSS'                    from dual union
select 'ITA-SPN-2', 'ITA-SPN 2-yr yield CROSS'                      from dual union
select 'ITA-SPN-5', 'ITA-SPN 5-yr yield CROSS'                      from dual union
select 'ITA-SPN-10', 'ITA-SPN 10-yr yield CROSS'                    from dual union
select 'ITA-SPN-30', 'ITA-SPN 30-yr yield CROSS'                    from dual)tab;


UPDATE bourse.column_configuration
INNER JOIN bourse.updateDisplay ON bourse.column_configuration.description = bourse.updateDisplay.description
SET bourse.column_configuration.display_description 
= bourse.updateDisplay.display;

