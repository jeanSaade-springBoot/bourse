/*
-- Query: SELECT * FROM bourse.asset_class
LIMIT 0, 1000

-- Date: 2020-11-04 22:04
*/
INSERT INTO asset_class (`id`,`description`) VALUES (1,'YIELDS & RATES');

/*
-- Query: SELECT * FROM bourse.groups
LIMIT 0, 1000

-- Date: 2020-11-04 22:01
*/
INSERT INTO groups (`id`,`asset_id`,`description`) VALUES (1,1,'SOVEREIGN YIELDS');
INSERT INTO groups (`id`,`asset_id`,`description`) VALUES (2,1,'YIELD CURVES (C)');
INSERT INTO groups (`id`,`asset_id`,`description`) VALUES (3,1,'SOVEREIGN YIELD CROSSES (C)');
INSERT INTO groups (`id`,`asset_id`,`description`) VALUES (4,1,'LIBOR RATES');
INSERT INTO groups (`id`,`asset_id`,`description`) VALUES (5,1,'CENTRAL BANK RATES');

/*
-- Query: SELECT * FROM bourse.subgroup
LIMIT 0, 1000

-- Date: 2020-11-04 22:03
*/
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (1,'USA',1,'1');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (2,'FRANCE',1,'2');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (3,'GERMANY',1,'3');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (4,'UK',1,'4');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (5,'ITALY',1,'5');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (6,'SPAIN',1,'6');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (7,'USA',2,'1');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (8,'FRANCE',2,'2');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (9,'GERMANY',2,'3');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (10,'UK',2,'4');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (11,'ITALY',2,'5');
INSERT INTO subgroup (`id`,`description`,`group_id`,`id_sub_group`) VALUES (12,'SPAIN',2,'6');
