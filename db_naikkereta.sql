/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 10.1.37-MariaDB : Database - db_kereta
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
USE `db_kereta`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nama` varchar(40) DEFAULT NULL,
  `username` varchar(40) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `jabatan` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `admin` */

insert  into `admin`(`id`,`nama`,`username`,`password`,`jabatan`,`status`) values 
(1,'Rafi Pratama','rafipratama@gmail.com','rafi123','admin','logout'),
(5,'Vicario','vicario@gmail.com','vicario123','admin','logout');

/*Table structure for table `jadwal` */

DROP TABLE IF EXISTS `jadwal`;

CREATE TABLE `jadwal` (
  `id_jadwal` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `id_kereta` int(9) unsigned NOT NULL,
  `tgl_pergi` date NOT NULL,
  `jam_pergi` time(6) NOT NULL,
  `jam_sampai` time(6) DEFAULT NULL,
  `lama_perjalanan` time(6) DEFAULT NULL,
  `asal` varchar(20) DEFAULT NULL,
  `tujuan` varchar(20) DEFAULT NULL,
  `harga` int(20) DEFAULT NULL,
  PRIMARY KEY (`id_jadwal`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

/*Data for the table `jadwal` */

insert  into `jadwal`(`id_jadwal`,`id_kereta`,`tgl_pergi`,`jam_pergi`,`jam_sampai`,`lama_perjalanan`,`asal`,`tujuan`,`harga`) values 
(1,1,'2021-07-13','08:30:00.000000','11:30:00.000000','03:00:00.000000','Bandung','Cirebon',150000),
(2,1,'2021-07-13','09:00:00.000000','12:00:00.000000','03:00:00.000000','Bandung','Cirebon',150000),
(3,2,'2021-07-13','08:30:00.000000','11:30:00.000000','03:00:00.000000','Bandung','Cirebon',150000),
(4,2,'2021-07-13','09:00:00.000000','12:00:00.000000','03:00:00.000000','Bandung','Cirebon',150000),
(5,3,'2021-07-13','08:30:00.000000','10:30:00.000000','02:00:00.000000','Yogyakarta','Surabaya',100000),
(6,3,'2021-07-13','09:00:00.000000','11:00:00.000000','02:00:00.000000','Yogyakarta','Surabaya',100000),
(7,4,'2021-07-13','08:30:00.000000','10:30:00.000000','02:00:00.000000','Yogyakarta','Surabaya',100000),
(8,4,'2021-07-13','09:00:00.000000','11:00:00.000000','02:00:00.000000','Yogyakarta','Surabaya',100000),
(9,1,'2021-07-15','08:30:00.000000','11:30:00.000000','03:00:00.000000','Cirebon','Bandung',150000),
(10,1,'2021-07-15','09:00:00.000000','12:00:00.000000','03:00:00.000000','Cirebon','Bandung',150000),
(11,2,'2021-07-15','08:30:00.000000','11:30:00.000000','03:00:00.000000','Cirebon','Bandung',150000),
(12,2,'2021-07-15','09:00:00.000000','12:00:00.000000','03:00:00.000000','Cirebon','Bandung',150000),
(13,3,'2021-07-15','08:30:00.000000','10:30:00.000000','02:00:00.000000','Surabaya','Yogyakarta',100000),
(14,3,'2021-07-15','09:00:00.000000','11:00:00.000000','02:00:00.000000','Surabaya','Yogyakarta',100000),
(15,4,'2021-07-15','08:30:00.000000','10:30:00.000000','02:00:00.000000','Surabaya','Yogyakarta',100000),
(16,4,'2021-07-15','09:00:00.000000','11:00:00.000000','02:00:00.000000','Surabaya','Yogyakarta',100000),
(17,5,'2021-07-15','09:00:00.000000','11:00:00.000000','02:00:00.000000','Surabaya','Yogyakarta',NULL);

/*Table structure for table `kereta` */

DROP TABLE IF EXISTS `kereta`;

CREATE TABLE `kereta` (
  `id` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(40) NOT NULL,
  `kelas` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `kereta` */

insert  into `kereta`(`id`,`nama`,`kelas`) values 
(1,'Harina','Executive'),
(2,'Harina','Economi'),
(3,'Sancaka','Executive'),
(4,'Sancaka','Economi'),
(5,'Harina','Executive');

/*Table structure for table `kursi` */

DROP TABLE IF EXISTS `kursi`;

CREATE TABLE `kursi` (
  `id_kursi` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `id_jadwal` int(9) unsigned NOT NULL,
  `no_kursi` varchar(20) NOT NULL,
  `status_kursi` varchar(20) NOT NULL,
  PRIMARY KEY (`id_kursi`)
) ENGINE=InnoDB AUTO_INCREMENT=244 DEFAULT CHARSET=utf8;

/*Data for the table `kursi` */

insert  into `kursi`(`id_kursi`,`id_jadwal`,`no_kursi`,`status_kursi`) values 
(1,1,'Executive1-1','Kosong'),
(2,1,'Executive1-2','Kosong'),
(3,1,'Executive1-3','Kosong'),
(4,1,'Executive1-4','Kosong'),
(5,1,'Executive1-5','Kosong'),
(6,1,'Executive2-1','Kosong'),
(7,1,'Executive2-2','Kosong'),
(8,1,'Executive2-3','Kosong'),
(9,1,'Executive2-4','Kosong'),
(10,1,'Executive2-5','Kosong'),
(11,1,'Executive3-1','Kosong'),
(12,1,'Executive3-2','Kosong'),
(13,1,'Executive3-3','Kosong'),
(14,1,'Executive3-4','Kosong'),
(15,1,'Executive3-5','Kosong'),
(16,2,'Executive1-1','Kosong'),
(17,2,'Executive1-2','Kosong'),
(18,2,'Executive1-3','Kosong'),
(19,2,'Executive1-4','Kosong'),
(20,2,'Executive1-5','Kosong'),
(21,2,'Executive2-1','Kosong'),
(22,2,'Executive2-2','Kosong'),
(23,2,'Executive2-3','Kosong'),
(24,2,'Executive2-4','Kosong'),
(25,2,'Executive2-5','Kosong'),
(26,2,'Executive3-1','Kosong'),
(27,2,'Executive3-2','Kosong'),
(28,2,'Executive3-3','Kosong'),
(29,2,'Executive3-4','Kosong'),
(30,2,'Executive3-5','Kosong'),
(31,3,'Economi1-1','Kosong'),
(32,3,'Economi1-2','Kosong'),
(33,3,'Economi1-3','Kosong'),
(34,3,'Economi1-4','Kosong'),
(35,3,'Economi1-5','Kosong'),
(36,3,'Economi2-1','Kosong'),
(37,3,'Economi2-2','Kosong'),
(38,3,'Economi2-3','Kosong'),
(39,3,'Economi2-4','Kosong'),
(40,3,'Economi2-5','Kosong'),
(41,3,'Economi3-1','Kosong'),
(42,3,'Economi3-2','Kosong'),
(43,3,'Economi3-3','Kosong'),
(44,3,'Economi3-4','Kosong'),
(45,3,'Economi3-5','Kosong'),
(46,4,'Economi1-1','Kosong'),
(47,4,'Economi1-2','Kosong'),
(48,4,'Economi1-3','Kosong'),
(49,4,'Economi1-4','Kosong'),
(50,4,'Economi1-5','Kosong'),
(51,4,'Economi2-1','Kosong'),
(52,4,'Economi2-2','Kosong'),
(53,4,'Economi2-3','Kosong'),
(54,4,'Economi2-4','Kosong'),
(55,4,'Economi2-5','Kosong'),
(56,4,'Economi3-1','Kosong'),
(57,4,'Economi3-2','Kosong'),
(58,4,'Economi3-3','Kosong'),
(59,4,'Economi3-4','Kosong'),
(60,4,'Economi3-5','Kosong'),
(61,5,'Executive1-1','Kosong'),
(62,5,'Executive1-2','Kosong'),
(63,5,'Executive1-3','Kosong'),
(64,5,'Executive1-4','Kosong'),
(65,5,'Executive1-5','Kosong'),
(66,5,'Executive2-1','Kosong'),
(67,5,'Executive2-2','Kosong'),
(68,5,'Executive2-3','Kosong'),
(69,5,'Executive2-4','Kosong'),
(70,5,'Executive2-5','Kosong'),
(71,5,'Executive3-1','Kosong'),
(72,5,'Executive3-2','Kosong'),
(73,5,'Executive3-3','Kosong'),
(74,5,'Executive3-4','Kosong'),
(75,5,'Executive3-5','Kosong'),
(76,6,'Executive1-1','Kosong'),
(77,6,'Executive1-2','Kosong'),
(78,6,'Executive1-3','Kosong'),
(79,6,'Executive1-4','Kosong'),
(80,6,'Executive1-5','Kosong'),
(81,6,'Executive2-1','Kosong'),
(82,6,'Executive2-2','Kosong'),
(83,6,'Executive2-3','Kosong'),
(84,6,'Executive2-4','Kosong'),
(85,6,'Executive2-5','Kosong'),
(86,6,'Executive3-1','Kosong'),
(87,6,'Executive3-2','Kosong'),
(88,6,'Executive3-3','Kosong'),
(89,6,'Executive3-4','Kosong'),
(90,6,'Executive3-5','Kosong'),
(91,7,'Economi1-1','Kosong'),
(92,7,'Economi1-2','Kosong'),
(93,7,'Economi1-3','Kosong'),
(94,7,'Economi1-4','Kosong'),
(95,7,'Economi1-5','Kosong'),
(96,7,'Economi2-1','Kosong'),
(97,7,'Economi2-2','Kosong'),
(98,7,'Economi2-3','Kosong'),
(99,7,'Economi2-4','Kosong'),
(100,7,'Economi2-5','Kosong'),
(101,7,'Economi3-1','Kosong'),
(102,7,'Economi3-2','Kosong'),
(103,7,'Economi3-3','Kosong'),
(104,7,'Economi3-4','Kosong'),
(105,7,'Economi3-5','Kosong'),
(106,8,'Economi1-1','Kosong'),
(107,8,'Economi1-2','Kosong'),
(108,8,'Economi1-3','Kosong'),
(109,8,'Economi1-4','Kosong'),
(110,8,'Economi1-5','Kosong'),
(111,8,'Economi2-1','Kosong'),
(112,8,'Economi2-2','Kosong'),
(113,8,'Economi2-3','Kosong'),
(114,8,'Economi2-4','Kosong'),
(115,8,'Economi2-5','Kosong'),
(116,8,'Economi3-1','Kosong'),
(117,8,'Economi3-2','Kosong'),
(118,8,'Economi3-3','Kosong'),
(119,8,'Economi3-4','Kosong'),
(120,8,'Economi3-5','Kosong'),
(121,9,'Executive1-1','Kosong'),
(122,9,'Executive1-2','Kosong'),
(123,9,'Executive1-3','Kosong'),
(124,9,'Executive1-4','Kosong'),
(125,9,'Executive1-5','Kosong'),
(126,9,'Executive2-1','Kosong'),
(127,9,'Executive2-2','Kosong'),
(128,9,'Executive2-3','Kosong'),
(129,9,'Executive2-4','Kosong'),
(130,9,'Executive2-5','Kosong'),
(131,9,'Executive3-1','Kosong'),
(132,9,'Executive3-2','Kosong'),
(133,9,'Executive3-3','Kosong'),
(134,9,'Executive3-4','Kosong'),
(135,9,'Executive3-5','Kosong'),
(136,10,'Executive1-1','Kosong'),
(137,10,'Executive1-2','Kosong'),
(138,10,'Executive1-3','Kosong'),
(139,10,'Executive1-4','Kosong'),
(140,10,'Executive1-5','Kosong'),
(141,10,'Executive2-1','Kosong'),
(142,10,'Executive2-2','Kosong'),
(143,10,'Executive2-3','Kosong'),
(144,10,'Executive2-4','Kosong'),
(145,10,'Executive2-5','Kosong'),
(146,10,'Executive3-1','Kosong'),
(147,10,'Executive3-2','Kosong'),
(148,10,'Executive3-3','Kosong'),
(149,10,'Executive3-4','Kosong'),
(150,10,'Executive3-5','Kosong'),
(151,11,'Economi1-1','Kosong'),
(152,11,'Economi1-2','Kosong'),
(153,11,'Economi1-3','Kosong'),
(154,11,'Economi1-4','Kosong'),
(155,11,'Economi1-5','Kosong'),
(156,11,'Economi2-1','Kosong'),
(157,11,'Economi2-2','Kosong'),
(158,11,'Economi2-3','Kosong'),
(159,11,'Economi2-4','Kosong'),
(160,11,'Economi2-5','Kosong'),
(161,11,'Economi3-1','Kosong'),
(162,11,'Economi3-2','Kosong'),
(163,11,'Economi3-3','Kosong'),
(164,11,'Economi3-4','Kosong'),
(165,11,'Economi3-5','Kosong'),
(166,12,'Economi1-1','Kosong'),
(167,12,'Economi1-2','Kosong'),
(168,12,'Economi1-3','Kosong'),
(169,12,'Economi1-4','Kosong'),
(170,12,'Economi1-5','Kosong'),
(171,12,'Economi2-1','Kosong'),
(172,12,'Economi2-2','Kosong'),
(173,12,'Economi2-3','Kosong'),
(174,12,'Economi2-4','Kosong'),
(175,12,'Economi2-5','Kosong'),
(176,12,'Economi3-1','Kosong'),
(177,12,'Economi3-2','Kosong'),
(178,12,'Economi3-3','Kosong'),
(179,12,'Economi3-4','Kosong'),
(180,12,'Economi3-5','Kosong'),
(181,13,'Executive1-1','Kosong'),
(182,13,'Executive1-2','Kosong'),
(183,13,'Executive1-3','Kosong'),
(184,13,'Executive1-4','Kosong'),
(185,13,'Executive1-5','Kosong'),
(186,13,'Executive2-1','Kosong'),
(187,13,'Executive2-2','Kosong'),
(188,13,'Executive2-3','Kosong'),
(189,13,'Executive2-4','Kosong'),
(190,13,'Executive2-5','Kosong'),
(191,13,'Executive3-1','Kosong'),
(192,13,'Executive3-2','Kosong'),
(193,13,'Executive3-3','Kosong'),
(194,13,'Executive3-4','Kosong'),
(195,13,'Executive3-5','Kosong'),
(196,14,'Executive1-1','Kosong'),
(197,14,'Executive1-2','Kosong'),
(198,14,'Executive1-3','Kosong'),
(199,14,'Executive1-4','Kosong'),
(200,14,'Executive1-5','Kosong'),
(201,14,'Executive2-1','Kosong'),
(202,14,'Executive2-2','Kosong'),
(203,14,'Executive2-3','Kosong'),
(204,14,'Executive2-4','Kosong'),
(205,14,'Executive2-5','Kosong'),
(206,14,'Executive3-1','Kosong'),
(207,14,'Executive3-2','Kosong'),
(208,14,'Executive3-3','Kosong'),
(209,14,'Executive3-4','Kosong'),
(210,14,'Executive3-5','Kosong'),
(211,15,'Economi1-1','Kosong'),
(212,15,'Economi1-2','Kosong'),
(213,15,'Economi1-3','Kosong'),
(214,15,'Economi1-4','Kosong'),
(215,15,'Economi1-5','Kosong'),
(216,15,'Economi2-1','Kosong'),
(217,15,'Economi2-2','Kosong'),
(218,15,'Economi2-3','Kosong'),
(219,15,'Economi2-4','Kosong'),
(220,15,'Economi2-5','Kosong'),
(221,15,'Economi3-1','Kosong'),
(222,15,'Economi3-2','Kosong'),
(223,15,'Economi3-3','Kosong'),
(224,15,'Economi3-4','Kosong'),
(225,15,'Economi3-5','Kosong'),
(226,16,'Economi1-1','Kosong'),
(227,16,'Economi1-2','Kosong'),
(228,16,'Economi1-3','Kosong'),
(229,16,'Economi1-4','Kosong'),
(230,16,'Economi1-5','Kosong'),
(231,16,'Economi2-1','Kosong'),
(232,16,'Economi2-2','Kosong'),
(233,16,'Economi2-3','Kosong'),
(234,16,'Economi2-4','Kosong'),
(235,16,'Economi2-5','Kosong'),
(236,16,'Economi3-1','Kosong'),
(237,16,'Economi3-2','Kosong'),
(238,16,'Economi3-3','Kosong'),
(239,16,'Economi3-4','Kosong'),
(240,16,'Economi3-5','Kosong'),
(241,17,'Executive1-1','Kosong'),
(242,17,'Executive1-2','Kosong'),
(243,17,'Executive1-1','Kosong');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
