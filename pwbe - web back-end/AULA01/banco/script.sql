-- DDL - Estrutura do banco de dados
drop database if exists lojinha;
create database lojinha;
use lojinha;
create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(25) not null unique,
    nome varchar(70) not null,
    sobrenome varchar(70) not null,
    nascimento date not null
);

describe Clientes;

-- DML - Popular com dados de teste
insert into Clientes(cpf, nome, sobrenome, nascimento) values 
('111.111.111-11', 'Joao', 'Silva', '1980-01-01'),
('222.222.222-22', 'Maria', 'Siqueira', '1990-02-02'),
('333.333.333-33', 'Igor', 'Henrique', '2000-03-03'),
('444.444.444-44', 'Vinícius', 'Manzano', '2010-04-04'),
('555.555.555-55', 'Carlos', 'Augusto', '2020-01-05');

select * from Clientes;



