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

INSERT INTO users(username, email ,pass, city, state, picture) VALUES ('superuser', 'superuser@superuser.com', 'superuser', 'Denver', 'Colorado', 'https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic-300x300.png' );
INSERT INTO saved_items(api_id, title, price, category, description, image, user_id) VALUES (1, 'sometitle', 'price', 'category', 'description', 'image', 1);
