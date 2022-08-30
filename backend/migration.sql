DROP TABLE IF EXISTS users, saved_items, posted_items;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    password TEXT,
    city TEXT,
    state TEXT,
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

INSERT INTO users (username, email ,password, city, state, picture) VALUES ('superuser', 'superuser@superuser.com', 'superuser', 'Denver', 'Colorado', 'https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic-300x300.png' )