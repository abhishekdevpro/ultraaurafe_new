-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2024 at 10:09 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `submission1`
--

-- --------------------------------------------------------

--
-- Table structure for table `submission`
--

CREATE TABLE `submission` (
  `id` int(11) NOT NULL,
  `targetted` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`targetted`)),
  `implemented` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`implemented`)),
  `current_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `submission`
--

INSERT INTO `submission` (`id`, `targetted`, `implemented`, `current_date`) VALUES
(1, '{\"1\":\"5\",\"2\":\"3\",\"3\":\"2\",\"4\":\"5\",\"5\":\"2\"}', '{\"1\":\"2\",\"2\":\"3\",\"3\":\"2\",\"4\":\"0\",\"5\":\"0\"}', '2024-07-09 16:09:35'),
(2, '{\"1\":\"1\",\"2\":\"4\",\"3\":\"3\",\"4\":\"2\",\"5\":\"1\"}', '{\"1\":\"1\",\"2\":\"3\",\"3\":\"3\",\"4\":\"2\",\"5\":\"0\"}', '2024-07-09 16:27:39'),
(3, '{\"1\":\"2\",\"2\":\"2\",\"3\":\"2\",\"4\":\"2\",\"5\":\"2\"}', '{\"1\":\"2\",\"2\":\"2\",\"3\":\"2\",\"4\":\"2\",\"5\":\"2\"}', '2024-07-09 16:30:48'),
(54, '{\"1\":\"2\",\"2\":\"2\",\"3\":\"2\",\"4\":\"2\",\"5\":\"2\"}', '{\"1\":\"2\",\"2\":\"1\",\"3\":\"1\",\"4\":\"1\",\"5\":\"1\"}', '2024-07-20 20:03:32'),
(55, '{\"1\":\"2\",\"2\":\"2\",\"3\":\"2\",\"4\":\"2\",\"5\":\"2\"}', '{\"1\":\"2\",\"2\":\"1\",\"3\":\"1\",\"4\":\"1\",\"5\":\"1\"}', '2024-07-20 20:03:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `submission`
--
ALTER TABLE `submission`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `submission`
--
ALTER TABLE `submission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
