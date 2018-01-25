-- On crée la base de données du nom de thatsmyband
CREATE DATABASE thatsmyband;

-- Dans cette base, on crée la table des User qui ne contient que deux colonnes : l'id et le User sérialisé
CREATE TABLE thatsmyband.userTable
(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	userData VARCHAR(21844)
)