-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 21, 2023 lúc 02:00 PM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `webnodejs`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accountadmins`
--

CREATE TABLE `accountadmins` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nameAdmin` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avtAdmin` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `accountadmins`
--

INSERT INTO `accountadmins` (`id`, `email`, `nameAdmin`, `password`, `avtAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'hoang@gmail.com', 'Hoang', '$2a$10$IIY/oNNcCjicVOGMAJthF.s/22laIyeiC.h4fJD4z9UYdfepYut3S', '/Images/hay.jpg', NULL, '2023-09-27 09:28:28'),
(13, 'long12345@gmail.com', 'hoanghip', '$2b$10$viqsvYZOERFizG3HMu4vCOPTn1nQWbWuFbTjiVwKLmp8t6xQrYhQy', '/images/hay.jpg', '2023-10-20 09:13:12', '2023-10-20 09:13:12'),
(15, 'long123456@gmail.com', 'hoanghip', '$2b$10$Zhasi0cgf0E53OpoOBXPsuFutR0OtrPZMGsKGrhs.W6sGiMuzRKIG', '/images/hay.jpg', '2023-10-20 09:17:50', '2023-10-20 09:17:50');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `imagesproducts`
--

CREATE TABLE `imagesproducts` (
  `id` int(11) NOT NULL,
  `idProduct` int(11) NOT NULL,
  `linkimages` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `imagesproducts`
--

INSERT INTO `imagesproducts` (`id`, `idProduct`, `linkimages`, `createdAt`, `updatedAt`) VALUES
(125, 88, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-17 23:58:37', '2023-10-17 23:58:37'),
(126, 88, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-17 23:58:37', '2023-10-17 23:58:37'),
(127, 88, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-17 23:58:37', '2023-10-17 23:58:37'),
(128, 88, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-17 23:58:37', '2023-10-17 23:58:37'),
(129, 89, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 00:02:42', '2023-10-18 00:02:42'),
(130, 89, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 00:02:42', '2023-10-18 00:02:42'),
(131, 89, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-18 00:02:42', '2023-10-18 00:02:42'),
(132, 89, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 00:02:42', '2023-10-18 00:02:42'),
(133, 90, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-18 00:03:50', '2023-10-18 00:03:50'),
(134, 90, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 00:03:50', '2023-10-18 00:03:50'),
(135, 90, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 00:03:50', '2023-10-18 00:03:50'),
(136, 90, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 00:03:50', '2023-10-18 00:03:50'),
(137, 91, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-18 00:08:23', '2023-10-18 00:08:23'),
(138, 91, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 00:08:23', '2023-10-18 00:08:23'),
(139, 91, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 00:08:23', '2023-10-18 00:08:23'),
(140, 91, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 00:08:23', '2023-10-18 00:08:23'),
(141, 92, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-18 00:09:26', '2023-10-18 00:09:26'),
(142, 92, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 00:09:26', '2023-10-18 00:09:26'),
(143, 92, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 00:09:26', '2023-10-18 00:09:26'),
(144, 92, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 00:09:26', '2023-10-18 00:09:26'),
(149, 94, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 06:50:22', '2023-10-18 06:50:22'),
(150, 94, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 06:50:22', '2023-10-18 06:50:22'),
(151, 94, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-18 06:50:22', '2023-10-18 06:50:22'),
(152, 94, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 06:50:22', '2023-10-18 06:50:22'),
(153, 95, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-18 06:53:15', '2023-10-18 06:53:15'),
(154, 95, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 06:53:15', '2023-10-18 06:53:15'),
(155, 95, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 06:53:15', '2023-10-18 06:53:15'),
(156, 95, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 06:53:15', '2023-10-18 06:53:15'),
(157, 96, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-18 13:12:20', '2023-10-18 13:12:20'),
(158, 96, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 13:12:20', '2023-10-18 13:12:20'),
(159, 96, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 13:12:20', '2023-10-18 13:12:20'),
(160, 96, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 13:12:20', '2023-10-18 13:12:20'),
(161, 97, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 13:13:18', '2023-10-18 13:13:18'),
(162, 97, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 13:13:18', '2023-10-18 13:13:18'),
(163, 97, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 13:13:18', '2023-10-18 13:13:18'),
(164, 97, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-18 13:13:18', '2023-10-18 13:13:18'),
(165, 98, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-18 13:14:21', '2023-10-18 13:14:21'),
(166, 98, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 13:14:21', '2023-10-18 13:14:21'),
(167, 98, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 13:14:21', '2023-10-18 13:14:21'),
(168, 98, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 13:14:21', '2023-10-18 13:14:21'),
(169, 99, '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-18 13:18:06', '2023-10-18 13:18:06'),
(170, 99, '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 13:18:06', '2023-10-18 13:18:06'),
(171, 99, '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 13:18:06', '2023-10-18 13:18:06'),
(172, 99, '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 13:18:06', '2023-10-18 13:18:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `titlePost` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `imagePost` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `titlePost`, `author`, `imagePost`, `category`, `tag`, `content`, `createdAt`, `updatedAt`, `slug`) VALUES
(4, 'ha long bien nho 44', 'Hoang', '/images/top-5-th-ng-hi-u-ng-h-nen-dung-dong-ho-nu-carnival-1.jpg', 'Tin giải trí', 'dsdsds', '<p>ãacc</p>', '2023-10-21 13:45:09', '2023-10-21 13:45:09', 'ha-long-bien-nho-44'),
(5, 'ha long bien nhơ 34', 'Hoang', '/images/1542333244-1958354366-smartwatch-ang-bung-phat-nh-ng-ng-h-c-v-n-ldquo-s-ng-kh-e-rdquo.jpg', 'Tin giải trí', 'quảng cáo', 'âsasa', '2023-10-21 13:49:58', '2023-10-21 13:49:58', 'ha-long-bien-nho-34'),
(6, 'ha long bien nho 44', 'hoang', '/images/top-5-th-ng-hi-u-ng-h-nen-dung-dong-ho-nu-carnival-1.jpg', 'Tin giải trí', 'hang', '<p>hay quá đi</p>', '2023-10-21 13:52:24', '2023-10-31 09:05:46', 'ha-long-bien-nho-44'),
(7, 'Cách chọn đồng hồ chuẩn, tư vấn mua hàng.', 'Hoang', '/images/cach-ch-n-ng-h-chu-n-t-v-n-mua-hang-l78901-102-011-3.jpg', 'Tin giải trí', 'giới thiệu', 'sdsdsd', '2023-10-21 13:53:21', '2023-10-21 13:53:21', 'cach-chon-dong-ho-chuan-tu-van-mua-hang');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nameProduct` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `priceProduct` int(11) NOT NULL,
  `codeProduct` int(11) NOT NULL,
  `quantityProduct` int(11) NOT NULL,
  `prmProduct` int(11) NOT NULL,
  `detailProduct` varchar(255) NOT NULL,
  `tradeMark` varchar(255) NOT NULL,
  `statusProduct` varchar(255) NOT NULL,
  `categoryProduct` varchar(255) NOT NULL,
  `imgProduct` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `nameProduct`, `slug`, `priceProduct`, `codeProduct`, `quantityProduct`, `prmProduct`, `detailProduct`, `tradeMark`, `statusProduct`, `categoryProduct`, `imgProduct`, `createdAt`, `updatedAt`) VALUES
(88, 'Đồng hồ nam GTawe', 'dong-ho-nam-gtawe', 21323232, 1, 12, 12133232, 'sản phẩm mới 1', 'Olym pianus', 'còn hàng', 'Đồng hồ nam', '/images/thumb_350_ng-h-n-l78901-102-011-dong-ho-nu-carnival-2-4532.jpg', '2023-10-17 23:58:37', '2023-10-17 23:58:37'),
(89, 'Đồng hồ nam GTaweâaaa', 'dong-ho-nam-gtaweaaaa', 232445, 2, 12, 423522, 'sản phẩm mới 2', 'Ogival', 'còn hàng', 'Đồng hồ nam', '/images/thumb_350_ng-h-nam-g70802-201-717-g70802-201-717-4931.jpg', '2023-10-18 00:02:42', '2023-10-18 00:02:42'),
(90, 'Đồng hồ nữ FRgrg', 'dong-ho-nu-frgrg', 3212121, 3, 111, 1213233, 'sản phẩm mới 3', 'Seiko', 'còn hàng', 'Đồng hồ nữ', '/images/thumb_350_ng-h-nam-g62301-102-332-g62301-114-033-4910 (1).jpg', '2023-10-18 00:03:50', '2023-10-18 00:03:50'),
(92, 'Đồng hồ nữ zxcxz', 'dong-ho-nu-zxcxz', 212121, 5, 232, 2121213, 'sản phẩm mới 4', 'Orient', 'còn hàng', 'Đồng hồ nữ', '/images/thumb_350_ng-h-nam-g62301-102-33223456-23456.jpg', '2023-10-18 00:09:25', '2023-10-18 00:09:25'),
(94, 'Đồng hồ nam oggen', 'dong-ho-nam-oggen', 1213132, 12, 23243, 21211332, 'sản phẩm mới 7', 'Seiko', 'còn hàng', 'Đồng hồ nam', '/images/thumb_350_ng-h-n-l18303-202-616-l18303-202-616-4774.jpg', '2023-10-18 06:50:22', '2023-10-18 06:50:22'),
(95, 'đồng hồ đôi WDWQW', 'dong-ho-doi-wdwqw', 332322, 232, 10, 121322, 'sản phẩm mới 8', 'Orient', 'còn hàng', 'Đồng hồ đôi', '/images/thumb_350_ng-h-oi-m-i-v-200441288-dong-ho-jacques-du-manoir-pp-7-pp-8-1.jpg', '2023-10-18 06:53:15', '2023-10-18 06:53:15'),
(96, 'Đồng hồ nam GHKHG', 'dong-ho-nam-ghkhg', 423212, 23, 32, 2323234, 'sản phẩm mới 10', 'Seiko', 'còn hàng', 'Đồng hồ nam', '/images/thumb_350_ng-h-n-l69002-354-034-l69002-354-034-chuan-4869.jpg', '2023-10-18 13:12:20', '2023-10-18 13:12:20'),
(97, 'Đồng hồ nữ FGHFG', 'dong-ho-nu-fghfg', 221324, 22, 34, 322234, 'sản phẩm mới 9', 'Ogival', 'còn hàng', 'Đồng hồ nữ', '/images/thumb_350_ng-h-n-iw026-411-21-iw026-411-21-4813.jpg', '2023-10-18 13:13:18', '2023-10-18 13:13:18'),
(98, 'đồng hồ đôi WDFFD', 'dong-ho-doi-wdffd', 189676, 11, 232, 4565656, 'sản phẩm mới 33', 'Olym pianus', 'còn hàng', 'Đồng hồ đôi', '/images/thumb_350_ng-h-oi-iw848-1221-02-dong-ho-doi-iw848-121-02-a-4893.jpg', '2023-10-18 13:14:21', '2023-10-18 13:14:21'),
(99, 'đồng hồ đôi ZXCCS', 'dong-ho-doi-zxccs', 31212, 45, 233, 23232, 'sản phẩm mới nhất', 'Orient', 'còn hàng', 'Đồng hồ đôi', '/images/thumb_350_ng-h-oi-day-da-0000628-dong-ho-doi-day-da-mat-trang-swidu-003-trang.jpeg', '2023-10-18 13:18:06', '2023-10-18 13:18:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230921125553-create-account-admin-table.js'),
('20230927090253-create_products_table.js'),
('20230927091513-add_column_products_table.js'),
('20230930131940-create-table-images-product.js'),
('20231019130859-create_table_posts.js'),
('20231019135013-add_column_slug.js'),
('20231019140427-add_column_slug.js'),
('20231031072215-user.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `namelogin` varchar(255) NOT NULL,
  `numberphone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `namelogin`, `numberphone`, `createdAt`, `updatedAt`) VALUES
(1, 'hoag@gmail.com', 'hoang', '$2b$10$AHt4ouLpneat1JrD7xcGTeouGYxDTqjcwBnb/b1kRr9uqNPPZHcoG', 'hoangtv', '092121', '2023-11-02 13:29:47', '2023-11-02 13:29:47'),
(2, 'hoangtryndamere@gmail.com', 'hoang@gmail.com', '$2b$10$YG1uv.j/UExOeV9qGYHeTeBFI/xkrWbEIqSuT9pn4HBkVTN2Gm.du', 'nguyen hoang', '0965216813', '2023-11-04 01:14:29', '2023-11-04 01:14:29'),
(3, 'hoang@gmail.com', 'hoang@gmail.com', '$2b$10$5gjOln4//zdofmoE98hm5eGNsSbD5mPJ5RgT85MYPqBPQuMrVs4L2', 'haong', '009', '2023-11-04 01:23:29', '2023-11-04 01:23:29'),
(4, 'hoangg63@gmail.com', 'hoang@gmail.com', '$2b$10$WbhdMo7yi1e9eOO6MgFUquFCo3Tay.QAqPgzxr8qCaeQa2FT3cyNa', 'haong', '009', '2023-11-04 01:24:19', '2023-11-04 01:24:19'),
(5, 'hoangg@gmail.com', 'hoang@gmail.com', '$2b$10$fs3IT7ZUHkNwQArS0T1Kb.pFoOq4nDJUTGIQTCF0nqzPK1q3dQ7s.', 'haong', '009', '2023-11-04 01:26:16', '2023-11-04 01:26:16');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accountadmins`
--
ALTER TABLE `accountadmins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `imagesproducts`
--
ALTER TABLE `imagesproducts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accountadmins`
--
ALTER TABLE `accountadmins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `imagesproducts`
--
ALTER TABLE `imagesproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
