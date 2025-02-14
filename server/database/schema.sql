-- SQLBook: Code
create table videoGames (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  price decimal(10, 2) not null,
  release_date date not null,
  category varchar(100) not null,
  image1 varchar(255) not null,
  image2 varchar(255) not null,
  image3 varchar(255) not null,
  image4 varchar(255) not null,
  image5 varchar(255) not null,
  description TEXT not null,
  is_upcoming TINYINT(1) DEFAULT 0,
  is_preorder TINYINT(1) DEFAULT 0,
  views int unsigned DEFAULT 0
);

create table user (
  id int unsigned primary key auto_increment not null,
  firstname varchar(100) null,
  lastname varchar(100) null,
  username varchar(100) not null,
  email varchar(100) not null unique,
  password varchar(100) not null,
  date_of_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
  membership varchar(100) DEFAULT "Standard",
  is_admin BOOLEAN DEFAULT false
);

create table profile (
  id int unsigned primary key auto_increment not null,
  information VARCHAR(255) not null,
  wallet decimal(10, 2) not null,
  basket VARCHAR(255) not null,
  -- wishlist VARCHAR(255) not null,
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

create table platforms(
  id int unsigned primary key auto_increment not null,
  supported_platforms varchar(255) not null
);

create table game_platforms(
  id int unsigned primary key not null,
  game_id int unsigned not null,
  platform_id int unsigned not null,
  foreign key (game_id) references videoGames(id),
  foreign key (platform_id) references platforms(id)
);

create table wishlist(
  id int unsigned primary key auto_increment not null,
  profile_id int unsigned not null,
  game_id int unsigned not null,
  foreign key (profile_id) references profile(id),
  foreign key (game_id) references videoGames(id)
);

 INSERT INTO videoGames (title, price, release_date, category, image1, image2, image3, image4, image5, description, is_upcoming, is_preorder, views) 
VALUES 
(
"Tomb Raider Definitive Edition", 
19.99, 
"2014-01-28", 
"Action-Adventure", 
"http://localhost:3000/src/assets/images/tombraider.jpeg",
"http://localhost:3000/src/assets/images/tombraider2.png",
"http://localhost:3000/src/assets/images/tombraider3.jpg",
"http://localhost:3000/src/assets/images/tombraider4.png",
"http://localhost:3000/src/assets/images/tombraider5.webp","L'aventure qui force la jeune et inexpérimentée Lara Croft à devenir une survivanteendurcie a été remaniée pour les consoles nouvelle génération. Vous y retrouverez une Lara incroyablement détaillée et un environnement quiressemble à s'y méprendre au monde réel. Lara doit endurer des combats intenses, personnaliser ses armes et son équipement pour survivre à sapremière aventure et découvrir le secret mortel de l'île. La Definitive Edition du jeu d'action-aventure acclamé par la critique inclut descontenus bonus et regroupe tous les packs de contenu téléchargeable additionnels.",
1,
0,
2870),

("The Legend of Zelda: Breath of the Wild", 
59.99, 
"2017-03-03", 
"Action-Adventure",
 "http://localhost:3000/src/assets/images/zelda1.png",
 "http://localhost:3000/src/assets/images/zelda2.webp",
 "http://localhost:3000/src/assets/images/zelda3.jpg",
 "http://localhost:3000/src/assets/images/zelda4.webp",
 "http://localhost:3000/src/assets/images/zelda5.jpg",
 "Explorez un vaste monde ouvert rempli de mystères, d'énigmes et de dangers dans The Legend of Zelda: Breath of the Wild. Incarnez Link et partez à la recherche de la princesse Zelda pour affronter le maléfique Ganon. Découvrez des paysages variés, résolvez des sanctuaires et utilisez des pouvoirs spéciaux pour surmonter les défis.",
 0,
 1,
 3640),

("Super Mario Odyssey", 
59.99, 
"2017-10-27", 
"Platformer",
 "http://localhost:3000/src/assets/images/mario1.jpg",
 "http://localhost:3000/src/assets/images/mario2.jpg",
 "http://localhost:3000/src/assets/images/mario3.jpg",
 "http://localhost:3000/src/assets/images/mario4.webp",
 "http://localhost:3000/src/assets/images/mario5.webp",
 "Accompagnez Mario dans une aventure épique à travers divers royaumes pour sauver la princesse Peach de Bowser. Découvrez de nouveaux pouvoirs avec Cappy, voyagez à travers des mondes magnifiques et collectez des lunes pour alimenter votre vaisseau, l'Odyssée.",
 0,
 0,
 4740),

("The Witcher 3: Wild Hunt", 
39.99, 
"2015-05-19", 
"Action-RPG",
 "http://localhost:3000/src/assets/images/witcher1.jpg",
 "http://localhost:3000/src/assets/images/witcher2.avif",
 "http://localhost:3000/src/assets/images/witcher3.avif",
 "http://localhost:3000/src/assets/images/witcher4.webp",
 "http://localhost:3000/src/assets/images/witcher5.jpg",
 "Incarnez Geralt de Riv, un chasseur de monstres légendaire dans un monde riche et ouvert, rempli de quêtes et de mystères. Explorez des contrées fascinantes, combattez des créatures mythiques et prenez des décisions qui influenceront le destin de nombreux personnages.",
 0,
 1,
 3920),

("Red Dead Redemption 2", 
59.99, 
"2018-10-26", 
"Action-Adventure",
 "http://localhost:3000/src/assets/images/rdr1.avif",
 "http://localhost:3000/src/assets/images/rdr2.jpg",
 "http://localhost:3000/src/assets/images/rdr3.jpg",
 "http://localhost:3000/src/assets/images/rdr4.jpg",
 "http://localhost:3000/src/assets/images/rdr5.jpg",
 "Plongez dans l'Ouest sauvage avec Arthur Morgan et la bande de Van der Linde, entre hors-la-loi et survie. Faites face à des dilemmes moraux, explorez un monde détaillé et interactif, et construisez votre propre légende dans ce western épique signé Rockstar Games.",
 1,
 1,
 2538),

("God of War", 
49.99, 
"2022-01-14", 
"Action-Adventure",
 "http://localhost:3000/src/assets/images/gow1.jpg",
 "http://localhost:3000/src/assets/images/gow2.jpg",
 "http://localhost:3000/src/assets/images/gow3.webp",
 "http://localhost:3000/src/assets/images/gow4.webp",
 "http://localhost:3000/src/assets/images/gow5.webp",
 "Kratos et son fils Atreus explorent la mythologie nordique dans une aventure riche en émotions et en combats épiques. Découvrez un gameplay innovant avec des affrontements brutaux, une narration poignante et une immersion totale dans un monde inspiré des mythes scandinaves.",
 1,
 0,
 1928),

("The Last of Us Part II", 
59.99, 
"2020-06-19", 
"Action-Adventure",
"http://localhost:3000/src/assets/images/tlou_1.avif",
"http://localhost:3000/src/assets/images/tlou_2.jpg",
"http://localhost:3000/src/assets/images/tlou_3.jpg",
"http://localhost:3000/src/assets/images/tlou_4.jpeg",
"http://localhost:3000/src/assets/images/tlou_5.webp",
"Dans cette suite acclamée de The Last of Us, suivez Ellie alors qu'elle entame une quête de vengeance brutale contre ceux qui ont bouleversé sa vie. Explorez un monde post-apocalyptique luxuriant mais dangereux, affrontez des infectés et des survivants hostiles, et découvrez une narration poignante où chaque choix a des conséquences. Le jeu propose une immersion totale avec des graphismes incroyables et une bande-son inoubliable.",
0,
0,
4140),

("Halo Infinite", 
59.99, 
"2021-12-08", 
"FPS",
"http://localhost:3000/src/assets/images/halo1.jpg",
"http://localhost:3000/src/assets/images/halo2.avif",
"http://localhost:3000/src/assets/images/halo3.jpg",
"http://localhost:3000/src/assets/images/halo4.jpg",
"http://localhost:3000/src/assets/images/halo5.webp",
"Reprenez le rôle de Master Chief et explorez le plus vaste monde ouvert jamais créé dans l’univers de Halo. Halo Infinite propose une campagne solo intense et un mode multijoueur en free-to-play bourré d’action. Combattez les forces du Banished, utilisez des gadgets inédits comme le grappin, et plongez dans un scénario captivant qui remet le destin de l'humanité entre vos mains.",
0,
0,
2850),

("Forza Horizon 5", 
59.99, 
"2021-11-09", 
"Racing",
"http://localhost:3000/src/assets/images/forza1.jpeg",
"http://localhost:3000/src/assets/images/forza2.jpg",
"http://localhost:3000/src/assets/images/forza3.jpg",
"http://localhost:3000/src/assets/images/forza4.jpg",
"http://localhost:3000/src/assets/images/forza5.jpg",
"Découvrez le Mexique dans le plus grand et le plus varié des mondes ouverts de la série Forza Horizon. Conduisez une sélection impressionnante de véhicules dans des environnements dynamiques où le climat, les tempêtes de sable et les saisons influencent votre expérience de conduite. Participez à des courses effrénées, personnalisez vos voitures et profitez d’un mode multijoueur ultra fluide.",
0,
0,
1320),

("Cyberpunk 2077", 
59.99, 
"2020-12-10", 
"Action-RPG",
"http://localhost:3000/src/assets/images/cyberpunk1.webp",
"http://localhost:3000/src/assets/images/cyberpunk2.webp",
"http://localhost:3000/src/assets/images/cyberpunk3.webp",
"http://localhost:3000/src/assets/images/cyberpunk4.jpg",
"http://localhost:3000/src/assets/images/cyberpunk5.jpg",
"Plongez dans Night City, une métropole futuriste grouillante de vie et de dangers. Incarnez V, un mercenaire en quête d’immortalité grâce à un implant cybernétique révolutionnaire. Faites des choix qui façonnent votre histoire, améliorez votre personnage avec des implants cybernétiques, et explorez un monde ouvert incroyablement détaillé regorgeant de quêtes et d'opportunités.",
0,
0,
1980),

("Death Stranding", 
39.99, 
"2019-11-08", 
"Action-Adventure",
"http://localhost:3000/src/assets/images/deathstranding1.avif",
"http://localhost:3000/src/assets/images/deathstranding2.webp",
"http://localhost:3000/src/assets/images/deathstranding3.jpg",
"http://localhost:3000/src/assets/images/deathstranding4.jpg",
"http://localhost:3000/src/assets/images/deathstranding5.jpg",
"Dans un monde post-apocalyptique où l’humanité est au bord de l’extinction, incarnez Sam Porter Bridges et traversez des paysages désolés pour reconnecter les derniers bastions de la civilisation. Death Stranding offre une expérience unique mêlant exploration, gestion de ressources et une narration profonde sur le lien entre les êtres humains.",
0,
0,
960),

("Horizon Zero Dawn", 
39.99, 
"2017-02-28", 
"Action-Adventure",
"http://localhost:3000/src/assets/images/horizon1.jpg",
"http://localhost:3000/src/assets/images/horizon2.jpg",
"http://localhost:3000/src/assets/images/horizon3.jpg",
"http://localhost:3000/src/assets/images/horizon4.jpg",
"http://localhost:3000/src/assets/images/horizon5.jpg",
"Incarnez Aloy, une jeune chasseuse et archère évoluant dans un monde où d’étranges machines dominent la nature. Explorez un vaste monde ouvert, découvrez les mystères de l’ancien monde et combattez des créatures robotiques redoutables à l’aide d’armes et de pièges sophistiqués.",
0,
0,
1425),

("Uncharted 4: A Thief's End", 
39.99, 
"2016-05-10", 
"Action-Adventure",
"http://localhost:3000/src/assets/images/uncharted1.avif",
"http://localhost:3000/src/assets/images/uncharted2.jpg",
"http://localhost:3000/src/assets/images/uncharted3.jpg",
"http://localhost:3000/src/assets/images/uncharted4.jpg",
"http://localhost:3000/src/assets/images/uncharted5.jpg",
"Nathan Drake reprend du service pour une dernière aventure qui l’emmène à travers le monde à la recherche d’un trésor perdu. Uncharted 4 combine exploration, combats intenses et narration captivante pour offrir une expérience cinématographique inoubliable.",
0,
0,
1280),

("Bloodborne", 
39.99, 
"2015-03-24", 
"Action-RPG",
"http://localhost:3000/src/assets/images/bloodborne1.jpeg",
"http://localhost:3000/src/assets/images/bloodborne2.jpg",
"http://localhost:3000/src/assets/images/bloodborne3.webp",
"http://localhost:3000/src/assets/images/bloodborne4.avif",
"http://localhost:3000/src/assets/images/bloodborne5.jpg",
"Découvrez Yharnam, une ville sombre et maudite où des créatures cauchemardesques errent dans les rues. Bloodborne propose un gameplay exigeant, des combats rapides et viscéraux, et une ambiance gothique terrifiante inspirée des œuvres de Lovecraft.",
0,
0,
1500),

("Baldur's Gate III", 
59.99, 
"2020-10-06", 
"Action-RPG",
"http://localhost:3000/src/assets/images/baldursgate3_1.jpg",
"http://localhost:3000/src/assets/images/baldursgate3_2.jpg",
"http://localhost:3000/src/assets/images/baldursgate3_3.avif",
"http://localhost:3000/src/assets/images/baldursgate3_4.jpg",
"http://localhost:3000/src/assets/images/baldursgate3_5.avif",
"Plongez dans l'univers envoûtant de Faerûn, où le destin du monde repose entre vos mains. Inspiré de Donjons & Dragons, Baldur’s Gate III vous offre une aventure RPG riche en narration et en choix stratégiques. 
Partez à l’aventure avec des compagnons aux histoires complexes, affrontez des créatures terrifiantes et prenez des décisions qui changeront le cours de l’histoire. Avec un système de combat au tour par tour fidèle aux règles de D&D 5e, chaque affrontement est un véritable défi tactique.  
Forgez votre propre destin, influencez le monde grâce à vos dialogues et découvrez un scénario fascinant rempli de mystères et de quêtes secondaires immersives.",
0,
0,
2200),

("DOOM Eternal", 
59.99, 
"2020-03-20", 
"FPS",
"http://localhost:3000/src/assets/images/doom_1.jpg",
"http://localhost:3000/src/assets/images/doom_2.jpg",
"http://localhost:3000/src/assets/images/doom_3.png",
"http://localhost:3000/src/assets/images/doom_4.jpg",
"http://localhost:3000/src/assets/images/doom_5.jpeg",
"Incarnez le légendaire Doom Slayer et plongez dans une guerre brutale contre les forces démoniaques qui ont envahi la Terre. DOOM Eternal repousse les limites du FPS avec une action frénétique, des combats viscéraux et un arsenal ultra-puissant.
Exécutez vos ennemis avec des Glory Kills sanglants, utilisez votre grappin pour vous déplacer rapidement et maîtrisez la gestion des ressources en exploitant les points faibles des démons. Avec des niveaux gigantesques et un gameplay fluide en perpétuelle évolution, chaque seconde de combat est une montée d’adrénaline pure.",
0,
0,
1800),

("Resident Evil Village", 
59.99, 
"2021-05-07", 
"Survival Horror",
"http://localhost:3000/src/assets/images/re8_1.jpeg",
"http://localhost:3000/src/assets/images/re8_2.jpg",
"http://localhost:3000/src/assets/images/re8_3.jpg",
"http://localhost:3000/src/assets/images/re8_4.jpg",
"http://localhost:3000/src/assets/images/re8_5.jpg",
"Dans ce nouvel opus de la saga Resident Evil, incarnez Ethan Winters et plongez dans un village mystérieux aux allures gothiques, où chaque recoin cache une horreur insoupçonnée.
Affrontez des créatures cauchemardesques, dont la charismatique et redoutable Lady Dimitrescu, tout en tentant de percer les sombres secrets de cet endroit hanté.  
L’ambiance oppressante, les graphismes photoréalistes et le gameplay mélangeant action et horreur font de Resident Evil Village une expérience immersive et terrifiante.",
0,
0,
2550),

("Demon's Souls", 
59.99, 
"2020-11-12", 
"Action-RPG",
"http://localhost:3000/src/assets/images/demonssouls_1.webp",
"http://localhost:3000/src/assets/images/demonssouls_2.jpg",
"http://localhost:3000/src/assets/images/demonssouls_3.webp",
"http://localhost:3000/src/assets/images/demonssouls_4.jpg",
"http://localhost:3000/src/assets/images/demonssouls_5.webp",
"Plongez dans l’univers sombre et impitoyable de Boletaria dans ce remake époustouflant du légendaire Demon's Souls.  
Affrontez des boss colossaux, surmontez des ennemis redoutables et explorez des environnements envahis par les ténèbres, le tout dans une ambiance oppressante sublimée par des graphismes next-gen.  
Chaque combat est un test de patience et de précision, où la moindre erreur peut être fatale. Faites preuve de persévérance, maîtrisez le système de combat exigeant et devenez une légende dans ce royaume maudit.",
0,
0,
1400),

("Assassin's Creed Valhalla", 
59.99, 
"2020-11-10", 
"Action-Adventure",
"http://localhost:3000/src/assets/images/acvalhalla_1.avif",
"http://localhost:3000/src/assets/images/acvalhalla_2.webp",
"http://localhost:3000/src/assets/images/acvalhalla_3.jpg",
"http://localhost:3000/src/assets/images/acvalhalla_4.jpg",
"http://localhost:3000/src/assets/images/acvalhalla_5.avif",
"Incarnez Eivor, un chef viking intrépide, et partez à la conquête des terres anglaises au IXe siècle.  
Dirigez vos raids, bâtissez votre colonie et plongez dans une fresque historique épique où stratégie et combats sanglants se mêlent.  
Utilisez une large variété d’armes, personnalisez votre guerrier et prenez part à une intrigue mêlant mythologie nordique et conflits politiques.  
Avec un vaste monde ouvert regorgeant d’activités, de quêtes secondaires et de secrets à découvrir, Assassin's Creed Valhalla vous offre une aventure immersive et mémorable.",
0,
0,
2750),

("Fallout 4", 
29.99, 
"2015-11-10", 
"Action-RPG",
"http://localhost:3000/src/assets/images/fallout4_1.webp",
"http://localhost:3000/src/assets/images/fallout4_2.webp",
"http://localhost:3000/src/assets/images/fallout4_3.webp",
"http://localhost:3000/src/assets/images/fallout4_4.png",
"http://localhost:3000/src/assets/images/fallout4_5.webp",
"Bienvenue dans un monde dévasté par l’apocalypse nucléaire. En tant que seul survivant de l’Abri 111, explorez un univers hostile où chaque décision influence votre destinée.  
Affrontez des mutants, bâtissez des colonies et prenez part à un système de combat dynamique combinant action en temps réel et stratégie grâce au V.A.T.S.  
Avec un monde ouvert gigantesque, des factions rivales et d’innombrables quêtes, Fallout 4 vous plonge dans une aventure post-apocalyptique inoubliable.",
0,
0,
1600),

("The Elder Scrolls V: Skyrim", 
39.99, 
"2011-11-11", 
"Action-RPG",
"http://localhost:3000/src/assets/images/skyrim_1.jpg",
"http://localhost:3000/src/assets/images/skyrim_2.jpg",
"http://localhost:3000/src/assets/images/skyrim_3.webp",
"http://localhost:3000/src/assets/images/skyrim_4.jpg",
"http://localhost:3000/src/assets/images/skyrim_5.webp",
"Explorez le vaste continent de Bordeciel dans ce RPG légendaire signé Bethesda. 
Incarnez un Enfant de Dragon, un héros au destin unique, capable de maîtriser la puissance des cris draconiques.  
Avec une liberté totale, forgez votre propre aventure en rejoignant diverses factions, en explorant des ruines oubliées et en combattant des dragons titanesques.  
Skyrim vous offre un monde vivant, des centaines de quêtes et une profondeur de gameplay inégalée dans l’univers du jeu de rôle.",
0,
0,
1100),

("Grand Theft Auto V", 
19.99, 
"2013-09-17", 
"Action-Adventure",
"http://localhost:3000/src/assets/images/gta5_1.webp",
"http://localhost:3000/src/assets/images/gta5_2.jpg",
"http://localhost:3000/src/assets/images/gta5_3.jpg",
"http://localhost:3000/src/assets/images/gta5_4.webp",
"http://localhost:3000/src/assets/images/gta5_5.jpg",
"Plongez dans Los Santos, une ville vibrante et pleine de dangers, où trois criminels que tout oppose doivent unir leurs forces pour survivre.  
Avec une campagne solo captivante et un mode multijoueur en constante évolution, GTA V propose un monde ouvert gigantesque regorgeant d’activités, de braquages et de courses-poursuites effrénées.  
Que ce soit en explorant librement ou en participant à des missions, chaque instant est une aventure inoubliable dans l’univers du crime et de la corruption.",
0,
0,
4400),

("Minecraft", 
29.99, 
"2011-11-18", 
"Sandbox",
"http://localhost:3000/src/assets/images/minecraft_1.jpg",
"http://localhost:3000/src/assets/images/minecraft_2.jpeg",
"http://localhost:3000/src/assets/images/minecraft_3.avif",
"http://localhost:3000/src/assets/images/minecraft_4.jpg",
"http://localhost:3000/src/assets/images/minecraft_5.avif",
"Entrez dans un monde infini fait de blocs, où votre seule limite est votre imagination.  
Minecraft vous permet de bâtir, explorer et survivre en solo ou entre amis.  
Affrontez des créatures hostiles, minez des ressources rares et créez des constructions spectaculaires dans ce bac à sable culte.  
Avec ses innombrables mises à jour et sa communauté active, Minecraft est une expérience intemporelle, parfaite pour les aventuriers comme pour les bâtisseurs.",
0,
0,
5000),

("Starfield", 
59.99, 
"2022-11-11", 
"Action-RPG",
"http://localhost:3000/src/assets/images/starfield_1.jpg",
"http://localhost:3000/src/assets/images/starfield_2.jpeg",
"http://localhost:3000/src/assets/images/starfield_3.webp",
"http://localhost:3000/src/assets/images/starfield_4.png",
"http://localhost:3000/src/assets/images/starfield_5.jpg",
"Embarquez pour une odyssée interstellaire dans Starfield, le nouveau RPG de Bethesda.  
Explorez des planètes lointaines, construisez votre propre vaisseau et plongez dans une intrigue riche mêlant exploration spatiale et combats intenses.  
Avec une profondeur de personnalisation et un monde ouvert inédit, Starfield repousse les limites du genre RPG et vous offre un voyage inoubliable parmi les étoiles.",
0,
0,
800),

("Valheim", 
19.99, 
"2021-02-02", 
"Survival",
"http://localhost:3000/src/assets/images/valheim_1.jpg",
"http://localhost:3000/src/assets/images/valheim_2.jpg",
"http://localhost:3000/src/assets/images/valheim_3.webp",
"http://localhost:3000/src/assets/images/valheim_4.webp",
"http://localhost:3000/src/assets/images/valheim_5.webp",
"Inspiré de la mythologie nordique, Valheim vous plonge dans un monde ouvert brutal où survie et conquête sont de mise.  
Construisez votre base, fabriquez des armes puissantes et affrontez des boss légendaires en solo ou en coopération.  
Avec un système de construction innovant et une direction artistique unique, Valheim est un jeu de survie exigeant et addictif.",
0,
0,
600),

("Diablo 4", 
49.99, 
"2023-10-17", 
"Action-RPG",
"http://localhost:3000/src/assets/images/diablo4_1.avif",
"http://localhost:3000/src/assets/images/diablo4_2.webp",
"http://localhost:3000/src/assets/images/diablo4_3.jpg",
"http://localhost:3000/src/assets/images/diablo4_4.jpg",
"http://localhost:3000/src/assets/images/diablo4_5.avif",
"Le mal est de retour dans Diablo IV, le nouvel opus de la franchise culte de Blizzard.  
Choisissez votre classe, affrontez des hordes démoniaques et explorez un monde ouvert sombre et impitoyable.  
Avec un gameplay hack'n'slash raffiné, un mode multijoueur coopératif et une histoire captivante, Diablo IV est l'expérience ultime pour les amateurs d’action-RPG.",
0,
0,
1100),

("Call of Duty Black Ops 6", 
69.99, 
"2024-10-25", 
"FPS",
"http://localhost:3000/src/assets/images/codbo6_1.webp",
"http://localhost:3000/src/assets/images/codbo6_2.avif",
"http://localhost:3000/src/assets/images/codbo6_3.avif",
"http://localhost:3000/src/assets/images/codbo6_4.jpg",
"http://localhost:3000/src/assets/images/codbo6_5.jpg",
"Plongez dans une guerre secrète avec Call of Duty: Black Ops 6.  
Incarnez des agents d’élite, maîtrisez un arsenal moderne et plongez dans une campagne intense remplie de rebondissements.  
Le mode multijoueur et les combats nerveux garantissent une expérience FPS explosive, fidèle à l’ADN de la série Black Ops.",
1,
1,
4200),

("Frostpunk", 
29.99, 
"2018-04-24", 
"Survival-City Builder",
"http://localhost:3000/src/assets/images/frostpunk_1.jpeg",
"http://localhost:3000/src/assets/images/frostpunk_2.avif",
"http://localhost:3000/src/assets/images/frostpunk_3.jpg",
"http://localhost:3000/src/assets/images/frostpunk_4.jpg",
"http://localhost:3000/src/assets/images/frostpunk_5.webp",
"Frostpunk est un jeu de gestion et de survie où vous devez bâtir et diriger la dernière ville sur Terre dans un monde post-apocalyptique glacé. 
Prenez des décisions difficiles, imposez des lois et gérez les ressources pour assurer la survie de votre peuple face au froid extrême et aux crises humanitaires.",
0,
0,
900),

("Anno 1800", 
59.99, 
"2019-04-16", 
"City Builder",
"http://localhost:3000/src/assets/images/anno1800_1.jpeg",
"http://localhost:3000/src/assets/images/anno1800_2.webp",
"http://localhost:3000/src/assets/images/anno1800_3.jpg",
"http://localhost:3000/src/assets/images/anno1800_4.jpg",
"http://localhost:3000/src/assets/images/anno1800_5.png",
"Anno 1800 est un jeu de gestion et de construction de ville se déroulant à l’époque de la Révolution industrielle. 
Construisez un empire commercial prospère, gérez vos ressources et explorez de nouvelles technologies pour assurer la croissance de votre civilisation dans un monde dynamique et compétitif.",
0,
0,
1700),

("Manor Lords", 
39.99, 
"2024-04-26", 
"City Builder",
"http://localhost:3000/src/assets/images/manorlords_1.jpg",
"http://localhost:3000/src/assets/images/manorlords_2.jpg",
"http://localhost:3000/src/assets/images/manorlords_3.jpg",
"http://localhost:3000/src/assets/images/manorlords_4.jpg",
"http://localhost:3000/src/assets/images/manorlords_5.webp",
"Manor Lords est un jeu de gestion médiéval où vous incarnez un seigneur bâtissant son fief à partir de zéro. 
Gérez vos terres, développez votre économie et défendez votre territoire dans un monde ouvert réaliste inspiré du Moyen Âge.",
1,
1,
1200),

("Mount & Blade II Bannerlord", 
49.99, 
"2022-10-25", 
"Strategy-RPG",
"http://localhost:3000/src/assets/images/bannerlord_1.webp",
"http://localhost:3000/src/assets/images/bannerlord_2.jpg",
"http://localhost:3000/src/assets/images/bannerlord_3.jpg",
"http://localhost:3000/src/assets/images/bannerlord_4.jpg",
"http://localhost:3000/src/assets/images/bannerlord_5.jpg",
"Plongez dans l’univers de Calradia dans cette suite tant attendue. 
Mount & Blade II: Bannerlord vous permet de diriger une armée, de bâtir votre propre empire et de vous engager dans des batailles stratégiques en temps réel.",
0,
0,
700),

("Animal Crossing: New Horizons", 
59.99, 
"2020-03-20", 
"Simulation",
"http://localhost:3000/src/assets/images/animalcrossing_1.avif",
"http://localhost:3000/src/assets/images/animalcrossing_2.jpeg",
"http://localhost:3000/src/assets/images/animalcrossing_3.jpg",
"http://localhost:3000/src/assets/images/animalcrossing_4.jpg",
"http://localhost:3000/src/assets/images/animalcrossing_5.jpg",
"Dans *Animal Crossing: New Horizons*, vous prenez le rôle d'un villageois qui s'installe sur une île déserte. 
Construisez, personnalisez et interagissez avec vos voisins animaux dans un monde ouvert et relaxant. Le jeu favorise la créativité et la gestion de votre espace, tout en suivant le rythme des saisons.",
0,
0,
5000),

("FIFA 24", 
69.99, 
"2023-09-29", 
"Sports",
"http://localhost:3000/src/assets/images/fifa24_1.avif",
"http://localhost:3000/src/assets/images/fifa24_2.jpg",
"http://localhost:3000/src/assets/images/fifa24_3.webp",
"http://localhost:3000/src/assets/images/fifa24_4.jpg",
"http://localhost:3000/src/assets/images/fifa24_5.jpg",
"*FIFA 24* continue de dominer le genre des jeux de football avec une expérience encore plus réaliste. 
Profitez des dernières améliorations graphiques, des mécaniques de jeu affinées et d'un mode carrière où vous pouvez diriger votre équipe vers la gloire. Jouez en ligne avec vos amis ou affrontez des équipes du monde entier.",
0,
0,
6000),

("Mario Kart 8 Deluxe", 
59.99, 
"2017-04-28", 
"Racing",
"http://localhost:3000/src/assets/images/mariokart_1.jpg",
"http://localhost:3000/src/assets/images/mariokart_2.jpeg",
"http://localhost:3000/src/assets/images/mariokart_3.jpg",
"http://localhost:3000/src/assets/images/mariokart_4.jpg",
"http://localhost:3000/src/assets/images/mariokart_5.jpg",
"*Mario Kart 8 Deluxe* est un jeu de course rapide et coloré où les joueurs s'affrontent dans des courses endiablées sur des circuits créatifs. 
Avec des personnages emblématiques de l'univers Mario, le jeu propose des power-ups, des courses multijoueurs et des pistes inoubliables.",
0,
0,
6000),

("Super Smash Bros. Ultimate", 
59.99, 
"2018-12-07", 
"Fighting",
"http://localhost:3000/src/assets/images/smashbros_1.jpg",
"http://localhost:3000/src/assets/images/smashbros_2.avif",
"http://localhost:3000/src/assets/images/smashbros_3.jpg",
"http://localhost:3000/src/assets/images/smashbros_4.jpg",
"http://localhost:3000/src/assets/images/smashbros_5.jpg",
"*Super Smash Bros. Ultimate* est un jeu de combat où tous les personnages de Nintendo et de nombreuses franchises tierces se retrouvent dans une série de combats intenses. 
Avec des mécaniques de jeu faciles à apprendre mais difficiles à maîtriser, il est parfait pour jouer seul ou en groupe.",
0,
0,
4700),

("Hogwarts Legacy", 
59.99, 
"2023-02-10", 
"RPG",
"http://localhost:3000/src/assets/images/hogwartslegacy_1.webp",
"http://localhost:3000/src/assets/images/hogwartslegacy_2.avif",
"http://localhost:3000/src/assets/images/hogwartslegacy_3.avif",
"http://localhost:3000/src/assets/images/hogwartslegacy_4.png",
"http://localhost:3000/src/assets/images/hogwartslegacy_5.avif",
"Explorez l'univers magique de Poudlard et devenez un étudiant à la prestigieuse école de sorcellerie. 
Dans ce RPG en monde ouvert, vous pouvez choisir votre propre aventure, apprendre la magie, explorer des lieux iconiques et percer les secrets de l'univers d'Harry Potter.",
0,
0,
6000);

 INSERT INTO user (firstname, lastname, username, email, password, date_of_creation, membership, is_admin)
 VALUES 
  ('Admin', 'System', 'admin', 'admin@mappgaming.com', '$argon2id$v=19$m=65536,t=3,p=4$bTdUGynIQ17CSSQJADhGKQ$5W/fOBLdTkGx6t3U9noZkIPABMNveWQJZDi+pme+hGc', '2024-12-31', 'Premium', true),
  ('Marvin', 'Dupont', 'MarvD', 'marvin.dupont@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$nhq07fuIipoLX0/GSopWsA$zEi134CSDVvtHvC8yoQwtKwbVzHecly8+9ZOA0811ig', '2025-01-01', 'Premium', false),
  ('Aurélia', 'Martin', 'AureliaM', 'aurelia.martin@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$WIn1Abx0Q+6lN7h/dTVb4A$U2q6ZL7ntryVpMIV9bXyvghJkLZCe6RUY8ehaCUKfcQ', '2025-01-02', 'Premium', false),
  ('Pénélope', 'Teixeira', 'PennyT', 'penelope.teixeira@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$653qCkPsQJuByI4w8kuFCQ$NYKG+hZlr3TzV9LN4t+WihKnzLWLcFy95KtzCDMO2CI', '2025-01-03', 'Basic', false);

insert into profile (information, wallet, basket, comment, user_management, games_management, articles_management, activity_report, user_id)
 values (
 "Admin, System, admin, admin@mappgaming.com, Adminpa2word",
 23.98, 
 "Tomb raider Definitive Edition", 
--  "Tomb raider Definitive Edition", 
 "super jeu, très bon rapport qualité prix", 
 false, 
 false, 
 false, 
 false, 
 1);

 insert into wishlist (profile_id, game_id)
values 
(1, 3), -- Marvin ajoute "Super Mario Odyssey"
(1, 4), -- Marvin ajoute "The Witcher 3: Wild Hunt"
(1, 2), -- Aurélia ajoute "The Legend of Zelda: Breath of the Wild"
(1, 4), -- Aurélia ajoute "The Witcher 3: Wild Hunt"
(1, 1), -- Pénélope ajoute "Tomb Raider Definitive Edition"
(1, 5); -- Pénélope ajoute "Red Dead Redemption 2"

 INSERT INTO platforms (id, supported_platforms) VALUES 
(1,"XBOX"),
(2,"PS"),
(3,"SWITCH"),
(4,"PC");

INSERT INTO rating (rate, review, game_id, user_id) VALUES
(4, "super jeu, très bon jeu d'aventure" , 1, 1),
(2, "super jeu, très bon rapport qualité prix", 1, 2);

