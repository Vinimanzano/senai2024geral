-- Exclui um banco de dados se exister (Dev)(somente em ambiente de Desenvolvimento (Aula))
drop database if exists lojinha;

-- Criar um banco de dados
create database lojinha;

-- Acessar o banco de dados
use lojinha;

-- Criar uma tabela de Clientes
create table Clientes(
    id integer primary key not null auto_increment, -- integer = Inteiro
    cpf varchar(20) not null unique, -- varcha() = texto (tamanho)
    nome varchar(50) not null,
    sobrenome varchar (50) not null,
    nascimento date not null -- data = DATA ou datetime = tempo de data
);

-- Ver a estrutura da tabela
describe Clientes;

-- Ver todas as tablelas
show tables;

-- Excluir uma tablela
drop table Clientes;
