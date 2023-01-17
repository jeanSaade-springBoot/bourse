CREATE TABLE IF NOT EXISTS user_sequence (next_val bigint);
INSERT INTO user_sequence (next_val) VALUES (2);

CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address1` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address2` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `company` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_first_login` bit(1) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password_hint` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `post_code` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `sur_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS role_sequence (next_val bigint);
INSERT INTO role_sequence (next_val) VALUES (4);

CREATE  TABLE `privilege` (
  `id` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_screen` bit(1) DEFAULT NULL,
  `parent_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS privilege_sequence (next_val bigint);
INSERT INTO  privilege_sequence (next_val) VALUES (36);

CREATE TABLE `role` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users_roles` (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  KEY `FKt4v0rrweyk393bdgt107vdx0x` (`role_id`),
  KEY `FKci4mdvg1fmo9eqmwno1y9o0fa` (`user_id`),
  CONSTRAINT `FKci4mdvg1fmo9eqmwno1y9o0fa` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKt4v0rrweyk393bdgt107vdx0x` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `roles_privileges` (
  `role_id` bigint NOT NULL,
  `privilege_id` bigint NOT NULL,
  KEY `FK5yjwxw2gvfyu76j3rgqwo685u` (`privilege_id`),
  KEY `FK9h2vewsqh8luhfq71xokh4who` (`role_id`),
  CONSTRAINT `FK5yjwxw2gvfyu76j3rgqwo685u` FOREIGN KEY (`privilege_id`) REFERENCES `privilege` (`id`),
  CONSTRAINT `FK9h2vewsqh8luhfq71xokh4who` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `membership_duration` (
  `id` bigint NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS membership_duration_sequence (next_val bigint);
INSERT INTO  membership_duration_sequence (next_val) VALUES (5);

create table user_membership (id bigint not null, created_on datetime, is_active bit not null, md_id bigint not null, user_id bigint not null, primary key (id));
CREATE TABLE IF NOT EXISTS user_membership_sequence (next_val bigint);
INSERT INTO  user_membership_sequence (next_val) VALUES (5);
CREATE VIEW `users_membership_view` AS

select id,
country,
address1,
address2,
company,
created_on,
email,
first_name,
is_first_login,
last_login,
mobile,
phone,
post_code,
status,
sur_name,
title
           ,(select md.description
               from user_membership um ,
				    membership_duration md
			  where um.is_active=true
				and md.id = um.md_id
                 and u.id = um.user_id) as md_description,
			(select md_id
               from user_membership um ,
				    membership_duration md
			  where um.is_active=true
				and md.id = um.md_id
                 and u.id = um.user_id) as md_id
		from users u;
		
		CREATE 
VIEW `users_roles_view` AS
    SELECT 
        `u`.`id` AS `id`,
        `u`.`email` AS `email`,
        `u`.`first_name` AS `first_name`,
        `u`.`status` AS `status`,
        `u`.`sur_name` AS `sur_name`,
        `u`.`title` AS `title`,
        (SELECT 
                `r`.`name`
            FROM
                (`users_roles` `ur`
                JOIN `role` `r`)
            WHERE
                ((`ur`.`role_id` = `r`.`id`)
                    AND (`u`.`id` = `ur`.`user_id`))) AS `role`,
        (SELECT 
                `r`.`id`
            FROM
                (`users_roles` `ur`
                JOIN `role` `r`)
            WHERE
                ((`ur`.`role_id` = `r`.`id`)
                    AND (`u`.`id` = `ur`.`user_id`))) AS `role_id`
    FROM
        `users` `u`;
-- new
alter table users add column tac_accepted bit
update users set tac_accepted = false;

-------------------------------------------------- new

CREATE TABLE IF NOT EXISTS precious_metals_sequence (next_val bigint);
INSERT INTO  precious_metals_sequence (next_val) VALUES (1);

CREATE TABLE IF NOT EXISTS base_metals_sequence (next_val bigint);
INSERT INTO  base_metals_sequence (next_val) VALUES (1);

create table precious_metals (id bigint not null, refer_date varchar(255),
							 subgroup_id bigint, 
							 value varchar(255), 
							 primary key (id));
							 
create table base_metals (id bigint not null, refer_date varchar(255),
							 subgroup_id bigint, 
							 value varchar(255), 
							 primary key (id));

create table audit_precious_sequence (next_val bigint);
INSERT INTO  audit_precious_sequence (next_val) VALUES (1);
create table tmp_audit_precious (id bigint not null, gold varchar(255), gold_silv varchar(255), plat_gold varchar(255), platinum varchar(255), refer_date varchar(255), silver varchar(255), primary key (id)) ;				
