DROP DATABASE IF EXISTS onibus;
CREATE DATABASE onibus CHARSET=UTF8 COLLATE utf8_general_ci;
USE onibus;

CREATE TABLE motorista(
    cpf VARCHAR(15) PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE telefone(
    cpf_motorista VARCHAR(15) NOT NULL,
    numero VARCHAR(15) NOT NULL,
    FOREIGN KEY (cpf_motorista) REFERENCES Motorista(cpf)
);

CREATE TABLE linha(
    id VARCHAR(10) PRIMARY KEY NOT NULL,
    descricao VARCHAR(100) NOT NULL
);

CREATE TABLE horario(
    id_linha VARCHAR(10) NOT NULL,
    hora TIME NOT NULL,
    FOREIGN KEY (id_linha) REFERENCES Linha(id)
);

CREATE TABLE dirige(
    cpf_motorista VARCHAR(15) NOT NULL,
    id_linha VARCHAR(10) NOT NULL,
    FOREIGN KEY (cpf_motorista) REFERENCES Motorista(cpf),
    FOREIGN KEY (id_linha) REFERENCES Linha(id)
);

show tables;

LOAD DATA INFILE 'G:/senai2024geral/bcd - banco de dados/Aula 09 - 07.05.2024/onibus/csv/motorista.csv'
INTO TABLE motorista
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'G:/senai2024geral/bcd - banco de dados/Aula 09 - 07.05.2024/onibus/csv/telefone.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'G:/senai2024geral/bcd - banco de dados/Aula 09 - 07.05.2024/onibus/csv/linha.csv'
INTO TABLE linha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'G:/senai2024geral/bcd - banco de dados/Aula 09 - 07.05.2024/onibus/csv/horario.csv'
INTO TABLE horario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'G:/senai2024geral/bcd - banco de dados/Aula 09 - 07.05.2024/onibus/csv/dirige.csv'
INTO TABLE dirige
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;