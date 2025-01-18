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

CREATE TABLE ACTOR(
	NAME VARCHAR(20),
    GENDER ENUM("MALE", "FEMALE", "TRANSGENDER"),
    CHARGES DECIMAL,
    ID INT AUTO_INCREMENT,
    PRIMARY KEY(ID)
    );

 CREATE TABLE ACTOR(
    -> Name VARCHAR(50) NOT NULL,
    -> GENDER ENUM("MALE", "FEMALE", "TRANSGENDER") NOT NULL,
    -> CHARGES DECIMAL,
    -> ID INT AUTO_INCREMENT,
    -> PRIMARY KEY(ID)
    -> );

-- Insert the data 
-- For Single Entry
INSERT INTO ACTORS VALUES ("AKSHAY KUMAR", "MALE", 300000);
INSERT INTO ACTORS (NAME, GENDER, CHARGES) VALUES ("VARUN DHAWAN", "MALE", 500000);

-- For Multiple Entry
INSERT INTO ACTORS VALUES ("VICKEY KAUSHAL", "MALE", 500000), ("ALIYA BHATT", "FEMALE", 400000);

-- Retrieve everything from table

 SELECT * FROM ACTORS;

+----------------+--------+---------+
| NAME           | GENDER | CHARGES |
+----------------+--------+---------+
| AKSHAY KUMAR   | MALE   |  300000 |
| VARUN DHAWAN   | MALE   |  500000 |
| VICKEY KAUSHAL | MALE   |  500000 |
| ALIYA BHATT    | FEMALE |  400000 |
+----------------+--------+---------+

-- Select only name and gender from the table.

SELECT NAME, GENDER FROM ACTORS;

+----------------+--------+
| NAME           | GENDER |
+----------------+--------+
| AKSHAY KUMAR   | MALE   |  
| VARUN DHAWAN   | MALE   |  
| VICKEY KAUSHAL | MALE   |  
| ALIYA BHATT    | FEMALE | 
+----------------+--------+