BEGIN;

--add drop table here
DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    location VARCHAR(30)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    post_title VARCHAR(280),
    text_content TEXT NOT NULL,
    posted_at TIMESTAMP,
    image_link TEXT
);

INSERT INTO users (username, location) VALUES
    ('PoochesGracias', 'London, UK'),
    ('Mutley', 'Milton Keynes, UK')
    ;

INSERT INTO posts (user_id, post_title, text_content, posted_at, image_link) VALUES
    (1, 'Sausages', 'Seeking canine companion to share sausages with! Pooches Gracias like sausages!!', '1999-01-08 04:05:06 -8:00', 'https://cdn.shopify.com/s/files/1/0248/0377/0450/products/THE_ARCHDUCHESS_1024x1024@2x.jpg?v=1575627310'),
    (2, 'Lost Ball!', 'Woof woof!! Woof woof woof? Sausages....', '1999-01-08 04:05:06 -8:00', 'https://i.etsystatic.com/15257668/r/il/25d670/1972903387/il_570xN.1972903387_9fx0.jpg')
    ;

COMMIT;