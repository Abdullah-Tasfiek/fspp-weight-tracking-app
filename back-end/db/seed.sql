\c food_log; 

INSERT INTO foods (date, name, description, calories, protein, carbs, fats, fiber) VALUES
('August 26', 'Strawberries', '2 cups', 50, 1, 20, 1, 3),
('August 26', 'Banana', 'medium sized', 90, 2, 18, 0, 1),
('August 27', 'Turkey Sandwich', 'lean turkey slices between white bread', 400, 20, 25, 5, 3),
('August 27', 'steak', 'ribeye', 600, 30, 0, 6, 0),
('August 28', 'Chicken Breast', '6 oz', 200, 38, 0, 3, 0),
('August 28', 'Chicken Salad', 'no dressing', 250, 30, 7, 1, 5);

INSERT INTO weights (starting_weight, current_weight, goal_weight) VALUES
(230, 230, 180),
(200, 197, 190),
(120, 130, 135);