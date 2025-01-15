DROP DATABASE IF EXISTS MAPP_GAMING_DB;
CREATE DATABASE MAPP_GAMING_DB;
USE MAPP_GAMING_DB;
create table video_games (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  price decimal(10, 2) not null,
  release_date date not null,
  platform varchar(100) not null,
  category varchar(100) not null
);

create table user (
  id int unsigned primary key auto_increment not null,
  firstname varchar(100) not null,
  lastname varchar(100) not null,
  username varchar(100) not null,
  email varchar(100) not null,
  password varchar(100) not null,
  date_of_creation date not null,
  membership varchar(100) not null,
  is_admin boolean
);

create table profile (
  id int unsigned primary key auto_increment not null,
  information VARCHAR(255) not null,
  wallet VARCHAR(255) not null,
  basket VARCHAR(255) not null,
  wishlist VARCHAR(255) not null,
  comment VARCHAR(255) not null,
  user_management BOOLEAN,
  games_management BOOLEAN,
  articles_management BOOLEAN,
  activity_report BOOLEAN,
  user_id int unsigned not null,
  foreign key (user_id) references user(id)
);

create table rating (
  id int unsigned primary key auto_increment not null,
  user_id int unsigned not null,
  game_id int unsigned not null,
  rate int unsigned not null,
  foreign key (game_id) references video_games(id),
  foreign key (user_id) references user(id)
);

create table buy (
  id int unsigned primary key auto_increment not null,
  user_id int unsigned not null,
  game_id int unsigned not null,
  quantity_sold int unsigned not null,
  payment_date date not null,
  foreign key (game_id) references video_games(id),
  foreign key (user_id) references user(id)
);

insert into table profile (information, wallet, basket, wishlist, comment, user_management, games_management, articles_management, activity_report, user_id)
 values (
 'Maria, Marchal, MariaM, maria.marchal@gmail.com, password', 
 '23.98€', 
 '["Tomb raider", "Uncharted"]', 
 '["Les sims 4", "Mario kart"]', 
 'super jeu, très bon rapport qualité prix', 
 false, 
 false, 
 false, 
 false, 
 1);

  INSERT INTO USER (firstname, lastname, username, email, password, date_of_creation, membership, is_admin)
 VALUES 
  ('Admin', 'System', 'admin', 'admin@mappgaming.com', 'Adminpa2word', CURDATE(), 'Premium', true),
  ('Marvin', 'Dupont', 'MarvD', 'marvin.dupont@gmail.com', 'Password1', CURDATE(), 'Premium', false),
  ('Aurélia', 'Martin', 'AureliaM', 'aurelia.martin@gmail.com', 'Password2', CURDATE(), 'Premium', false);
  ('Pénélope', 'Teixeira', 'PennyT', 'penelope.teixeira@gmail.com', 'Password3', CURDATE(), 'Basic', false),