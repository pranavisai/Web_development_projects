-- create a table
CREATE TABLE products (
id INT not NULL,
name VARCHAR,
price MONEY,
PRIMARY KEY (id)
);

-- insert into table
INSERT INTO products VALUES (1, "Pen", 1.20);

-- READ through a table
SELECT * from products;

SELECT name, price from products;

SELECT * from products WHERE id=1;


-- Update records in a database
UPDATE products SET price=0.8 WHERE id=2;


-- Alter us used to add, delete and modify columns in an exisiting table
ALTER TABLE products ADD stock INT;

-- Delete 
DELETE FROM products WHERE id=2;

-- Foreign Key

CREATE TABLE orders (
id INT not NULL,
order_number INT,
customer_id INT,
product_id INT,
PRIMARY KEY (id),
FOREIGN KEY (customer_id) REFERENCES customers(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);

-- JOIN tables
SELECT orders.order_number, products.name, products.price, products.stock  FROM orders INNER JOIN products ON orders.product_id = products.id;

