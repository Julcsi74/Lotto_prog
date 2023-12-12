-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Dec 12. 13:43
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
(0);

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
-- Tábla szerkezet ehhez a táblához `week_coins`
--

CREATE TABLE `week_coins` (
  `weekcoins` int(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `week_coins`
--

INSERT INTO `week_coins` (`weekcoins`) VALUES
(0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `winer_hits`
--

CREATE TABLE `winer_hits` (
  `twohits` int(24) NOT NULL,
  `threehits` int(24) NOT NULL,
  `foorhits` int(24) NOT NULL,
  `fivehits` int(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `winer_hits`
--

INSERT INTO `winer_hits` (`twohits`, `threehits`, `foorhits`, `fivehits`) VALUES
(0, 0, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
