DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

CREATE TABLE items(
    id INTEGER NOT NULL AUTO_INCREMENT,
    item VARCHAR(30) NOT NULL,
    category VARCHAR(30) NOT NULL,
)