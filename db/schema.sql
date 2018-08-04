DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INT(10) NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (50) NOT NULL,
	devoured BOOLEAN DEFAULT false, 
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Bacon Burger');
INSERT INTO burgers (burger_name) VALUES ('Cheese Burger');
INSERT INTO burgers (burger_name) VALUES ('Chili Burger');

SELECT * FROM burgers;