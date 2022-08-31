DROP TABLE IF EXISTS saved_items;
DROP TABLE IF EXISTS posted_items;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_id SERIAL,
    username TEXT,
    email TEXT,
    pass TEXT,
    city TEXT,
    state TEXT,
    picture TEXT,
    PRIMARY KEY (user_id)
);


CREATE TABLE saved_items(
    item_id SERIAL,
    api_id INTEGER,
    title TEXT,
    price TEXT,
    category TEXT,
    description TEXT,
    image TEXT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE posted_items(
    posted_item_id SERIAL,
    api_id INTEGER,
    title TEXT,
    price TEXT,
    category TEXT,
    description TEXT,
    image TEXT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


