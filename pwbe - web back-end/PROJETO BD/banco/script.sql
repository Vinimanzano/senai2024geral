-- DDL - Estrutura
drop database if exists Spotify_da_Shopee;
create database Spotify_da_Shopee;
use Spotify_da_Shopee;
create table Musicas(
    id integer primary key auto_increment,
    artista varchar(50) not null,
    musica varchar(100) not null unique,
    album varchar(100) not null
);
describe musicas;

-- DML - Popular com dados de teste
insert into Musicas(artista, musica, album)
values
("Drake","Virginia Beach","For All the Dogs"),
("Drake","Slime You Out","For All the Dogs"),
("Drake","Hotline Bling","Views"),
("Drake","Life Is Good","High Off Life"),
("Drake","Another Late Night","For All the Dogs"),
("Kansas","Carry on Wayward Son","Leftoverture"),
("Shaman","Fairy Tale","Ritual"),
("Metallica","Master of Puppets","Master of Puppets"),
("Avenged Sevenfold","Cosmic","Life Is but a Dream…"),
("Audioslave","Like a Stone","Audioslave");

select * from Musicas;