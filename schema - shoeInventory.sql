DROP DATABASE IF EXISTS exclusiveSneaksDB;

CREATE DATABASE exclusiveSneaksDB;

USE exclusiveSneaksDB;

CREATE TABLE shoeInventory (
  PRIMARY KEY (item_id),
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  provider_name VARCHAR (255) NOT NULL,
  department_name VARCHAR (255) NOT NULL, # mens + womens
  shoe_name VARCHAR(255) NOT NULL,
  shoe_color VARCHAR(35) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  price INTEGER(10),
  stock_quantity INTEGER(10)
);

INSERT INTO shoeInventory (provider_name, department_name, shoe_name, shoe_color, image_url, price, stock_quantity)
VALUES ("Foot Locker", "Girls", "JORDAN RETRO 11 - GRADE SCHOOL", "Black", "'https:\\www.shoes.com'", 85, 15);

INSERT INTO shoeInventory (provider_name, department_name, shoe_name, shoe_color, image_url, price, stock_quantity)
VALUES ("Foot Locker", "Girls", "JORDAN RETRO 11 - GRADE SCHOOL", "Black", "www.shoes.com", 85, 15);

INSERT INTO shoeInventory (provider_name, department_name, shoe_name, shoe_color, image_url, price, stock_quantity)
VALUES ("Foot Locker", "Girls", "JORDAN RETRO 11 - GRADE SCHOOL", "Black", "www.shoes.com", 85, 15);

INSERT INTO shoeInventory (provider_name, department_name, shoe_name, shoe_color, image_url, price, stock_quantity)
VALUES ("Foot Locker", "Girls", "JORDAN RETRO 11 - GRADE SCHOOL", "Black", "www.shoes.com", 85, 15);

INSERT INTO shoeInventory (provider_name, department_name, shoe_name, shoe_color, image_url, price, stock_quantity)
VALUES ("Foot Locker", "Girls", "JORDAN RETRO 11 - GRADE SCHOOL", "Black", "www.shoes.com", 85, 15);

INSERT INTO shoeInventory (provider_name, department_name, shoe_name, shoe_color, image_url, price, stock_quantity)
VALUES ("Foot Locker", "Girls", "JORDAN RETRO 11 - GRADE SCHOOL", "Black", "www.shoes.com", 85, 15);

INSERT INTO shoeInventory (provider_name, department_name, shoe_name, shoe_color, image_url, price, stock_quantity)
VALUES ("Foot Locker", "Girls", "JORDAN RETRO 11 - GRADE SCHOOL", "Black", "www.shoes.com", 85, 15);

INSERT INTO shoeInventory (provider_name, department_name, shoe_name, shoe_color, image_url, price, stock_quantity)
VALUES ("Foot Locker", "Girls", "JORDAN RETRO 11 - GRADE SCHOOL", "Black", "www.shoes.com", 85, 15);

INSERT INTO shoeInventory (provider_name, department_name, shoe_name, shoe_color, image_url, price, stock_quantity)
VALUES ("Foot Locker", "Girls", "JORDAN RETRO 11 - GRADE SCHOOL", "Black", "www.shoes.com", 85, 15);

INSERT INTO shoeInventory (provider_name, department_name, shoe_name, shoe_color, image_url, price, stock_quantity)
VALUES ("Foot Locker", "Girls", "JORDAN RETRO 11 - GRADE SCHOOL", "Black", "www.shoes.com", 85, 15);



USE exclusiveSneaksDB;
SELECT * FROM shoeInventory;