
CREATE DATABASE IF NOT EXISTS clientesdb;
USE clientesdb;

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    fechaNacimiento DATE NOT NULL
);

INSERT INTO clientes (nombre, apellido, edad, fechaNacimiento) VALUES
('Daniela', 'Po', 35, '1989-03-15'),
('Jacinta', 'Gómez', 28, '1996-07-20'),
('Florencia', 'Florencio', 42, '1982-01-10');