-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 14 2019 г., 01:19
-- Версия сервера: 5.6.34
-- Версия PHP: 7.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `catbook`
--

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE `books` (
  `id` int(4) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` double DEFAULT NULL,
  `shortdesc` varchar(400) DEFAULT NULL,
  `ord` int(3) DEFAULT NULL,
  `img` text,
  `genre` varchar(50) DEFAULT NULL,
  `author` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `books`
--

INSERT INTO `books` (`id`, `name`, `price`, `shortdesc`, `ord`, `img`, `genre`, `author`) VALUES
(1, 'Harry Potter 2 Azkaban ', 350, 'Harry Potter has been spending another dissatisfying summer with The Dursleys. ', 2, 'h1.jpg', 'fantasy', 'Joanne Rowling'),
(2, 'Harry Potter and Goblet Fire', 380, 'Harry Potter awakens from a nightmare wherein a man named Frank Bryce is killed after overhearing Lord Voldemort conspiring with Peter Pettigrew and another man. While Harry attends the Quidditch World ', 3, 'h2.jpg', 'fantasy', 'Joanne Rowling'),
(3, 'Captan America 2 - World War ', 600, 'Captain America Comics #1 — cover-dated March 1941[8] and on sale December 20, 1940,[9][10] a year before the attack on Pearl Harbor, but a full year into World War II — showed the protagonist punching Nazi leader Adolf Hitler; it sold nearly one million copies.', 4, 'a.jpg', 'comics', 'Marvel'),
(4, 'Batman begins -', 110, 'As a child, Bruce Wayne falls down into a dry well and is attacked by a swarm of bats, subsequently developing chiroptophobia (fear of bats). While watching an opera with his parents, Thomas and Martha, ', 5, 'b.jpg', 'comics', 'Robert Kane'),
(5, 'Batman forever 1', 160, 'In Gotham City, the crime fighter Batman defuses a hostage situation caused by a criminal known as Two-Face, the alter ego of the former district attorney Harvey Dent, but Two-Face escapes and remains at large. ', 6, 'bf.jpg', 'comics', 'Robert Kane');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `books`
--
ALTER TABLE `books`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
