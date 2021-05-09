DROP TABLE IF EXISTS images CASCADE;

CREATE TABLE images(
    id SERIAL NOT NULL PRIMARY KEY,
    original_name TEXT UNIQUE NOT NULL,
    file_name TEXT UNIQUE NOT NULL,
    file_path TEXT NOT NULL,
    mime_type TEXT NOT NULL,
    size BIGINT NOT NULL
);
