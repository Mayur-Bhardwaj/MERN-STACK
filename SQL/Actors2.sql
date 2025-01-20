 SELECT * FROM ACTORS WHERE CHARGES >=400000;
+----------------+--------+---------+
| NAME           | GENDER | CHARGES |
+----------------+--------+---------+
| VARUN DHAWAN   | MALE   |  500000 |
| VICKEY KAUSHAL | MALE   |  500000 |
| ALIYA BHATT    | FEMALE |  400000 |
+----------------+--------+---------+

 SELECT * FROM ACTORS WHERE NOT CHARGES >=400000;
+--------------+--------+---------+
| NAME         | GENDER | CHARGES |
+--------------+--------+---------+
| AKSHAY KUMAR | MALE   |  300000 |
| AKSHAY RANA  | MALE   |  200000 |
+--------------+--------+---------+

-- Order by Charges.

 SELECT * FROM ACTORS ORDER BY CHARGES ASC;
+----------------+--------+---------+
| NAME           | GENDER | CHARGES |
+----------------+--------+---------+
| AKSHAY RANA    | MALE   |  200000 |
| AKSHAY KUMAR   | MALE   |  300000 |
| ALIYA BHATT    | FEMALE |  400000 |
| VARUN DHAWAN   | MALE   |  500000 |
| VICKEY KAUSHAL | MALE   |  500000 |
+----------------+--------+---------+

-- Order by Name.
 SELECT * FROM ACTORS ORDER BY NAME ASC;
+----------------+--------+---------+
| NAME           | GENDER | CHARGES |
+----------------+--------+---------+
| AKSHAY KUMAR   | MALE   |  300000 |
| AKSHAY RANA    | MALE   |  200000 |
| ALIYA BHATT    | FEMALE |  400000 |
| VARUN DHAWAN   | MALE   |  500000 |
| VICKEY KAUSHAL | MALE   |  500000 |
+----------------+--------+---------+

-- ---------------------------------------------------------------------------

-- Add the column in table (ID) using ALTER.

 ALTER TABLE ACTORS MODIFY COLUMN ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY;

  SELECT * FROM ACTORS;
+----------------+--------+---------+----+
| NAME           | GENDER | CHARGES | ID |
+----------------+--------+---------+----+
| AKSHAY KUMAR   | MALE   |  300000 |  1 |
| VARUN DHAWAN   | MALE   |  500000 |  2 |
| VICKEY KAUSHAL | MALE   |  500000 |  3 |
| ALIYA BHATT    | FEMALE |  400000 |  4 |
| AKSHAY RANA    | MALE   |  200000 |  5 |
+----------------+--------+---------+----+


 SELECT * FROM ACTORS ORDER BY CHARGES;
+----------------+--------+---------+----+
| NAME           | GENDER | CHARGES | ID |
+----------------+--------+---------+----+
| AKSHAY RANA    | MALE   |  200000 |  5 |
| AKSHAY KUMAR   | MALE   |  300000 |  1 |
| ALIYA BHATT    | FEMALE |  400000 |  4 |
| KRITI          | FEMALE |  400000 |  6 |
| VARUN DHAWAN   | MALE   |  500000 |  2 |
| VICKEY KAUSHAL | MALE   |  500000 |  3 |
+----------------+--------+---------+----+

-- ---------------------------------------------------------------------------

-- Show the charges in descending order.

SELECT * FROM ACTORS ORDER BY CHARGES DESC;
+----------------+--------+---------+----+
| NAME           | GENDER | CHARGES | ID |
+----------------+--------+---------+----+
| VARUN DHAWAN   | MALE   |  500000 |  2 |
| VICKEY KAUSHAL | MALE   |  500000 |  3 |
| ALIYA BHATT    | FEMALE |  400000 |  4 |
| KRITI          | FEMALE |  400000 |  6 |
| AKSHAY KUMAR   | MALE   |  300000 |  1 |
| AKSHAY RANA    | MALE   |  200000 |  5 |
+----------------+--------+---------+----+

-- Show the name and charges in descending order

SELECT * FROM ACTORS ORDER BY CHARGES DESC, NAME DESC;
+----------------+--------+---------+----+
| NAME           | GENDER | CHARGES | ID |
+----------------+--------+---------+----+
| VICKEY KAUSHAL | MALE   |  500000 |  3 |
| VARUN DHAWAN   | MALE   |  500000 |  2 |
| KRITI          | FEMALE |  400000 |  6 |
| ALIYA BHATT    | FEMALE |  400000 |  4 |
| AKSHAY KUMAR   | MALE   |  300000 |  1 |
| AKSHAY RANA    | MALE   |  200000 |  5 |
+----------------+--------+---------+----+

-- By using the LIMIT Clause we set the limit on table that how much rows data we neededd.

 SELECT * FROM ACTORS ORDER BY CHARGES DESC, NAME DESC LIMIT 2;
+----------------+--------+---------+----+
| NAME           | GENDER | CHARGES | ID |
+----------------+--------+---------+----+
| VICKEY KAUSHAL | MALE   |  500000 |  3 |
| VARUN DHAWAN   | MALE   |  500000 |  2 |
+----------------+--------+---------+----+

SELECT * FROM ACTORS ORDER BY CHARGES DESC, NAME DESC LIMIT 2 OFFSET 2;
+-------------+--------+---------+----+
| NAME        | GENDER | CHARGES | ID |
+-------------+--------+---------+----+
| KRITI       | FEMALE |  400000 |  6 |
| ALIYA BHATT | FEMALE |  400000 |  4 |
+-------------+--------+---------+----+

-- ---------------------------------------------------------------------------

-- OFFSET is apply on the LIMIT Clause.

 SELECT * FROM ACTORS LIMIT 2 OFFSET 0;
+--------------+--------+---------+----+
| NAME         | GENDER | CHARGES | ID |
+--------------+--------+---------+----+
| AKSHAY KUMAR | MALE   |  300000 |  1 |
| VARUN DHAWAN | MALE   |  500000 |  2 |
+--------------+--------+---------+----+

-- ---------------------------------------------------------------------------

--  Update the name in the ACTORS Table.

UPDATE ACTORS SET NAME = "KRITI SANON" WHERE NAME = "KRITI";

 SELECT * FROM ACTORS;
+----------------+--------+---------+----+
| NAME           | GENDER | CHARGES | ID |
+----------------+--------+---------+----+
| AKSHAY KUMAR   | MALE   |  300000 |  1 |
| VARUN DHAWAN   | MALE   |  500000 |  2 |
| VICKEY KAUSHAL | MALE   |  500000 |  3 |
| ALIYA BHATT    | FEMALE |  400000 |  4 |
| AKSHAY RANA    | MALE   |  200000 |  5 |
| KRITI SANON    | FEMALE |  400000 |  6 |
+----------------+--------+---------+----+

-- ---------------------------------------------------------------------------

-- Update the CHARGES of AKSHAY KUMAR in ACTORS table.

 UPDATE ACTORS SET CHARGES = 600000 WHERE NAME = "AKSHAY KUMAR";

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

-- ---------------------------------------------------------------------------

-- Add new column.

ALTER TABLE ACTORS ADD DOB DATETIME;

 SELECT * FROM ACTORS;
+----------------+--------+---------+----+------+
| NAME           | GENDER | CHARGES | ID | DOB  |
+----------------+--------+---------+----+------+
| AKSHAY KUMAR   | MALE   |  600000 |  1 | NULL |
| VARUN DHAWAN   | MALE   |  500000 |  2 | NULL |
| VICKEY KAUSHAL | MALE   |  500000 |  3 | NULL |
| ALIYA BHATT    | FEMALE |  400000 |  4 | NULL |
| AKSHAY RANA    | MALE   |  200000 |  5 | NULL |
| KRITI SANON    | FEMALE |  400000 |  6 | NULL |
+----------------+--------+---------+----+------+

-- ---------------------------------------------------------------------------

-- To drop the column name we use command like:

 ALTER TABLE ACTORS DROP DOB;

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
