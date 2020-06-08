-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июн 08 2020 г., 11:31
-- Версия сервера: 8.0.18
-- Версия PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `superheroes`
--

-- --------------------------------------------------------

--
-- Структура таблицы `heroes`
--

CREATE TABLE `heroes` (
  `id` int(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `real_name` varchar(255) NOT NULL,
  `origin_description` varchar(255) NOT NULL,
  `superpowers` varchar(255) NOT NULL,
  `catch_phase` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `heroes`
--

INSERT INTO `heroes` (`id`, `nickname`, `real_name`, `origin_description`, `superpowers`, `catch_phase`, `images`) VALUES
(1, 'Spiderman', 'Piter Parker', 'He was bitten a radioactive spider.', 'He can shoot cobwebs from his hands and climb walls.', 'Then you know why we can\'t be together.', 'back/images/spiderman.png'),
(2, 'Superman', 'Clark Kent', 'Superman is the last surviving inhabitant of the planet Krypton, who hit the baby on Earth. Feeding on the power of the Sun, brighter than the star of his home planet, he acquired superhuman abilities. Superman fights the evil that threatens the universe.', 'Superman is very strong. He can shoot laser from eyes and fly', 'Look, up in the sky, it is a bird, it is a plane, it is Superman', 'back/images/superman.jpg'),
(3, 'Catwoman', 'Selina Kyle', 'Miu', 'Miu', 'Mrr', 'back/images/catwoman.jpg'),
(5, 'Batman', 'Bruce Waine', 'batman', 'Batman', 'Where is detonator?', 'back/images/batman.jpg'),
(31, 'Wolverine', 'Logan', 'Wolverine', 'Regeneration, blades in hands', 'All right gents! Im here', 'back/images/wolverine.jpg'),
(32, 'Deadpool', 'Wade Winston Wilson', 'Deadpool was subjected to experiments on the \"Weapon X\" program. After scientists tried to heal his cancer by instilling regenerative ability in his cells, Deadpool remained disfigured and mentally unstable.', 'Regeneration', 'Deadpool', 'back/images/deadpool.jpg'),
(33, 'Nadai', 'Евгений Тюпа', 'Молодой парень из Запорожья ищет работу на позицию frontend/backend разработчика', 'Хороший музыкальный вкус', 'Случайности не случайны', 'back/images/mohawks.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `heroes`
--
ALTER TABLE `heroes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nickname` (`nickname`),
  ADD UNIQUE KEY `real_name` (`real_name`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `heroes`
--
ALTER TABLE `heroes`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
