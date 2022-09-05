
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
select 18,'USA-UK',       3,               6,         'SOVEREIGN YIELD CROSSES (C)' from dual union
select 19,'ITA-FRA',      3,               7,         'SOVEREIGN YIELD CROSSES (C)' from dual union
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
<<<<<<< HEAD
=======

>>>>>>> 820e26b5ddad3cb9ff6f2524614de31a7f66ade8
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



UPDATE bourse.column_configuration_bck
INNER JOIN bourse.updateDisplay ON bourse.column_configuration_bck.description = bourse.updateDisplay.description
SET bourse.column_configuration_bck.display_description 
= bourse.updateDisplay.display;


UPDATE bourse.column_configuration
INNER JOIN bourse.updateDisplay ON bourse.column_configuration.description = bourse.updateDisplay.description
SET bourse.column_configuration.display_description 
= bourse.updateDisplay.display;

ALTER TABLE `bourse`.`column_configuration` MODIFY  `can_be_negative` BIT(1) null;
update `bourse`.`column_configuration` set `can_be_negative` = 0;
------------------------ new --------------------------
CREATE TABLE `functions` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `function_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `bourse`.`functions`
(`id`,
`description`,
`function_code`)
VALUES
('1',
'100d MovAvg',
'CaD3');

INSERT INTO `bourse`.`functions`
(`id`,
`description`,
`function_code`)
VALUES
('2',
'200d MovAvg',
'CaD4');
CREATE TABLE `function_configuration` (
  `id` bigint(20) NOT NULL,
  `calculation_type` varchar(255) DEFAULT NULL,
  `data_format` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `display_description` varchar(255) DEFAULT NULL,
  `group_id` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `subgroup_id` varchar(255) DEFAULT NULL,
  `config_id` varchar(255) DEFAULT NULL,
  `function_id` varchar(255) DEFAULT NULL,
  `tick_value` varchar(255) DEFAULT NULL,
  `chart_type` varchar(255) DEFAULT NULL,
  `y_axis_format` varchar(255) DEFAULT NULL,
  `factor` varchar(255) DEFAULT NULL,
  `descwitoutfactor` varchar(255) DEFAULT NULL,
  `column_name` varchar(255) DEFAULT NULL,
  `data_min_increment` varchar(255) DEFAULT NULL,
  `chart_color` varchar(255) DEFAULT NULL,
  `chart_showgrid` varchar(255) DEFAULT NULL,
  `chart_size` varchar(255) DEFAULT NULL,
  `chart_transparency` varchar(255) DEFAULT NULL,
  `chartshow_markes` varchar(255) DEFAULT NULL,
  `exchange_link` varchar(255) DEFAULT NULL,
  `show_in_database` bit(1) NOT NULL,
  `show_in_news_graph` bit(1) NOT NULL,
  `currency` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `bourse`.`function_configuration`
(`id`,
`config_id`,
`function_id`,
`description`,
`display_description`,
`group_id`,
`subgroup_id`,
`factor`,`show_in_database`,`show_in_news_graph`)
SELECT (@row_number:=@row_number + 1)  as id,
       c.id as config_id,
       f.id as function_id, 
       c.description,
       c.display_description,
       c.group_id, 
       c.subgroup_id,
       c.factor,0,0
FROM bourse.column_configuration c,
functions f,
(SELECT @row_number:=0) AS t;

CREATE TABLE `robots_function_configuration` (
  `id` bigint(20) NOT NULL,
  `jump_percentage` varchar(255) DEFAULT NULL,
  `jump_value_tick` varchar(255) DEFAULT NULL,
  `column_description` varchar(255) DEFAULT NULL,
  `config_id` varchar(255) DEFAULT NULL,
  `function_id` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `display_description` varchar(255) DEFAULT NULL,
  `group_id` varchar(255) DEFAULT NULL,
  `isactive` bit(1) NOT NULL,
  `last_data` varchar(255) DEFAULT NULL,
  `robot_name` varchar(255) DEFAULT NULL,
  `rule` varchar(255) DEFAULT NULL,
  `subgroup_id` varchar(255) DEFAULT NULL,
  `template` varchar(255) DEFAULT NULL,
  `thresh_hold_notification` varchar(255) DEFAULT NULL,
  `threshhold_trigger` varchar(255) DEFAULT NULL,
  `robot_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `bourse`.`robots_function_configuration`
(`id`,
`config_id`,
`function_id`,
`robot_name`,
`column_description`,
`display_description`,
`group_id`,
`subgroup_id`,
`robot_code`,
`isactive`)
SELECT (@row_number:=@row_number + 1)  as id,
       c.config_id as config_id,
       f.id as function_id, 
       c.robot_name,
       c.column_description,
       c.display_description,
       c.group_id, 
       c.subgroup_id,
       c.robot_code,
	   0
FROM bourse.robots_configuration c,
functions f,
(SELECT @row_number:=0) AS t;

-- sequence section 

 create table manual_news (id bigint not null, news_id varchar(10), primary key (id));
 create table manual_news_sequence (next_val bigint);
 INSERT INTO manual_news_sequence (next_val) VALUES (1);

 create table news_sequence (next_val bigint);
 INSERT INTO  news_sequence (next_val) select max(id)+1 from news;

 create table news_order_sequence (next_val bigint);
 INSERT INTO  news_order_sequence (next_val) select max(id)+1 from news_order;

 create table sovereign_data_sequence (next_val bigint);
 INSERT INTO  sovereign_data_sequence (next_val)  select max(id)+1 from sovereign_data;
 
 --  get the code for functions 
     select
     CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code
      FROM function_configuration fc,  Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f
      where g.asset_Id=a.id
      and g.id = fc.group_Id
	  and s.group_Id = fc.group_Id
      and s.id_Sub_Group=fc.subgroup_Id
      and r.config_id=fc.config_id
      and r.column_description=fc.description
      and fc.function_id=f.id
	  and r.function_id=f.id;
      
    insert into news_order (id,order_id,robot_code,state)
    select @rownum1:=@rownum1 + 1  as id, @rownum:=@rownum + 1  as order_id,tab.robot_code,'new'
    from (
    select
     CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code
      FROM function_configuration fc,  Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f
      where g.asset_Id=a.id
      and g.id = fc.group_Id
	  and s.group_Id = fc.group_Id
      and s.id_Sub_Group=fc.subgroup_Id
      and r.config_id=fc.config_id
	-- and 'HighLowRobot'= r.robot_name
    and r.column_description=fc.description
    and fc.function_id=f.id
    and r.function_id=f.id) tab, 
     (SELECT @rownum:=258) t,
     (SELECT @rownum1:=6676) t1
     where tab.robot_code is not null ;


create table News_function as select * from news limit 0;
-- ----------------
INSERT INTO `bourse`.`functions`
(`id`,
`description`,
`function_code`)
VALUES
(3,
'daily change%',
'CaD1');

INSERT INTO `bourse`.`function_configuration`
(`id`,
`calculation_type`,
`data_format`,
`description`,
`display_description`,
`group_id`,
`start_date`,
`subgroup_id`,
`config_id`,
`function_id`,
`tick_value`,
`chart_type`,
`y_axis_format`,
`factor`,
`descwitoutfactor`,
`column_name`,
`data_min_increment`,
`chart_color`,
`chart_showgrid`,
`chart_size`,
`chart_transparency`,
`chartshow_markes`,
`exchange_link`,
`show_in_database`,
`show_in_news_graph`,
`currency`,
`column_code`)
SELECT 
(@row_number:=@row_number + 1) AS id,
    null,
    `function_configuration`.`data_format`,
    `function_configuration`.`description`,
     null,
    `function_configuration`.`group_id`,
     null,
    `function_configuration`.`subgroup_id`,
    `function_configuration`.`config_id`,
    '3',
    `function_configuration`.`tick_value`,
    `function_configuration`.`chart_type`,
    `function_configuration`.`y_axis_format`,
    `function_configuration`.`factor`,
    `function_configuration`.`descwitoutfactor`,
    null,
    `function_configuration`.`data_min_increment`,
    `function_configuration`.`chart_color`,
    `function_configuration`.`chart_showgrid`,
    `function_configuration`.`chart_size`,
    `function_configuration`.`chart_transparency`,
    `function_configuration`.`chartshow_markes`,
    null,
    `function_configuration`.`show_in_database`,
    `function_configuration`.`show_in_news_graph`,
    `function_configuration`.`currency`,
    `function_configuration`.`column_code`
FROM `bourse`.`function_configuration`,
	 (SELECT @row_number:=172) AS t
where function_id = 1;

INSERT INTO `bourse`.`robots_function_configuration`
(`id`,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
`function_id`,
`description`,
`display_description`,
`group_id`,
`isactive`,
`last_data`,
`robot_name`,
`rule`,
`subgroup_id`,
`template`,
`thresh_hold_notification`,
`threshhold_trigger`,
`robot_code`)
select 
(@row_number:=@row_number + 1) AS id,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
'3',
`description`,
`display_description`,
`group_id`,
0,
`last_data`,
`robot_name`,
'',
`subgroup_id`,
'',
'',
'',
`robot_code` from robots_function_configuration ,
	 (SELECT @row_number:=688) AS t
where function_id =1;

-- create robots_highlow_Daily_Percentage procedure
-- create jump and trend 

insert into news_order (id,order_id,robot_code,state)
    select @rownum1:=@rownum1 + 1  as id, @rownum:=@rownum + 1  as order_id,tab.robot_code,'new'
    from (
    select
     CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code
      FROM function_configuration fc,  Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f
      where g.asset_Id=a.id
      and g.id = fc.group_Id
	  and s.group_Id = fc.group_Id
      and s.id_Sub_Group=fc.subgroup_Id
      and r.config_id=fc.config_id
	-- and 'HighLowRobot'= r.robot_name
    and r.column_description=fc.description
    and fc.function_id=f.id
    and r.function_id=f.id
    and fc.function_id=3
    and r.function_id=3) tab, 
     (SELECT @rownum:=774) t,
     (SELECT @rownum1:=7192) t1
     where tab.robot_code is not null ;
 -- -------------------------------------    
INSERT INTO `bourse`.`functions`
(`id`,
`description`,
`function_code`)
VALUES
(5,
'Weekly change%',
'CAW1');

SELECT MAX(ID) FROM function_configuration;
INSERT INTO `bourse`.`function_configuration`
(`id`,
`calculation_type`,
`data_format`,
`description`,
`display_description`,
`group_id`,
`start_date`,
`subgroup_id`,
`config_id`,
`function_id`,
`tick_value`,
`chart_type`,
`y_axis_format`,
`factor`,
`descwitoutfactor`,
`column_name`,
`data_min_increment`,
`chart_color`,
`chart_showgrid`,
`chart_size`,
`chart_transparency`,
`chartshow_markes`,
`exchange_link`,
`show_in_database`,
`show_in_news_graph`,
`currency`,
`column_code`)
SELECT 
(@row_number:=@row_number + 1) AS id,
    null,
    `function_configuration`.`data_format`,
    `function_configuration`.`description`,
     null,
    `function_configuration`.`group_id`,
     null,
    `function_configuration`.`subgroup_id`,
    `function_configuration`.`config_id`,
    '5',
    `function_configuration`.`tick_value`,
    `function_configuration`.`chart_type`,
    `function_configuration`.`y_axis_format`,
    `function_configuration`.`factor`,
    `function_configuration`.`descwitoutfactor`,
    null,
    `function_configuration`.`data_min_increment`,
    `function_configuration`.`chart_color`,
    `function_configuration`.`chart_showgrid`,
    `function_configuration`.`chart_size`,
    `function_configuration`.`chart_transparency`,
    `function_configuration`.`chartshow_markes`,
    null,
    `function_configuration`.`show_in_database`,
    `function_configuration`.`show_in_news_graph`,
    `function_configuration`.`currency`,
    `function_configuration`.`column_code`
FROM `bourse`.`function_configuration`,
	 (SELECT @row_number:=344) AS t
where function_id = 1;

SELECT MAX(ID) FROM robots_function_configuration;
INSERT INTO `bourse`.`robots_function_configuration`
(`id`,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
`function_id`,
`description`,
`display_description`,
`group_id`,
`isactive`,
`last_data`,
`robot_name`,
`rule`,
`subgroup_id`,
`template`,
`thresh_hold_notification`,
`threshhold_trigger`,
`robot_code`)
select 
(@row_number:=@row_number + 1) AS id,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
'5',
`description`,
`display_description`,
`group_id`,
0,
`last_data`,
`robot_name`,
'',
`subgroup_id`,
'',
'',
'',
`robot_code` from robots_function_configuration ,
	 (SELECT @row_number:=1376) AS t
where function_id =1;

select max(id), max(order_id) from news_order;
insert into news_order (id,order_id,robot_code,state)
    select @rownum1:=@rownum1 + 1  as id, @rownum:=@rownum + 1  as order_id,tab.robot_code,'new'
    from (
    select
     CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code
      FROM function_configuration fc,  Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f
      where g.asset_Id=a.id
      and g.id = fc.group_Id
	  and s.group_Id = fc.group_Id
      and s.id_Sub_Group=fc.subgroup_Id
      and r.config_id=fc.config_id
	-- and 'HighLowRobot'= r.robot_name
    and r.column_description=fc.description
    and fc.function_id=f.id
    and r.function_id=f.id
    and fc.function_id=5
    and r.function_id=5) tab, 
     (SELECT @rownum:=1290) t,
     (SELECT @rownum1:=8584) t1
     where tab.robot_code is not null ;

INSERT INTO `bourse`.`functions`
(`id`,
`description`,
`function_code`)
VALUES
(6,
'Weekly change increment',
'CAW2');

SELECT MAX(ID) FROM function_configuration;
INSERT INTO `bourse`.`function_configuration`
(`id`,
`calculation_type`,
`data_format`,
`description`,
`display_description`,
`group_id`,
`start_date`,
`subgroup_id`,
`config_id`,
`function_id`,
`tick_value`,
`chart_type`,
`y_axis_format`,
`factor`,
`descwitoutfactor`,
`column_name`,
`data_min_increment`,
`chart_color`,
`chart_showgrid`,
`chart_size`,
`chart_transparency`,
`chartshow_markes`,
`exchange_link`,
`show_in_database`,
`show_in_news_graph`,
`currency`,
`column_code`)
SELECT 
(@row_number:=@row_number + 1) AS id,
    null,
    `function_configuration`.`data_format`,
    `function_configuration`.`description`,
     null,
    `function_configuration`.`group_id`,
     null,
    `function_configuration`.`subgroup_id`,
    `function_configuration`.`config_id`,
    '6',
    `function_configuration`.`tick_value`,
    `function_configuration`.`chart_type`,
    `function_configuration`.`y_axis_format`,
    `function_configuration`.`factor`,
    `function_configuration`.`descwitoutfactor`,
    null,
    `function_configuration`.`data_min_increment`,
    `function_configuration`.`chart_color`,
    `function_configuration`.`chart_showgrid`,
    `function_configuration`.`chart_size`,
    `function_configuration`.`chart_transparency`,
    `function_configuration`.`chartshow_markes`,
    null,
    `function_configuration`.`show_in_database`,
    `function_configuration`.`show_in_news_graph`,
    `function_configuration`.`currency`,
    `function_configuration`.`column_code`
FROM `bourse`.`function_configuration`,
	 (SELECT @row_number:=430) AS t
where function_id = 1;

SELECT MAX(ID) FROM robots_function_configuration;
INSERT INTO `bourse`.`robots_function_configuration`
(`id`,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
`function_id`,
`description`,
`display_description`,
`group_id`,
`isactive`,
`last_data`,
`robot_name`,
`rule`,
`subgroup_id`,
`template`,
`thresh_hold_notification`,
`threshhold_trigger`,
`robot_code`)
select 
(@row_number:=@row_number + 1) AS id,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
'6',
`description`,
`display_description`,
`group_id`,
0,
`last_data`,
`robot_name`,
'',
`subgroup_id`,
'',
'',
'',
`robot_code` from robots_function_configuration ,
	 (SELECT @row_number:=1720) AS t
where function_id =1;

select max(id), max(order_id) from news_order;
insert into news_order (id,order_id,robot_code,state)
    select @rownum1:=@rownum1 + 1  as id, @rownum:=@rownum + 1  as order_id,tab.robot_code,'new'
    from (
    select
     CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code
      FROM function_configuration fc,  Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f
      where g.asset_Id=a.id
      and g.id = fc.group_Id
	  and s.group_Id = fc.group_Id
      and s.id_Sub_Group=fc.subgroup_Id
      and r.config_id=fc.config_id
	-- and 'HighLowRobot'= r.robot_name
    and r.column_description=fc.description
    and fc.function_id=f.id
    and r.function_id=f.id
    and fc.function_id=6
    and r.function_id=6) tab, 
     (SELECT @rownum:=1548) t,
     (SELECT @rownum1:=8842) t1
     where tab.robot_code is not null ;
     
 --    create table status_table (id bigint not null, value varchar(255), primary key (id))
 
 INSERT INTO `bourse`.`functions`
(`id`,
`description`,
`function_code`)
VALUES
(7,
'10yr %ile',
'CaD5');

SELECT MAX(ID) FROM function_configuration;
INSERT INTO `bourse`.`function_configuration`
(`id`,
`calculation_type`,
`data_format`,
`description`,
`display_description`,
`group_id`,
`start_date`,
`subgroup_id`,
`config_id`,
`function_id`,
`tick_value`,
`chart_type`,
`y_axis_format`,
`factor`,
`descwitoutfactor`,
`column_name`,
`data_min_increment`,
`chart_color`,
`chart_showgrid`,
`chart_size`,
`chart_transparency`,
`chartshow_markes`,
`exchange_link`,
`show_in_database`,
`show_in_news_graph`,
`currency`,
`column_code`)
SELECT 
(@row_number:=@row_number + 1) AS id,
    null,
    '0.0000%',
    `function_configuration`.`description`,
     null,
    `function_configuration`.`group_id`,
     null,
    `function_configuration`.`subgroup_id`,
    `function_configuration`.`config_id`,
    '7',
    `function_configuration`.`tick_value`,
    `function_configuration`.`chart_type`,
    `function_configuration`.`y_axis_format`,
    `function_configuration`.`factor`,
    `function_configuration`.`descwitoutfactor`,
    null,
    `function_configuration`.`data_min_increment`,
    `function_configuration`.`chart_color`,
    `function_configuration`.`chart_showgrid`,
    `function_configuration`.`chart_size`,
    `function_configuration`.`chart_transparency`,
    `function_configuration`.`chartshow_markes`,
    null,
    `function_configuration`.`show_in_database`,
    `function_configuration`.`show_in_news_graph`,
    `function_configuration`.`currency`,
    `function_configuration`.`column_code`
FROM `bourse`.`function_configuration`,
	 (SELECT @row_number:=516) AS t
where function_id = 1;

SELECT MAX(ID) FROM robots_function_configuration;
INSERT INTO `bourse`.`robots_function_configuration`
(`id`,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
`function_id`,
`description`,
`display_description`,
`group_id`,
`isactive`,
`last_data`,
`robot_name`,
`rule`,
`subgroup_id`,
`template`,
`thresh_hold_notification`,
`threshhold_trigger`,
`robot_code`)
select 
(@row_number:=@row_number + 1) AS id,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
'7',
`description`,
`display_description`,
`group_id`,
0,
`last_data`,
`robot_name`,
'',
`subgroup_id`,
'',
'',
'',
`robot_code` from robots_function_configuration ,
	 (SELECT @row_number:=2064) AS t
where function_id =1;

select max(id), max(order_id) from news_order;
insert into news_order (id,order_id,robot_code,state)
    select @rownum1:=@rownum1 + 1  as id, @rownum:=@rownum + 1  as order_id,tab.robot_code,'new'
    from (
    select
     CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code
      FROM function_configuration fc,  Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f
      where g.asset_Id=a.id
      and g.id = fc.group_Id
	  and s.group_Id = fc.group_Id
      and s.id_Sub_Group=fc.subgroup_Id
      and r.config_id=fc.config_id
	-- and 'HighLowRobot'= r.robot_name
    and r.column_description=fc.description
    and fc.function_id=f.id
    and r.function_id=f.id
    and fc.function_id=7
    and r.function_id=7) tab, 
     (SELECT @rownum:=1806) t,
     (SELECT @rownum1:=9100) t1
     where tab.robot_code is not null ;
     
 INSERT INTO `bourse`.`functions`
(`id`,
`description`,
`function_code`)
VALUES
(8,
'20yr %ile',
'CaD6');

SELECT MAX(ID) FROM function_configuration;
INSERT INTO `bourse`.`function_configuration`
(`id`,
`calculation_type`,
`data_format`,
`description`,
`display_description`,
`group_id`,
`start_date`,
`subgroup_id`,
`config_id`,
`function_id`,
`tick_value`,
`chart_type`,
`y_axis_format`,
`factor`,
`descwitoutfactor`,
`column_name`,
`data_min_increment`,
`chart_color`,
`chart_showgrid`,
`chart_size`,
`chart_transparency`,
`chartshow_markes`,
`exchange_link`,
`show_in_database`,
`show_in_news_graph`,
`currency`,
`column_code`)
SELECT 
(@row_number:=@row_number + 1) AS id,
    null,
    '0.0000%',
    `function_configuration`.`description`,
     null,
    `function_configuration`.`group_id`,
     null,
    `function_configuration`.`subgroup_id`,
    `function_configuration`.`config_id`,
    '8',
    `function_configuration`.`tick_value`,
    `function_configuration`.`chart_type`,
    `function_configuration`.`y_axis_format`,
    `function_configuration`.`factor`,
    `function_configuration`.`descwitoutfactor`,
    null,
    `function_configuration`.`data_min_increment`,
    `function_configuration`.`chart_color`,
    `function_configuration`.`chart_showgrid`,
    `function_configuration`.`chart_size`,
    `function_configuration`.`chart_transparency`,
    `function_configuration`.`chartshow_markes`,
    null,
    `function_configuration`.`show_in_database`,
    `function_configuration`.`show_in_news_graph`,
    `function_configuration`.`currency`,
    `function_configuration`.`column_code`
FROM `bourse`.`function_configuration`,
	 (SELECT @row_number:=602) AS t
where function_id = 1;

SELECT MAX(ID) FROM robots_function_configuration;
INSERT INTO `bourse`.`robots_function_configuration`
(`id`,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
`function_id`,
`description`,
`display_description`,
`group_id`,
`isactive`,
`last_data`,
`robot_name`,
`rule`,
`subgroup_id`,
`template`,
`thresh_hold_notification`,
`threshhold_trigger`,
`robot_code`)
select 
(@row_number:=@row_number + 1) AS id,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
'8',
`description`,
`display_description`,
`group_id`,
0,
`last_data`,
`robot_name`,
'',
`subgroup_id`,
'',
'',
'',
`robot_code` from robots_function_configuration ,
	 (SELECT @row_number:=2408) AS t
where function_id =1;

select max(id), max(order_id) from news_order;
insert into news_order (id,order_id,robot_code,state)
    select @rownum1:=@rownum1 + 1  as id, @rownum:=@rownum + 1  as order_id,tab.robot_code,'new'
    from (
    select
     CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code
      FROM function_configuration fc,  Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f
      where g.asset_Id=a.id
      and g.id = fc.group_Id
	  and s.group_Id = fc.group_Id
      and s.id_Sub_Group=fc.subgroup_Id
      and r.config_id=fc.config_id
	-- and 'HighLowRobot'= r.robot_name
    and r.column_description=fc.description
    and fc.function_id=f.id
    and r.function_id=f.id
    and fc.function_id=8
    and r.function_id=8) tab, 
     (SELECT @rownum:=2064) t,
     (SELECT @rownum1:=9358) t1
     where tab.robot_code is not null ;
     
      INSERT INTO `bourse`.`functions`
(`id`,
`description`,
`function_code`)
VALUES
(9,
'century %ile',
'CaD7');

SELECT MAX(ID) FROM function_configuration;
INSERT INTO `bourse`.`function_configuration`
(`id`,
`calculation_type`,
`data_format`,
`description`,
`display_description`,
`group_id`,
`start_date`,
`subgroup_id`,
`config_id`,
`function_id`,
`tick_value`,
`chart_type`,
`y_axis_format`,
`factor`,
`descwitoutfactor`,
`column_name`,
`data_min_increment`,
`chart_color`,
`chart_showgrid`,
`chart_size`,
`chart_transparency`,
`chartshow_markes`,
`exchange_link`,
`show_in_database`,
`show_in_news_graph`,
`currency`,
`column_code`)
SELECT 
(@row_number:=@row_number + 1) AS id,
    null,
    '0.0000%',
    `function_configuration`.`description`,
     null,
    `function_configuration`.`group_id`,
     null,
    `function_configuration`.`subgroup_id`,
    `function_configuration`.`config_id`,
    '9',
    `function_configuration`.`tick_value`,
    `function_configuration`.`chart_type`,
    `function_configuration`.`y_axis_format`,
    `function_configuration`.`factor`,
    `function_configuration`.`descwitoutfactor`,
    null,
    `function_configuration`.`data_min_increment`,
    `function_configuration`.`chart_color`,
    `function_configuration`.`chart_showgrid`,
    `function_configuration`.`chart_size`,
    `function_configuration`.`chart_transparency`,
    `function_configuration`.`chartshow_markes`,
    null,
    `function_configuration`.`show_in_database`,
    `function_configuration`.`show_in_news_graph`,
    `function_configuration`.`currency`,
    `function_configuration`.`column_code`
FROM `bourse`.`function_configuration`,
	 (SELECT @row_number:=688) AS t
where function_id = 1;

SELECT MAX(ID) FROM robots_function_configuration;
INSERT INTO `bourse`.`robots_function_configuration`
(`id`,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
`function_id`,
`description`,
`display_description`,
`group_id`,
`isactive`,
`last_data`,
`robot_name`,
`rule`,
`subgroup_id`,
`template`,
`thresh_hold_notification`,
`threshhold_trigger`,
`robot_code`)
select 
(@row_number:=@row_number + 1) AS id,
`jump_percentage`,
`jump_value_tick`,
`column_description`,
`config_id`,
'9',
`description`,
`display_description`,
`group_id`,
0,
`last_data`,
`robot_name`,
'',
`subgroup_id`,
'',
'',
'',
`robot_code` from robots_function_configuration ,
	 (SELECT @row_number:=2752) AS t
where function_id =1;

select max(id), max(order_id) from news_order;
insert into news_order (id,order_id,robot_code,state)
    select @rownum1:=@rownum1 + 1  as id, @rownum:=@rownum + 1  as order_id,tab.robot_code,'new'
    from (
    select
     CONCAT(a.asset_Code,g.group_Code,s.subgroup_Code,fc.column_Code,'LAST',r.robot_Code,f.function_code) as robot_code
      FROM function_configuration fc,  Asset_Class a, groups_table g, SubGroup s, robots_function_configuration r,functions f
      where g.asset_Id=a.id
      and g.id = fc.group_Id
	  and s.group_Id = fc.group_Id
      and s.id_Sub_Group=fc.subgroup_Id
      and r.config_id=fc.config_id
	-- and 'HighLowRobot'= r.robot_name
    and r.column_description=fc.description
    and fc.function_id=f.id
    and r.function_id=f.id
    and fc.function_id=9
    and r.function_id=9) tab, 
     (SELECT @rownum:=2322) t,
     (SELECT @rownum1:=9616) t1
     where tab.robot_code is not null;