CREATE DATABASE MOVIE;

SHOW DATABASES;

+--------------------+
| Database           |
+--------------------+
| blogging           |
| college            |
| first_db           |
| information_schema |
| movie              |
| mysql              |
| organization       |
| performance_schema |
| sys                |
| temp               |
+--------------------+

USE MOVIE;

CREATE TABLE ACTORS(
	NAME VARCHAR(20),
    GENDER ENUM("MALE", "FEMALE", "TRANSGENDER"),
    CHARGES DECIMAL
    );

SHOW TABLES;

+-----------------+
| Tables_in_movie |
+-----------------+
| actors          |
+-----------------+

DESC ACTORS;

+---------+-------------------------------------+------+-----+---------+-------+
| Field   | Type                                | Null | Key | Default | Extra |
+---------+-------------------------------------+------+-----+---------+-------+
| NAME    | varchar(20)                         | YES  |     | NULL    |       |
| GENDER  | enum('MALE','FEMALE','TRANSGENDER') | YES  |     | NULL    |       |
| CHARGES | decimal(10,0)                       | YES  |     | NULL    |       |
+---------+-------------------------------------+------+-----+---------+-------+