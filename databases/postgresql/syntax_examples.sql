-- create table

CREATE TABLE flags (
	id SERIAL PRIMARY KEY,
	name VARCHAR(45),
	flag TEXT
);

-- INSERT
INSERT INTO world_food (country, rice_production, wheat_production) VALUES ('Italy', 1.46, 7.3)

-- select 
SELECT * from world_food;

-- select only one row
SELECT country from world_food;

-- select multiple rows
SELECT country, wheat_production from world_food;

-- where 
SELECT rice_production from world_food where country = 'United States'; -- only single quotes is valid

SELECT country from world_food where wheat_production > 20; -- <, >, <=, >= all can be used in these statements

-- WHERE LIKE -> when we need to check for a pattern

SELECT country from world_food where country LIKE 'U%'; -- OR
SELECT country from world_food where country LIKE 'U' || '%' ; -- || used as concatenation

SELECT country from world_food where country LIKE '%a' ;

-- NOT NULL -> No missing or empty values 
-- UNIQUE -> values to not be repeated



