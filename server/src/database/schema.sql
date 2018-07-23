DROP USER IF EXISTS 'saperiumweb'@'localhost';
CREATE USER 'saperiumweb'@'localhost' IDENTIFIED WITH mysql_native_password BY 'saperiumweb';


DROP DATABASE IF EXISTS saperiumweb;
CREATE DATABASE saperiumweb;

USE saperiumweb;

GRANT SUPER ON *.* TO 'saperiumweb'@'localhost';
GRANT ALL PRIVILEGES ON saperiumweb.* TO 'saperiumweb'@'localhost';