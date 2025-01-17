DROP DATABASE IF EXISTS MAPP_GAMING_DB;
CREATE DATABASE MAPP_GAMING_DB;
USE MAPP_GAMING_DB;
create table videoGames (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  price decimal(10, 2) not null,
  release_date date not null,
  category varchar(100) not null
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
  is_admin boolean default false
);

create table profile (
  id int unsigned primary key auto_increment not null,
  information VARCHAR(255) not null,
  wallet decimal(10, 2) not null,
  basket VARCHAR(255) not null,
  wishlist VARCHAR(255) not null,
  comment VARCHAR(255) not null,
  user_management BOOLEAN default false,
  games_management BOOLEAN default false,
  articles_management BOOLEAN default false,
  activity_report BOOLEAN default false,
  user_id int unsigned not null,
  foreign key (user_id) references user(id)
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

INSERT INTO videoGames (title, price, release_date, category) 
VALUES 
('The Legend of Zelda: Breath of the Wild', 59.99, '2017-03-03', 'Action-Adventure'),
('Super Mario Odyssey', 59.99, '2017-10-27', 'Platformer'),
('The Witcher 3: Wild Hunt', 39.99, '2015-05-19', 'Action-RPG'),
('Red Dead Redemption 2', 59.99, '2018-10-26', 'Action-Adventure'),
('God of War', 49.99, '2022-01-14','Action-Adventure'),
('The Last of Us Part II', 59.99, '2020-06-19','Action-Adventure'),
('Halo Infinite', 59.99, '2021-12-08','FPS'),
('Forza Horizon 5', 59.99, '2021-11-09','Racing'),
('Cyberpunk 2077', 59.99, '2020-12-10','Action-RPG'),
('Death Stranding', 39.99, '2019-11-08', 'Action-Adventure'),
('Horizon Zero Dawn', 39.99, '2017-02-28','Action-Adventure'),
('Uncharted 4: A Thief''s End', 39.99, '2016-05-10','Action-Adventure'),
('Bloodborne', 39.99, '2015-03-24','Action-RPG'),
('Baldur''s Gate III', 59.99, '2020-10-06','Action-RPG'),
('DOOM Eternal', 59.99, '2020-03-20','FPS'),
('Resident Evil Village', 59.99, '2021-05-07','Survival Horror'),
('Demon''s Souls', 59.99, '2020-11-12','Action-RPG'),
('Assassin''s Creed Valhalla', 59.99, '2020-11-10','Action-Adventure'),
('Fallout 4', 29.99, '2015-11-10','Action-RPG'),
('The Elder Scrolls V: Skyrim', 39.99, '2011-11-11','Action-RPG'),
('Grand Theft Auto V', 19.99, '2013-09-17','Action-Adventure'),
('Minecraft', 29.99, '2011-11-18','Sandbox'),
('Starfield', 59.99, '2022-11-11','Action-RPG'),
('Valheim', 19.99, '2021-02-02','Survival'),
('Enshrouded', 29.99, '2024-01-24','Survival'),
('Diablo 4', 49.99, '2023-10-17','Action-RPG'),
('Call of Duty Black Ops 6', 69.99, '2024-10-25','FPS'),
('Helldivers 2', 39.99, '2024-02-08','Action-TPS'),
('Path of Exile 2', 26.99, '2024-12-06','Action-RPG'),
('God of War Ragnarök', 59.99, '2024-09-19', 'Action-Adventure'),
('Frostpunk', 29.99, '2018-04-24','Survival-City Builder'),
('Frostpunk 2', 44.99, '2024-09-20','Survival-City Builder'),
('Anno 1800', 59.99, '2019-04-16', 'City Builder'),
('Manor Lords', 39.99, '2024-04-26','City Builder'),
('Mount & Blade II Bannerlord', 49.99, '2022-10-25','Strategy-RPG'),
('Total War: Warhammer III', 59.99, '2022-02-17', 'Strategy'),
('Age of Empires IV', 39.99, '2021-10-28','Strategy'),
('Crusader Kings III', 49.99, '2020-09-01','Strategy'),
('Civilization VI', 59.99, '2016-10-21','Strategy'),
('Stellaris', 39.99, '2016-05-09','Strategy'),
('Europa Universalis IV', 39.99, '2013-08-13','Strategy'),
('Hearts of Iron IV', 39.99, '2016-06-06','Strategy'),
('Kingdom Come Deliverance', 29.99, '2018-02-13', 'Action-RPG'),
('Hogwarts Legacy', 59.99, '2023-02-10','RPG');

INSERT INTO platforms (id,supported_platforms) VALUES 
(1,'XBOX'),
(2,'PS'),
(3,'SWITCH'),
(4,'PC');

INSERT INTO user (firstname, lastname, username, email, password, date_of_creation, membership, is_admin)
values(
  'Maria', 'Marchal', 'MariaM', 'maria.marchal@gmail.com', 'password', '2022-01-14', 'Gold', true
);

INSERT INTO profile (information, wallet, basket, wishlist, comment, user_management, games_management, articles_management, activity_report, user_id)
values(
  'Maria, Marchal, MariaM, maria.marchal@gmail.com, password',
  23.98,
  'The Legend of Zelda: Breath of the Wild, Super Mario Odyssey',
  'The Witcher 3: Wild Hunt, Red Dead Redemption 2',
  'I love this game',
  true,
  true,
  true,
  true,
  1
);

