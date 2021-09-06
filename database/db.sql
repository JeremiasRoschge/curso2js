CREATE DATABASE database_links;

USE database_slinks;
--Tabla de usuarios
CREATE TABLE users(
    id INT(11)NOT NULL,
    username varchar(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL                      
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE users;

--Tabla de links

CREATE TABLE links(
    id INT(11) NOT NULL,
    title varchar(150) NOT NULL,
    url varchar(255) NOT NULL,
    description text,
    user_id INT(11),
    createdat timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links 
    ADD PRIMARY KEY (id);

ALTER TABLE links 
MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1; 