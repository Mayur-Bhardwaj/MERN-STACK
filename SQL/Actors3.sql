 CREATE TABLE MOVIES (ID INT AUTO_INCREMENT, NAME VARCHAR(20) NOT NULL, PRIMARY KEY(ID));

  SHOW TABLES;
+-----------------+
| Tables_in_movie |
+-----------------+
| actors          |
| movies          |
+-----------------+

 ALTER TABLE MOVIES ADD ACTOR INT;

-- ---------------------------------------------------------------------------

DESC MOVIES;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| ID    | int         | NO   | PRI | NULL    | auto_increment |
| NAME  | varchar(20) | NO   |     | NULL    |                |
| ACTOR | int         | YES  |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+

-- ---------------------------------------------------------------------------

INSERT INTO MOVIES(NAME, ACTOR) VALUES ("DE DANA DAN", 1), ("STREET DANCER",2), ("STREE",2),("URI",3);

 SELECT * FROM MOVIES;
+----+---------------+-------+
| ID | NAME          | ACTOR |
+----+---------------+-------+
|  1 | DE DANA DAN   |     1 |
|  2 | STREET DANCER |     2 |
|  3 | STREE         |     2 |
|  4 | URI           |     3 |
+----+---------------+-------+

-- ---------------------------------------------------------------------------

-- JOINS

SELECT * FROM MOVIES;
+----+---------------+-------+
| ID | NAME          | ACTOR |
+----+---------------+-------+
|  1 | DE DANA DAN   |     1 |
|  2 | STREET DANCER |     2 |
|  3 | STREE         |     2 |
|  4 | URI           |     3 |
+----+---------------+-------+

 SELECT * FROM ACTORS;
+----------------+--------+---------+----+
| NAME           | GENDER | CHARGES | ID |
+----------------+--------+---------+----+
| AKSHAY KUMAR   | MALE   |  600000 |  1 |
| VARUN DHAWAN   | MALE   |  500000 |  2 |
| VICKEY KAUSHAL | MALE   |  500000 |  3 |
| ALIYA BHATT    | FEMALE |  400000 |  4 |
| AKSHAY RANA    | MALE   |  200000 |  5 |
| KRITI SANON    | FEMALE |  400000 |  6 |
+----------------+--------+---------+----+

 SELECT * FROM MOVIES JOIN ACTORS ON MOVIES.ACTOR = ACTORS.ID;
+----+---------------+-------+----------------+--------+---------+----+
| ID | NAME          | ACTOR | NAME           | GENDER | CHARGES | ID |
+----+---------------+-------+----------------+--------+---------+----+
|  1 | DE DANA DAN   |     1 | AKSHAY KUMAR   | MALE   |  600000 |  1 |
|  2 | STREET DANCER |     2 | VARUN DHAWAN   | MALE   |  500000 |  2 |
|  3 | STREE         |     2 | VARUN DHAWAN   | MALE   |  500000 |  2 |
|  4 | URI           |     3 | VICKEY KAUSHAL | MALE   |  500000 |  3 |
+----+---------------+-------+----------------+--------+---------+----+

-- ---------------------------------------------------------------------------


 SELECT MOVIES.ID, MOVIES.NAME, ACTORS.NAME, ACTORS.CHARGES FROM MOVIES JOIN ACTORS ON MOVIES.ACTOR = ACTORS.ID;
+----+---------------+----------------+---------+
| ID | NAME          | NAME           | CHARGES |
+----+---------------+----------------+---------+
|  1 | DE DANA DAN   | AKSHAY KUMAR   |  600000 |
|  2 | STREET DANCER | VARUN DHAWAN   |  500000 |
|  3 | STREE         | VARUN DHAWAN   |  500000 |
|  4 | URI           | VICKEY KAUSHAL |  500000 |
+----+---------------+----------------+---------+