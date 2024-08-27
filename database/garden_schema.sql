CREATE TABLE plants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50),
    plant_date DATE,
    ph_level DECIMAL(3,2),
    feeding_schedule TEXT
);

CREATE TABLE monthly_tracking (
    id SERIAL PRIMARY KEY,
    plant_id INT REFERENCES plants(id),
    month VARCHAR(20),
    growth_stage TEXT,
    issues TEXT,
    actions_taken TEXT
);
