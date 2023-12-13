-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Dec 13. 23:38
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `lotto`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bot_cupons`
--

CREATE TABLE `bot_cupons` (
  `lotnum1` int(2) NOT NULL,
  `lotnum2` int(2) NOT NULL,
  `lotnum3` int(2) NOT NULL,
  `lotnum4` int(2) NOT NULL,
  `lotnum5` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `bot_cupons`
--

INSERT INTO `bot_cupons` (`lotnum1`, `lotnum2`, `lotnum3`, `lotnum4`, `lotnum5`) VALUES
(13, 19, 35, 1, 22),
(12, 26, 29, 21, 4),
(19, 26, 39, 22, 4),
(4, 27, 21, 25, 30),
(6, 28, 14, 27, 34),
(33, 7, 3, 35, 18),
(23, 36, 1, 28, 12),
(37, 14, 34, 11, 35),
(26, 14, 12, 27, 3),
(19, 1, 2, 24, 35),
(16, 9, 19, 38, 3),
(39, 11, 15, 8, 4),
(9, 24, 27, 5, 16),
(17, 5, 2, 13, 12),
(13, 34, 16, 4, 24),
(36, 5, 12, 39, 38),
(1, 30, 23, 27, 36),
(15, 7, 35, 23, 2),
(2, 34, 39, 11, 10),
(21, 26, 36, 27, 5),
(21, 35, 27, 3, 1),
(33, 22, 36, 29, 12),
(28, 33, 34, 22, 20),
(18, 32, 26, 20, 39),
(27, 32, 11, 9, 15),
(36, 4, 32, 24, 15),
(11, 36, 30, 39, 17),
(35, 22, 8, 3, 32),
(34, 28, 15, 35, 36),
(39, 20, 12, 27, 4),
(15, 13, 17, 19, 4),
(1, 33, 2, 23, 9),
(12, 38, 18, 21, 17),
(10, 36, 22, 5, 12),
(34, 4, 18, 29, 2),
(36, 8, 29, 28, 21),
(32, 24, 8, 39, 12),
(18, 3, 7, 17, 25),
(37, 16, 2, 27, 39),
(1, 14, 39, 9, 15),
(5, 33, 13, 6, 9),
(13, 26, 15, 18, 14),
(31, 1, 11, 35, 33),
(21, 33, 15, 38, 14),
(9, 13, 28, 39, 31),
(37, 33, 32, 31, 23),
(10, 38, 35, 32, 16),
(28, 38, 35, 14, 19),
(12, 33, 2, 14, 23),
(29, 16, 10, 24, 14),
(8, 6, 17, 32, 20),
(14, 27, 38, 1, 36),
(19, 33, 35, 38, 15),
(12, 25, 19, 9, 27),
(38, 1, 36, 32, 8),
(16, 17, 12, 22, 31),
(23, 8, 25, 18, 39),
(37, 26, 31, 9, 10),
(12, 31, 11, 30, 4),
(15, 36, 31, 7, 10),
(9, 13, 16, 8, 31),
(15, 37, 36, 12, 25),
(35, 11, 10, 9, 1),
(17, 15, 37, 27, 4),
(14, 37, 3, 22, 28),
(25, 20, 32, 16, 23),
(16, 33, 22, 26, 34),
(35, 24, 32, 39, 7),
(39, 5, 18, 36, 8),
(16, 12, 9, 25, 39),
(20, 36, 21, 19, 2),
(26, 31, 5, 8, 3),
(18, 29, 19, 17, 38),
(5, 22, 33, 25, 37),
(9, 16, 10, 1, 29),
(23, 14, 24, 34, 18),
(29, 31, 2, 20, 5),
(6, 25, 23, 24, 27),
(24, 35, 39, 3, 2),
(27, 3, 11, 23, 7),
(20, 11, 25, 23, 3),
(32, 18, 14, 11, 33),
(4, 22, 23, 7, 31),
(28, 6, 22, 29, 20),
(16, 6, 13, 39, 10),
(30, 16, 38, 36, 26),
(18, 16, 9, 15, 10),
(12, 31, 17, 28, 33),
(36, 22, 28, 31, 19),
(2, 14, 31, 36, 16),
(37, 6, 29, 19, 32),
(5, 21, 2, 19, 13),
(11, 25, 16, 8, 22),
(15, 33, 3, 27, 24),
(29, 22, 17, 28, 3),
(16, 27, 37, 18, 39),
(23, 36, 25, 24, 19),
(5, 33, 10, 25, 14),
(10, 35, 27, 7, 36),
(8, 28, 6, 7, 10),
(31, 34, 6, 9, 8),
(29, 4, 32, 12, 25),
(2, 9, 23, 4, 26),
(21, 8, 18, 39, 28),
(35, 29, 24, 8, 36),
(3, 13, 30, 11, 28),
(35, 38, 18, 13, 17),
(7, 23, 29, 17, 20),
(32, 22, 11, 31, 27),
(24, 12, 7, 29, 37),
(25, 9, 2, 19, 34),
(15, 11, 22, 37, 26),
(15, 16, 19, 32, 38),
(11, 12, 3, 20, 28),
(29, 8, 21, 27, 32),
(38, 35, 22, 16, 10),
(27, 25, 39, 5, 37),
(10, 36, 38, 39, 30),
(26, 22, 20, 8, 2),
(32, 24, 3, 23, 6),
(33, 9, 15, 24, 19),
(29, 15, 20, 34, 26),
(1, 28, 5, 9, 19),
(12, 21, 11, 13, 20),
(35, 8, 31, 15, 26),
(30, 4, 14, 37, 38),
(28, 19, 2, 1, 17),
(1, 16, 21, 9, 34),
(11, 32, 17, 21, 23),
(11, 9, 36, 20, 12),
(34, 4, 21, 8, 7),
(20, 2, 13, 31, 33),
(9, 19, 8, 14, 34),
(5, 24, 17, 37, 20),
(39, 6, 14, 32, 12),
(35, 30, 27, 36, 18),
(9, 12, 8, 39, 30),
(8, 29, 9, 22, 7),
(39, 23, 7, 9, 31),
(8, 37, 9, 27, 1),
(35, 34, 4, 16, 19),
(9, 6, 31, 27, 15),
(30, 25, 29, 37, 6),
(26, 14, 30, 4, 13),
(33, 19, 8, 31, 7),
(17, 20, 18, 36, 16),
(33, 28, 7, 34, 2),
(11, 34, 33, 17, 15),
(7, 14, 33, 18, 16),
(28, 27, 34, 12, 19),
(21, 39, 4, 27, 9),
(28, 38, 4, 21, 15),
(29, 33, 1, 4, 12),
(39, 30, 9, 26, 6),
(15, 9, 23, 17, 2),
(39, 27, 7, 37, 25),
(35, 7, 17, 36, 15),
(35, 23, 37, 5, 36),
(36, 34, 27, 18, 33),
(29, 27, 6, 25, 32),
(4, 35, 21, 29, 5),
(5, 19, 1, 10, 24),
(28, 18, 32, 4, 9),
(17, 36, 30, 28, 12),
(13, 9, 8, 14, 4),
(35, 19, 14, 27, 6),
(13, 9, 16, 4, 12),
(14, 26, 29, 21, 20),
(34, 3, 17, 26, 33),
(1, 22, 14, 17, 3),
(6, 2, 1, 30, 33),
(24, 4, 12, 5, 8),
(18, 15, 9, 32, 33),
(38, 13, 33, 30, 5),
(10, 31, 32, 36, 38),
(39, 29, 33, 20, 36),
(12, 11, 1, 23, 35),
(38, 15, 33, 29, 32),
(39, 15, 12, 1, 9),
(25, 5, 2, 3, 21),
(30, 11, 36, 32, 38),
(8, 19, 17, 23, 27),
(2, 38, 14, 28, 6),
(37, 24, 3, 9, 2),
(3, 2, 27, 13, 1),
(26, 8, 25, 18, 39),
(6, 10, 1, 5, 31),
(10, 23, 7, 24, 15),
(36, 15, 25, 32, 6),
(15, 1, 18, 37, 21),
(11, 3, 23, 24, 36),
(3, 10, 24, 22, 8),
(4, 37, 1, 26, 34),
(36, 7, 11, 2, 28),
(22, 21, 26, 8, 28),
(11, 32, 31, 21, 13),
(28, 24, 23, 30, 9),
(25, 22, 3, 13, 11),
(9, 10, 19, 31, 3),
(35, 36, 18, 17, 3),
(5, 35, 7, 4, 1),
(16, 19, 14, 33, 35),
(3, 33, 16, 9, 25),
(16, 38, 22, 15, 11),
(7, 11, 24, 19, 3),
(14, 35, 32, 22, 15),
(7, 27, 16, 1, 26),
(9, 38, 7, 6, 2),
(21, 28, 29, 16, 34),
(25, 36, 30, 31, 23),
(32, 11, 5, 30, 24),
(22, 28, 37, 32, 6),
(24, 15, 17, 22, 32),
(14, 6, 18, 24, 31),
(39, 35, 2, 21, 23),
(36, 2, 26, 12, 9),
(29, 32, 39, 9, 5),
(17, 9, 25, 6, 35);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `curen_week`
--

CREATE TABLE `curen_week` (
  `week` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `curen_week`
--

INSERT INTO `curen_week` (`week`) VALUES
(1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `load_flag`
--

CREATE TABLE `load_flag` (
  `loads` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `load_flag`
--

INSERT INTO `load_flag` (`loads`) VALUES
(1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `operator_coins`
--

CREATE TABLE `operator_coins` (
  `operatorcoins` int(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `operator_coins`
--

INSERT INTO `operator_coins` (`operatorcoins`) VALUES
(68760);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `operator_hits`
--

CREATE TABLE `operator_hits` (
  `lotnum1` int(2) NOT NULL,
  `lotnum2` int(2) NOT NULL,
  `lotnum3` int(2) NOT NULL,
  `lotnum4` int(2) NOT NULL,
  `lotnum5` int(2) NOT NULL,
  `lottresult` int(2) NOT NULL,
  `prize` int(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `operator_hits`
--

INSERT INTO `operator_hits` (`lotnum1`, `lotnum2`, `lotnum3`, `lotnum4`, `lotnum5`, `lottresult`, `prize`) VALUES
(36, 4, 32, 24, 15, 2, 3240),
(35, 22, 8, 3, 32, 2, 3240),
(32, 24, 8, 39, 12, 2, 3240),
(37, 33, 32, 31, 23, 3, 9720),
(37, 26, 31, 9, 10, 2, 3240),
(14, 37, 3, 22, 28, 2, 3240),
(35, 24, 32, 39, 7, 2, 3240),
(26, 31, 5, 8, 3, 2, 3240),
(24, 35, 39, 3, 2, 2, 3240),
(37, 6, 29, 19, 32, 2, 3240),
(15, 33, 3, 27, 24, 2, 3240),
(32, 22, 11, 31, 27, 2, 3240),
(24, 12, 7, 29, 37, 2, 3240),
(32, 24, 3, 23, 6, 3, 9720),
(5, 24, 17, 37, 20, 2, 3240),
(10, 31, 32, 36, 38, 2, 3240),
(37, 24, 3, 9, 2, 3, 9720),
(11, 3, 23, 24, 36, 2, 3240),
(3, 10, 24, 22, 8, 2, 3240),
(11, 32, 31, 21, 13, 2, 3240),
(9, 10, 19, 31, 3, 2, 3240),
(7, 11, 24, 19, 3, 2, 3240),
(32, 11, 5, 30, 24, 2, 3240),
(22, 28, 37, 32, 6, 2, 3240),
(24, 15, 17, 22, 32, 2, 3240),
(14, 6, 18, 24, 31, 2, 3240);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_coins`
--

CREATE TABLE `user_coins` (
  `usercoins` int(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `user_coins`
--

INSERT INTO `user_coins` (`usercoins`) VALUES
(10000);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_cupons`
--

CREATE TABLE `user_cupons` (
  `lotnum1` varchar(2) NOT NULL,
  `lotnum2` varchar(2) NOT NULL,
  `lotnum3` varchar(2) NOT NULL,
  `lotnum4` varchar(2) NOT NULL,
  `lotnum5` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_hits`
--

CREATE TABLE `user_hits` (
  `lotnum1` int(2) NOT NULL,
  `lotnum2` int(2) NOT NULL,
  `lotnum3` int(2) NOT NULL,
  `lotnum4` int(2) NOT NULL,
  `lotnum5` int(2) NOT NULL,
  `lottresult` int(2) NOT NULL,
  `prize` int(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `week_coins`
--

CREATE TABLE `week_coins` (
  `weekcoins` int(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `week_coins`
--

INSERT INTO `week_coins` (`weekcoins`) VALUES
(72000);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `winer_hits`
--

CREATE TABLE `winer_hits` (
  `twohits` int(24) NOT NULL,
  `threehits` int(24) NOT NULL,
  `foorhits` int(24) NOT NULL,
  `fivehits` int(24) NOT NULL,
  `totalhits` int(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `winer_hits`
--

INSERT INTO `winer_hits` (`twohits`, `threehits`, `foorhits`, `fivehits`, `totalhits`) VALUES
(3240, 9720, 12960, 38880, 64800);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `winer_num`
--

CREATE TABLE `winer_num` (
  `lotnum1` int(2) NOT NULL,
  `lotnum2` int(2) NOT NULL,
  `lotnum3` int(2) NOT NULL,
  `lotnum4` int(2) NOT NULL,
  `lotnum5` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `winer_num`
--

INSERT INTO `winer_num` (`lotnum1`, `lotnum2`, `lotnum3`, `lotnum4`, `lotnum5`) VALUES
(31, 24, 3, 37, 32);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
