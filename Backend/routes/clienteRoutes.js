const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.post("/crear-cliente", clienteController.crearCliente);
router.get("/kpi-clientes", clienteController.kpiClientes);
router.get("/list-clientes", clienteController.listarClientes);
module.exports = router;
