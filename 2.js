/* 
CREATE DATABASE FishMarket;

\c FishMarket

CREATE TABLE fish_types (
    fish_id SERIAL PRIMARY KEY,
    fish_name VARCHAR(100) NOT NULL,
    price_1_5kg DECIMAL(10, 2) NOT NULL,
    price_5_10kg DECIMAL(10, 2) NOT NULL,
    price_10_20kg DECIMAL(10, 2) NOT NULL,
    price_20kg_plus DECIMAL(10, 2) NOT NULL
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    contact_info VARCHAR(100) NOT NULL
);

INSERT INTO fish_types (fish_name, price_1_5kg, price_5_10kg, price_10_20kg, price_20kg_plus)
VALUES 
    ('Tilapia', 10.50, 9.00, 8.00, 7.50),
    ('Salmon', 15.00, 14.00, 12.50, 10.00),
    ('Tuna', 20.00, 18.50, 17.00, 15.00);


    INSERT INTO customers (customer_name, contact_info)
VALUES 
    ('John Doe', 'john.doe@example.com'),
    ('Jane Smith', '+1234567890'),
    ('Alice Johnson', 'alice@example.com');


    
SELECT * FROM fish_types;

SELECT * FROM fish_types ORDER BY fish_id;

SELECT SUM(price_1_5kg) AS total_price_1_5kg FROM fish_types;

SELECT * FROM fish_types ORDER BY price_5_10kg;

SELECT * FROM customers;

SELECT * FROM customers ORDER BY customer_id;


SELECT customer_name, contact_info FROM customers;

*/

