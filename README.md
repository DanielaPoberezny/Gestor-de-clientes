# Gestor de Clientes

Aplicación fullstack desarrollada para la gestión de clientes. Incluye un backend en Node.js con Express, frontend en Angular, y base de datos MySQL.

---

## tecnologías utilizadas

- **Frontend:** Angular
- **Backend:** Node.js + Express
- **Base de datos:** MySQL

---

##  ¿Cómo ejecutar el proyecto?

### 1. Clonar el repositorio

git clone https://github.com/DanielaPoberezny/Gestor-de-clientes.git
cd Gestor-de-clientes

### 2. Configurar la base de datos
Asegurate de tener MySQL instalado y funcionando.

Crear la base de datos importando el archivo backup.sql:

mysql -u tu_usuario -p < backend/backup.sql
Cambiá tu_usuario por tu usuario real de MySQL. Te pedirá la contraseña.

Esto va a crear la base clientesdb y cargar algunos datos de ejemplo.

### 3. Ejecutar el backend

cd backend
npm install
npm start

Archivo .env (crear en la carpeta backend)

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=1234
DB_NAME=clientesdb
Asegurate de cambiar los valores según tu configuración local.

### 4. Ejecutar el frontend

cd frontend
npm install
ng serve
Esto levanta la app en http://localhost:4200/

Estructura del proyecto

Gestor-de-clientes/
│
├── backend/
│   ├── db.js
│   ├── routes/
│   ├── controllers/
│   ├── backup.sql   ← Dump de base de datos
│   └── ...
│
└── frontend/
    ├── src/
    └── ...

------------------------------------------------

Funcionalidades


-Listado de clientes

-Alta de clientes

-Visualización de KPIs

-Validaciones básicas

-Separación clara entre frontend y backend
