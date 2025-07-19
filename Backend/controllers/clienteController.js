const db = require("../db");

// Función para crear cliente
exports.crearCliente = (req, res) => {
  const { nombre, apellido, edad, fechaNacimiento } = req.body;

  if (!nombre || !apellido || !edad || !fechaNacimiento) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  // Convertir string ISO a YYYY-MM-DD
  const fecha = new Date(fechaNacimiento);
  if (isNaN(fecha.getTime())) {
    return res.status(400).json({ error: "Fecha de nacimiento inválida" });
  }
  const fechaFormateada = fecha.toISOString().split("T")[0];

  const query =
    "INSERT INTO clientes (nombre, apellido, edad, fechaNacimiento) VALUES (?, ?, ?, ?)";

  db.query(query, [nombre, apellido, edad, fechaFormateada], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ mensaje: "Cliente creado exitosamente" });
  });
};

// Función para retornar KPI
exports.kpiClientes = (req, res) => {
  db.query("SELECT edad FROM clientes", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const edades = results.map((r) => r.edad);
    const promedio = edades.reduce((a, b) => a + b, 0) / edades.length;

    const desviacion = Math.sqrt(
      edades.map((e) => Math.pow(e - promedio, 2)).reduce((a, b) => a + b) / edades.length
    );

    res.json({ promedioEdad: promedio, desviacionEstandar: desviacion });
  });
};

// Función para listar clientes
exports.listarClientes = (req, res) => {
  db.query("SELECT * FROM clientes", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const lista = results.map((cliente) => {
      const fechaNacimiento = new Date(cliente.fechaNacimiento);
      const fechaProbableMuerte = new Date(
        fechaNacimiento.setFullYear(fechaNacimiento.getFullYear() + 80)
      );

      return {
        ...cliente,
        fechaProbableMuerte: fechaProbableMuerte.toISOString().split("T")[0],
      };
    });

    res.json(lista);
  });
};

//funcion para consultar cliente por id
exports.consultarcliente = (req, res) => {
  db.query("SELECT * FROM clientes WHERE ID=[]", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
  });
};
