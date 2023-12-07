-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2023 at 02:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `minted_gold`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `price` double NOT NULL,
  `adminUsername` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` date NOT NULL DEFAULT current_timestamp(),
  `image` varchar(191) NOT NULL,
  `stock` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `description`, `price`, `adminUsername`, `createdAt`, `updatedAt`, `image`, `stock`) VALUES
(1, 'product', 'product product product product product product product product product product product product product product product product product product product product product product product product', 4, 'admin', '2023-12-07 11:18:06.000', '2023-12-07', '', '444'),
(2, 'product', 'product', 33.44, 'admin', '2023-12-07 11:18:06.000', '2023-12-07', '', '343'),
(3, 'product 3 it is all good', 'product 1', 345, 'admin1', '2023-12-07 11:18:06.000', '2023-12-07', '', '441'),
(6, 'product', 'product 6 product 6 product 6 product 6 product 6 product 6 product 6 product 6 product 6 product 6 product 6 product 6', 12, 'admin', '2023-12-07 11:18:06.000', '2023-12-07', '', '32'),
(7, 'product 1', 'product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 product 1 p', 45, 'admin1', '2023-12-07 11:18:06.000', '2023-12-07', '', '200');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Product_adminUsername_fkey` (`adminUsername`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `Product_adminUsername_fkey` FOREIGN KEY (`adminUsername`) REFERENCES `admin` (`username`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
