BEGIN;

--add drop table here
DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    location VARCHAR(30),
    image_link TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    post_title VARCHAR(280),
    text_content TEXT NOT NULL,
    posted_at TIMESTAMP
);

COMMIT;