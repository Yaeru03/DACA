#  Creado con Kata Kuntur - Modelador de Datos
#  Versión: 2.5.4
#  Sitio Web: http://katakuntur.jeanmazuelos.com/
#  Si usted encuentra algún error le agradeceriamos lo reporte en:
#  http://pm.jeanmazuelos.com/katakuntur/issues/new

#  Administrador de Base de Datos: MySQL/MariaDB
#  Diagrama: Anexos
#  Autor: elnas
#  Fecha y hora: 24/05/2019 18:31:51

# GENERANDO TABLAS
CREATE TABLE `IdentiComu` (
	`NoDenuncia` INTEGER NOT NULL,
	`CenE` VARCHAR(50) NOT NULL,
	`Nivel_educativo` CHAR(3) NOT NULL,
	`ClaCeEs` VARCHAR(16) NOT NULL,
	`Telefono` VARCHAR(20) NOT NULL,
	`Direccion` VARCHAR(30) NOT NULL,
	`Municipio` INTEGER NOT NULL,
	`Localidad` VARCHAR(30) NOT NULL,
	PRIMARY KEY(`NoDenuncia`)
) ENGINE=INNODB;
CREATE TABLE `DatosVictimas` (
	`ClaveAlum` FLOAT(10) NOT NULL,
	`NomApe` VARCHAR(50) NOT NULL,
	`Edad` INTEGER NOT NULL,
	`Sexo` VARCHAR(15) NOT NULL,
	`Telefono` VARCHAR(20) NOT NULL,
	`Modalidad` INTEGER NOT NULL,
	`OtraM` VARCHAR(20) NOT NULL,
	`AlumG` INTEGER NOT NULL,
	`Turno` BIT NOT NULL,
	`NomPM` VARCHAR(50) NOT NULL,
	`TelPM` VARCHAR(20) NOT NULL,
	`NoDenuncia` INTEGER NOT NULL,
	KEY(`NoDenuncia`),
	PRIMARY KEY(`ClaveAlum`)
) ENGINE=INNODB;
CREATE TABLE `DatosAgresor` (
	`NomApe` VARCHAR(50) NOT NULL,
	`Edad` INTEGER NOT NULL,
	`Sexo` VARCHAR(15) NOT NULL,
	`Telefono` VARCHAR(20) NOT NULL,
	`Modalidad` INTEGER NOT NULL,
	`OtraM` VARCHAR(20) NOT NULL,
	`AlumG` INTEGER NOT NULL,
	`Turno` BIT NOT NULL,
	`NomPM` VARCHAR(50) NOT NULL,
	`TelPM` VARCHAR(20) NOT NULL,
	`NoDenuncia` INTEGER NOT NULL,
	KEY(`NoDenuncia`),
	`ClaveAlum` FLOAT(10) NOT NULL,
	KEY(`ClaveAlum`)
) ENGINE=INNODB;
CREATE TABLE `Datos_Observ` (
	`NomApe` VARCHAR(50) NOT NULL,
	`Edad` INTEGER NOT NULL,
	`Sexo` VARCHAR(15) NOT NULL,
	`Telefono` VARCHAR(20) NOT NULL,
	`Modalidad` INTEGER NOT NULL,
	`OtraM` VARCHAR(20) NOT NULL,
	`AlumG` INTEGER NOT NULL,
	`Turno` BIT NOT NULL,
	`NomPM` VARCHAR(50) NOT NULL,
	`TelPM` VARCHAR(20) NOT NULL,
	`ClaveAlum` FLOAT(10) NOT NULL,
	KEY(`ClaveAlum`)
) ENGINE=INNODB;
CREATE TABLE `OrigenSolicitud` (
	`ClaveAlum` FLOAT(10) NOT NULL,
	KEY(`ClaveAlum`),
	`Familia` BIT NOT NULL,
	`Profesorado` BIT NOT NULL,
	`Tutores` BIT NOT NULL,
	`Compañeros` BIT NOT NULL,
	`Anonima` BIT NOT NULL,
	`Orientador` BIT NOT NULL,
	`Personal_Admin` BIT NOT NULL,
	`Coordinadores` BIT NOT NULL,
	`Servicio_Social` BIT NOT NULL,
	`Otros` BIT NOT NULL,
	`Descripcion` VARCHAR(250) NOT NULL,
	`Actuac` VARCHAR(50) NOT NULL,
	`NomRecep` VARCHAR(50) NOT NULL,
	`Firma` VARCHAR(20) NOT NULL,
	`Fecha` DATE NOT NULL,
	PRIMARY KEY(`ClaveAlum`)
) ENGINE=INNODB;
CREATE TABLE `RegisObser` (
	`NoDenuncia` INTEGER NOT NULL,
	KEY(`NoDenuncia`),
	`Profesor` VARCHAR(50) NOT NULL,
	`Prof2` VARCHAR(50) NOT NULL,
	`Tutor` VARCHAR(50) NOT NULL,
	`Compañeros` VARCHAR(50) NOT NULL,
	`Personal` VARCHAR(50) NOT NULL,
	`PersonalComedor` VARCHAR(50) NOT NULL,
	PRIMARY KEY(`NoDenuncia`)
) ENGINE=INNODB;
CREATE TABLE `Union` (
	`NoDenuncia` INTEGER NOT NULL,
	KEY(`NoDenuncia`),
	PRIMARY KEY(`NoDenuncia`)
) ENGINE=INNODB;
CREATE TABLE `Marcas` (
	`AulaSinP` BIT NOT NULL,
	`AulaConP` BIT NOT NULL,
	`Patio` BIT NOT NULL,
	`Pasillos` BIT NOT NULL,
	`AreasDeAseo` BIT NOT NULL,
	`Comedor` BIT NOT NULL,
	`Banos` BIT NOT NULL,
	`Transporte` BIT NOT NULL,
	`EnSa` BIT NOT NULL,
	`Biblioteca` BIT NOT NULL,
	`AreasEnS` BIT NOT NULL,
	`AreasV` BIT NOT NULL,
	`EspDepor` BIT NOT NULL,
	`Otros` BIT NOT NULL
) ENGINE=INNODB;
CREATE TABLE `TipoMolestia` (
	`Exclusion` BIT NOT NULL,
	`AgresionV` BIT NOT NULL,
	`AgresionFI` BIT NOT NULL,
	`AgresionFD` BIT NOT NULL,
	`Intimid` BIT NOT NULL,
	`AbusoS` BIT NOT NULL,
	`Acoso` BIT NOT NULL,
	`AcosoE` BIT NOT NULL,
	`VioleAuto` BIT NOT NULL,
	`VioleInter` BIT NOT NULL,
	`VioleColec` BIT NOT NULL,
	`VioleGene` BIT NOT NULL,
	`Discri` BIT NOT NULL,
	`Trata` BIT NOT NULL,
	`Hostigamiento` BIT NOT NULL,
	`CiberA` BIT NOT NULL,
	`NoDenuncia` INTEGER NOT NULL,
	KEY(`NoDenuncia`)
) ENGINE=INNODB;
CREATE TABLE `Entrevista_Victima` (
	`Pregunta1` VARCHAR(100) NOT NULL,
	`Pregunta2` VARCHAR(100) NOT NULL,
	`Pregunta3` VARCHAR(100) NOT NULL,
	`Pregunta4` VARCHAR(100) NOT NULL,
	`Pregunta5` VARCHAR(100) NOT NULL,
	`Pregunta6` VARCHAR(100) NOT NULL,
	`Pregunta7` VARCHAR(100) NOT NULL,
	`Pregunta8` VARCHAR(100) NOT NULL,
	`Pregunta9` VARCHAR(100) NOT NULL,
	`Pregunta10` VARCHAR(100) NOT NULL,
	`Pregunta11` VARCHAR(100) NOT NULL,
	`NoDenuncia` INTEGER NOT NULL,
	KEY(`NoDenuncia`)
) ENGINE=INNODB;
CREATE TABLE `Entrevista_Observador` (
	`Pregunta1` VARCHAR(100) NOT NULL,
	`Pregunta2` VARCHAR(100) NOT NULL,
	`Pregunta3` VARCHAR(100) NOT NULL,
	`Pregunta4` VARCHAR(100) NOT NULL,
	`Pregunta5` VARCHAR(100) NOT NULL,
	`Pregunta6` VARCHAR(100) NOT NULL,
	`Marca1` BIT NOT NULL,
	`Marca2` BIT NOT NULL,
	`Marca3` BIT NOT NULL,
	`Marca4` BIT NOT NULL,
	`Marca5` BIT NOT NULL,
	`Marca6` BIT NOT NULL,
	`Marca7` BIT NOT NULL,
	`Marca8` BIT NOT NULL,
	`Marca9` BIT NOT NULL,
	`Marca10` BIT NOT NULL,
	`Marca11` BIT NOT NULL,
	`Marca12` BIT NOT NULL,
	`Marca13` BIT NOT NULL,
	`Marca14` BIT NOT NULL,
	`Marca15` BIT NOT NULL,
	`Marca16` BIT NOT NULL,
	`NoDenuncia` INTEGER NOT NULL,
	KEY(`NoDenuncia`)
) ENGINE=INNODB;
CREATE TABLE `Entrevista2_Observador` (
	`Pregunta1` VARCHAR(100) NOT NULL,
	`Pregunta2` VARCHAR(100) NOT NULL,
	`Pregunta3` VARCHAR(100) NOT NULL,
	`Pregunta4` VARCHAR(100) NOT NULL,
	`Pregunta5` VARCHAR(100) NOT NULL,
	`Pregunta6` VARCHAR(100) NOT NULL,
	`Pregunta7` VARCHAR(100) NOT NULL,
	`Pregunta8` VARCHAR(100) NOT NULL,
	`Pregunta9` VARCHAR(100) NOT NULL,
	`Pregunta10` VARCHAR(100) NOT NULL,
	`Pregunta11` VARCHAR(100) NOT NULL,
	`NoDenuncia` INTEGER NOT NULL,
	KEY(`NoDenuncia`)
) ENGINE=INNODB;
CREATE TABLE `Registro` (
	`ID` INTEGER NOT NULL,
	`Usuario` VARCHAR(15) NOT NULL,
	`Password` VARCHAR(15) NOT NULL,
	PRIMARY KEY(`ID`)
) ENGINE=INNODB;

# GENERANDO RELACIONES
ALTER TABLE `DatosVictimas` ADD CONSTRAINT `datosvictimas_identicomu_nodenuncia` FOREIGN KEY (`NoDenuncia`) REFERENCES `IdentiComu`(`NoDenuncia`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `DatosAgresor` ADD CONSTRAINT `datosagresor_identicomu_nodenuncia` FOREIGN KEY (`NoDenuncia`) REFERENCES `IdentiComu`(`NoDenuncia`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `DatosAgresor` ADD CONSTRAINT `datosagresor_datosvictimas_clavealum` FOREIGN KEY (`ClaveAlum`) REFERENCES `DatosVictimas`(`ClaveAlum`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Datos_Observ` ADD CONSTRAINT `datos_observ_datosvictimas_clavealum` FOREIGN KEY (`ClaveAlum`) REFERENCES `DatosVictimas`(`ClaveAlum`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `OrigenSolicitud` ADD CONSTRAINT `origensolicitud_datosvictimas_clavealum` FOREIGN KEY (`ClaveAlum`) REFERENCES `DatosVictimas`(`ClaveAlum`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `RegisObser` ADD CONSTRAINT `regisobser_union_nodenuncia` FOREIGN KEY (`NoDenuncia`) REFERENCES `Union`(`NoDenuncia`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Union` ADD CONSTRAINT `union_identicomu_nodenuncia` FOREIGN KEY (`NoDenuncia`) REFERENCES `IdentiComu`(`NoDenuncia`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `TipoMolestia` ADD CONSTRAINT `tipomolestia_union_nodenuncia` FOREIGN KEY (`NoDenuncia`) REFERENCES `Union`(`NoDenuncia`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Entrevista_Victima` ADD CONSTRAINT `entrevista_victima_union_nodenuncia` FOREIGN KEY (`NoDenuncia`) REFERENCES `Union`(`NoDenuncia`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Entrevista_Observador` ADD CONSTRAINT `entrevista_observador_union_nodenuncia` FOREIGN KEY (`NoDenuncia`) REFERENCES `Union`(`NoDenuncia`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Entrevista2_Observador` ADD CONSTRAINT `entrevista2_observador_union_nodenuncia` FOREIGN KEY (`NoDenuncia`) REFERENCES `Union`(`NoDenuncia`) ON DELETE NO ACTION ON UPDATE CASCADE;