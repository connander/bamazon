DROP DATABASE IF EXISTS	bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
product_name VARCHAR (100),
department_name VARCHAR (100),
price INTEGER (30),
stock_quantity INTEGER (30),
itemID INTEGER AUTO_INCREMENT NOT NULL,
PRIMARY KEY (itemID) 
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tomatoes", "Grocery", 2.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper", "Household", 10.65, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Halo", "Video Games", 60.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Miluakee Impact Wrench", "Tools", 85.99, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ol' Roy Dog Food", "Pet Supplies", 35.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Budweiser", "Grocery", 8.99, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Comet", "Household", 5.00, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Oxygen Not Included", "Video Games", 35.00, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Husky Channel Lock Wrench", "Tools", 14.99, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Natures Miracle", "Pet Supplies", 12.50, 6);


SELECT * FROM products;