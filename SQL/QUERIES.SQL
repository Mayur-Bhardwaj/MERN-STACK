-- To show the databases present in our system.
show databases;
+--------------------+
| Database           |
+--------------------+
| college            |
| first_db           |
| information_schema |
| mysql              |
| organization       |
| performance_schema |
| sys                |
| temp               |
+--------------------+

-- Create our new databases.
CREATE DATABASE BLOGGING;

SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| blogging           |
| college            |
| first_db           |
| information_schema |
| mysql              |
| organization       |
| performance_schema |
| sys                |
| temp               |
+--------------------+
9 rows in set (0.00 sec)

USE BLOGGING;
Database changed
 SHOW TABLES;

-- To create the table in the SQL

  CREATE TABLE Blogs(
    -> title VARCHAR(20),
    -> id INT,
    -> content VARCHAR(1200)
    -> )