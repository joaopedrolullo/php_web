CREATE DATABASE  IF NOT EXISTS `db_php_web`;
USE `db_php_web`;

DROP TABLE IF EXISTS `db_php_web`.`users`;

CREATE TABLE `db_php_web`.`users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `login` varchar(40) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

INSERT INTO `db_php_web`.`users` VALUES (1,'admin', 'admin', 'admin@admin.com', '$2y$12$YlooCyNvyTji8bPRcrfNfOKnVMmZA9ViM2A3IpFjmrpIbp5ovNmga');

DROP TABLE IF EXISTS `db_php_web`.`customers`;

CREATE TABLE `db_php_web`.`customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `date_birth` datetime NULL,
  `cpf` varchar(20) NULL,
  `rg` varchar(20) NULL,
  `phone` varchar(20) NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

INSERT INTO `db_php_web`.`customers` VALUES (1,'João Pedro','1996-07-17 00:00:00',26613318086,115000768, '1898197979797');

DROP TABLE IF EXISTS `db_php_web`.`addresses`;

CREATE TABLE `db_php_web`.`addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `address` varchar(80) NOT NULL,
  `complement` varchar(80) DEFAULT NULL,
  `city` varchar(80) NOT NULL,
  `state` varchar(80) NOT NULL,
  `country` varchar(60) NOT NULL,
  `zip_code` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_addresses_customer_idx` (`customer_id`),
  CONSTRAINT `fk_addresses_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;