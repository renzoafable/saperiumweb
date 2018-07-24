DROP USER IF EXISTS 'saperiumweb'@'localhost';
CREATE USER 'saperiumweb'@'localhost' IDENTIFIED WITH mysql_native_password BY 'saperiumweb';


DROP DATABASE IF EXISTS saperiumweb;
CREATE DATABASE saperiumweb;

USE saperiumweb;

GRANT SUPER ON *.* TO 'saperiumweb'@'localhost';
GRANT ALL PRIVILEGES ON saperiumweb.* TO 'saperiumweb'@'localhost';

CREATE TABLE IMAGE (
    image_id INT NOT NULL AUTO_INCREMENT,
    file_path LONGTEXT NOT NULL,
    page_id INT NOT NULL,
    PRIMARY KEY (image_id)
);

CREATE TABLE HOME (
    home_id INT DEFAULT 1,
    about_us LONGTEXT NOT NULL,
    careers LONGTEXT NOT NULL,
    services LONGTEXT NOT NULL,
    contact_us LONGTEXT NOT NULL,
    application LONGTEXT NOT NULL,
    PRIMARY KEY (home_id)
);

CREATE TABLE TESTIMONIAL (
    testimonial_id INT NOT NULL AUTO_INCREMENT,
    note LONGTEXT NOT NULL,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    image_id INT NOT NULL,
    FOREIGN KEY (image_id) REFERENCES IMAGE(image_id),
    PRIMARY KEY (testimonial_id)
);

CREATE TABLE ABOUT (
    about_id INT DEFAULT 2,
    title VARCHAR(100) NOT NULL,
    body LONGTEXT NOT NULL,
    PRIMARY KEY (about_id)
);

CREATE TABLE CAREERS (
    careers_id INT DEFAULT 3,
    title VARCHAR(100) NOT NULL,
    body LONGTEXT NOT NULL,
    image_id INT NOT NULL,
    FOREIGN KEY (image_id) REFERENCES IMAGE(image_id),
    PRIMARY KEY (careers_id)
);

CREATE TABLE SERVICES (
    services_id INT DEFAULT 4,
    title VARCHAR(100) NOT NULL,
    body LONGTEXT NOT NULL,
    image_id INT NOT NULL,
    FOREIGN KEY (image_id) REFERENCES IMAGE(image_id),
    PRIMARY KEY (services_id)
);

CREATE TABLE MESSAGE (
    message_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    body LONGTEXT NOT NULL,
    PRIMARY KEY (message_id)
);

CREATE TABLE CONTACT_US (
    contact_us_id INT DEFAULT 5,
    title VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    body LONGTEXT NOT NULL,
    PRIMARY KEY (contact_us_id)
);

CREATE TABLE PHONE (
    phone_id INT NOT NULL AUTO_INCREMENT,
    number VARCHAR(50) NOT NULL,
    contact_us_id INT NOT NULL,
    FOREIGN KEY (contact_us_id) REFERENCES CONTACT_US(contact_us_id),
    PRIMARY KEY (phone_id)
);

CREATE TABLE QUESTION (
    question_id INT NOT NULL AUTO_INCREMENT,
    type ENUM("multiple", "paragraph", "file_upload"),
    body LONGTEXT NOT NULL,
    PRIMARY KEY (question_id)
);

CREATE TABLE CHOICE (
    choice_id INT NOT NULL AUTO_INCREMENT,
    question_id INT NOT NULL,
    body LONGTEXT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES QUESTION(question_id),
    PRIMARY KEY (choice_id)
);

CREATE TABLE APPLY (
    contact_us_id INT DEFAULT 6,
    question_id INT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES QUESTION(question_id),
    PRIMARY KEY (contact_us_id)
);

CREATE TABLE ANSWER (
    answer_id INT NOT NULL AUTO_INCREMENT,
    body LONGTEXT NOT NULL,
    question_id INT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES QUESTION(question_id),
    PRIMARY KEY (answer_id)
);

CREATE TABLE APPLICATION (
    application_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    answer_id INT NOT NULL,
    FOREIGN KEY (answer_id) REFERENCES ANSWER(answer_id),
    PRIMARY KEY (application_id)
);

CREATE TABLE USER (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(256) NOT NULL,
  UNIQUE (username),
  PRIMARY KEY (user_id)
);

