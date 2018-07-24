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


INSERT INTO USER VALUES (NULL, "admin", sha2("admin", 256));
INSERT INTO IMAGE VALUES(NULL, "123.jpg", 1);

INSERT INTO HOME 
                VALUES (    1,
                            "Our company is all about extraordinary individuals who love technology...",
                            "We are a team of passionate, knowledge-hungry, dynamic and brave individuals...",
                            "Our customers want to enjoy the process of building software together...",
                            "We are excited to hear from you! For questions about services: services@saperium.com",
                            "sydney gandaaaaa"
                        );

INSERT INTO TESTIMONIAL 
                VALUES (    NULL,
                            "Any greate change in the world started with someone or some group of people that had an idea and the courage to act on it. They wanted to break free.",
                            "John Lauer",
                            "President",
                            1
                        );      

INSERT INTO ABOUT 
                VALUES (    2,
                            "About Saperium",
                            "Where do great things come from? It’s not about great companies; it’s not about great organizations. It’s about people doing extraordinary things. Saperium is an elite software company aimed to revolutionize I.T. outsourcing in the Philippines. The team is headed by John Lauer, (http://www.linkedin.com/in/lauerjohn) a former senior executive of Microsoft Corporation. The word Saperium is derived from the Latin sapere aude which means “Dare to be wise!” Our company is all about extraordinary individuals who love technology and want to use their talents to break away from the pack and do great things."
                        );

INSERT INTO CAREERS
                VALUES (    3,
                            "Careers",
                            "We are in the process of building a team of extraordinary people – all passionate, knowledge-hungry, dynamic, and brave individuals collaborating to do great things with technology.
Our company is made of individuals who:
Love technology
Are the top 1% of developers in the Philippines
Graduated from a prestigious university
Hate cheap outsourcing
Want to work with the smartest people
Want to add great projects to their list of accomplishments
Have the talent to build a great company in the Philippines
Want to make great money
Want to work with U.S. customers
All candidates must pass a challenging technical examination and have a proven track record of technical accomplishments. 
 
We are on the lookout for Software Architects and Senior Software Engineers. We are particularly interested in candidates with expertise on the Microsoft platform.

For enquiries about careers or to submit your CV: careers@saperium.com
All information will be kept strictly confidential.

Successfully refer a developer to us and receive 1,000 USD or an iPad 2. The first person to refer someone who gets hired qualifies for the prize.",
                            1
                        );

INSERT INTO SERVICES
                VALUES (    4,
                            "Services",
                            "Really great software developers are hard to find. The difference between good programmers and extraordinary programmers is exponential. Great programmers like to work with other great programmers. They like to be in an environment that is solely focused on creating awesome software. They do not like to work for large companies with hundreds of cubicles filled with average developers. They do not like to work inside of companies that are not purely focused on the art and magic of great software. They like to choose the projects they work on. They love working closely with customers committed to shipping a quality product so users can experience what they built.

We have put together a team of extraordinary programmers.

Customers like working with developers committed to delivering a quality product on time and on budget. They want developers that do not overpromise but deliver what they say they will deliver. Customers like developers that stay in close communication and are flexible. Customers like to see working code as the project passes each milestone. Customers want to work with experts who can point out areas not previously considered. Customers want to enjoy the process of building software together.
If you think your project or product might be a good fit with our company, we would love to hear from you. Please contact us at services@saperium.com or call us at +63.2.502.0942.",
                            1
                        );

INSERT INTO CONTACT_US
                VALUES (    5,
                            "Contact Us",
                            "20/F Picadilly Star 4th Avenue corner 27th Street Fort Bonifacio Global City, Taguig Philippines 1624",
                            "We’re excited to hear from you!
For questions about services: services@saperium.com
For enquiries about careers or to submit your CV: careers@saperium.com
All information will be kept strictly confidential."
                        );


INSERT INTO PHONE VALUES (NULL, "+63.2.403.5519 loc. 202", 5);
INSERT INTO PHONE VALUES (NULL, "+63.2.502.0942", 5);
INSERT INTO PHONE VALUES (NULL, "+63.917.886.8497", 5);

INSERT INTO MESSAGE
                VALUES(     NULL,
                            "cbcortez3@up.edu.ph",
                            "Clarisse Sydney",
                            "Cortez",
                            "Hire me pleasezzzz"
                    );
