-- SQL do banco de dados de Inventários com apenas uma tabela
DROP DATABASE IF EXISTS inventario;
CREATE DATABASE inventario CHARSET=UTF8 COLLATE utf8_general_ci;
USE inventario;
-- DDL Criação da estrutura da tabela
CREATE TABLE item(
    id varchar(5) not null primary key,
    nome varchar(50) not null,
    descricao text,
    valor decimal(10,2) not null,
);
-- DML Popular a tabela com dados de teste
INSERT INTO item VALUES
('001','Mesa','Mesa de escritório',100.00),
('002','Computador','Desktop DEL i5, 8GB RAM, SSD 500GB',2200.00),
('003','Cadeira','Cadeira giratória de escritório',500.00),
('004','Longarina','Longarina de três cadeiras',450.00),
('005','Prateleira','Prateleira de vidro',2500.00),
('006','Prateleira','Prateleira de Madeira',1600.00);

SELECT * FROM item;