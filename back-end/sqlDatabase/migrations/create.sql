DROP TABLE IF EXISTS images CASCADE;
-- CREATE TABLE images (
--   id SERIAL PRIMARY KEY NOT NULL,
--   image_name VARCHAR(255) NOT NULL,
--   image_file bytea NOT NULL
-- );

CREATE TABLE images(
    id SERIAL NOT NULL PRIMARY KEY,
    original_name TEXT UNIQUE NOT NULL,
    file_name TEXT UNIQUE NOT NULL,
    file_path TEXT NOT NULL,
    mime_type TEXT NOT NULL,
    size BIGINT NOT NULL
    -- image_data TEXT NOT NULL
);
