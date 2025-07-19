const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const clienteRoutes = require("./routes/clienteRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/", clienteRoutes);

app.get("/", (req, res) => {
  res.send("Microservicio cliente funcionando correctamente.");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

