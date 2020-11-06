/*
-- Query: SELECT * FROM asset_class
LIMIT 0, 1000

-- Date: 2020-11-04 22:04
*/
INSERT INTO asset_class (`id`,`description`) VALUES (1,'YIELDS & RATES');

/*
-- Query: SELECT * FROM groups
LIMIT 0, 1000

-- Date: 2020-11-04 22:01
*/
INSERT INTO groups (`id`,`asset_id`,`description`) VALUES (1,1,'SOVEREIGN YIELDS');
INSERT INTO groups (`id`,`asset_id`,`description`) VALUES (2,1,'YIELD CURVES (C)');
INSERT INTO groups (`id`,`asset_id`,`description`) VALUES (3,1,'SOVEREIGN YIELD CROSSES (C)');
INSERT INTO groups (`id`,`asset_id`,`description`) VALUES (4,1,'LIBOR RATES');
INSERT INTO groups (`id`,`asset_id`,`description`) VALUES (5,1,'CENTRAL BANK RATES');

/*
-- Query: SELECT * FROM subgroup
LIMIT 0, 1000

-- Date: 2020-11-04 22:03
*/
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (1,'USA',1,'1');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (2,'FRANCE',1,'2');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (3,'GERMANY',1,'3');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (4,'UK',1,'4');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (5,'ITALY',1,'5');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (6,'SPAIN',1,'6');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (7,'FRA-GER',2,'1');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (8,'ITA-GER',2,'2');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (9,'SPN-GER',2,'3');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (10,'UK-GER',2,'4');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (11,'USA-GER',2,'5');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (12,'USA-UK',2,'6');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (13,'ITA-FRA',2,'5');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (14,'ITA-SPN',2,'6');

insert into column_configuration(id,can_be_negative,group_id,subgroup_id,description)
select (@row_number:=@row_number + 1) AS  id,'',tab.* from
(
select 1 groupId,1 subGroupId,'USA-30' description from dual
union
select 1,1,'USA-10' from dual
union
select 1,1,'USA-5' from dual
union
select 1,1,'USA-2' from dual
union
select 1,2,'FRA-30' from dual
union
select 1,2,'FRA-10' from dual
union
select 1,2,'FRA-5' from dual
union
select 1,2,'FRA-2' from dual
union
select 1,3,'GER-30' from dual
union
select 1,3,'GER-10' from dual
union
select 1,3,'GER-5' from dual
union
select 1,3,'GER-2' from dual
union
select 1,4,'UK-30' from dual
union
select 1,4,'UK-10' from dual
union
select 1,4,'UK-5' from dual
union
select 1,4,'UK-2' from dual
union
select 1,5,'ITA-30' from dual
union
select 1,5,'ITA-10' from dual
union
select 1,5,'ITA-5' from dual
union
select 1,5,'ITA-2' from dual
union
select 1,6,'SPA-30' from dual
union
select 1,6,'SPA-10' from dual
union
select 1,6,'SPA-5' from dual
union
select 1,6,'SPA-2' from dual
union
select 2,1,'FRA-GER-30' from dual
union
select 2,1,'FRA-GER-10' from dual
union
select 2,1,'FRA-GER-5' from dual
union
select 2,1,'FRA-GER-2' from dual
union
select 2,2,'ITA-GER-30' from dual
union
select 2,2,'ITA-GER-10' from dual
union
select 2,2,'ITA-GER-5' from dual
union
select 2,2,'ITA-GER-2' from dual
union
select 2,3,'SPN-GER-30' from dual
union
select 2,3,'SPN-GER-10' from dual
union
select 2,3,'SPN-GER-5' from dual
union
select 2,3,'SPN-GER-2' from dual
union
select 2,4,'UK-GER-30' from dual
union
select 2,4,'UK-GER-10' from dual
union
select 2,4,'UK-GER-5' from dual
union
select 2,4,'UK-GER-2' from dual
union
select 2,5,'USA-GER-30' from dual
union
select 2,5,'USA-GER-10' from dual
union
select 2,5,'USA-GER-5' from dual
union
select 2,5,'USA-GER-2' from dual
union
select 2,6,'USA-UK-30' from dual
union
select 2,6,'USA-UK-10' from dual
union
select 2,6,'USA-UK-5' from dual
union
select 2,6,'USA-UK-2' from dual
union
select 2,7,'ITA-FRA-30' from dual
union
select 2,7,'ITA-FRA-10' from dual
union
select 2,7,'ITA-FRA-5' from dual
union
select 2,7,'ITA-FRA-2' from dual)tab,(SELECT @row_number:=0) AS t
;
