DROP TABLE IF EXISTS users, saved_items, posted_items;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    paswword TEXT,
    location TEXT,
    picture TEXT
);

CREATE TABLE saved_items(
    item_id SERIAL,
    api_id INTEGER,
    title TEXT,
    price TEXT,
    category TEXT,
    description TEXT,
    image TEXT,
    user_id INTEGER NOT NULL FOREIGN KEY REFERENCES users(user_id)
);

CREATE TABLE posted_items(
    posted_item_id SERIAL,
    api_id INTEGER,
    title TEXT,
    price TEXT,
    category TEXT,
    description TEXT,
    image TEXT,
    user_id INTEGER NOT NULL FOREIGN KEY REFERENCES users(user_id)
);