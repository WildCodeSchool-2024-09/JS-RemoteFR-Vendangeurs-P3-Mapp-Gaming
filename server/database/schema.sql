DROP DATABASE IF EXISTS MAPP_GAMING_DB;
CREATE DATABASE MAPP_GAMING_DB;
USE MAPP_GAMING_DB;

create table videoGames (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  price decimal(10, 2) not null,
  release_date date not null,
  platform varchar(100) not null,
  category varchar(100) not null,
  image1 varchar(255) not null,
  image2 varchar(255) not null,
  image3 varchar(255) not null,
  image4 varchar(255) not null,
  image5 varchar(255) not null,
  description TEXT not null
);

create table user (
  id int unsigned primary key auto_increment not null,
  firstname varchar(100) not null,
  lastname varchar(100) not null,
  username varchar(100) not null,
  email varchar(100) not null unique,
  password varchar(100) not null,
  date_of_creation date not null,
  membership varchar(100) not null,
  is_admin BOOLEAN DEFAULT false
);

create table profile (
  id int unsigned primary key auto_increment not null,
  information VARCHAR(255) not null,
  wallet decimal(10, 2) not null,
  basket VARCHAR(255) not null,
  wishlist VARCHAR(255) not null,
  comment VARCHAR(255) not null,
  user_management BOOLEAN DEFAULT false,
  games_management BOOLEAN DEFAULT false,
  articles_management BOOLEAN DEFAULT false,
  activity_report BOOLEAN DEFAULT false,
  user_id int unsigned not null,
  foreign key (user_id) references user(id) on delete cascade
);

create table rating (
  id int unsigned primary key auto_increment not null,
  rate int unsigned not null,
  review TEXT not null,
  game_id int unsigned not null,
  user_id int unsigned not null,
  foreign key (game_id) references videoGames(id),
  foreign key (user_id) references user(id)
);

create table buy (
  id int unsigned primary key auto_increment not null,
  quantity_sold int unsigned not null,
  payment_date date not null,
  game_id int unsigned not null,
  user_id int unsigned not null,
  foreign key (game_id) references videoGames(id),
  foreign key (user_id) references user(id)
);

create table trending (
  id int unsigned primary key auto_increment not null,
  viewes int unsigned not null
);

create table game_trending(
  id int unsigned primary key auto_increment not null,
  game_id int unsigned not null,
  trending_id int unsigned not null,
  foreign key (game_id) references videoGames(id),
  foreign key (trending_id) references trending(id)
);

create table preorder(
  id int unsigned primary key auto_increment not null,
  is_preorder boolean not null,
  title VARCHAR(255) not null,
  price decimal(10, 2) not null,
  release_date date not null,
  category varchar(100) not null,
  game_id int unsigned not null,
  foreign key (game_id) references videoGames(id)
);

create table upcoming(
  id int unsigned primary key auto_increment not null,
  upcoming_date date not null,
  title VARCHAR(255) not null,
  category varchar(100) not null,
  game_id int unsigned not null,
  foreign key (game_id) references videoGames(id)
);

create table platforms(
  id int unsigned primary key auto_increment not null,
  supported_platforms varchar(255) not null
);

create table game_platforms(
  id int primary key not null,
  game_id int unsigned not null,
  platform_id int unsigned not null,
  foreign key (game_id) references videoGames(id),
  foreign key (platform_id) references platforms(id)
);

 INSERT INTO USER (firstname, lastname, username, email, password, date_of_creation, membership, is_admin)
 VALUES 
  ('Admin', 'System', 'admin', 'admin@mappgaming.com', 'Adminpa2word', '2024-12-31', 'Premium', true),
  ('Marvin', 'Dupont', 'MarvD', 'marvin.dupont@gmail.com', 'Password1', '2025-01-01', 'Premium', false),
  ('Aurélia', 'Martin', 'AureliaM', 'aurelia.martin@gmail.com', 'Password2', '2025-01-02', 'Premium', false),
  ('Pénélope', 'Teixeira', 'PennyT', 'penelope.teixeira@gmail.com', 'Password3', '2025-01-03', 'Basic', false);

insert into profile (information, wallet, basket, wishlist, comment, user_management, games_management, articles_management, activity_report, user_id)
 values (
 'Admin, System, admin, admin@mappgaming.com, Adminpa2word', 
 23.98, 
 'Tomb raider Definitive Edition', 
 'Tomb raider Definitive Edition', 
 'super jeu, très bon rapport qualité prix', 
 false, 
 false, 
 false, 
 false, 
 1);

 INSERT INTO platforms (id,supported_platforms) VALUES 
(1,'XBOX'),
(2,'PS'),
(3,'SWITCH'),
(4,'PC');

 INSERT INTO videoGames (title, price, release_date, category, image1, image2, image3, image4, image5, description) 
VALUES 
('Tomb Raider Definitive Edition', 19.99, '2014-01-28', 'Action-Adventure', '../../assets/images/tombraider.jpeg','../../assets/images/tombraider2.png','../../assets/images/tombraider3.jpg','../../assets/images/tombraider4.png','../../assets/images/tombraider5.webp',"L'aventure qui force la jeune et inexpérimentée Lara Croft à devenir une survivante endurcie a été remaniée pour les consoles nouvelle génération. Vous y retrouverez une Lara incroyablement détaillée et un environnement qui ressemble à s'y méprendre au monde réel. Lara doit endurer des combats intenses, personnaliser ses armes et son équipement pour survivre à sa première aventure et découvrir le secret mortel de l'île. La Definitive Edition du jeu d'action-aventure acclamé par la critique inclut des contenus bonus et regroupe tous les packs de contenu téléchargeable additionnels.");
-- ('The Legend of Zelda: Breath of the Wild', 59.99, '2017-03-03', 'Nintendo Switch', 'Action-Adventure'),

-- ('Super Mario Odyssey', 59.99, '2017-10-27', 'Nintendo Switch', 'Platformer'),
-- ('The Witcher 3: Wild Hunt', 39.99, '2015-05-19', 'PC', 'Action-RPG'),
-- ('Red Dead Redemption 2', 59.99, '2018-10-26', 'PlayStation 4', 'Action-Adventure'),
-- ('God of War', 49.99, '2022-01-14', 'PC', 'Action-Adventure'),
-- ('The Last of Us Part II', 59.99, '2020-06-19', 'PlayStation 4', 'Action-Adventure'),
-- ('Halo Infinite', 59.99, '2021-12-08', 'Xbox Series X', 'FPS'),
-- ('Forza Horizon 5', 59.99, '2021-11-09', 'Xbox Series X', 'Racing'),
-- ('Cyberpunk 2077', 59.99, '2020-12-10', 'PC', 'Action-RPG'),
-- ('Death Stranding', 39.99, '2019-11-08', 'PlayStation 4', 'Action-Adventure'),
-- ('Horizon Zero Dawn', 39.99, '2017-02-28', 'PlayStation 4', 'Action-Adventure'),
-- ('Uncharted 4: A Thief''s End', 39.99, '2016-05-10', 'PlayStation 4', 'Action-Adventure'),
-- ('Bloodborne', 39.99, '2015-03-24', 'PlayStation 4', 'Action-RPG'),
-- ('Baldur''s Gate III', 59.99, '2020-10-06', 'PC', 'Action-RPG'),
-- ('DOOM Eternal', 59.99, '2020-03-20', 'PC', 'FPS'),
-- ('Resident Evil Village', 59.99, '2021-05-07', 'PlayStation 4', 'Survival Horror'),
-- ('Demon''s Souls', 59.99, '2020-11-12', 'PlayStation 5', 'Action-RPG'),
-- ('Assassin''s Creed Valhalla', 59.99, '2020-11-10', 'PlayStation 4', 'Action-Adventure'),
-- ('Fallout 4', 29.99, '2015-11-10', 'PC', 'Action-RPG'),
-- ('The Elder Scrolls V: Skyrim', 39.99, '2011-11-11', 'PC', 'Action-RPG'),
-- ('Grand Theft Auto V', 19.99, '2013-09-17', 'PC', 'Action-Adventure'),
-- ('Minecraft', 29.99, '2011-11-18', 'PC', 'Sandbox'),
-- ('Starfield', 59.99, '2022-11-11', 'PC', 'Action-RPG'),
-- ('Valheim', 19.99, '2021-02-02', 'PC', 'Survival'),
-- ('Enshrouded', 29.99, '2024-01-24', 'PC', 'Survival'),
-- ('Diablo 4', 49.99, '2023-10-17', 'PC', 'Action-RPG'),
-- ('Call of Duty Black Ops 6', 69.99, '2024-10-25', 'PC', 'FPS'),
-- ('Helldivers 2', 39.99, '2024-02-08', 'PC', 'Action-TPS'),
-- ('Path of Exile 2', 26.99, '2024-12-06', 'PC', 'Action-RPG'),
-- ('God of War Ragnarök', 59.99, '2024-09-19', 'PlayStation 5', 'Action-Adventure'),
-- ('Frostpunk', 29.99, '2018-04-24', 'PC', 'Survival-City Builder'),
-- ('Frostpunk 2', 44.99, '2024-09-20', 'PC', 'Survival-City Builder'),
-- ('Anno 1800', 59.99, '2019-04-16', 'PC', 'City Builder'),
-- ('Manor Lords', 39.99, '2024-04-26', 'PC', 'City Builder'),
-- ('Mount & Blade II Bannerlord', 49.99, '2022-10-25', 'PC', 'Strategy-RPG'),
-- ('Total War: Warhammer III', 59.99, '2022-02-17', 'PC', 'Strategy'),
-- ('Age of Empires IV', 39.99, '2021-10-28', 'PC', 'Strategy'),
-- ('Crusader Kings III', 49.99, '2020-09-01', 'PC', 'Strategy'),
-- ('Civilization VI', 59.99, '2016-10-21', 'PC', 'Strategy'),
-- ('Stellaris', 39.99, '2016-05-09', 'PC', 'Strategy'),
-- ('Europa Universalis IV', 39.99, '2013-08-13', 'PC', 'Strategy'),
-- ('Hearts of Iron IV', 39.99, '2016-06-06', 'PC', 'Strategy'),
-- ('Kingdom Come Deliverance', 29.99, '2018-02-13', 'PC', 'Action-RPG'),
-- ('Hogwarts Legacy', 59.99, '2023-02-10', 'PC', 'RPG');

