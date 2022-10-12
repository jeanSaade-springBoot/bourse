create table user_requested_sequence (next_val bigint);
INSERT INTO user_requested_sequence (next_val) VALUES (1);
 
CREATE TABLE IF NOT EXISTS user_requested (id bigint not null, country varchar(255), address1 varchar(255), address2 varchar(255), company varchar(255), created_on datetime, email varchar(255), first_name varchar(255), last_login datetime, mobile varchar(255), password varchar(255), password_hint varchar(255), phone varchar(255), post_code varchar(255), status varchar(255), sur_name varchar(255), title varchar(255), updated_on datetime, user_id bigint, user_name varchar(255), primary key (id), CONSTRAINT uk_user_requested_username UNIQUE (user_name)); 
 
CREATE TABLE IF NOT EXISTS user_sequence (next_val bigint);
INSERT INTO user_sequence (next_val) VALUES (1);

CREATE TABLE IF NOT EXISTS users (id bigint not null, country varchar(255), address1 varchar(255), address2 varchar(255), company varchar(255), created_on datetime, email varchar(255), first_name varchar(255), is_first_login bit, last_login datetime, mobile varchar(255), password varchar(255), password_hint varchar(255), phone varchar(255), post_code varchar(255), status varchar(255), sur_name varchar(255), title varchar(255), updated_on datetime, user_name varchar(255), primary key (id), CONSTRAINT uk_user_username UNIQUE (user_name));

CREATE TABLE IF NOT EXISTS role_sequence (next_val bigint);
INSERT INTO role_sequence (next_val) VALUES (1);

CREATE TABLE IF NOT EXISTS roles (
	id  bigint not null,
	name VARCHAR ( 60 ) NOT NULL
	, CONSTRAINT uk_roles_id UNIQUE (id)
);

CREATE TABLE IF NOT EXISTS user_roles
(	
    user_id bigint not null,
    role_id bigint not null,
    CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id),
    CONSTRAINT user_roles_roleId_pkey FOREIGN KEY (role_id)
        REFERENCES roles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_roles_userId_pkey FOREIGN KEY (user_id)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

create table privilege (id bigint not null, name varchar(255), primary key (id));

create table roles_privileges (id bigint not null, privilege_id bigint not null, role_id bigint not null, primary key (id)) ;
