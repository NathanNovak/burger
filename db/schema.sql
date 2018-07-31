CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id VARCHAR(10) NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (50) NOT NULL,
	devoured BOOLEAN DEFAULT true, 
	PRIMARY KEY (id)
);

