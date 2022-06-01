SELECT *
FROM Customer 

--Projeção

-- Limite

SELECT *
FROM Customer 
LIMIT 10;

--Contador
SELECT COUNT(*)
From Customer; 

--Ordenação de dados

SELECT 
	FirstName,
	LastName,
	City
FROM Customer 
ORDER BY FirstName 

SELECT 
	FirstName,
	LastName,
	City
FROM Customer 
ORDER BY 3 ASC  

--Apelidos, alias
SELECT 
	FirstName as "Nome",
	LastName as "Sobrenome",
	City as "Cidade do cliente"
FROM Customer 
ORDER BY 3 DESC

--Seleção - Filtro

SELECT *
FROM Album 
WHERE Title ="Big Ones"


--Consultas de String devem respeitar maisculas e minusculas (Case sensitive)

SELECT *
FROM Album 
WHERE ArtistId  = 10

--Selecionando valores nulos e não nulos 

SELECT *
FROM Album 
WHERE Column1 is NOTNULL 

SELECT *
FROM Album 
WHERE Column1 is NULL 

--Filtros com valores logicos 

SELECT *
FROM Album 
WHERE AlbumId >= 100

SELECT *
FROM Album 
WHERE AlbumId 
	BETWEEN 10 and 30
	
SELECT *
FROM Album 
WHERE AlbumId >= 100
	AND ArtistId = 22
	
SELECT *
FROM Album 
WHERE AlbumId >= 100
	OR  ArtistId = 22
	
-- Usando LIKE 

SELECT *
FROM Album 
WHERE Title like "%Vivo"

SELECT *
FROM Album 
WHERE Title like "%DISC%"

SELECT *
FROM Artist 
WHERE Name like "AC_DC"

-- Manipulação de dados

SELECT *
FROM Genre 
limit 10

SELECT *
FROM Genre 
WHERE Name like "MPB"

INSERT INTO Genre (GenreId, Name)
VALUES (NULL, "MPB")

-- ID 26

SELECT *
FROM Artist  
WHERE Name LIKE "TOQUINHO"

INSERT INTO Artist  (Name)
VALUES ("Toquinho")

-- ID 276

SELECT *
FROM Track 

INSERT INTO Track
VALUES 
(NULL, "Aquarela", NULL, 1, 26, "Toquinho e Vinicius", 2500000, 8000000, 5.99),
(NULL, "Samba da benção", NULL, 1, 26, "Toquinho e Vinicius", 2500000, 8000000, 7.99),
(NULL, "Wave", NULL, 1, 26, "Toquinho e Tom", 2500000, 8000000, 5.99)

SELECT *
FROM Track 
WHERE GenreId = 26

SELECT *
FROM Track 
WHERE Composer like "Toquinho%"

-- Atualização de dados de uma tabela 

SELECT *
FROM Customer 
Limit 10

SELECT *
FROM Customer 
WHERE CustomerId = 2

UPDATE Customer 
SET Company = "EBAC"
WHERE  CustomerId = 2

SELECT *
FROM Genre 
limit 27

UPDATE Genre  
SET Name  = "Funk"
WHERE  GenreId  = 27

SELECT *
FROM Customer 
WHERE Country like "Bra_il"

UPDATE Customer 
SET Country = "Brasil"
WHERE Country like "Brazil"

-- Exclusão de registros - Delete 

SELECT *
FROM Invoice 
WHERE Total >=20
	AND BillingCountry LIKE "USA"
	
DELETE 
FROM Invoice 
WHERE Total >= 20
	AND BillingCountry LIKE "USA"
	
-- Junção dos dados

SELECT *
FROM Album 

SELECT *
FROM Artist  

--Forma errada de juntar base de dados
SELECT COUNT(*)
FROM Artist, Album  

--Join

SELECT
	Album.Title,
	Artist.Name
FROM Album 
INNER JOIN Artist 
	ON Album.ArtistId = ArtisT.ArtistId 
WHERE name like "Iron Maiden"

SELECT
	Album.Title as "Titulo do album",
	Artist.Name as "Nome do artista",
	Track.Name as "Nome da musica"
FROM Album 
INNER JOIN Artist 
	ON Album.ArtistId = ArtisT.ArtistId 
INNER JOIN Track 
	ON Album.AlbumId = Track.AlbumId 
	
-- Criar tabelas 
CREATE TABLE Alunos(
	AlunoId INTEGER PRIMARY KEY AUTOINCREMENT, 
	Nome VARCHAR (30),
	Matricula INTEGER (5)
);

SELECT *
FROM Alunos 

INSERT INTO Alunos (Nome, Matricula)
VALUES
	("Fabio Araujo", 12345),
	("Maria Carolina", 45673),
	("José Ernesto", 49328)

-- Excluindo tabela 

DROP TABLE Alunos 
	



