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