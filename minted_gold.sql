-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2023 at 05:29 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

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
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL,
  `provider` varchar(191) NOT NULL,
  `providerAccountId` varchar(191) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `access_token` text DEFAULT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `token_type` varchar(191) DEFAULT NULL,
  `scope` varchar(191) DEFAULT NULL,
  `id_token` text DEFAULT NULL,
  `session_state` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `userId`, `type`, `provider`, `providerAccountId`, `refresh_token`, `access_token`, `expires_at`, `token_type`, `scope`, `id_token`, `session_state`) VALUES
('clq86radw0002o73kznzem0e3', 'clq86r91o0000o73kn4iylmmt', 'oauth', 'google', '109091377271885699490', NULL, 'ya29.a0AfB_byA1q_CKuFyYpev5g5CQOPnCzG9DfdtWT4luASipCJuBm6pBOFYNlJeq5mWi38ABr2eXt99pS1BmG1cM8zqgtMbJiEPrCjLlsZT_M9ahUGoDBu6Ui19hDcUMhus_Z1NWsSHF-LYm-cRhKzKqSDSiEjK8FirZnmYaCgYKAXASARMSFQHGX2MiTOUwRxiS5hIsVCZ9ejqKmA0170', 1702742461, 'Bearer', 'openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBhZDFmZWM3ODUwNGY0NDdiYWU2NWJjZjVhZmFlZGI2NWVlYzllODEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5MzU0MTQ2NDgyOTYtM3VlZjR0MmI4cWd2cnNnbnJ1ZDk0NDZ1b3M1NWhzODUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5MzU0MTQ2NDgyOTYtM3VlZjR0MmI4cWd2cnNnbnJ1ZDk0NDZ1b3M1NWhzODUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDkwOTEzNzcyNzE4ODU2OTk0OTAiLCJlbWFpbCI6Im90YWtob3JwZXRlckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IlNaZmpPTGJqUG1NaDVuWFQ3dHR4NlEiLCJuYW1lIjoiT3Rha2hvciBQZXRlciIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJa2ZMRDdxRGZKc25iV3gwSzZoQjY1bzVrRVBDdW1waHE1Z19zMTB5alBmbFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiT3Rha2hvciIsImZhbWlseV9uYW1lIjoiUGV0ZXIiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTcwMjczODg1NSwiZXhwIjoxNzAyNzQyNDU1fQ.o0fFTRE4qlmu--bjQ7nnCj-JxZ0ARgDq6dLe_nXsZlbVvlWG0BUYIIdQFZlBUM7sx0EzIKA0NL4ZaKy1QHWOR1HN1NsKJ6eXkqplRlBdeUxFWB0TSXrkOHZSgJcbEdeJhePnHdQnLOkNLBMEcfwZUUZB89A-CsCJGulIAf10OvU_MOsK-vyShdnhYK78f7yjWbTAAfP6_m3C9TOAY2Y0xsmBcygFkGssYT5scPQrDa1BoxSSpKPbOUln03eyRPAx2lvd1ThjsDHMzoxN6qjUVZZcWrW9O4UQeXw2csY9AMReYykQHqp2w6ZQX727DsrbJkjdJJSPKzM8TtLEGOf4Zw', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `provider` varchar(191) NOT NULL,
  `adminrole` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `buyer`
--

CREATE TABLE `buyer` (
  `id` int(11) NOT NULL,
  `firstName` varchar(191) NOT NULL,
  `lastName` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `contactNumber` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `isActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`id`, `name`, `description`) VALUES
(1, 'God', 'God mood'),
(2, 'root', 'root user'),
(3, 'Admin', 'Anyone with admin access');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `orderNumber` varchar(191) NOT NULL,
  `orderStatus` varchar(191) NOT NULL,
  `buyerId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `price` double NOT NULL,
  `adminName` varchar(191) NOT NULL,
  `category` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`image`)),
  `stock` varchar(191) NOT NULL,
  `adminId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `description`, `price`, `adminName`, `category`, `createdAt`, `updatedAt`, `image`, `stock`, `adminId`) VALUES
(5, 'Nisi ex est et sed o', 'Id aliquam perspici', 14, 'otakhorpeter@gmail.com', 'Admin', '2023-12-16 15:47:23.453', '2023-12-16 15:47:23.453', '[\"/productImg/1702740937304.jpeg\"]', '87', NULL),
(6, 'Sunt vero esse est ', 'Duis ea beatae cupid', 73, 'otakhorpeter@gmail.com', 'God', '2023-12-16 15:53:41.615', '2023-12-16 15:53:41.615', '[\"/productImg/1702742010776.jpeg\",\"/productImg/1702742017335.jpeg\"]', '67', NULL),
(7, 'Et nesciunt sit dol', 'Est nulla exercitati', 34, 'otakhorpeter@gmail.com', 'God', '2023-12-16 16:01:35.359', '2023-12-16 16:01:35.359', '[\"/productImg/1702742493055.jpeg\"]', '95', NULL),
(9, 'Deleniti sapiente in', 'Architecto nihil ad ', 96, 'otakhorpeter@gmail.com', 'root', '2023-12-16 16:02:23.178', '2023-12-16 16:02:23.178', '[\"/productImg/1702742539320.png\"]', '25', NULL),
(10, 'Voluptas saepe quia ', 'Expedita est commodi', 51, 'otakhorpeter@gmail.com', 'root', '2023-12-16 16:02:55.690', '2023-12-16 16:02:55.690', '[\"/productImg/1702742574205.jpg\"]', '76', NULL),
(11, 'Saepe veniam culpa', 'Accusamus quis et no', 81, 'otakhorpeter@gmail.com', 'Admin', '2023-12-16 16:03:38.842', '2023-12-16 16:03:38.842', '[\"/productImg/1702742599864.jpeg\"]', '23', NULL),
(12, 'Ipsa officia deleni', 'Obcaecati totam vero', 27, 'otakhorpeter@gmail.com', 'God', '2023-12-16 16:06:26.705', '2023-12-16 16:06:26.705', '[\"/productImg/1702742782100.png\"]', '75', NULL),
(13, 'Vitae ad aliquid aut', 'Excepturi porro illu', 11, 'otakhorpeter@gmail.com', 'God', '2023-12-16 16:07:22.837', '2023-12-16 16:07:22.837', '[\"/productImg/1702742839724.png\"]', '33', NULL),
(14, 'Enim blanditiis ea a', 'Laborum minus necess', 88, 'otakhorpeter@gmail.com', 'root', '2023-12-16 16:07:39.967', '2023-12-16 16:07:39.967', '[\"/productImg/1702742855360.png\"]', '61', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `id` varchar(191) NOT NULL,
  `sessionToken` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `expires` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `sessionToken`, `userId`, `expires`) VALUES
('clq86raz70004o73k5c7lpuad', '1f980cb8-0c81-4460-b945-d3305e54c63f', 'clq86r91o0000o73kn4iylmmt', '2024-01-15 15:01:07.792');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `emailVerified` datetime(3) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `role` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `emailVerified`, `image`, `role`) VALUES
('clq86r91o0000o73kn4iylmmt', 'Otakhor Peter', 'otakhorpeter@gmail.com', NULL, 'https://lh3.googleusercontent.com/a/ACg8ocIkfLD7qDfJsnbWx0K6hB65o5kEPCumphq5g_s10yjPflQ=s96-c', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `verificationtoken`
--

CREATE TABLE `verificationtoken` (
  `identifier` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `expires` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_admintorole`
--

CREATE TABLE `_admintorole` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_ordertoproduct`
--

CREATE TABLE `_ordertoproduct` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('f231edb9-571e-4598-9d78-d81013932e64', '895757892cb006a2c9c45b381a131f8f877a1a59ce9c4d3345d6b950fcdd23cb', '2023-12-16 14:55:56.349', '20231216145506_init', NULL, NULL, '2023-12-16 14:55:07.123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `_wishlistitem`
--

CREATE TABLE `_wishlistitem` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Account_provider_providerAccountId_key` (`provider`,`providerAccountId`),
  ADD KEY `Account_userId_fkey` (`userId`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Admin_username_key` (`username`),
  ADD UNIQUE KEY `Admin_email_key` (`email`),
  ADD KEY `Admin_adminrole_fkey` (`adminrole`);

--
-- Indexes for table `buyer`
--
ALTER TABLE `buyer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Buyer_email_key` (`email`);

--
-- Indexes for table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Categorie_name_key` (`name`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Order_buyerId_fkey` (`buyerId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Product_adminName_fkey` (`adminName`),
  ADD KEY `Product_categorie_fkey` (`category`),
  ADD KEY `Product_adminId_fkey` (`adminId`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Role_name_key` (`name`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Session_sessionToken_key` (`sessionToken`),
  ADD KEY `Session_userId_fkey` (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `verificationtoken`
--
ALTER TABLE `verificationtoken`
  ADD UNIQUE KEY `VerificationToken_token_key` (`token`),
  ADD UNIQUE KEY `VerificationToken_identifier_token_key` (`identifier`,`token`);

--
-- Indexes for table `_admintorole`
--
ALTER TABLE `_admintorole`
  ADD UNIQUE KEY `_admintorole_AB_unique` (`A`,`B`),
  ADD KEY `_admintorole_B_index` (`B`);

--
-- Indexes for table `_ordertoproduct`
--
ALTER TABLE `_ordertoproduct`
  ADD UNIQUE KEY `_ordertoproduct_AB_unique` (`A`,`B`),
  ADD KEY `_ordertoproduct_B_index` (`B`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_wishlistitem`
--
ALTER TABLE `_wishlistitem`
  ADD UNIQUE KEY `_wishlistitem_AB_unique` (`A`,`B`),
  ADD KEY `_wishlistitem_B_index` (`B`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `buyer`
--
ALTER TABLE `buyer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `Admin_adminrole_fkey` FOREIGN KEY (`adminrole`) REFERENCES `role` (`name`) ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `Order_buyerId_fkey` FOREIGN KEY (`buyerId`) REFERENCES `buyer` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `Product_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `admin` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Product_adminName_fkey` FOREIGN KEY (`adminName`) REFERENCES `user` (`email`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Product_categorie_fkey` FOREIGN KEY (`category`) REFERENCES `categorie` (`name`) ON UPDATE CASCADE;

--
-- Constraints for table `session`
--
ALTER TABLE `session`
  ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `_admintorole`
--
ALTER TABLE `_admintorole`
  ADD CONSTRAINT `_admintorole_A_fkey` FOREIGN KEY (`A`) REFERENCES `admin` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_admintorole_B_fkey` FOREIGN KEY (`B`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `_ordertoproduct`
--
ALTER TABLE `_ordertoproduct`
  ADD CONSTRAINT `_ordertoproduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_ordertoproduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `_wishlistitem`
--
ALTER TABLE `_wishlistitem`
  ADD CONSTRAINT `_wishlistitem_A_fkey` FOREIGN KEY (`A`) REFERENCES `buyer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_wishlistitem_B_fkey` FOREIGN KEY (`B`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
