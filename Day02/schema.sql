-- Contains SQL commands to create database structures

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users
VALUES (1, 'Kenneth', 'kenneth@example.com');

SELECT * FROM users;