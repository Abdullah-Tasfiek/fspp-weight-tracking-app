\c dahh1r933l64ci; 
DROP TABLE IF EXISTS foods;
DROP TABLE IF EXISTS weights;

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

CREATE TABLE weights (
    id SERIAL PRIMARY KEY,
    date TEXT NOT NULL,
    starting_weight INT,
    current_weight INT,
    goal_weight INT
);
