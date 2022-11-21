    CREATE DATABASE: war_app; 
    USE war_app;

    CREATE TABLE war (
        id integer PRIMARY KEY AUTO_INCREMENT NOT NULL,
        name VARCHAR(255) NOT NULL, 
        score integer(25) NOT NULL,
    )

    INSERT INTO war (name, score) values ("player1", 26);
    INSERT INTO war (name, score) values ("player2", 26);