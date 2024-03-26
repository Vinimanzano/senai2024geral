DROP DATABASE IF EXISTS Veiculos;
CREATE DATABASE Veiculos CHARSET=UTF8 COLLATE utf8_general_ci;
USE Veiculos;

CREATE TABLE carro(
    placa VARCHAR(20) PRIMARY KEY NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    ano VARCHAR(50) NOT NULL
);

CREATE TABLE manutencao(
    id_manutencao INTEGER PRIMARY KEY AUTO_INCREMENT,
    inicio_manutencao DATE NOT NULL,
    fim_manutencao DATE NOT NULL,
    descricao TEXT NOT NULL
);

CREATE TABLE funcionario(
    matricula INTEGER PRIMARY KEY NOT NULL,
    funcionario VARCHAR(50) NOT NULL
);

CREATE TABLE telefone (
    matricula_funcionario VARCHAR(50) NOT NULL REFERENCES, 
    telefone VARCHAR(30) NOT NULL,
    telefone_secundario VARCHAR(30)
)


INSERT INTO carro (placa, modelo, marca, ano)
VALUES
("CBA-4403", "Sandeiro", "renaut", "2012"),
("CBC-4945", "Fiorino", "Fiat", "2007"),
("BEE-7735", "Saveiro", "VW", "2015"),
("BEE-7735", "Saveiro", "VW", "2015"),
("BBC-8504", "Palio", "Fiat", "2004"),
("DEA-7981", "Uno", "Fiat", "2005"),
("BEB-5885", "Gol", "VW", "2013"),
("EDB-2475", "Ranger", "Ford", "2005"),
("EDB-2475", "Ranger", "Ford", "2005"),
("BEB-5885", "Gol", "VW", "2013"),
("CBA-4403", "Sandeiro", "Renaut", "2012"),
("BBC-8504", "Palio", "Fiat", "2004"),
("CBC-4945", "Fiorino", "Fiat", "2007"),
("DEA-7981", "Uno", "Fiat", "2005");

INSERT INTO manutencao (inicio_manutencao, fim_manutencao, descricao)
VALUES
("24/08/2023", "31/08/2023", "Pane elétrica"),
("13/03/2023", "21/03/2023", "Farol queimado"),
("30/08/2023", "04/09/2023", "Troca de cavalos por poneis"),
("29/03/2023", "05/04/2023", "Troca de pneus dianteiros"),
("27/08/2023", "04/09/2023", "Rebimboca da parafuzeta"),
("25/02/2023", "04/03/2023", "Lanterna queimada"),
("16/05/2023", "25/05/2023", "Troca de pneus trazeiros"),
("05/06/2023", "10/06/2023", "Retrovizor quebrado"),
("15/07/2023", "19/07/2023", "Troca de Flúido de Freio"),
("02/09/2023", "07/09/2023", "Lanterna queimada"),
("14/04/2023", "24/04/2023", "Troca de pneus dianteiros"),
("30/04/2023", "07/05/2023", "Farol queimado"),
("25/06/2023", "02/07/2023", "Troca de óleo e revisão geral"),
("04/08/2023", "10/08/2023", "Problemas no cabo do acelerador");

INSERT INTO funcionario (matricula, funcionario)
VALUES
("48562", "Evandro Silva"),
("48542", "Jaqueline Teixeira"),
("48542", "Jaqueline Teixeira"),
("48522", "Keli Matos"),
("48522", "Keli Matos"),
("48482", "Osvaldo Oliveira"),
("48482", "Osvaldo Oliveira"),
("48482", "Osvaldo Oliveira"),
("48482", "Osvaldo Oliveira"),
("48482", "Osvaldo Oliveira"),
("48502", "Ursula Souza"),
("48502", "Ursula Souza"),
("48502", "Ursula Souza"),
("48502", "Ursula Souza");

INSERT INTO telefone (matricula_funcionario, telefone, telefone_secundario)
VALUES
("48562", "19-53315-2734"),
("48542", "19-23003-4864"),
("48542", "19-23003-4864"),
("48522", "19-06486-6449", "19-53266-7923"),
("48522", "19-06486-6449", "19-53266-7923"),
("48482", "19-72077-0521", "19-06078-6843"),
("48482", "19-72077-0521", "19-06078-6843"),
("48482", "19-72077-0521", "19-06078-6843"),
("48482", "19-72077-0521", "19-06078-6843"),
("48482", "19-72077-0521", "19-06078-6843"),
("48502", "19-72077-0521", "19-06078-6843"),
("48502", "19-64378-2404"),
("48502", "19-64378-2404"),
("48502", "19-64378-2404"),
("48502", "19-64378-2404");

SELECT * FROM carro;
SELECT * FROM manutencao;
SELECT * FROM funcionario;
SELECT * FROM telefone;

show tables;