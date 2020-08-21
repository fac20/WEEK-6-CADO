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

INSERT INTO users (username, password, location, image_link) VALUES
    ('TestDoggy', 'abcabcabcabd', 'Testland, UK', 'https://cdn.shopify.com/s/files/1/0248/0377/0450/products/THE_ARCHDUCHESS_1024x1024@2x.jpg?v=1575627310' ),
    ('TestFriend', '1234abc', 'testfriendly','Test Keynes, UK', 'https://i.etsystatic.com/15257668/r/il/25d670/1972903387/il_570xN.1972903387_9fx0.jpg')
    ;

INSERT INTO posts (user_id, post_title, text_content, posted_at) VALUES
    (1, 'Testing help', 'Seeking a friend to help me test my sausages', '1999-01-08 04:05:06 -8:00'),
    (2, 'Lost Test!', 'Woof woof!! Woof woof woof? Tests....', '1999-01-08 04:05:06 -8:00' )
    ;

COMMIT;