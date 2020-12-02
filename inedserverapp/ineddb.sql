-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: ineddb
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cat_asentamiento`
--

DROP TABLE IF EXISTS `cat_asentamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_asentamiento` (
  `as_id` int NOT NULL COMMENT 'Almacena el ID del asentamiento',
  `as_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción del asentamiento',
  `as_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del asentamiento',
  `as_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del asentamiento',
  `as_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del asentamiento',
  `as_fecalta` date DEFAULT NULL COMMENT 'Fecha en que se dio de alta',
  `as_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `as_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `as_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`as_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_asentamiento`
--

LOCK TABLES `cat_asentamiento` WRITE;
/*!40000 ALTER TABLE `cat_asentamiento` DISABLE KEYS */;
INSERT INTO `cat_asentamiento` VALUES (1,'Colonia','Colonia','COLONIA','Co',NULL,'0',NULL,'0'),(2,'asentamiento2','msglargo','msgcorto','ase2','2020-07-01','operador2','2020-07-02','operador2'),(3,'aentamiento3','msglargo','msgcorto','ase3','2020-08-01','operador3','2020-08-02','operador3'),(4,'Barrio','Barrio','BARRIO','Ba',NULL,'0',NULL,'0'),(25,'Pueblo','Pueblo','PUEBLO','PU',NULL,'0',NULL,'0');
/*!40000 ALTER TABLE `cat_asentamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_calles`
--

DROP TABLE IF EXISTS `cat_calles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_calles` (
  `ca_id` int NOT NULL COMMENT 'ID de la calle',
  `co_id` int DEFAULT NULL COMMENT 'ID de la colonia a que pertenece',
  `ca_tipovial` int DEFAULT NULL COMMENT 'ID del tipo de vialidad a que pertenece',
  `ca_vialidad` varchar(60) DEFAULT NULL COMMENT 'Nombre de la vialidad',
  `ca_fecalta` varchar(100) DEFAULT NULL COMMENT 'Fecha en que se dio de alta',
  `ca_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador que la dio de alta',
  `ca_fecmodif` varchar(100) DEFAULT NULL COMMENT 'Fecha en que se modificó',
  `ca_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que la modifico',
  PRIMARY KEY (`ca_id`),
  KEY `FK_co_id_co_id` (`co_id`),
  KEY `FK_ca_tipovial_vi_id` (`ca_tipovial`),
  CONSTRAINT `FK_ca_tipovial_vi_id` FOREIGN KEY (`ca_tipovial`) REFERENCES `cat_tipovialidad` (`vi_id`),
  CONSTRAINT `FK_co_id_co_id` FOREIGN KEY (`co_id`) REFERENCES `cat_colonias` (`co_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_calles`
--

LOCK TABLES `cat_calles` WRITE;
/*!40000 ALTER TABLE `cat_calles` DISABLE KEYS */;
INSERT INTO `cat_calles` VALUES (1,1,1,'SANTA LUCIA',NULL,NULL,NULL,NULL),(2,2,2,'3a DE BAHIA',NULL,NULL,NULL,NULL),(3,3,3,'CEDROS',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `cat_calles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_colonias`
--

DROP TABLE IF EXISTS `cat_colonias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_colonias` (
  `co_id` int NOT NULL COMMENT 'Almacena el ID de la colonia',
  `co_tipoasen` int DEFAULT NULL COMMENT 'ID del tipo de asentamiento',
  `co_asentamiento` varchar(40) DEFAULT NULL COMMENT 'Nombre de la colonia',
  `co_cp` varchar(6) DEFAULT NULL COMMENT 'Codigo postal',
  `co_del` int DEFAULT NULL COMMENT 'ID de la delegación a que pertenece',
  `co_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `co_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `co_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `co_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`co_id`),
  KEY `FK_co_tipoasen_cat_asentamiento` (`co_tipoasen`),
  KEY `FK_co_del_dl_id` (`co_del`),
  CONSTRAINT `FK_co_del_dl_id` FOREIGN KEY (`co_del`) REFERENCES `cat_delegaciones` (`dl_id`),
  CONSTRAINT `FK_co_tipoasen_cat_asentamiento` FOREIGN KEY (`co_tipoasen`) REFERENCES `cat_asentamiento` (`as_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_colonias`
--

LOCK TABLES `cat_colonias` WRITE;
/*!40000 ALTER TABLE `cat_colonias` DISABLE KEYS */;
INSERT INTO `cat_colonias` VALUES (1,1,'SAN ANGEL','01000',1,NULL,'0','2020-06-02',NULL),(2,1,'LOS ALPES','01010',1,NULL,'0',NULL,'0'),(3,1,'GUADALUPE INN','01020',1,NULL,'0',NULL,'0');
/*!40000 ALTER TABLE `cat_colonias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_delegaciones`
--

DROP TABLE IF EXISTS `cat_delegaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_delegaciones` (
  `dl_id` int NOT NULL COMMENT 'ID de la delegación',
  `dl_descripcion` varchar(40) DEFAULT NULL COMMENT 'Nombre de la delegación',
  `dl_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo de la delegación',
  `dl_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto de la delegación',
  `dl_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura de la delegación',
  `dl_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `dl_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `dl_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `dl_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `dl_cpini` int DEFAULT NULL,
  `dl_utini` int DEFAULT NULL,
  PRIMARY KEY (`dl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_delegaciones`
--

LOCK TABLES `cat_delegaciones` WRITE;
/*!40000 ALTER TABLE `cat_delegaciones` DISABLE KEYS */;
INSERT INTO `cat_delegaciones` VALUES (1,'ALVARO OBREGON','ALVARO OBREGON','A. OBREGON','AOB',NULL,NULL,NULL,NULL,1,10),(2,'AZCAPOTZALCO','AZCAPOTZALCO','Azcapotzalco','AZC',NULL,NULL,NULL,NULL,2,2),(3,'BENITO JUAREZ','BENITO JUAREZ','B. Juarez','BJU',NULL,NULL,NULL,NULL,3,14);
/*!40000 ALTER TABLE `cat_delegaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_estados`
--

DROP TABLE IF EXISTS `cat_estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_estados` (
  `es_id` int NOT NULL COMMENT 'ID del estado',
  `es_descripcion` varchar(40) DEFAULT NULL COMMENT 'Nombre del estado',
  `es_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del estado',
  `es_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del estado',
  `es_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura',
  `es_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `es_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `es_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `es_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`es_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_estados`
--

LOCK TABLES `cat_estados` WRITE;
/*!40000 ALTER TABLE `cat_estados` DISABLE KEYS */;
INSERT INTO `cat_estados` VALUES (1,'Colima','Colima','Colima','Col',NULL,'0',NULL,'0'),(2,'Campeche','Campeche','Campeche','Cam',NULL,'0',NULL,'0'),(3,'Coahuila','Coahuila','Coahuila','Coa',NULL,'0',NULL,'0');
/*!40000 ALTER TABLE `cat_estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_importe`
--

DROP TABLE IF EXISTS `cat_importe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_importe` (
  `im_id` int NOT NULL COMMENT 'ID del importe',
  `im_descripcion` varchar(40) DEFAULT NULL COMMENT 'Nombre del impuesto',
  `im_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del impuesto',
  `im_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del impuesto',
  `im_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura',
  `im_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `im_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `im_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `im_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`im_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_importe`
--

LOCK TABLES `cat_importe` WRITE;
/*!40000 ALTER TABLE `cat_importe` DISABLE KEYS */;
INSERT INTO `cat_importe` VALUES (1,'descripcion1','msglargo1','msgcorto1','im1','2020-06-01','operador1','2020-06-02','operador1'),(2,'descripcion2','msglargo2','msgcorto2','im2','2020-07-01','operador2','2020-07-02','operador2'),(3,'descripcion3','msglargo3','msgcorto3','im3','2020-08-01','operador3','2020-08-02','operador3');
/*!40000 ALTER TABLE `cat_importe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_localizacion`
--

DROP TABLE IF EXISTS `cat_localizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_localizacion` (
  `lo_id` int NOT NULL COMMENT 'ID de la localización',
  `lo_descripcion` varchar(40) DEFAULT NULL COMMENT 'Nombre de la localización',
  `lo_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo de la localización',
  `lo_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto de la localización',
  `lo_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura',
  `lo_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `lo_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `lo_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `lo_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`lo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_localizacion`
--

LOCK TABLES `cat_localizacion` WRITE;
/*!40000 ALTER TABLE `cat_localizacion` DISABLE KEYS */;
INSERT INTO `cat_localizacion` VALUES (1,'Manzana','Manzana','Manzana','Mza',NULL,'0',NULL,'0'),(2,'Andador','Andador','Andador','And',NULL,'0',NULL,'0'),(3,'Edificio','Edificio','Edificio','Edif',NULL,'0',NULL,'0');
/*!40000 ALTER TABLE `cat_localizacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_parentesco`
--

DROP TABLE IF EXISTS `cat_parentesco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_parentesco` (
  `pa_id` int NOT NULL COMMENT 'ID del parentesco',
  `pa_descripcion` varchar(40) DEFAULT NULL COMMENT 'Tipo de parentesco',
  `pa_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del parentesco',
  `pa_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del parentesco',
  `pa_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura',
  `pa_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `pa_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `pa_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `pa_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`pa_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_parentesco`
--

LOCK TABLES `cat_parentesco` WRITE;
/*!40000 ALTER TABLE `cat_parentesco` DISABLE KEYS */;
INSERT INTO `cat_parentesco` VALUES (1,'Madre','Madre','Madre','Ma',NULL,'0',NULL,'0'),(2,'Hijo(a)','Hijo(a)','Hijo(a)','Hi',NULL,'0',NULL,'0'),(3,'Tio(a)','Tio(a)','Tio(a)','Ti',NULL,'0',NULL,'0');
/*!40000 ALTER TABLE `cat_parentesco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_periodicidad`
--

DROP TABLE IF EXISTS `cat_periodicidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_periodicidad` (
  `pe_id` int NOT NULL COMMENT 'ID de periodicidad',
  `pe_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción de periodo',
  `pe_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del periodo',
  `pe_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del periodo',
  `pe_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura',
  `pe_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `pe_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `pe_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `pe_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`pe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_periodicidad`
--

LOCK TABLES `cat_periodicidad` WRITE;
/*!40000 ALTER TABLE `cat_periodicidad` DISABLE KEYS */;
INSERT INTO `cat_periodicidad` VALUES (1,'descripcion1','msglargo1','msgcorto1','pe1','2020-06-01','operador1','2020-06-02','operador1'),(2,'descripcion2','msglargo2','msgcorto2','pe2','2020-07-01','operador2','2020-07-02','operador2'),(3,'descripcion3','msglargo3','msgcorto3','pe3','2020-08-01','operador3','2020-08-02','operador1');
/*!40000 ALTER TABLE `cat_periodicidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_programas`
--

DROP TABLE IF EXISTS `cat_programas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_programas` (
  `pg_id` int NOT NULL COMMENT 'ID programas',
  `pg_subid` int DEFAULT NULL COMMENT 'Subid programa',
  `pg_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción de programa',
  `pg_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del programa',
  `pg_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del programa',
  `pg_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura',
  `pg_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `pg_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `pg_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `pg_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`pg_id`),
  UNIQUE KEY `UNIQUE` (`pg_subid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_programas`
--

LOCK TABLES `cat_programas` WRITE;
/*!40000 ALTER TABLE `cat_programas` DISABLE KEYS */;
INSERT INTO `cat_programas` VALUES (1,1,'descripcion1','msglargo1','msgcorto1','pg1','2020-06-01','operador1','2020-06-02','operador1'),(2,2,'descripcion2','msglargo2','msgcorto2','pg2','2020-07-01','operador2','2020-07-02','operador2'),(3,3,'descripcion3','msglargo3','msgcorto3','pg3','2020-08-01','operador3','2020-08-02','operador1');
/*!40000 ALTER TABLE `cat_programas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_regimen`
--

DROP TABLE IF EXISTS `cat_regimen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_regimen` (
  `re_id` int NOT NULL COMMENT 'ID del regimen',
  `re_descripcion` varchar(40) DEFAULT NULL COMMENT 'Nombre del regimen',
  `re_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del regimen',
  `re_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del regimen',
  `re_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura',
  `re_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `re_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `re_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `re_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`re_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_regimen`
--

LOCK TABLES `cat_regimen` WRITE;
/*!40000 ALTER TABLE `cat_regimen` DISABLE KEYS */;
INSERT INTO `cat_regimen` VALUES (1,'Predio','Predio','Predio','Pred',NULL,'0',NULL,'0'),(2,'Multifamiliar','Multifamiliar','Multifamilia','Mult',NULL,'0',NULL,'0'),(3,'Campamento','Campamento','Campamento','Camp',NULL,'0',NULL,'0');
/*!40000 ALTER TABLE `cat_regimen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_sepomex`
--

DROP TABLE IF EXISTS `cat_sepomex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_sepomex` (
  `sp_id` int NOT NULL COMMENT 'ID',
  `sp_delegacion` int DEFAULT NULL COMMENT 'ID de delegacion',
  `sp_cp` varchar(6) DEFAULT NULL COMMENT 'Codigo postal',
  `sp_idasentamiento` int DEFAULT NULL COMMENT 'ID de asentamiento',
  `sp_tipoasen` int DEFAULT NULL COMMENT 'Tipo de asentamiento',
  `sp_asentamiento` varchar(100) DEFAULT NULL COMMENT 'Nombre del asentamiento',
  `sp_tipovial` int DEFAULT NULL COMMENT 'Tipo de vialidad',
  `sp_vialidad` varchar(100) DEFAULT NULL COMMENT 'Nombre de la vialidad',
  `sp_noext` int DEFAULT NULL,
  `sp_int` int DEFAULT NULL,
  `sp_noceros` int DEFAULT NULL,
  `sp_nosn` int DEFAULT NULL,
  `sp_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `sp_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `sp_fecmodif` date DEFAULT NULL COMMENT 'fecha de modificiación',
  `sp_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `sp_tipoasentext` varchar(36) DEFAULT NULL COMMENT 'Tipo de asentamiento(texto)',
  `sp_tipovialtext` varchar(36) DEFAULT NULL COMMENT 'Tipo de vialidad(texto)',
  PRIMARY KEY (`sp_id`),
  KEY `FK_sp_idasentamiento_as_id` (`sp_idasentamiento`),
  KEY `FK_sp_tipovial_vi_id` (`sp_tipovial`),
  CONSTRAINT `FK_sp_idasentamiento_as_id` FOREIGN KEY (`sp_idasentamiento`) REFERENCES `cat_asentamiento` (`as_id`),
  CONSTRAINT `FK_sp_tipovial_vi_id` FOREIGN KEY (`sp_tipovial`) REFERENCES `cat_tipovialidad` (`vi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_sepomex`
--

LOCK TABLES `cat_sepomex` WRITE;
/*!40000 ALTER TABLE `cat_sepomex` DISABLE KEYS */;
INSERT INTO `cat_sepomex` VALUES (1,1,'123456',1,1,'asen1',1,'vial1',1,1,1,1,'2020-06-01','operadora1','2020-06-02','operador1','tipoasen1','tipovial1'),(2,2,'123457',2,2,'asen2',2,'vial2',2,2,2,2,'2020-07-01','operadora2','2020-07-02','operador2','tipoasen2','tipovial2'),(3,3,'123458',3,3,'asen3',3,'vial3',3,3,3,3,'2020-08-01','operadora3','2020-08-02','operador1','tipoasen3','tipovial1');
/*!40000 ALTER TABLE `cat_sepomex` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_sexo`
--

DROP TABLE IF EXISTS `cat_sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_sexo` (
  `sx_id` int NOT NULL COMMENT 'ID de sexo',
  `sx_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción de sexo',
  `sx_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del sexo',
  `sx_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del sexo',
  `sx_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `sx_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `sx_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `sx_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `sx_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del sexo',
  PRIMARY KEY (`sx_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_sexo`
--

LOCK TABLES `cat_sexo` WRITE;
/*!40000 ALTER TABLE `cat_sexo` DISABLE KEYS */;
INSERT INTO `cat_sexo` VALUES (1,'Masculino','Hombre','masculino','2003-05-03',NULL,NULL,NULL,'H'),(2,'Femenino','Mujer','femenino','2003-05-03','0',NULL,'0','M'),(3,'descripcion3','msglargo3','msgcorto3','2020-08-01','operador3','2020-08-02','operador3','sx1');
/*!40000 ALTER TABLE `cat_sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_status`
--

DROP TABLE IF EXISTS `cat_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_status` (
  `st_id` int NOT NULL COMMENT 'ID del estatus',
  `st_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción del estatus',
  `st_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del estatus',
  `st_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del estatus',
  `st_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `st_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `st_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `st_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `st_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del estatus',
  `st_tipostatus` int DEFAULT NULL,
  `st_subtipostatus` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`st_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_status`
--

LOCK TABLES `cat_status` WRITE;
/*!40000 ALTER TABLE `cat_status` DISABLE KEYS */;
INSERT INTO `cat_status` VALUES (1,'No acepta','No acepta','No acepta',NULL,'0',NULL,'0','NA',1,NULL),(2,'Invalidez','Invalidez','Invalidez',NULL,'0',NULL,'0','IN',2,NULL),(3,'Fallecio','Fallecio','Fallecio',NULL,'0',NULL,'0','F',3,NULL),(4,'Dado de alta','Dado alta','Dado alta',NULL,'0',NULL,'0','DA',4,NULL),(5,'En Revision','En Revision','En Revision',NULL,'0',NULL,'0','ER',5,NULL),(6,'Aceptado por Monitor','Aceptado por Monitor','AceptadoMon',NULL,'0',NULL,'0','AM',6,NULL),(7,'Dado de Baja','Dado Baja','DadoB',NULL,NULL,NULL,NULL,'DB',7,NULL);
/*!40000 ALTER TABLE `cat_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipocta`
--

DROP TABLE IF EXISTS `cat_tipocta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_tipocta` (
  `tc_id` int NOT NULL COMMENT 'ID del tipo de cuenta',
  `tc_descripcion` varchar(40) NOT NULL COMMENT 'Descripción del tipo cta',
  `tc_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del tipo cta',
  `tc_msgcorto` varchar(10) DEFAULT NULL COMMENT 'Nombre corto del tipo cta',
  `tc_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del tipo cta',
  `tc_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `tc_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `tc_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `tc_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`tc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipocta`
--

LOCK TABLES `cat_tipocta` WRITE;
/*!40000 ALTER TABLE `cat_tipocta` DISABLE KEYS */;
INSERT INTO `cat_tipocta` VALUES (1,'descripcion1','msglargo1','msgcorto1','tc1','2020-06-01','operador1','2020-06-02','operador1'),(2,'descripcion2','msglargo2','msgcorto2','tc2','2020-07-01','operador2','2020-07-02','operador2'),(3,'descripcion3','msglargo3','msgcorto3','tc3','2020-08-01','operador3','2020-08-02','operador1');
/*!40000 ALTER TABLE `cat_tipocta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipodocumento`
--

DROP TABLE IF EXISTS `cat_tipodocumento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_tipodocumento` (
  `dc_id` int NOT NULL COMMENT 'ID tipo de docto',
  `dc_rq_id` int DEFAULT NULL COMMENT 'ID tipo de requisito',
  `dc_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción del docto',
  `dc_msglargo` varchar(23) DEFAULT NULL COMMENT 'Nombre largo del tipo de docto',
  `dc_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del tipo de docto',
  `dc_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del tipo de docto',
  `dc_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `dc_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `dc_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `dc_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`dc_id`),
  KEY `FK_dc_rq_id_rq_id` (`dc_rq_id`),
  CONSTRAINT `FK_dc_rq_id_rq_id` FOREIGN KEY (`dc_rq_id`) REFERENCES `cat_tiporequisito` (`rq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipodocumento`
--

LOCK TABLES `cat_tipodocumento` WRITE;
/*!40000 ALTER TABLE `cat_tipodocumento` DISABLE KEYS */;
INSERT INTO `cat_tipodocumento` VALUES (1,1,'FM2','FM2','FM2','FM2',NULL,'0',NULL,'0'),(2,2,'Pasaporte','Pasaporte','Pasaporte','Pas.',NULL,'0',NULL,'0'),(3,3,'Articulo 14','Art. 14','A. 14','A14',NULL,'0',NULL,'0');
/*!40000 ALTER TABLE `cat_tipodocumento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipopago`
--

DROP TABLE IF EXISTS `cat_tipopago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_tipopago` (
  `tp_id` int NOT NULL COMMENT 'ID de tipo de pago',
  `tp_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción del tipo de pago',
  `tp_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del tipo de pago',
  `tp_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del tipo de pago',
  `tp_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del tipo de pago',
  `tp_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `tp_opalta` varchar(15) DEFAULT NULL COMMENT 'Fecha de modificación',
  `tp_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `tp_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`tp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipopago`
--

LOCK TABLES `cat_tipopago` WRITE;
/*!40000 ALTER TABLE `cat_tipopago` DISABLE KEYS */;
INSERT INTO `cat_tipopago` VALUES (1,'descripcion1','msglargo1','msgcorto1','tp1','2020-06-01','operador1','2020-06-02','operador1'),(2,'descripcion2','msglargo2','msgcorto2','tp2','2020-07-01','operador2','2020-07-02','operador2'),(3,'descripcion3','msglargo3','msgcorto3','tp3','2020-08-01','operador3','2020-08-02','operador1');
/*!40000 ALTER TABLE `cat_tipopago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipoprog`
--

DROP TABLE IF EXISTS `cat_tipoprog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_tipoprog` (
  `pr_id` int NOT NULL COMMENT 'ID de tipo de programa',
  `pr_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción del tipo de programa',
  `pr_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del tipo de programa',
  `pr_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del tipo de programa',
  `pr_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del tipo de programa',
  `pr_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `pr_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `pr_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `pr_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`pr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipoprog`
--

LOCK TABLES `cat_tipoprog` WRITE;
/*!40000 ALTER TABLE `cat_tipoprog` DISABLE KEYS */;
INSERT INTO `cat_tipoprog` VALUES (1,'descripcion1','msglargo1','msgcorto1','pr1','2020-06-01','operador1','2020-06-02','operador1'),(2,'descripcion2','msglargo2','msgcorto2','pr2','2020-07-01','operador2','2020-07-02','operador2'),(3,'descripcion3','msglargo3','msgcorto3','pr3','2020-08-01','operador3','2020-08-02','operador1');
/*!40000 ALTER TABLE `cat_tipoprog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tiporelacion`
--

DROP TABLE IF EXISTS `cat_tiporelacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_tiporelacion` (
  `tr_id` int NOT NULL COMMENT 'ID de tipo de relación',
  `tr_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción del tipo de relación',
  `tr_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del tipo de relación',
  `tr_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del tipo de relación',
  `tr_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del tipo de relación',
  `tr_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `tr_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `tr_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `tr_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`tr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tiporelacion`
--

LOCK TABLES `cat_tiporelacion` WRITE;
/*!40000 ALTER TABLE `cat_tiporelacion` DISABLE KEYS */;
INSERT INTO `cat_tiporelacion` VALUES (1,'No Especificado','No Especificado','No Especif.','NE',NULL,'0',NULL,'0'),(2,'Beneficiario','Beneficiario','Beneficiario','Ben',NULL,'0',NULL,'0'),(3,'Tutor','Tutor','Tutor','Tut',NULL,'0',NULL,'0');
/*!40000 ALTER TABLE `cat_tiporelacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tiporequisito`
--

DROP TABLE IF EXISTS `cat_tiporequisito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_tiporequisito` (
  `rq_id` int NOT NULL COMMENT 'ID de tipo de requisito',
  `rq_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción del tipo de requisito',
  `rq_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del tipo de requisito',
  `rq_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del tipo de requisito',
  `rq_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del tipo de requisito',
  `rq_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `rq_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `rq_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `rq_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `rq_obligado` int DEFAULT NULL,
  PRIMARY KEY (`rq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tiporequisito`
--

LOCK TABLES `cat_tiporequisito` WRITE;
/*!40000 ALTER TABLE `cat_tiporequisito` DISABLE KEYS */;
INSERT INTO `cat_tiporequisito` VALUES (1,'Comprobante de edad','Comp. de edad','Comprobante','C.Ed',NULL,'0',NULL,'0',0),(2,'Comprobante de Domicilio','Comp. de Domicilio','C. de Dom.','C.D',NULL,'0',NULL,'0',0),(3,'descripcion3','msglargo3','msgcorto3','rq3','2020-08-01','operador3','2020-08-02','operador3',3);
/*!40000 ALTER TABLE `cat_tiporequisito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipotel`
--

DROP TABLE IF EXISTS `cat_tipotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_tipotel` (
  `te_id` int NOT NULL COMMENT 'ID de tipo de telefono',
  `te_descripción` varchar(40) DEFAULT NULL COMMENT 'Descripción del tipo de telefono',
  `te_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del tipo de telefono',
  `te_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del tipo de telefono',
  `te_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del tipo de telefono',
  `te_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `te_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `te_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `te_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`te_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipotel`
--

LOCK TABLES `cat_tipotel` WRITE;
/*!40000 ALTER TABLE `cat_tipotel` DISABLE KEYS */;
INSERT INTO `cat_tipotel` VALUES (0,'No Especificado','No Especificado','No Especif','NE',NULL,'0',NULL,'0'),(1,'Telefono de Casa','Telefono Casa','Tel Casa','Casa',NULL,'0',NULL,'0'),(2,'Telefono de Oficina','Telefono Oficina','Tel Of','Of',NULL,'0',NULL,'0'),(3,'Telefono para Recados','Telefono Recados','Tel Rec','Rec',NULL,'0',NULL,'0'),(4,'Telefono Celular','Telefono Celular','Tel Cel','Cel',NULL,'0',NULL,'0');
/*!40000 ALTER TABLE `cat_tipotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipovialidad`
--

DROP TABLE IF EXISTS `cat_tipovialidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_tipovialidad` (
  `vi_id` int NOT NULL COMMENT 'ID de tipo de vialidad',
  `vi_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción del tipo de vialidad',
  `vi_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo del tipo de vialidad',
  `vi_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto del tipo de vialidad',
  `vi_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura del tipo de vialidad',
  `vi_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `vi_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `vi_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `vi_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`vi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipovialidad`
--

LOCK TABLES `cat_tipovialidad` WRITE;
/*!40000 ALTER TABLE `cat_tipovialidad` DISABLE KEYS */;
INSERT INTO `cat_tipovialidad` VALUES (1,'Calle','Calle','Calle','C.',NULL,'0',NULL,'0'),(2,'Cerrada','Cerrada','Cerrada','Cda',NULL,'0',NULL,'0'),(3,'Avenida','Avenida','Avenida','Av.',NULL,'0',NULL,'0');
/*!40000 ALTER TABLE `cat_tipovialidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_ut`
--

DROP TABLE IF EXISTS `cat_ut`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_ut` (
  `ut_id` varchar(10) NOT NULL COMMENT 'ID de UT',
  `coplade` int DEFAULT NULL,
  `ut_descripcion` varchar(40) DEFAULT NULL COMMENT 'Descripción',
  `ut_msglargo` varchar(20) DEFAULT NULL COMMENT 'Nombre largo de la descripción',
  `ut_msgcorto` varchar(12) DEFAULT NULL COMMENT 'Nombre corto de la descripción',
  `ut_abreviatura` varchar(4) DEFAULT NULL COMMENT 'Abreviatura de la descripción',
  `ut_colonia` varchar(40) DEFAULT NULL COMMENT 'Nombre de la colonia',
  `ut_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `ut_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `ut_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `ut_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `ut_delegacion` int DEFAULT NULL COMMENT 'ID de delegación',
  PRIMARY KEY (`ut_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_ut`
--

LOCK TABLES `cat_ut` WRITE;
/*!40000 ALTER TABLE `cat_ut` DISABLE KEYS */;
INSERT INTO `cat_ut` VALUES ('1',1,'descripcion1','msglargo1','msgcorto1','ut1','col1','2020-06-01','operador1','2020-06-02','operador1',1),('2',2,'descripcion2','msglargo2','msgcorto2','ut2','col2','2020-07-01','operador2','2020-07-02','operador2',2),('3',3,'descripcion3','msglargo3','msgcorto3','ut3','col3','2020-07-01','operador3','2020-08-02','operador3',1);
/*!40000 ALTER TABLE `cat_ut` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds00_globales`
--

DROP TABLE IF EXISTS `ds00_globales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds00_globales` (
  `glob_sesion_timeout` int DEFAULT NULL,
  `glob_num_homo_list` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds00_globales`
--

LOCK TABLES `ds00_globales` WRITE;
/*!40000 ALTER TABLE `ds00_globales` DISABLE KEYS */;
/*!40000 ALTER TABLE `ds00_globales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds01_usuarios`
--

DROP TABLE IF EXISTS `ds01_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds01_usuarios` (
  `b01_us_id` int NOT NULL COMMENT 'ID del usuario',
  `b01_us_Nombre` varchar(30) DEFAULT NULL COMMENT 'Nombre del usuario',
  `b01_us_Apellido` varchar(60) DEFAULT NULL COMMENT 'Apellidos del usuario',
  `b01_us_clave` varchar(15) DEFAULT NULL COMMENT 'Clave del usuario',
  `b01_us_password` int DEFAULT NULL COMMENT 'Password del usuario',
  `b01_us_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `b01_us_fecultmod` date DEFAULT NULL,
  `b01_us_operador` varchar(18) DEFAULT NULL COMMENT 'Operador de alta',
  `b01_us_fecinicio` int DEFAULT NULL COMMENT 'Fecha de inicio de sesion',
  `b01_us_horainicio` int DEFAULT NULL COMMENT 'Hora de inicio de sesion',
  `b01_us_fecultacceso` int DEFAULT NULL COMMENT 'Fecha ultima acceso',
  `b01_us_horaultacces` int DEFAULT NULL COMMENT 'Hora ultima de acceso',
  `b01_us_status` int DEFAULT NULL COMMENT 'Estatus del usuario',
  `b01_us_sesion` int DEFAULT NULL,
  `b01_us_role` varchar(30) DEFAULT NULL COMMENT 'Rol del usuario',
  PRIMARY KEY (`b01_us_id`),
  UNIQUE KEY `UNIQUE` (`b01_us_clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds01_usuarios`
--

LOCK TABLES `ds01_usuarios` WRITE;
/*!40000 ALTER TABLE `ds01_usuarios` DISABLE KEYS */;
INSERT INTO `ds01_usuarios` VALUES (1,'octa','luna','mixbox',12345,'2020-06-01','2020-06-02','operador1',52345678,10,1,1,1,1,'role1'),(2,'gustavo','sol','mixbos',14123,'2020-07-01','2020-07-02','operador2',2345678,11,2,2,2,2,'role2'),(3,'eric','chao','mixboz',19842,'2020-08-01','2020-08-02','operador3',7,12,3,3,3,3,'role3'),(4,'Jose','Berron Gutierrez','Jose',123,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Administrador'),(5,'Aldo','Ponce De la Cruz','Aldo',123,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Monitor'),(6,'Ignacio','Alvarado Reyes','Ignacio',123,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Usuario');
/*!40000 ALTER TABLE `ds01_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds02_personas`
--

DROP TABLE IF EXISTS `ds02_personas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds02_personas` (
  `Id_Persona` int NOT NULL COMMENT 'ID de persona',
  `Nombre` varchar(36) DEFAULT NULL COMMENT 'Nombre del beneficiario',
  `Apellido_Paterno` varchar(36) DEFAULT NULL COMMENT 'Apellido paterno del beneficiario',
  `Apellido_Materno` varchar(36) DEFAULT NULL COMMENT 'Apellido materno del beneficiario',
  `Soundex` int DEFAULT NULL,
  `Fecha_Nacimiento` date DEFAULT NULL COMMENT 'Fecha de nacimiento del beneficiario',
  `RFC` varchar(15) DEFAULT NULL COMMENT 'RFC del beneficiario',
  `Curp` varchar(22) DEFAULT NULL COMMENT 'CURP del beneficiario',
  `Nombre_Completo` varchar(100) DEFAULT NULL COMMENT 'Nombre compelto',
  `Sexo` int DEFAULT NULL COMMENT 'ID_Sexo',
  `Status` int DEFAULT NULL COMMENT 'ID Estatus en el padron',
  `StatusArchivo` int DEFAULT NULL COMMENT 'Estatus en el archivo',
  `Folio_solicitud` int DEFAULT NULL COMMENT 'Folio de solicitud',
  `Fecha_solicitud` date DEFAULT NULL COMMENT 'Fecha de solicitud',
  `Recibe_solicitud` varchar(100) DEFAULT NULL COMMENT 'Nombre de quien recibe la solicitud',
  `Fecha_comienzo_pension` date DEFAULT NULL COMMENT 'Fecha en que comienza la pensión',
  `Operador_Alta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `Fecha_Alta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `Operador_Modif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `Fecha_Modif` date DEFAULT NULL COMMENT 'Fecha en que se modificó',
  `Operador_Baja` varchar(15) DEFAULT NULL COMMENT 'Operador de baja',
  `Fecha_Baja` date DEFAULT NULL COMMENT 'Fecha que se dio de baja',
  `Causa_Baja` varchar(255) DEFAULT NULL COMMENT 'Causa de baja',
  `Edad` int DEFAULT NULL COMMENT 'Edad de la persona',
  `Domicilio_Principal` varchar(100) DEFAULT NULL COMMENT 'Contiene el domicilio actual',
  `Tipo_Vialidad` int DEFAULT NULL COMMENT 'Tipo de vialidad (numerico)',
  `Vialidad` varchar(40) DEFAULT NULL COMMENT 'Nombre de la vialidad',
  `No_Exterior` varchar(100) DEFAULT NULL COMMENT 'Numero exterior',
  `No_Interior` varchar(6) DEFAULT NULL COMMENT 'Numero interior',
  `Codigo_Postal` varchar(6) DEFAULT NULL COMMENT 'Codigo postal',
  `Delegacion` int DEFAULT NULL COMMENT 'Numero de delegacion',
  `Tipo_Asentamiento` int DEFAULT NULL COMMENT 'Tipo de asentamiento (numerico)',
  `Asentamiento` varchar(40) DEFAULT NULL COMMENT 'Nombre del asentamiento',
  `Tipo_Telefono` int DEFAULT NULL COMMENT 'Tipo de telefono',
  `Telefono` varchar(13) DEFAULT NULL COMMENT 'Numero telefonico',
  `Regimen_Hab` int DEFAULT NULL COMMENT 'Tipo de regimen (numerico)',
  `Regimen` varchar(25) DEFAULT NULL COMMENT 'Nombre del regimen',
  `Unidad_Territorial` varchar(10) DEFAULT NULL COMMENT 'UT',
  `Cve_Inegi` int DEFAULT NULL COMMENT 'Clave Inegi',
  `No_Convenio` int DEFAULT NULL COMMENT 'Numero de convenio',
  `Banco` int DEFAULT NULL COMMENT 'Tipo de banco',
  `No_Tarjeta_Banco` varchar(16) DEFAULT NULL COMMENT 'Numero de tarjeta',
  `Rep_Nombre` varchar(36) DEFAULT NULL COMMENT 'Nombre del representante',
  `Rep_ApePat` varchar(36) DEFAULT NULL COMMENT 'Apellido Paterno del representante',
  `Rep_ApeMat` varchar(36) DEFAULT NULL COMMENT 'Apellido Materno del representante',
  `Rep_Completo` varchar(100) DEFAULT NULL COMMENT 'Nombre completo del representante',
  `Asen_Id` int DEFAULT NULL COMMENT 'ID Asentamiento',
  `Programa` int DEFAULT NULL COMMENT 'ID de programa',
  `Subprograma` int DEFAULT NULL COMMENT 'Tipo de subprograma',
  `Observaciones` varchar(60) DEFAULT NULL COMMENT 'Observaciones sobre el beneficiario',
  `SoundexNombre` int DEFAULT NULL,
  `SoundexApePat` int DEFAULT NULL,
  `SoundexApeMat` int DEFAULT NULL,
  PRIMARY KEY (`Id_Persona`),
  KEY `FK_Programa_pg_id` (`Programa`),
  KEY `FK_Regimen_Hab_re_id` (`Regimen_Hab`),
  KEY `FK_Sexo_sx_id` (`Sexo`),
  KEY `FK_Status_st_id` (`Status`),
  KEY `FK_Tipo_Telefono_te_id` (`Tipo_Telefono`),
  KEY `FK_Asen_Id_as_id` (`Asen_Id`),
  KEY `FK_Delegacion_dl_id` (`Delegacion`),
  CONSTRAINT `FK_Asen_Id_as_id` FOREIGN KEY (`Asen_Id`) REFERENCES `cat_asentamiento` (`as_id`),
  CONSTRAINT `FK_Delegacion_dl_id` FOREIGN KEY (`Delegacion`) REFERENCES `cat_delegaciones` (`dl_id`),
  CONSTRAINT `FK_Programa_pg_id` FOREIGN KEY (`Programa`) REFERENCES `cat_programas` (`pg_id`),
  CONSTRAINT `FK_Regimen_Hab_re_id` FOREIGN KEY (`Regimen_Hab`) REFERENCES `cat_regimen` (`re_id`),
  CONSTRAINT `FK_Sexo_sx_id` FOREIGN KEY (`Sexo`) REFERENCES `cat_sexo` (`sx_id`),
  CONSTRAINT `FK_Status_st_id` FOREIGN KEY (`Status`) REFERENCES `cat_status` (`st_id`),
  CONSTRAINT `FK_Tipo_Telefono_te_id` FOREIGN KEY (`Tipo_Telefono`) REFERENCES `cat_tipotel` (`te_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds02_personas`
--

LOCK TABLES `ds02_personas` WRITE;
/*!40000 ALTER TABLE `ds02_personas` DISABLE KEYS */;
INSERT INTO `ds02_personas` VALUES (1,'damian','perez','perez',1,'1930-05-14','MELM8305281H0','GOTA820521HVZMLP02','damian perez perez',1,1,1,1,'2020-06-01','destinatario1','2020-06-01','operador1','2020-06-01','operador1','2020-06-02','operador1','2020-06-03','damian',70,'Roma',1,'vial1','exterior1','int1','123456',1,1,'asen1',1,'5674785672162',1,'regimen1','ut1',1234,123456891,1,'123459172847','Jose','Pepe','Pepe','Jose Pepe Pepe',1,1,1,'obersvacion1',2314,1234,1234),(2,'daniel','mitch','mitch',2,'1940-05-14','MELM8305281H1','GOTA820521HVZMLP03','daniel mitch mitch',2,2,2,2,'2020-07-01','destinatario2','2020-07-01','operador2','2020-07-01','operador2','2020-07-02','operador2','2020-07-03','daniel',89,'Revolucion',2,'vial2','exterior2','int2','123457',2,2,'asen2',2,'5674785672163',2,'regimen2','ut2',1235,123456892,2,'123459172848','Aldo','Pon','cepix','Aldo Pon cepix',2,2,2,'obersvacion2',2315,1235,1235),(3,'diego','ramirez','ramirez',3,'1950-05-14','MELM8305281H2','GOTA820521HVZMLP04','diego ramirez ramirez',3,3,3,3,'2020-08-01','destinatario3','2020-08-01','operador3','2020-08-01','operador3','2020-08-02','operador3','2020-08-03','diego',90,'Acoxpa',3,'vial3','exterior3','int3','123458',3,3,'asen3',3,'5674785672164',3,'regimen3','ut3',1236,123456893,3,'123459172849','Ignacio','Rey','king','Ignacio Rey king',3,3,3,'obersvacion3',2316,1236,1234),(4,'Korean','Destiny','Destiny',NULL,'2020-11-29','123rfc','123curp','Korean Destiny Destiny',1,1,1,NULL,NULL,NULL,NULL,NULL,'2020-11-29',NULL,NULL,NULL,NULL,NULL,20,'Calle Poncepix 12 12',1,NULL,NULL,NULL,'12cp',NULL,1,'Colonia1',1,'5550739140',1,'Predio 1','12ut',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Poncepix',NULL,NULL,NULL,'Rifado',NULL,NULL,NULL),(5,'Jose','Berron','Gutierrez',NULL,'2020-11-30','123rfc','123curp','Jose Berron Gutierrez',1,4,3,NULL,NULL,NULL,NULL,NULL,'2020-11-30',NULL,NULL,NULL,NULL,NULL,20,'Calle Pepe 1 112 12',2,NULL,NULL,NULL,'12cp',NULL,4,'Barrio1',1,'5555073191',2,'Multifamiliar1','12ut',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Alex',NULL,NULL,NULL,'Adulto Mayor',NULL,NULL,NULL),(6,'Aldo','Ponce','De la Cruz',NULL,'2020-11-30','1123rfc','123curp','Aldo Ponce De la Cruz',1,5,0,NULL,NULL,'Poncepix Usuario',NULL,NULL,'2020-11-30',NULL,NULL,NULL,NULL,NULL,20,'Calle Nacho 1 1',2,NULL,NULL,NULL,'1cp',NULL,1,'Col1',1,'55823931',2,'Multi1','1ut',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Ignacio',NULL,NULL,NULL,'Prueba',NULL,NULL,NULL),(7,'Chiclamino','Chicla','Chicla',NULL,'2020-11-30','123rfc','123curp','Chiclamino Chicla Chicla',1,6,0,NULL,NULL,'Jose B Monitor',NULL,NULL,'2020-11-30',NULL,NULL,NULL,NULL,NULL,20,'Calle Alex 1 1',2,NULL,NULL,NULL,'123cp',NULL,1,'Col3',1,'559084',2,'Mult2','123ut',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Poncepix',NULL,NULL,NULL,'Prueba Monitor',NULL,NULL,NULL),(8,'Alex','Alex','Alex',NULL,'2020-11-30','123curp','123curp','Alex Alex Alex',2,4,3,NULL,NULL,'Alex ',NULL,NULL,'2020-11-30',NULL,NULL,NULL,NULL,NULL,20,'undefined 12 12',2,NULL,NULL,NULL,'12cp',NULL,25,'Ase9',1,'5559083',1,'Reg8','12ut',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Alex',NULL,NULL,NULL,'PruebaAlta',NULL,NULL,NULL),(9,'Jose','Berroon','Gutierreez',NULL,'2020-11-30','123curp','123curp','Jose Berroon Gutierreez',2,4,3,NULL,NULL,'Ignacio ',NULL,NULL,'2020-11-30',NULL,NULL,NULL,NULL,NULL,70,'undefined 1 1',2,NULL,NULL,NULL,'12000',NULL,4,'Barrio 1',1,'5507319',3,'Campamento 1','12ut',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Alex',NULL,NULL,NULL,'Tiene buena Salud',NULL,NULL,NULL),(10,'Jose','Berron','Gutierrez',NULL,'2020-12-01','123curp','123curp','Jose Berron Gutierrez',1,4,3,NULL,NULL,'Jose',NULL,NULL,'2020-12-01',NULL,NULL,NULL,NULL,NULL,70,'Calle Flores  1 1',1,NULL,NULL,NULL,'54000',NULL,4,'Barrio 1',1,'550731283',1,'Predio 1','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Alex',NULL,NULL,NULL,'Se encuentra bien de salud',NULL,NULL,NULL);
/*!40000 ALTER TABLE `ds02_personas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds03_domicilios`
--

DROP TABLE IF EXISTS `ds03_domicilios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds03_domicilios` (
  `do_id` int NOT NULL COMMENT 'ID del domicilio',
  `do_Persona` int DEFAULT NULL COMMENT 'ID de la persona',
  `do_Fecha_Firma_Carta` date DEFAULT NULL COMMENT 'Fecha de la firma de carta',
  `do_Numdom` int DEFAULT NULL COMMENT 'Numero de domicilio',
  `do_Status` int DEFAULT NULL COMMENT 'Estatus del domicilio',
  `do_Completo` varchar(100) DEFAULT NULL COMMENT 'Domicilio completo',
  `do_Tipo_Vialidad` int DEFAULT NULL COMMENT 'Tipo de vialidad',
  `do_Vialidad` varchar(100) DEFAULT NULL COMMENT 'Nombres de la vialidad',
  `do_No_Exterior` varchar(100) DEFAULT NULL COMMENT 'Numero exterior',
  `do_No_Interior` varchar(30) DEFAULT NULL COMMENT 'Numero interior',
  `do_Calle1` varchar(100) DEFAULT NULL COMMENT 'Calle 1',
  `do_Calle2` varchar(100) DEFAULT NULL COMMENT 'Calle 2',
  `do_Localizacion` varchar(40) DEFAULT NULL,
  `do_Codigo_Postal` varchar(5) DEFAULT NULL COMMENT 'Codigo postal',
  `do_Delegacion` int DEFAULT NULL COMMENT 'Numero de delegacion',
  `do_Asen_Id` int DEFAULT NULL,
  `do_Tipo_Asentamiento` int DEFAULT NULL COMMENT 'Tipo de asentamiento',
  `do_Asentamiento` varchar(100) DEFAULT NULL COMMENT 'Nombre del asentamiento',
  `do_Tipo_Telefono` int DEFAULT NULL COMMENT 'Tipo de telefono',
  `do_Telefono` varchar(13) DEFAULT NULL COMMENT 'numero telefonico',
  `do_Regimen_Hab` int DEFAULT NULL COMMENT 'ID de regimen',
  `do_Regimen` varchar(100) DEFAULT NULL COMMENT 'Nombre del regimen',
  `do_Unidad_Territorial` varchar(10) DEFAULT NULL COMMENT 'Unidad Territorial',
  `do_Cve_Inegi` int DEFAULT NULL COMMENT 'Clave inegi',
  `do_Fecha_Alta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `do_Operador_Alta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `do_Fecha_Modif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `do_Operador_Modif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `do_Secc_elec` varchar(15) DEFAULT NULL COMMENT 'seccion electoral',
  PRIMARY KEY (`do_id`),
  KEY `FK_do_Regimen_Hab_re_id` (`do_Regimen_Hab`),
  KEY `FK_do_Tipo_Vialidad_vi_id` (`do_Tipo_Vialidad`),
  KEY `FK_do_Status_st_id` (`do_Status`),
  KEY `FK_do_Delegacion_dl_id` (`do_Delegacion`),
  KEY `FK_do_Tipo_Asentamiento_as_id` (`do_Tipo_Asentamiento`),
  KEY `FK_do_Tipo_telefono_te_di` (`do_Tipo_Telefono`),
  KEY `FK_do_persona_per_Id_Persona` (`do_Persona`),
  CONSTRAINT `FK_do_Delegacion_dl_id` FOREIGN KEY (`do_Delegacion`) REFERENCES `cat_delegaciones` (`dl_id`),
  CONSTRAINT `FK_do_persona_Id_Persona` FOREIGN KEY (`do_Persona`) REFERENCES `ds02_personas` (`Id_Persona`),
  CONSTRAINT `FK_do_Regimen_Hab_re_id` FOREIGN KEY (`do_Regimen_Hab`) REFERENCES `cat_regimen` (`re_id`),
  CONSTRAINT `FK_do_Status_st_id` FOREIGN KEY (`do_Status`) REFERENCES `cat_status` (`st_id`),
  CONSTRAINT `FK_do_Tipo_Asentamiento_as_id` FOREIGN KEY (`do_Tipo_Asentamiento`) REFERENCES `cat_asentamiento` (`as_id`),
  CONSTRAINT `FK_do_Tipo_telefono_te_di` FOREIGN KEY (`do_Tipo_Telefono`) REFERENCES `cat_tipotel` (`te_id`),
  CONSTRAINT `FK_do_Tipo_Vialidad_vi_id` FOREIGN KEY (`do_Tipo_Vialidad`) REFERENCES `cat_tipovialidad` (`vi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds03_domicilios`
--

LOCK TABLES `ds03_domicilios` WRITE;
/*!40000 ALTER TABLE `ds03_domicilios` DISABLE KEYS */;
INSERT INTO `ds03_domicilios` VALUES (1,1,'2020-06-01',1,1,'Roma',1,'vial1','1234','1234','Canal','Miramontes','loc1','12345',1,1,1,'asen1',1,'123456789',1,'reg1','ut1',1234,'2020-06-01','operador1','2020-06-02','operador1','secc1'),(2,2,'2020-07-01',2,2,'Revolucion',2,'vial2','1235','1235','Benito','Juarez','loc2','12346',2,2,2,'asen2',2,'123456781',2,'reg2','ut2',1235,'2020-07-01','operador2','2020-07-02','operador2','secc2'),(3,3,'2020-08-01',3,3,'Rosa',3,'vial3','1236','1236','Hueso','Bomba','loc3','12347',3,3,3,'asen3',3,'123456782',3,'reg3','ut3',1236,'2020-08-01','operador3','2020-08-02','operador3','secc3'),(4,4,NULL,NULL,1,'Calle Poncepix 12 12',1,'1','12','12','Calle Poncepix 1','Calle Poncepix 2',NULL,'12cp',1,NULL,1,'Colonia1',1,NULL,1,'Predio 1','12ut',NULL,NULL,NULL,NULL,NULL,NULL),(5,5,NULL,NULL,4,'Calle Pepe 1 112 12',2,'2','12','112','Calle 1 Pepe','Calle 2 Pepe',NULL,'12cp',NULL,NULL,4,'Barrio1',1,NULL,2,'Multifamiliar1','12ut',NULL,NULL,NULL,NULL,NULL,NULL),(6,6,NULL,NULL,5,'Calle Nacho 1 1',2,'2','1','1','Calle Nacho1','Calle Nacho2',NULL,'1cp',NULL,NULL,1,'Col1',1,NULL,2,'Multi1','1ut',NULL,NULL,NULL,NULL,NULL,NULL),(7,7,NULL,NULL,6,'Calle Alex 1 1',2,'2','1','1','Calle Alex1','Calle Alex2',NULL,'123cp',NULL,NULL,1,'Col3',1,NULL,2,'Mult2','123ut',NULL,NULL,NULL,NULL,NULL,NULL),(8,8,NULL,NULL,5,'Calle Alex1 12 12',2,'2','12','12','Calle Alex12','Calle Alex13',NULL,'12cp',NULL,NULL,25,'Ase9',1,NULL,1,'Reg8','12ut',NULL,NULL,NULL,NULL,NULL,NULL),(9,9,NULL,NULL,5,'Calle Flores 1 1',2,'2','1','1','Calle Flores 1','Calle Flores 2',NULL,'12000',NULL,NULL,4,'Barrio 1',1,NULL,3,'Campamento 1','12ut',NULL,NULL,NULL,NULL,NULL,NULL),(10,10,NULL,NULL,5,'Calle Flores 1 1',1,'1','1','1','Calle Flores 1','Calle Flores 2',NULL,'54000',NULL,NULL,4,'Barrio 1',1,NULL,1,'Predio 1','123',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `ds03_domicilios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds04_programas`
--

DROP TABLE IF EXISTS `ds04_programas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds04_programas` (
  `po_id` int NOT NULL COMMENT 'ID del programa',
  `po_persona` int DEFAULT NULL COMMENT 'ID del beneficiario',
  `po_tipo` int DEFAULT NULL COMMENT 'ID Tipo',
  `po_subtipo` int DEFAULT NULL COMMENT 'ID Subtipo',
  `po_folio` varchar(12) DEFAULT NULL COMMENT 'Folio',
  `po_status` int DEFAULT NULL COMMENT 'Estatus',
  `po_periodicidad` int DEFAULT NULL COMMENT 'ID Tipo periodicidad',
  `po_tipopago` int DEFAULT NULL COMMENT 'ID Tipo de pago',
  `po_banco` int DEFAULT NULL,
  `po_tipocta` int DEFAULT NULL COMMENT 'ID Tipocta',
  `po_ctabanco` bigint DEFAULT NULL,
  `po_importe` int DEFAULT NULL COMMENT 'ID Importe',
  `po_comentario` varchar(40) DEFAULT NULL,
  `po_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `po_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `po_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `po_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `po_fecbaja` date DEFAULT NULL COMMENT 'Fecha de baja',
  `po_opbaja` varchar(15) DEFAULT NULL COMMENT 'Operador de baja',
  PRIMARY KEY (`po_id`),
  KEY `FK_po_importe_im_id` (`po_importe`),
  KEY `FK_po_persona_Id_Persona` (`po_persona`),
  KEY `FK_po_tipo_pg_id` (`po_tipo`),
  KEY `FK_po_subtipo_pg_subid` (`po_subtipo`),
  KEY `FK_po_status_st_id` (`po_status`),
  KEY `FK_po_periodicidad_pe_id` (`po_periodicidad`),
  KEY `FK_po_tipopago_tp_id` (`po_tipopago`),
  KEY `FK_po_tipocta_tc_id` (`po_tipocta`),
  CONSTRAINT `FK_po_importe_im_id` FOREIGN KEY (`po_importe`) REFERENCES `cat_importe` (`im_id`),
  CONSTRAINT `FK_po_periodicidad_pe_id` FOREIGN KEY (`po_periodicidad`) REFERENCES `cat_periodicidad` (`pe_id`),
  CONSTRAINT `FK_po_persona_Id_Persona` FOREIGN KEY (`po_persona`) REFERENCES `ds02_personas` (`Id_Persona`),
  CONSTRAINT `FK_po_status_st_id` FOREIGN KEY (`po_status`) REFERENCES `cat_status` (`st_id`),
  CONSTRAINT `FK_po_subtipo_pg_subid` FOREIGN KEY (`po_subtipo`) REFERENCES `cat_programas` (`pg_subid`),
  CONSTRAINT `FK_po_tipo_pg_id` FOREIGN KEY (`po_tipo`) REFERENCES `cat_programas` (`pg_id`),
  CONSTRAINT `FK_po_tipocta_tc_id` FOREIGN KEY (`po_tipocta`) REFERENCES `cat_tipocta` (`tc_id`),
  CONSTRAINT `FK_po_tipopago_tp_id` FOREIGN KEY (`po_tipopago`) REFERENCES `cat_tipopago` (`tp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds04_programas`
--

LOCK TABLES `ds04_programas` WRITE;
/*!40000 ALTER TABLE `ds04_programas` DISABLE KEYS */;
INSERT INTO `ds04_programas` VALUES (1,1,1,1,'folio1',1,1,1,1,1,1234568478,1,'comentario1','2020-06-01','operador1','2020-06-02','operador1','2020-06-02','operador1'),(2,2,2,2,'folio2',2,2,2,2,2,1234568479,2,'comentario2','2020-07-01','operador2','2020-07-02','operador2','2020-07-02','operador2'),(3,3,3,3,'folio3',3,3,3,3,3,1234568470,3,'comentario3','2020-08-01','operador3','2020-08-02','operador3','2020-08-02','operador1');
/*!40000 ALTER TABLE `ds04_programas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds05_relper`
--

DROP TABLE IF EXISTS `ds05_relper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds05_relper` (
  `rl_id` int NOT NULL COMMENT 'ID de relacion persona',
  `rl_programa` int DEFAULT NULL COMMENT 'ID programa',
  `rl_persona_titular` int DEFAULT NULL COMMENT 'ID de persona titular',
  `rl_persona_rel` int DEFAULT NULL COMMENT 'ID tipo de relacion',
  `rl_status` int DEFAULT NULL COMMENT 'ID estatus',
  `rl_parentesco` int DEFAULT NULL COMMENT 'ID parentesco',
  `rl_porcentaje` int DEFAULT NULL,
  `rl_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `rl_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `rl_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `rl_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `rl_fecbaja` date DEFAULT NULL COMMENT 'Fecha de baja',
  `rl_opbaja` varchar(15) DEFAULT NULL COMMENT 'Operador que dio baja',
  `rl_tiporelacion` int DEFAULT NULL COMMENT 'ID tipo de relacion',
  PRIMARY KEY (`rl_id`),
  KEY `FK_rl_programa_pg_id` (`rl_programa`),
  KEY `FK_rl_persona_titular_Id_persona` (`rl_persona_titular`),
  KEY `FK_persona_rel_tr_id` (`rl_persona_rel`),
  KEY `FK_rl_parentesco_pa_id` (`rl_parentesco`),
  CONSTRAINT `FK_persona_rel_tr_id` FOREIGN KEY (`rl_persona_rel`) REFERENCES `cat_tiporelacion` (`tr_id`),
  CONSTRAINT `FK_rl_parentesco_pa_id` FOREIGN KEY (`rl_parentesco`) REFERENCES `cat_parentesco` (`pa_id`),
  CONSTRAINT `FK_rl_persona_titular_Id_persona` FOREIGN KEY (`rl_persona_titular`) REFERENCES `ds02_personas` (`Id_Persona`),
  CONSTRAINT `FK_rl_programa_pg_id` FOREIGN KEY (`rl_programa`) REFERENCES `cat_programas` (`pg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds05_relper`
--

LOCK TABLES `ds05_relper` WRITE;
/*!40000 ALTER TABLE `ds05_relper` DISABLE KEYS */;
INSERT INTO `ds05_relper` VALUES (1,1,1,1,1,1,1,'2020-06-01','operador1','2020-06-02','operador1','2020-06-02','operador1',1),(2,2,2,2,2,2,2,'2020-07-01','operador2','2020-07-02','operador2','2020-07-02','operador2',2),(3,3,3,3,3,3,3,'2020-08-01','operador3','2020-08-02','operador3','2020-08-02','operador3',1);
/*!40000 ALTER TABLE `ds05_relper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds06_personas`
--

DROP TABLE IF EXISTS `ds06_personas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds06_personas` (
  `per_Id_Persona` int NOT NULL COMMENT 'ID de la persona',
  `per_Nombre` varchar(36) DEFAULT NULL COMMENT 'Nombre del beneficiario',
  `per_Apellido_Paterno` varchar(36) DEFAULT NULL COMMENT 'Apellido parterno del beneficiario',
  `per_Apellido_Materno` varchar(36) DEFAULT NULL COMMENT 'Apellido Materno del beneficiario',
  `per_Soundex` int DEFAULT NULL,
  `per_Soundex_Nombre` int DEFAULT NULL,
  `per_Soundex_Apepat` int DEFAULT NULL,
  `per_Soundex_Apemat` int DEFAULT NULL,
  `per_Fecha_Nacimiento` date DEFAULT NULL COMMENT 'Fecha de nacimiento del beneficiario',
  `per_Edad` int DEFAULT NULL COMMENT 'Edad del beneficiario',
  `per_RFC` varchar(15) DEFAULT NULL COMMENT 'RFC del beneficiario',
  `per_Curp` varchar(22) DEFAULT NULL COMMENT 'CURP del beneficiario',
  `per_Nombre_Completo` varchar(100) DEFAULT NULL COMMENT 'Nombre completo del beneficiario',
  `per_Sexo` int DEFAULT NULL COMMENT 'ID de Sexo (numerico)',
  `per_Status` int DEFAULT NULL COMMENT 'Estatus del beneficiario',
  `per_Domprincipal` int DEFAULT NULL COMMENT 'Domicilio principal (ID)',
  `per_Fecha_Alta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `per_Operador_Alta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `per_Fecha_Modif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `per_Operador_Modif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `per_Fecha_Baja` date DEFAULT NULL COMMENT 'Fecha de baja',
  `per_Operador_Baja` varchar(15) DEFAULT NULL COMMENT 'Operador que dio de baja',
  `idds02` int DEFAULT NULL COMMENT 'ID de ds02_personas',
  `Idp` int DEFAULT NULL,
  PRIMARY KEY (`per_Id_Persona`),
  KEY `FK_per_Sexo_sd_id` (`per_Sexo`),
  KEY `FK_per_Status_st_id` (`per_Status`),
  KEY `FK_per_Domprincipal_do_Completo` (`per_Domprincipal`),
  KEY `FK_idds02_Id_Persona` (`idds02`),
  CONSTRAINT `FK_idds02_Id_Persona` FOREIGN KEY (`idds02`) REFERENCES `ds02_personas` (`Id_Persona`),
  CONSTRAINT `FK_per_Domprincipal_do_Completo` FOREIGN KEY (`per_Domprincipal`) REFERENCES `ds03_domicilios` (`do_id`),
  CONSTRAINT `FK_per_Sexo_sd_id` FOREIGN KEY (`per_Sexo`) REFERENCES `cat_sexo` (`sx_id`),
  CONSTRAINT `FK_per_Status_st_id` FOREIGN KEY (`per_Status`) REFERENCES `cat_status` (`st_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds06_personas`
--

LOCK TABLES `ds06_personas` WRITE;
/*!40000 ALTER TABLE `ds06_personas` DISABLE KEYS */;
INSERT INTO `ds06_personas` VALUES (1,'Jose','Pepe','Guitierrez',1,1,1,1,'2020-06-01',50,'MELM8305281H0','GOTA820521HVZMLP02','Jose Pepe Guitierrez',1,1,1,'2020-06-01','operador1','2020-06-02','operador1','2020-06-02','operador1',1,1),(2,'Manuel','Lopez','Lopez',2,2,2,2,'2020-07-01',30,'MELM8305281H1','GOTA820521HVZMLP03','Manuel Lopez Lopez',2,2,2,'2020-07-01','operador2','2020-07-02','operador2','2020-07-02','operador2',2,2),(3,'Javier','Chicla','Chicla',3,3,3,3,'2020-08-01',40,'MELM8305281H2','GOTA820521HVZMLP03','Javier Chicla Chicla',3,3,3,'2020-08-01','operador3','2020-08-02','operador3','2020-08-02','operador3',3,1),(4,'Korean','Destiny','Destiny',NULL,NULL,NULL,NULL,'2020-11-29',20,'123rfc','123curp','Korean Destiny Destiny',1,1,4,'2020-11-29',NULL,NULL,NULL,NULL,NULL,4,8),(5,'Jose','Berron','Gutierrez',NULL,NULL,NULL,NULL,'2020-11-30',20,'123rfc','123curp','Jose Berron Gutierrez',1,4,5,'2020-11-30',NULL,NULL,NULL,NULL,NULL,5,1),(6,'Aldo','Ponce','De la Cruz',NULL,NULL,NULL,NULL,'2020-11-30',20,'1123rfc','123curp','Aldo Ponce De la Cruz',1,5,6,'2020-11-30',NULL,NULL,NULL,NULL,NULL,6,1),(7,'Chiclamino','Chicla','Chicla',NULL,NULL,NULL,NULL,'2020-11-30',20,'123rfc','123curp','Chiclamino Chicla Chicla',1,6,7,'2020-11-30',NULL,NULL,NULL,NULL,NULL,7,2),(8,'Alex','Alex','Alex',NULL,NULL,NULL,NULL,'2020-11-30',20,'123rfc','123curp','Alex Alex Alex',1,5,8,'2020-11-30',NULL,NULL,NULL,NULL,NULL,8,12),(9,'Jose','Berron','Gutierrez',NULL,NULL,NULL,NULL,'2020-11-30',70,'123rfc','123curp','Jose Berron Gutierrez',1,5,9,'2020-11-30',NULL,NULL,NULL,NULL,NULL,9,1),(10,'Jose','Berron','Gutierrez',NULL,NULL,NULL,NULL,'2020-12-01',70,'123rfc','123curp','Jose Berron Gutierrez',1,5,10,'2020-12-01',NULL,NULL,NULL,NULL,NULL,10,12);
/*!40000 ALTER TABLE `ds06_personas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds07_documentos`
--

DROP TABLE IF EXISTS `ds07_documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds07_documentos` (
  `doc_id` int NOT NULL COMMENT 'ID del registro de documentos',
  `doc_persona` int DEFAULT NULL COMMENT 'ID de la persona',
  `doc_programa` int DEFAULT NULL COMMENT 'ID del programa',
  `doc_tipodoc` int DEFAULT NULL COMMENT 'ID tipo de documento',
  `doc_tiporeq` int DEFAULT NULL COMMENT 'ID tipo de requisito',
  `doc_status` int DEFAULT NULL COMMENT 'tipo del status',
  `doc_vigencia` int DEFAULT NULL COMMENT 'tipo de vigencia',
  `doc_folio` varchar(100) DEFAULT NULL COMMENT 'Folio del documento',
  `doc_fecalta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `doc_opalta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `doc_fecmodif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `doc_opmodif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  `doc_fecbaja` date DEFAULT NULL COMMENT 'Fecha de baja',
  `doc_opbaja` varchar(15) DEFAULT NULL COMMENT 'Operador que dio de baja',
  PRIMARY KEY (`doc_id`),
  KEY `FK_doc_persona_Id_Persona` (`doc_persona`),
  KEY `FK_doc_programa_pg_id` (`doc_programa`),
  KEY `FK_doc_tipodoc_dc_id` (`doc_tipodoc`),
  KEY `FK_doc_tiporeq_rq_id` (`doc_tiporeq`),
  KEY `FK_doc_status_st_id` (`doc_status`),
  CONSTRAINT `FK_doc_persona_Id_Persona` FOREIGN KEY (`doc_persona`) REFERENCES `ds02_personas` (`Id_Persona`),
  CONSTRAINT `FK_doc_programa_pg_id` FOREIGN KEY (`doc_programa`) REFERENCES `cat_programas` (`pg_id`),
  CONSTRAINT `FK_doc_status_st_id` FOREIGN KEY (`doc_status`) REFERENCES `cat_status` (`st_id`),
  CONSTRAINT `FK_doc_tipodoc_dc_id` FOREIGN KEY (`doc_tipodoc`) REFERENCES `cat_tipodocumento` (`dc_id`),
  CONSTRAINT `FK_doc_tiporeq_rq_id` FOREIGN KEY (`doc_tiporeq`) REFERENCES `cat_tiporequisito` (`rq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds07_documentos`
--

LOCK TABLES `ds07_documentos` WRITE;
/*!40000 ALTER TABLE `ds07_documentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `ds07_documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds08_compara`
--

DROP TABLE IF EXISTS `ds08_compara`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds08_compara` (
  `Id` int NOT NULL,
  `Nombre` varchar(36) DEFAULT NULL,
  `ApellidoPaterno` varchar(36) DEFAULT NULL,
  `ApellidoMaterno` varchar(36) DEFAULT NULL,
  `Distancia` int DEFAULT NULL,
  `Fecha_nacimiento` date DEFAULT NULL,
  `Status` varchar(40) DEFAULT NULL,
  `PorcentajeCoincidencia` double DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds08_compara`
--

LOCK TABLES `ds08_compara` WRITE;
/*!40000 ALTER TABLE `ds08_compara` DISABLE KEYS */;
/*!40000 ALTER TABLE `ds08_compara` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds09_domicilios`
--

DROP TABLE IF EXISTS `ds09_domicilios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds09_domicilios` (
  `do_id` int NOT NULL COMMENT 'ID del domicilio',
  `do_persona` int DEFAULT NULL COMMENT 'ID de la persona',
  `do_numdom` int DEFAULT NULL COMMENT 'Numero de domicilio',
  `do_status` int DEFAULT NULL COMMENT 'ID del estatus',
  `do_completo` varchar(100) DEFAULT NULL COMMENT 'Nombre completo',
  `do_tipo_vialidad` int DEFAULT NULL COMMENT 'ID tipo de vialidad',
  `do_vialidad` varchar(40) DEFAULT NULL COMMENT 'Nombre de la vialidad',
  `do_no_exterior` int DEFAULT NULL COMMENT 'Numero exterior',
  `do_no_interior` int DEFAULT NULL COMMENT 'Numero interior',
  `do_localizacion` varchar(40) DEFAULT NULL,
  `do_codigo_postal` varchar(5) DEFAULT NULL COMMENT 'Codigo postal',
  `do_delegacion` int DEFAULT NULL COMMENT 'ID de la delegacion',
  `do_asen_id` int DEFAULT NULL COMMENT 'ID de asentamiento',
  `do_tipo_asentamiento` int DEFAULT NULL COMMENT 'ID tipo de asentamiento',
  `do_asentamiento` varchar(40) DEFAULT NULL COMMENT 'Nombre del asentamiento',
  `do_tipo_telefono` int DEFAULT NULL COMMENT 'ID tipo de telefono',
  `do_telefono` int DEFAULT NULL COMMENT 'Numero telefono',
  `do_regimen_hab` int DEFAULT NULL COMMENT 'ID del regimen',
  `do_regimen` varchar(25) DEFAULT NULL COMMENT 'Nombre del regimen',
  `do_unidad_territorial` varchar(10) DEFAULT NULL COMMENT 'Unidad territorial',
  `do_cve_inegi` int DEFAULT NULL COMMENT 'Clave inegi',
  `do_fecha_alta` date DEFAULT NULL COMMENT 'Fecha de alta',
  `do_operador_alta` varchar(15) DEFAULT NULL COMMENT 'Operador de alta',
  `do_fecha_modif` date DEFAULT NULL COMMENT 'Fecha de modificación',
  `do_operador_modif` varchar(15) DEFAULT NULL COMMENT 'Operador que modificó',
  PRIMARY KEY (`do_id`),
  KEY `FK_ds09_do_status_st_id` (`do_status`),
  KEY `FK_ds09_do_regimen_hab_re_id` (`do_regimen_hab`),
  KEY `FK_ds09_do_delegacion_dl_id` (`do_delegacion`),
  KEY `FK_ds09_do_asen_id_as_id` (`do_asen_id`),
  KEY `FK_ds09_do_persona_Id_Persona` (`do_persona`) USING BTREE,
  CONSTRAINT `FK__ds09_do_persona_Id_Persona` FOREIGN KEY (`do_persona`) REFERENCES `ds02_personas` (`Id_Persona`),
  CONSTRAINT `FK_ds09_do_asen_id_as_id` FOREIGN KEY (`do_asen_id`) REFERENCES `cat_asentamiento` (`as_id`),
  CONSTRAINT `FK_ds09_do_delegacion_dl_id` FOREIGN KEY (`do_delegacion`) REFERENCES `cat_delegaciones` (`dl_id`),
  CONSTRAINT `FK_ds09_do_regimen_hab_re_id` FOREIGN KEY (`do_regimen_hab`) REFERENCES `cat_regimen` (`re_id`),
  CONSTRAINT `FK_ds09_do_status_st_id` FOREIGN KEY (`do_status`) REFERENCES `cat_status` (`st_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds09_domicilios`
--

LOCK TABLES `ds09_domicilios` WRITE;
/*!40000 ALTER TABLE `ds09_domicilios` DISABLE KEYS */;
/*!40000 ALTER TABLE `ds09_domicilios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds10_complpersonal`
--

DROP TABLE IF EXISTS `ds10_complpersonal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds10_complpersonal` (
  `co_persona` int NOT NULL,
  `co_lugarnac` varchar(255) DEFAULT NULL,
  `co_etnica` varchar(255) DEFAULT NULL,
  `co_gradoest` varchar(255) DEFAULT NULL,
  `co_tiempores` int DEFAULT NULL,
  `co_ocupacion` varchar(255) DEFAULT NULL,
  `co_padre` varchar(255) DEFAULT NULL,
  `co_madre` varchar(255) DEFAULT NULL,
  `co_tutor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`co_persona`),
  CONSTRAINT `FK_co_persona_Id_Persona` FOREIGN KEY (`co_persona`) REFERENCES `ds02_personas` (`Id_Persona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds10_complpersonal`
--

LOCK TABLES `ds10_complpersonal` WRITE;
/*!40000 ALTER TABLE `ds10_complpersonal` DISABLE KEYS */;
INSERT INTO `ds10_complpersonal` VALUES (4,'CDMX',' JUMANOS ','DOCTORADO',NULL,'Rifado','Poncepix','Poncepix','Poncepix'),(5,'CDMX',' GUAMARE ','DOCTORADO',NULL,'Estudiante','Aldo','Ponce','Alex'),(6,'Acapulco',' TLAHUICA ','DOCTORADO',NULL,'Chico de las Bases','Ignacio','Ignacio','Ignacio'),(7,'CDMX',' COCHIMI ','PRIMARIA',NULL,'Chambeador','Poncepix','Poncepix','Poncepix'),(8,'CDMX',' CONCHOS ','LIC',NULL,'Estudiante','Alex','Alex','Alex'),(9,'CDMX',' MAZAHUA ','LIC',NULL,'Ingeniero','Ignacio','Aldo','Alex'),(10,'CDMX',' CHOL ','DOCTORADO',NULL,'Estudiante','Jose','Monica','Alex');
/*!40000 ALTER TABLE `ds10_complpersonal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds20_pagos`
--

DROP TABLE IF EXISTS `ds20_pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds20_pagos` (
  `pago_id` int NOT NULL,
  `pago_persona` int DEFAULT NULL,
  `pago_ano` year DEFAULT NULL,
  `pago_acumulado` int DEFAULT NULL,
  `pago_mes1` int DEFAULT NULL,
  `pago_status1` int DEFAULT NULL,
  `pago_mes2` int DEFAULT NULL,
  `pago_status2` int DEFAULT NULL,
  `pago_mes3` int DEFAULT NULL,
  `pago_status3` int DEFAULT NULL,
  `pago_mes4` int DEFAULT NULL,
  `pago_status4` int DEFAULT NULL,
  `pago_mes5` int DEFAULT NULL,
  `pago_status5` int DEFAULT NULL,
  `pago_mes6` int DEFAULT NULL,
  `pago_status6` int DEFAULT NULL,
  `pago_mes7` int DEFAULT NULL,
  `pago_status7` int DEFAULT NULL,
  `pago_mes8` int DEFAULT NULL,
  `pago_status8` int DEFAULT NULL,
  `pago_mes9` int DEFAULT NULL,
  `pago_status9` int DEFAULT NULL,
  `pago_mes10` int DEFAULT NULL,
  `pago_status10` int DEFAULT NULL,
  `pago_mes11` int DEFAULT NULL,
  `pago_status11` int DEFAULT NULL,
  `pago_mes12` int DEFAULT NULL,
  `pago_status12` int DEFAULT NULL,
  `pago_mesx1` int DEFAULT NULL,
  `pago_corrx1` int DEFAULT NULL,
  `pago_statusx1` int DEFAULT NULL,
  `pago_mesx2` int DEFAULT NULL,
  `pago_corrx2` int DEFAULT NULL,
  `pago_statusx2` int DEFAULT NULL,
  `pago_mesx3` int DEFAULT NULL,
  `pago_corrx3` int DEFAULT NULL,
  `pago_statusx3` int DEFAULT NULL,
  `pago_mesx4` int DEFAULT NULL,
  `pago_corrx4` int DEFAULT NULL,
  `pago_statusx4` int DEFAULT NULL,
  `pago_mesx5` int DEFAULT NULL,
  `pago_corrx5` int DEFAULT NULL,
  `pago_statusx5` int DEFAULT NULL,
  `pago_mesx6` int DEFAULT NULL,
  `pago_corrx6` int DEFAULT NULL,
  `pago_statusx6` int DEFAULT NULL,
  `pago_fecalta` date DEFAULT NULL,
  `pago_opalta` varchar(15) DEFAULT NULL,
  `pago_fecmod` date DEFAULT NULL,
  `pago_opmod` varchar(15) DEFAULT NULL,
  `pago_fecbaja` date DEFAULT NULL,
  `pago_opbaja` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`pago_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds20_pagos`
--

LOCK TABLES `ds20_pagos` WRITE;
/*!40000 ALTER TABLE `ds20_pagos` DISABLE KEYS */;
/*!40000 ALTER TABLE `ds20_pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds30_grastatus`
--

DROP TABLE IF EXISTS `ds30_grastatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds30_grastatus` (
  `gra_id` int NOT NULL,
  `gra_fecha` date DEFAULT NULL,
  `gra_hora` time DEFAULT NULL,
  `gra_status` int DEFAULT NULL,
  `gra_datos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gra_id`),
  UNIQUE KEY `gra_status` (`gra_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds30_grastatus`
--

LOCK TABLES `ds30_grastatus` WRITE;
/*!40000 ALTER TABLE `ds30_grastatus` DISABLE KEYS */;
/*!40000 ALTER TABLE `ds30_grastatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ds31_gradel`
--

DROP TABLE IF EXISTS `ds31_gradel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ds31_gradel` (
  `gra_id` int NOT NULL,
  `gra_fecha` date DEFAULT NULL,
  `gra_hora` time DEFAULT NULL,
  `gra_status` int DEFAULT NULL,
  `gra_datos` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`gra_id`),
  UNIQUE KEY `gra_status` (`gra_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ds31_gradel`
--

LOCK TABLES `ds31_gradel` WRITE;
/*!40000 ALTER TABLE `ds31_gradel` DISABLE KEYS */;
/*!40000 ALTER TABLE `ds31_gradel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitud`
--

DROP TABLE IF EXISTS `solicitud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitud` (
  `id_solicitud` int NOT NULL,
  `id_adulto` int DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(225) DEFAULT NULL,
  `id_usuario` int DEFAULT NULL,
  PRIMARY KEY (`id_solicitud`),
  KEY `FK_id_adulto_id_persona_idx` (`id_adulto`),
  KEY `FK_id_usuario_id_usuario_idx` (`id_usuario`),
  CONSTRAINT `FK_id_adulto_id_persona` FOREIGN KEY (`id_adulto`) REFERENCES `ds02_personas` (`Id_Persona`),
  CONSTRAINT `FK_id_usuario_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `ds01_usuarios` (`b01_us_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitud`
--

LOCK TABLES `solicitud` WRITE;
/*!40000 ALTER TABLE `solicitud` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitud` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-01 18:33:32
