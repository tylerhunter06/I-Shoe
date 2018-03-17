USE exclusiveSneaksDB;

CREATE TABLE userCredentials (
  PRIMARY KEY (id),
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  userName VARCHAR (25) NOT NULL,
  password VARCHAR (25) NOT NULL,
  emailAddress VARCHAR (255) NOT NULL

);

INSERT INTO userCredentials (userName, password, emailAddress)
VALUES ("cassandragsan", "testpw", "cassandragsan@gmail.com");

INSERT INTO userCredentials (userName, password, emailAddress)
VALUES ("tylerMan", "testpw", "tyler@gmail.com");

INSERT INTO userCredentials (userName, password, emailAddress)
VALUES ("charlesMan", "testpw", "charles@gmail.com");


USE exclusiveSneaksDB;
SELECT * FROM userCredentials;