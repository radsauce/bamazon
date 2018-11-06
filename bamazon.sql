DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;
DROP TABLE products;


USE bamazon_db;
CREATE TABLE products (
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
);

USE bamazon_db;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DYE DSR", "Sporting Goods", 950.00, 5), 
("DYE i5 Goggle", "Sporting Goods", 190.00, 10), 
("Gerber Haul AO", "Outdoors", 41.00, 25), 
("Gerber Propel Downrange AO", "Outdoors", 165.00, 10), 
("Subaru BRZ", "Automotive", 27000.00, 5), 
("Subaru WRX", "Automotive", 37000.00, 3), 
("Carter's Glitter Reindeer Jersey Tee", "Clothing", 6.00, 20), 
("Carter's Polka Dot Snow Boots", "Clothing", 26.00, 10), 
("1/2 CT T.W. Diamond Eternity Wedding Band", "Jewelry", 760.00, 3), 
("Ladies' 3.0mm Herringbone Chain Necklace in 14K Gold - 18", "Jewelry", 370.00, 5), 
("Brighton Toes in the Sand Anklet", "Jewelry", 38.00, 20), 
("Brighton Ferrara Anklet", "Jewelry", 40.00, 4);

USE bamazon_db;
SELECT * FROM products;