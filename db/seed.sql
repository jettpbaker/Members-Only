-- DB is created manually, this code is just for reference

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255) NOT NULL,
    salt TEXT NOT NULL,
    hash TEXT NOT NULL,
    member BOOLEAN DEFAULT FALSE,
    admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INTEGER NOT NULL,
    message TEXT NOT NULL,
    posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
