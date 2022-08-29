DROP DATABASE IF EXISTS food_log;
CREATE DATABASE food_log; 

\c food_log; 

CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    date TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    calories INT,
    protein INT,
    carbs INT,
    fats INT,
    fiber INT
);