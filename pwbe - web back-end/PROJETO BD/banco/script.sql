-- DDL - Estrutura
drop database if exists Spotify_da_Shopee;
create database Spotify_da_Shopee;
use Spotify_da_Shopee;
create table Musicas(
    id integer primary key auto_increment,
    artista varchar(50) not null,
    musica varchar(50) not null,
    album date not null
);
describe Musicas;

-- DML - Popular com dados de teste
insert into Musicas(artista, musica, album)
values
("Drake","","Virginia Beach","For All the Dogs"),
("Drake","","Calling For You","For All the Dogs"),
("Drake","","Slime You Out","For All the Dogs"),
("Drake","","Wick Man","For All the Dogs Scary Hours Edition"),
("Drake","","God's plan","Scorpion"),
("Drake","","Hotline Bling","Views"),
("Drake","","Laugh Now Cry Later","Laugh Now Cry Later"),
("Drake","","Life Is Good","High Off Life"),
("Drake","","Another Late Night","For All the Dogs"),
("Drake","","Headlines","Take Care")

select * from Musicas;""