CREATE DATABASE cliCombat_db;
USE cliCombat_db;

CREATE TABLE archer (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR (40) NOT NULL,
health integer (10) NOT NULL,
attack integer (10) NOT NULL,
critMod integer (10) NOT NULL,
dodge integer (10) NOT NULL,
level integer (10) NOT NULL,
block integer (10) NOT NULL,
coin integer (10) NOT NULL,
primary key (id) 
);


CREATE TABLE knight (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR (40) NOT NULL,
health integer (10) NOT NULL,
attack integer (10) NOT NULL,
critMod integer (10) NOT NULL,
dodge integer (10) NOT NULL,
level integer (10) NOT NULL,
block integer (10) NOT NULL,
coin integer (10) NOT NULL,
primary key (id)
);

CREATE TABLE rogue (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR (40) NOT NULL,
health integer (10) NOT NULL,
attack integer (10) NOT NULL,
critMod integer (10) NOT NULL,
dodge integer (10) NOT NULL,
level integer (10) NOT NULL,
block integer (10) NOT NULL,
coin integer (10) NOT NULL,
primary key (id)
);

CREATE TABLE mage (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR (40) NOT NULL,
health integer (10) NOT NULL,
attack integer (10) NOT NULL,
critMod integer (10) NOT NULL,
dodge integer (10) NOT NULL,
level integer (10) NOT NULL,
block integer (10) NOT NULL,
coin integer (10) NOT NULL,
primary key (id)
);


CREATE TABLE levelOneMonster (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR (40) NOT NULL,
health integer (10) NOT NULL,
attack integer (10) NOT NULL,
critMod integer (10) NOT NULL,
dodge integer (10) NOT NULL,
level integer (10) NOT NULL,
block integer (10) NOT NULL,
primary key (id)
);


CREATE TABLE levelTwoMonster (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR (40) NOT NULL,
health integer (10) NOT NULL,
attack integer (10) NOT NULL,
critMod integer (10) NOT NULL,
dodge integer (10) NOT NULL,
level integer (10) NOT NULL,
block integer (10) NOT NULL,
primary key (id)
);

CREATE TABLE levelThreeMonster (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR (40) NOT NULL,
health integer (10) NOT NULL,
attack integer (10) NOT NULL,
critMod integer (10) NOT NULL,
dodge integer (10) NOT NULL,
level integer (10) NOT NULL,
block integer (10) NOT NULL,
primary key (id)
);

CREATE TABLE levelFourMonster (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR (40) NOT NULL,
health integer (10) NOT NULL,
attack integer (10) NOT NULL,
critMod integer (10) NOT NULL,
dodge integer (10) NOT NULL,
level integer (10) NOT NULL,
block integer (10) NOT NULL,
primary key (id)
);
