-- SQL do banco de dados de Inventários com apenas uma tabela
DROP DATABASE IF EXISTS borracharia;
CREATE DATABASE borracharia CHARSET=UTF8 COLLATE utf8_general_ci;
USE borracharia;
-- DDL Criação da estrutura da tabela
CREATE TABLE produtos(
    id varchar(5) not null primary key,
    nome varchar(50) not null,
    descricao text,
    valor decimal(10,2) not null
);
-- DML Popular a tabela com dados de teste
INSERT INTO produtos VALUES
('001','Pneu','Aro 20',100.00),
('002','Oleo','Óleo sintético',90.00),
('003','Oleo','Óleo mineral',150.00);

CREATE TABLE fornecedores(
    id varchar(5) not null primary key,
    nome varchar(50) not null,
    descricao text,
    valor decimal(10,2) not null
);
-- DML Popular a tabela com dados de teste
INSERT INTO fornecedores VALUES
('001','Bosch','Oleo para motor',500.00),
('002','Denso Corporation','Pneus',90.00),
('003','Michelin','Peças em Geral',300.00);

CREATE TABLE clientes(
    id varchar(8) not null primary key,
    nome varchar(100) not null
);
-- DML Popular a tabela com dados de teste
INSERT INTO clientes VALUES
('001','Igor'),
('002','John'),
('003','Joaquim'),
('004','joao'),
('005','Carlos'),
('006','Lucas');

SELECT * FROM produtos;
SELECT * FROM fornecedores;
SELECT * FROM clientes;