USE [master]
GO
/****** Object:  Database [Alkemy-challenge]    Script Date: 4/7/2022 08:06:58 ******/
CREATE DATABASE [Alkemy-challenge]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Alkemy-challenge', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Alkemy-challenge.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Alkemy-challenge_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Alkemy-challenge_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Alkemy-challenge] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Alkemy-challenge].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Alkemy-challenge] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET ARITHABORT OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Alkemy-challenge] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Alkemy-challenge] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Alkemy-challenge] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Alkemy-challenge] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Alkemy-challenge] SET  MULTI_USER 
GO
ALTER DATABASE [Alkemy-challenge] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Alkemy-challenge] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Alkemy-challenge] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Alkemy-challenge] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Alkemy-challenge] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Alkemy-challenge] SET QUERY_STORE = OFF
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [Valen]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [Valen] WITH PASSWORD=N'XsjdiPFyxK3R2jXRKcMXA+p/Iy+VoKP63qhm1zT4Fbs=', DEFAULT_DATABASE=[Alkemy-challenge], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
ALTER LOGIN [Valen] DISABLE
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [Pizzas]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [Pizzas] WITH PASSWORD=N'dw4r7y2io1ts6CB55EfsmAMcMPKY8TNeu7ZuzLzBmnI=', DEFAULT_DATABASE=[DAI-Pizzas], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
ALTER LOGIN [Pizzas] DISABLE
GO
/****** Object:  Login [NT SERVICE\Winmgmt]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [NT SERVICE\Winmgmt] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT SERVICE\SQLWriter]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [NT SERVICE\SQLWriter] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT SERVICE\SQLTELEMETRY$SQLEXPRESS]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [NT SERVICE\SQLTELEMETRY$SQLEXPRESS] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT Service\MSSQL$SQLEXPRESS]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [NT Service\MSSQL$SQLEXPRESS] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT AUTHORITY\SYSTEM]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [NT AUTHORITY\SYSTEM] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [DESKTOP-9LLDGIL\Valen]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [DESKTOP-9LLDGIL\Valen] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [BUILTIN\Usuarios]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [BUILTIN\Usuarios] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [##MS_PolicyTsqlExecutionLogin##]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [##MS_PolicyTsqlExecutionLogin##] WITH PASSWORD=N'eHfNi7oYTWtaCDudqksNKs+iHIjFN/hH8r5Zw8rVN+Q=', DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=ON
GO
ALTER LOGIN [##MS_PolicyTsqlExecutionLogin##] DISABLE
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [##MS_PolicyEventProcessingLogin##]    Script Date: 4/7/2022 08:06:58 ******/
CREATE LOGIN [##MS_PolicyEventProcessingLogin##] WITH PASSWORD=N'/3YtY+rPFDNXBn7ppNpI1uCpCL2gqRM0ux5o4xqDcY4=', DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=ON
GO
ALTER LOGIN [##MS_PolicyEventProcessingLogin##] DISABLE
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT SERVICE\Winmgmt]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT SERVICE\SQLWriter]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT Service\MSSQL$SQLEXPRESS]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [DESKTOP-9LLDGIL\Valen]
GO
USE [Alkemy-challenge]
GO
/****** Object:  User [Valen]    Script Date: 4/7/2022 08:06:58 ******/
CREATE USER [Valen] FOR LOGIN [Valen] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Valen]
GO
/****** Object:  Table [dbo].[Peliculas]    Script Date: 4/7/2022 08:06:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Peliculas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](105) NOT NULL,
	[Titulo] [varchar](50) NOT NULL,
	[Fecha] [date] NOT NULL,
	[Calificacion] [int] NOT NULL,
 CONSTRAINT [PK_Peliculas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PeliPersonaje]    Script Date: 4/7/2022 08:06:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeliPersonaje](
	[Pelicula] [int] NOT NULL,
	[Personaje] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje]    Script Date: 4/7/2022 08:06:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](150) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Edad] [int] NOT NULL,
	[Peso] [int] NOT NULL,
	[Historia] [varchar](150) NOT NULL,
 CONSTRAINT [PK_Personaje] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 4/7/2022 08:06:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Peliculas] ON 

INSERT [dbo].[Peliculas] ([Id], [Imagen], [Titulo], [Fecha], [Calificacion]) VALUES (4, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ070m_3q2EQ8gLWvbJIAsu-gbT91MowwvO-Q&usqp=CAU', N'Los simuladores', CAST(N'2004-01-05' AS Date), 5)
INSERT [dbo].[Peliculas] ([Id], [Imagen], [Titulo], [Fecha], [Calificacion]) VALUES (7, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Z2CAjk8-LHwZ614oAGLKqI1lSjePHlR5RQ&usqp=CAU', N'El Robo del siglo', CAST(N'2020-01-16' AS Date), 4)
INSERT [dbo].[Peliculas] ([Id], [Imagen], [Titulo], [Fecha], [Calificacion]) VALUES (10, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjLpyjOus05XDbIpITigicIyjAwcBZSczFg&usqp=CAU', N'casados con hijos', CAST(N'2005-04-12' AS Date), 5)
SET IDENTITY_INSERT [dbo].[Peliculas] OFF
GO
INSERT [dbo].[PeliPersonaje] ([Pelicula], [Personaje]) VALUES (4, 1)
INSERT [dbo].[PeliPersonaje] ([Pelicula], [Personaje]) VALUES (4, 8)
INSERT [dbo].[PeliPersonaje] ([Pelicula], [Personaje]) VALUES (4, 9)
INSERT [dbo].[PeliPersonaje] ([Pelicula], [Personaje]) VALUES (4, 10)
INSERT [dbo].[PeliPersonaje] ([Pelicula], [Personaje]) VALUES (7, 9)
INSERT [dbo].[PeliPersonaje] ([Pelicula], [Personaje]) VALUES (7, 11)
INSERT [dbo].[PeliPersonaje] ([Pelicula], [Personaje]) VALUES (10, 11)
GO
SET IDENTITY_INSERT [dbo].[Personaje] ON 

INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (1, N'https://www.sol915.com.ar/wp-content/uploads/2020/11/alejandro-fiore.jpg', N'Alejandro Fiore', 52, 75, N'Carlos Alejandro Fiore es un actor argentino.?Ha desarrollado su trabajo en Argentina.')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (8, N'https://www.clarin.com/img/2021/04/24/federico-d-elia-interpreatara-a___PsYiComoO_720x0__1.jpg', N'Federico D''Elía', 55, 70, N'Federico D''Elía? es un actor y productor de cine y televisión argentino.?')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (9, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsjhr953IXv06icXwVOrY36IHDjRS0jL1dKGkW3Le&s', N'Diego Peretti', 59, 70, N'Diego Aldo Peretti? es un actor y psiquiatra argentino.')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (10, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1EUNZW0HbpNm-2jHqns-IoZQCLUocAagnovR36d2BRg&s', N'Martín Seefeld', 61, 73, N'Martín Seefeld es un actor y productor argentino')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (11, N'https://pbs.twimg.com/profile_images/1029732467/francella_400x400.jpg', N'Guillermo Francella', 67, 70, N'Guillermo Héctor Francella es un actor, comediante, humorista y director argentino de teatro, cine y televisión.')
SET IDENTITY_INSERT [dbo].[Personaje] OFF
GO
ALTER TABLE [dbo].[PeliPersonaje]  WITH CHECK ADD  CONSTRAINT [FK_PeliPersonaje_Peliculas] FOREIGN KEY([Pelicula])
REFERENCES [dbo].[Peliculas] ([Id])
GO
ALTER TABLE [dbo].[PeliPersonaje] CHECK CONSTRAINT [FK_PeliPersonaje_Peliculas]
GO
ALTER TABLE [dbo].[PeliPersonaje]  WITH CHECK ADD  CONSTRAINT [FK_PeliPersonaje_Personaje] FOREIGN KEY([Personaje])
REFERENCES [dbo].[Personaje] ([Id])
GO
ALTER TABLE [dbo].[PeliPersonaje] CHECK CONSTRAINT [FK_PeliPersonaje_Personaje]
GO
ALTER TABLE [dbo].[Peliculas]  WITH CHECK ADD  CONSTRAINT [CK_Peliculas] CHECK  (([Calificacion]>=(1) AND [Calificacion]<=(5)))
GO
ALTER TABLE [dbo].[Peliculas] CHECK CONSTRAINT [CK_Peliculas]
GO
USE [master]
GO
ALTER DATABASE [Alkemy-challenge] SET  READ_WRITE 
GO
